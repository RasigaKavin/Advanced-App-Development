package com.example.backend.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Event;
import com.example.backend.service.EventService;
import com.example.backend.dto.EventUpdateRequest;


@RestController
@RequestMapping("/api/Event")
public class EventController {

    @Autowired
    private EventService EventService;

    @PostMapping
    
    public ResponseEntity<Event> createEvent(@NonNull @RequestBody Event Event) {
        Event createdEvent = EventService.createEvent(Event);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @GetMapping("/{EventName}")
   
    public ResponseEntity<?> getEventByName(@PathVariable String EventName) {
        Optional<Event> Event = EventService.getEventByName(EventName);
        return Event.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> Event = EventService.getAllEvents();
        return new ResponseEntity<>(Event, HttpStatus.OK);
    }

    @PutMapping("/{EventName}")
  
    public ResponseEntity<Event> updateEvent(@NonNull @PathVariable String EventName,
            @RequestBody EventUpdateRequest EventUpdateRequest) {
        Event updated = EventService.updateEvent(EventName, EventUpdateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/{EventId}")
    
    public ResponseEntity<Void> removeUser(@NonNull @PathVariable Long EventId) {
        EventService.removeEvent(EventId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
