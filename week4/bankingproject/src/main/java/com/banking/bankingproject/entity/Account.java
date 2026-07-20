package com.banking.bankingproject.entity;

import jakarta.persistence.*;
@Entity
@Table(name="accounts")
public class Account {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String customerName;
        private String email;
        private String phone;
        @Column(unique = true)
        private String accountNumber;
        private String accountType;
        private Double balance;

        public Account() {
        }

        public Account(Long id, String customerName, String email, String phone, String accountNumber, String accountType, Double balance) {
                this.id = id;
                this.customerName = customerName;
                this.email = email;
                this.phone = phone;
                this.accountNumber = accountNumber;
                this.accountType = accountType;
                this.balance = balance;
        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getCustomerName() {
                return customerName;
        }

        public void setCustomerName(String customerName) {
                this.customerName = customerName;
        }

        public String getEmail() {
                return email;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public String getPhone() {
                return phone;
        }

        public void setPhone(String phone) {
                this.phone = phone;
        }

        public String getAccountNumber() {
                return accountNumber;
        }

        public void setAccountNumber(String accountNumber) {
                this.accountNumber = accountNumber;
        }

        public String getAccountType() {
                return accountType;
        }

        public void setAccountType(String accountType) {
                this.accountType = accountType;
        }

        public Double getBalance() {
                return balance;
        }

        public void setBalance(Double balance) {
                this.balance = balance;
        }
}
