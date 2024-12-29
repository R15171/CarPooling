package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
public class UserController {

	@Autowired
	UserService uService;
	
	@GetMapping("/getallusers")
	public List<User> getAll(){
		return uService.getAll(); 
	}
	
	@GetMapping("/getUserByContact")
	public User getUserByContact(String contact) {
		User user = uService.getUserByContact(contact);

        return user;
        }
	// This method is called by verifyUser
	
	
	@PostMapping("/login")
	public User verifyUser(@RequestParam("contact") String contact, @RequestParam("password") String password) {
		User user = uService.getUserByContact(contact);
		
		
			if( user!=null  && user.getPassword().equals(password)) {
				return user;
			}
			else {
				return null;
			}
		}//verifyUser()
	
}//Controller
