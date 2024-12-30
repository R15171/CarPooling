package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository brepo;
	
	public List<Booking> getAll(){
		return brepo.findAll();
	}
	
}

