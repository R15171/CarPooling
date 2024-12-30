package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
