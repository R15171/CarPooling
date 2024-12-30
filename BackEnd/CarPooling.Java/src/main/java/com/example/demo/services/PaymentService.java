package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Payment;
import com.example.demo.repositories.PaymentRepository;

@Service
public class PaymentService {
	@Autowired
	PaymentRepository prepo;
	
	public List<Payment> getAll(){
		return prepo.findAll();
	}
}
