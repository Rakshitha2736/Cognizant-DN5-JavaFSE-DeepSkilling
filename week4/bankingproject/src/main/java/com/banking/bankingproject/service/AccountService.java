package com.banking.bankingproject.service;

import com.banking.bankingproject.entity.Account;
import com.banking.bankingproject.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Optional<Account> getAccount(Long id) {
        return accountRepository.findById(id);
    }

    public Account getAccountByNumber(String number) {
        return accountRepository.findByAccountNumber(number).orElseThrow();
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
}
