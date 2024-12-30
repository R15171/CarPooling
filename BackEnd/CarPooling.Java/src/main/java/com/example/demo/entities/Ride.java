package com.example.demo.entities;

import java.util.Date;
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
@Table(name="ride")
public class Ride {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int rideid;

@JsonIgnoreProperties("rides")
@ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name="driverid")
Driver driverid;

int sourcecity;
int destinationcity;
float fare;
int noseat;
Date ridedate;
String status;

@JsonIgnoreProperties("rideid")
@OneToMany(mappedBy = "rideid",cascade = CascadeType.ALL)
Set<Booking> bookings;

@JsonIgnoreProperties("rideid")
@OneToMany(mappedBy = "rideid",cascade = CascadeType.ALL)
Set<Triphistory> trips;


}
