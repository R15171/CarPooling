package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository uRepository;
	
	public List<User> getAll(){
		System.out.println((uRepository.findAll().toString()));
		return uRepository.findAll();
	}//getAll User
	
	
	public User getUserByContact(String contact) {
        // Assuming you're using JPQL or a similar query to get the user by contact
        return uRepository.findByContact(contact);  // This might return null if no user is found
    }
	
}
