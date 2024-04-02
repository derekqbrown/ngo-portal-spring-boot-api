package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Donation;
import com.example.repository.DonationRepository;

@Service
public class DonationService {

	@Autowired
	private DonationRepository dr;
	
	public List<Donation> getAll() {
		return dr.findAll();
	}
	
	public void registerDonation(Donation donation) {
		dr.save(donation);
	}
	
	public void delete(int id) {
		dr.deleteById(id);
	} 
}
