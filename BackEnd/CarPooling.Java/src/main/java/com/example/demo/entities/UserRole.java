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
@Table(name="userrole")
public class UserRole {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int urid;
	
	String rid;
	
	@JsonIgnoreProperties("roles")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="uid")
	User uid;
	
	@JsonIgnoreProperties("urid")
	@OneToMany(mappedBy = "urid",cascade = CascadeType.ALL)
	Set<Driver> drivers;
	
	@JsonIgnoreProperties("urid")
	@OneToMany(mappedBy = "urid",cascade = CascadeType.ALL)
	Set<Booking> bookings;
}
