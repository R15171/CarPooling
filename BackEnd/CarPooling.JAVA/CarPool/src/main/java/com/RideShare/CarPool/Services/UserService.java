package com.RideShare.CarPool.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RideShare.CarPool.Controllers.UserController;
import com.RideShare.CarPool.Entities.Role;
import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Repositories.UserRepository;

@Service
public class UserService {

	@Autowired 
	UserRepository userRepository;
	
	public List<User> getAll(){
		return userRepository.findAll();
	}//getAll()
	
	
	public User getUserByContact(String contactno) {
		System.out.println("User service");
		return userRepository.findUserByContact(contactno);
	}//getUserByContact()
	
	
	
	
	public User userById(int id) {
		return userRepository.findById(id).get();
	}//findbyid for login verification
	
	
	
	public User userRegister(User user) {
	    if (user.getRole() == null) {
	        Role defaultRole = new Role(); // Default constructor sets `rid=2`, `rname="user"`
	        user.setRole(defaultRole);
	    }
	    return userRepository.save(user);
	}

	
	
	
}//UserService
