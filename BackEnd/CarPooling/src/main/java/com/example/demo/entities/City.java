package com.example.demo.entities;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name="city")
public class City {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int cityid;
String cityname;


}
