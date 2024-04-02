package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.model.Donation;
import com.example.service.DonationService;

@RestController
//@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/donation")
public class DonationController {

	@Autowired
	private DonationService ds;
	 
	private RestTemplate restTemplate = new RestTemplate();
	
	@GetMapping("/donations")
	public List<Donation> getDonations() {
		return ds.getAll();
	}

	@PostMapping("/register")
	public void registerDonation(@RequestBody Donation donation) {
		String url = "http://localhost:8765/event-service/event/event/"+donation.getEventId();
		String eventName = restTemplate.getForObject(url, String.class);
		donation.setEventName(eventName);
		System.out.print(eventName);
		ds.registerDonation(donation);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteDonation(@PathVariable Integer id) {
		ds.delete(id);
	}
	
	
	
}
