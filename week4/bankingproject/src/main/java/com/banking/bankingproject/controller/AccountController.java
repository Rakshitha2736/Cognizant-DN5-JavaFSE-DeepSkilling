package com.banking.bankingproject.controller;

import com.banking.bankingproject.entity.Account;
import com.banking.bankingproject.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/accounts")
    public List<Account> getAll(){
        return accountService.getAllAccounts();
    }
    @PostMapping("/accounts/create")
    public Account create(@RequestBody Account account){
        return accountService.createAccount(account);
    }
    @GetMapping("/accounts/{accountNumber}")
    public Account get(@PathVariable String accountNumber){
        return accountService.getAccountByNumber(accountNumber);
    }
}
