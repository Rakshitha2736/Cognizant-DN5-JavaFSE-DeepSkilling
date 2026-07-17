import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Professional Header/Navbar */}
      <header className={`home-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H7C5.9 11 5 10.1 5 9V7C5 5.9 5.9 5 7 5H9C10.1 5 11 5.9 11 7V9C11 10.1 10.1 11 9 11Z" fill="currentColor"/>
                <path d="M9 19H7C5.9 19 5 18.1 5 17V15C5 13.9 5.9 13 7 13H9C10.1 13 11 13.9 11 15V17C11 18.1 10.1 19 9 19Z" fill="currentColor"/>
                <path d="M17 11H15C13.9 11 13 10.1 13 9V7C13 5.9 13.9 5 15 5H17C18.1 5 19 5.9 19 7V9C19 10.1 18.1 11 17 11Z" fill="currentColor"/>
                <path d="M17 19H15C13.9 19 13 18.1 13 17V15C13 13.9 13.9 13 15 13H17C18.1 13 19 13.9 19 15V17C19 18.1 18.1 19 17 19Z" fill="currentColor"/>
              </svg>
            </div>
            <Link to="/" className="logo-text">TaskMan</Link>
          </div>
          
          <nav className="header-nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
          
          <div className="auth-buttons">
            <Link to="/login" className="auth-btn login-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sign In
            </Link>
            <Link to="/signup" className="auth-btn signup-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨</span>
              <span>Smart Task Management</span>
            </div>
            <h1 className="hero-title">
              Organize Your Work, <br />
              <span className="gradient-text">Amplify Your Success</span>
            </h1>
            <p className="hero-subtitle">
              TaskMan is the intelligent task management platform that helps teams and individuals 
              stay organized, meet deadlines, and achieve their goals with powerful automation and insights.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="cta-button primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Start Free Trial
              </Link>
              <Link to="/demo" className="cta-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.828 14.828A4 4 0 0 1 9.172 9.172" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.172 14.828A4 4 0 0 1 14.828 9.172" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Watch Demo
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Tasks Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="preview-title">TaskMan Dashboard</div>
              </div>
              <div className="preview-content">
                <div className="preview-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="preview-main">
                  <div className="preview-task completed"></div>
                  <div className="preview-task in-progress"></div>
                  <div className="preview-task pending"></div>
                  <div className="preview-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Features</div>
            <h2>Everything you need to stay productive</h2>
            <p>Powerful tools designed to streamline your workflow and boost team collaboration</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Smart Task Management</h3>
              <p>Organize tasks with intelligent categorization, priority levels, and deadline tracking. Our AI-powered system helps you focus on what matters most.</p>
              <ul className="feature-list">
                <li>Priority-based task sorting</li>
                <li>Deadline reminders</li>
                <li>Category organization</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Real-time Collaboration</h3>
              <p>Work together seamlessly with team features, shared projects, and instant updates. Real-time synchronization across all devices and platforms.</p>
              <ul className="feature-list">
                <li>Team project sharing</li>
                <li>Real-time updates</li>
                <li>Cross-platform sync</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>Get insights into your productivity patterns with detailed analytics, progress tracking, and performance metrics to optimize your workflow.</p>
              <ul className="feature-list">
                <li>Progress tracking</li>
                <li>Performance metrics</li>
                <li>Productivity insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Technology</div>
            <h2>Built with modern, reliable technology</h2>
            <p>Our robust tech stack ensures fast, secure, and scalable performance for your business needs</p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>React 18</h3>
              <p>Latest React with hooks and modern patterns for optimal performance and developer experience</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14H10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 10H14V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 21L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Express.js</h3>
              <p>Fast, unopinionated web framework for Node.js with robust middleware support</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>MongoDB Atlas</h3>
              <p>Cloud-native NoSQL database with automatic scaling and enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your productivity?</h2>
            <p>Join thousands of professionals who have already revolutionized their workflow with TaskMan</p>
            <div className="cta-buttons">
              <Link to="/signup" className="cta-button primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Start Free Trial
              </Link>
              <Link to="/contact" className="cta-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2H2L11 13.46V22L15 18V13.46L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="home-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7C5.9 11 5 10.1 5 9V7C5 5.9 5.9 5 7 5H9C10.1 5 11 5.9 11 7V9C11 10.1 10.1 11 9 11Z" fill="currentColor"/>
                    <path d="M9 19H7C5.9 19 5 18.1 5 17V15C5 13.9 5.9 13 7 13H9C10.1 13 11 13.9 11 15V17C11 18.1 10.1 19 9 19Z" fill="currentColor"/>
                    <path d="M17 11H15C13.9 11 13 10.1 13 9V7C13 5.9 13.9 5 15 5H17C18.1 5 19 5.9 19 7V9C19 10.1 18.1 11 17 11Z" fill="currentColor"/>
                    <path d="M17 19H15C13.9 19 13 18.1 13 17V15C13 13.9 13.9 13 15 13H17C18.1 13 19 13.9 19 15V17C19 18.1 18.1 19 17 19Z" fill="currentColor"/>
                  </svg>
                </div>
                TaskMan
              </div>
              <p className="footer-description">
                The intelligent task management platform that helps teams and individuals achieve their goals with powerful automation and insights.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.62234 12 7.55V8.55C10.2426 8.58557 8.50127 8.19587 6.93101 7.42145C5.36074 6.64704 4.01032 5.5101 3 4.11C3 4.11 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9727 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-column-title">Product</h4>
                <Link to="/features" className="footer-link">Features</Link>
                <Link to="/pricing" className="footer-link">Pricing</Link>
                <Link to="/integrations" className="footer-link">Integrations</Link>
                <Link to="/api" className="footer-link">API</Link>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-column-title">Company</h4>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/blog" className="footer-link">Blog</Link>
                <Link to="/careers" className="footer-link">Careers</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-column-title">Support</h4>
                <Link to="/help" className="footer-link">Help Center</Link>
                <Link to="/docs" className="footer-link">Documentation</Link>
                <Link to="/community" className="footer-link">Community</Link>
                <Link to="/status" className="footer-link">Status</Link>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              © 2024 TaskMan. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 