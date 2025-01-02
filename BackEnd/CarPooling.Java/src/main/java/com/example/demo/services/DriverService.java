package com.example.demo.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Driver;
import com.example.demo.repositories.DriverRepository;

@Service
public class DriverService {
	@Autowired
	DriverRepository dRepository;
	
	public List<Driver> getAll(){
		return dRepository.findAll();
	}//getAll()


	public Driver addDriver(Driver driver) {
		return dRepository.save(driver);
	}
	
}//DriverService
