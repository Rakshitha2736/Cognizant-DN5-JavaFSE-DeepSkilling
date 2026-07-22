Q1. What is the difference between BeanFactory and ApplicationContext?

BeanFactory is the most basic container in Spring, providing the fundamental DI functionality using lazy initialization — meaning beans are created only when requested via getBean(). ApplicationContext is a more advanced container built on top of BeanFactory. It supports eager initialization (beans are created at startup), internationalization, event propagation, AOP integration, and annotation-based configuration. In real-world projects, ApplicationContext is almost always used instead of BeanFactory because it offers more enterprise-level features out of the box.

Q2. What are the different Bean Scopes in Spring?

Bean scope defines the lifecycle and visibility of a bean within the container. The default scope is singleton, where Spring creates only one instance of the bean and shares it across the entire application. The prototype scope creates a new instance every time the bean is requested. Other scopes — request, session, and application — are only available in web-aware Spring applications and tie the bean's lifecycle to an HTTP request, session, or servlet context respectively. Understanding scope is important because using singleton incorrectly for stateful beans can cause data to leak between users.

java
@Component
@Scope("prototype")
public class Student { }
Q3. What is Autowiring in Spring, and what are its modes?

Autowiring is the process by which Spring automatically resolves and injects collaborating beans into a class, without the developer explicitly configuring the reference. It reduces boilerplate code such as manual setter/constructor calls in XML. Spring supports autowiring by type (@Autowired), by name (using @Qualifier alongside @Autowired), and by constructor. If Spring finds multiple beans of the same type and no qualifier is specified, it throws a NoUniqueBeanDefinitionException, which is why @Qualifier is often used to resolve ambiguity.

java
@Autowired
@Qualifier("emailService")
private NotificationService service;
Q4. What is the difference between @Component, @Service, @Repository, and @Controller?

All four annotations are specializations of the generic @Component annotation and are used to mark a class as a Spring-managed bean, but each conveys a specific role in the application's layered architecture. @Component is the generic stereotype for any Spring-managed component. @Service is used for the service/business logic layer. @Repository is used for the data access layer, and it additionally enables Spring's exception translation, converting database-specific exceptions into Spring's unified DataAccessException. @Controller marks a class as a web controller in Spring MVC, responsible for handling HTTP requests. Functionally they behave the same as @Component, but using the correct one improves readability and enables framework-specific features.

Q5. What is the Spring Bean Life Cycle?

A Spring bean goes through a well-defined lifecycle managed by the container. First, the container instantiates the bean, then it injects the required dependencies (setter/constructor injection). After that, if the bean implements InitializingBean or has a method annotated with @PostConstruct, that method is called for custom initialization logic. The bean is then ready for use by the application. When the container shuts down, if the bean implements DisposableBean or has a @PreDestroy method, that is called for cleanup, such as closing connections.

java
@Component
public class Student {

    @PostConstruct
    public void init() {
        System.out.println("Bean initialized");
    }

    @PreDestroy
    public void destroy() {
        System.out.println("Bean destroyed");
    }
}
Q6. What is @ComponentScan and why is it needed?

@ComponentScan tells Spring which packages to scan for classes annotated with @Component, @Service, @Repository, @Controller, etc., so that they can be automatically registered as beans in the ApplicationContext. Without it, Spring would not know where to look for annotated classes, and you would have to manually declare every bean. It is usually combined with @Configuration to build a fully annotation-driven configuration class, removing the need for XML entirely.

java
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig { }
Q7. What is the role of pom.xml in a Maven-based Spring project?

pom.xml (Project Object Model) is the core configuration file of a Maven project. It defines the project's group ID, artifact ID, version, packaging type, and — most importantly — its dependencies. When you add a dependency like spring-context, Maven automatically downloads it (and its transitive dependencies) from the Maven Central Repository and adds it to the project's classpath. It also defines build plugins, Java version, and lifecycle phases (compile, test, package, install, deploy), making the build process consistent and repeatable across machines.

Q8. What is Maven's dependency scope, and why does it matter?

Dependency scope in Maven controls when and where a dependency is available during the build lifecycle. Common scopes include: compile (default — available everywhere, including runtime), provided (needed for compiling but supplied by the runtime environment, e.g., a servlet container), runtime (not needed for compiling but needed during execution), and test (only available during test compilation and execution, e.g., JUnit). Choosing the correct scope prevents unnecessary JARs from being bundled into the final deployment artifact, keeping it lightweight.

xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>
Q9. What is the difference between Constructor Injection and Setter Injection — which is preferred?

Constructor Injection supplies dependencies through the class constructor at the time the object is created, ensuring the object is always in a fully initialized, valid state and allowing fields to be marked final. Setter Injection supplies dependencies through public setter methods after the object is constructed, which allows optional dependencies and reconfiguration later, but risks leaving an object partially initialized if a setter is forgotten. Spring's official recommendation is to prefer constructor injection for mandatory dependencies because it makes the class immutable, easier to test, and clearly documents required dependencies, while setter injection is better suited for optional dependencies.

Q10. What is Loose Coupling, and how does Spring achieve it through DI?

Loose coupling refers to a design principle where classes depend on abstractions (interfaces) rather than concrete implementations, minimizing the impact of changes in one class on another. In traditional Java code, an object often creates its own dependencies using the new keyword, tightly binding it to a specific implementation. Spring solves this through Dependency Injection: instead of a class creating its dependency, the Spring container creates it and "injects" it via constructor or setter. This means you can swap implementations (e.g., switch from a MySQL repository to a MongoDB repository) without changing the dependent class's code — only the configuration changes.

java
public interface PaymentService {
    void pay();
}

@Service
public class CardPaymentService implements PaymentService {
    public void pay() { System.out.println("Paid by Card"); }
}

@Component
public class Checkout {
    private final PaymentService paymentService;

    @Autowired
    public Checkout(PaymentService paymentService) {  // loosely coupled
        this.paymentService = paymentService;
    }
}