package com.example.backend.dto;

 


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventUpdateRequest {
    private String duration;
    private int price;
}
