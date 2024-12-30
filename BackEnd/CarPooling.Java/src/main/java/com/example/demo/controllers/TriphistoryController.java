package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Triphistory;
import com.example.demo.services.TriphistoryService;

@RestController
public class TriphistoryController {
	@Autowired
	TriphistoryService tserv;
	
	@GetMapping("/getalltriphistories")
	public List<Triphistory> getAll() {
		return tserv.getAll();
	}
	
}
