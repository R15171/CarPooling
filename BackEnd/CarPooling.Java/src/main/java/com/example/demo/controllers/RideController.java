package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Ride;
import com.example.demo.services.RideService;

@RestController
public class RideController {
	@Autowired
	RideService rserv;
	
	@GetMapping("/getallrides")
	public List<Ride> getAll(){
		return rserv.getAll();
	}
}
