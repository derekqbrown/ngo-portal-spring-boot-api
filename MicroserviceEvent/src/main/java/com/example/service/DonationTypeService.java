package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.DonationType;
import com.example.repository.DonationTypeRepository;

@Service
public class DonationTypeService {

	@Autowired
	DonationTypeRepository er;
	
	public List<DonationType> getAllEvents() {
		return er.findAll();
	}
	
	public void saveEvent(DonationType event) {
		er.save(event);
	}
	
	public void updateEvent(DonationType event) {
		er.save(event);
	}

	public void delete(Integer id) {
		er.deleteById(id);
	}

	@SuppressWarnings("deprecation")
	public String getEventName(Integer id) {
		return er.getById(id).getTitle();
	}
}
