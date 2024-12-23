package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Ride;

public interface RideRepository extends JpaRepository<Ride, Integer> {

}
