package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.DonationType;
import com.example.service.DonationTypeService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/event")
public class DonationTypeController {
	
	@Autowired
	private DonationTypeService es;
	
	@GetMapping("/events")
	public List<DonationType> getEvents() {
		return es.getAllEvents();
	}
	
	@GetMapping("/event/{id}")
	public String getEventName(@PathVariable Integer id) {
		return es.getEventName(id);
	}
	
	@PostMapping("/register")
	public void registerEvent(@RequestBody DonationType event) {
		es.saveEvent(event);
	}
	
	@PutMapping("/update")
	public void updateEvent(@RequestBody DonationType event) {
		es.updateEvent(event);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteEvent(@PathVariable Integer id) {
		es.delete(id);
	}
}
