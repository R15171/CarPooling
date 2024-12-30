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

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "booking")
public class Booking {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int bookingid;
Date bookingdate;

@JsonIgnoreProperties("bookings")
@ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name="rideid")
Ride rideid;


@ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name="uid")
User uid;

@JsonIgnoreProperties("bookingid")
@OneToMany(mappedBy = "bookingid",cascade = CascadeType.ALL)
Set<Payment> payments;


}
