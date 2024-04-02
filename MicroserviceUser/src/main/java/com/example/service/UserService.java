package com.example.service;

import com.example.model.User;
import com.example.repository.UserRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	UserRepository ur;
	
	public void insert(User user) {
		ur.save(user);
	}
	public void delete(int id) {
		ur.deleteById(id);
	}
	
	public User getUserByEmail(User user) {
		User e1 = ur.findByEmail(user.getEmail());
		if (e1.getPassword().contentEquals(user.getPassword())) {
			//System.out.println("Logged in");
			return e1;
		}
		//System.out.println("Login failed");
        return null;
	}
	
	public void update(User user) {
		ur.save(user);
	}
	public List<User> getAllUsers() {
		return ur.findAll();
	}
	
}
