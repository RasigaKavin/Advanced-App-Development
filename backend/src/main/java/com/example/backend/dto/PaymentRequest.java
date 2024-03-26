package com.example.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


    

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequest {
    private String name;
    private String email;
    private String password;
    private String paymentmode;
    
}


