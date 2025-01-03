package com.RideShare.CarPool.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Services.UserService;


@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/getallusers")
	public List<User> getAll(){
		return userService.getAll(); 
	}//This method will getAllUSer
	
	@GetMapping("/getUserByContact")
	public User getUserByContact(@RequestParam("c") String c) {
		return userService.getUserByContact(c);	
        }//This method will getUserByContact
	
	
	
	@PostMapping("/login")
	public User verifyUser(@RequestBody Map<String,String> req) {
		String contact = req.get("contactno");
		String password = req.get("password");
		
		User user = userService.getUserByContact(contact);
		
			if( user!=null  && user.getPassword().equals(password)) {
				System.out.println("if "+contact+" "+password);
				System.out.println(" com ");
				return user;
			}
			else {
				System.out.println("else "+contact+" "+password);
				return null;
			}
		}// This method is called by verifyUser
	
		@PostMapping("api/Carpooling/Register")
		public User userRegister(@RequestBody User user) {
			return userService.userRegister(user);
		}//UserRegister
	

}//UserController
