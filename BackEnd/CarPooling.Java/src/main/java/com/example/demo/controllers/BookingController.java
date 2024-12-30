package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class BookingController {
	@Autowired
	BookingService bserv;
	
	@GetMapping("/getallbookings")
	public List<Booking> getAll() {
		return bserv.getAll();
	}
	
}
