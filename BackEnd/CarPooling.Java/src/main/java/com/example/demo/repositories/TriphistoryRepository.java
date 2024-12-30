package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Triphistory;

public interface TriphistoryRepository extends JpaRepository<Triphistory, Integer> {

}
