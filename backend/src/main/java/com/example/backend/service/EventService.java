package com.example.backend.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.backend.dto.EventUpdateRequest;
import com.example.backend.model.Event;
import com.example.backend.repository.EventRepository;



@Service
public class EventService {

    @Autowired
    private EventRepository EventRepository;

    // newEvent
    public Event createEvent(@NonNull Event Event) {
        return EventRepository.save(Event);
    }

    // getEvent
    public Optional<Event> getEventByName(String EventName) {
        return EventRepository.findByName(EventName);
    }

    // getEvents
    public List<Event> getAllEvents() {
        return EventRepository.findAll();
    }

    // updateEvent
    public Event updateEvent(@NonNull String EventName, EventUpdateRequest EventUpdateRequest) {
        return EventRepository.findByName(EventName)
                .map(existingEvent -> {
                    existingEvent.setDuration(EventUpdateRequest.getDuration());
                    existingEvent.setPrice(EventUpdateRequest.getPrice());
                    return EventRepository.save(existingEvent);
                })
                .orElseThrow(() -> new RuntimeException("Event not found: " + EventName));
    }

    // deleteUser
    public void removeEvent(@NonNull Long EventId) {
        EventRepository.deleteById(EventId);
    }
}
