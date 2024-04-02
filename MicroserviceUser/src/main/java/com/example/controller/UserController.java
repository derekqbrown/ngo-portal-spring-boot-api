package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.service.UserService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService us;
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return us.getUserByEmail(user);
	}
	
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		//System.out.println("Registering User");
		us.insert(user);
		return Integer.toString(user.getUserId());
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return us.getAllUsers();
	}

	@PutMapping("/update")
	public void updateUser(@RequestBody User user) {
		//System.out.println("Updating User");
		us.update(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteBook(@PathVariable("id") int id) {
		//System.out.println("Deleting your account");
		us.delete(id);
	}

}
