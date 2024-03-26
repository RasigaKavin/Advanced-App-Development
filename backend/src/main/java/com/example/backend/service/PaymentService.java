package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.UpdateRequest;
import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // newPayment
    public Payment createPayment(@NonNull Payment payment) {
        // Encrypt the password before saving
        payment.setPassword(passwordEncoder.encode(payment.getPassword()));
        return paymentRepository.save(payment);
    }

    // getPayment
    public Optional<Payment> getPaymentByEmail(String email) {
        return paymentRepository.findByEmail(email);
    }

    // getPayments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // updatePayment
    public Payment updatePayment(@NonNull String email, UpdateRequest updateRequest) {
        return paymentRepository.findByEmail(email)
                .map(existingPayment -> {
                    existingPayment.setName(updateRequest.getName());
                    existingPayment.setEmail(updateRequest.getEmail());
                    existingPayment.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                    return paymentRepository.save(existingPayment);
                })
                .orElseThrow(() -> new RuntimeException("Payment not found with this email: " + email));
    }

    // deletePayment
    public void removePayment(@NonNull Integer paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
