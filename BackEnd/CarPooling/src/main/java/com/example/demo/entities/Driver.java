package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="driver")
public class Driver {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int driverid;
	String drivinglicence;
	int age;
	
	@JsonIgnoreProperties("drivers")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="urid")
	UserRole urid;
	
	String VehicleInfo;
	String status;
	
	@JsonIgnoreProperties("driverid")
	@OneToMany(mappedBy = "driverid",cascade = CascadeType.ALL)
	Set<Ride> rides;

}
