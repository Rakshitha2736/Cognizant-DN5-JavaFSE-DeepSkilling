package com.loan.loanimpl.service;

import com.loan.loanimpl.entity.Loan;
import com.loan.loanimpl.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {
    @Autowired
    private LoanRepository repository;

    public Loan create(Loan loan){
        return repository.save(loan);
    }

    public List<Loan> getLoans(String accountNumber){
        return repository.findByAccountNumber(accountNumber);
    }
}
