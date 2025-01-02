package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Driver;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRole;
import com.example.demo.services.DriverService;
import com.example.demo.services.UserService;

@RestController
public class DriverController {

	@Autowired
	DriverService dService;
	
	@Autowired
	UserService uService;
	
	@GetMapping("/getalldrivers")
	public List<Driver> getAll(){
		return dService.getAll();
	}//getAllDrivers()
	
	
	@PostMapping("/addDriver")
	public Driver addDriver(@RequestBody Map<String, String>map) {
		
		Driver driver = new Driver();
		
		driver.setDrivinglicence(map.get("driverliscence"));
		driver.setVehicleinfo(map.get("vechileinfo"));
		
		
		User user = uService.userById(Integer.parseInt(map.get("uid")));
		
		UserRole userRole = new UserRole("driver", user);
		
		driver.setUrid(userRole);
		
		return dService.addDriver(driver);

		
	}//addDriver()
	
	
	
}//Controller
