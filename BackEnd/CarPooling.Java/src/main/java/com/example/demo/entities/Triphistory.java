package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="triphistory")
public class Triphistory {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int tripid;

@JsonIgnoreProperties("trips")
@ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name="rideid")
Ride rideid;

int rating;
String feedback;
}
