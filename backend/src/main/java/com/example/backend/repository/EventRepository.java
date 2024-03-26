package com.example.backend.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Event;


public interface EventRepository extends JpaRepository<Event, Long> {
    Optional<Event> findByName(String name);
}
