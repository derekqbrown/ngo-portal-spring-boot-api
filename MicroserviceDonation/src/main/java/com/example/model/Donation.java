package com.example.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="donation")
@Getter
@Setter
public class Donation {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	private Integer eventId;
	private String eventName;
	private Integer userId;
	private Integer amount;
	private Date donationDate;
	private boolean reocurring;
	private String firstName;
	private String lastName;
	private String phone;
	private String address;
	private String city;
	private String state;
	private String zipcode;
	private String country;
	private String email;
}
