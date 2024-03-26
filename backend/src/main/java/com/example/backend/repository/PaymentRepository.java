package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.backend.model.Payment;



public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Optional<Payment> findByEmail(String username);
}
