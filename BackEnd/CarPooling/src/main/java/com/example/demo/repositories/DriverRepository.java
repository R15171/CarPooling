package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Driver;

public interface DriverRepository extends JpaRepository<Driver, Integer> {

}
