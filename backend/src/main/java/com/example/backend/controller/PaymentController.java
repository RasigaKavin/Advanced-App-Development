package com.example.backend.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.backend.dto.UpdateRequest;
import com.example.backend.model.Payment;
import com.example.backend.service.PaymentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Payments")
public class PaymentController {

    @Autowired
    private PaymentService PaymentService;

    @PostMapping("/createPayment")
    public ResponseEntity<Payment> createPayment(@NonNull @RequestBody Payment Payment) {
        Payment createdPayment = PaymentService.createPayment(Payment);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @GetMapping("readPayment/{email}")
    @PreAuthorize("hasAuthority('Payment') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getPaymentByEmail(@PathVariable String email) {
        Optional<Payment> Payment = PaymentService.getPaymentByEmail(email);
        return Payment.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readPayments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> Payments = PaymentService.getAllPayments();
        return new ResponseEntity<>(Payments, HttpStatus.OK);
    }

    @PutMapping("updatePayment/{email}")
    @PreAuthorize("hasAuthority('Payment') or hasAuthority('ADMIN')")
    public ResponseEntity<Payment> updatePayment(@NonNull @PathVariable String email,
            @RequestBody UpdateRequest updateRequest) {
        Payment updated = PaymentService.updatePayment(email, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deletePayment/{PaymentId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> removePayment(@NonNull @PathVariable Integer PaymentId) {
        PaymentService.removePayment(PaymentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
