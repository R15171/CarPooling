package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Ride;
import com.example.demo.repositories.RideRepository;

@Service
public class RideService {
	@Autowired
	RideRepository rrepo;
	
	public List<Ride> getAll(){
		return rrepo.findAll();
	}
}
