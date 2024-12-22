package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Driver;
import com.example.demo.services.DriverService;

@RestController
public class DriverController {

	@Autowired
	DriverService dserv;
	
	@GetMapping("/getalldrivers")
	public List<Driver> getAll(){
		return dserv.getAll();
	}
}
