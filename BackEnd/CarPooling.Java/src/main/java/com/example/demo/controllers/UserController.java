package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	UserService uService;
	
	@GetMapping("/getallusers")
	public List<User> getAll(){
		return uService.getAll(); 
	}
	
	@GetMapping("/getUserByContact")
	public User getUserByContact(@RequestParam("c") String c) {
		
		User u= uService.getUserByContact(c);
		System.out.println("get u");
		return u;	
        
        }
	// This method is called by verifyUser
	
	
	@PostMapping("/login")
	public User verifyUser(@RequestBody Map<String,String> req) {
		String contact = req.get("contactno");
		String password = req.get("password");
		
		User user = uService.getUserByContact(contact);
		
			if( user!=null  && user.getPassword().equals(password)) {
				System.out.println("if "+contact+" "+password);
				System.out.println(" com ");
				return user;
			}
			else {
				System.out.println("else "+contact+" "+password);
				return null;
			}
		}//verifyUser()
	
	
	
		@PostMapping("api/Carpooling/Register")
		public User userRegister(@RequestBody User user) {
			return uService.userRegister(user);
		}//UserRegister
	
}//Controller
