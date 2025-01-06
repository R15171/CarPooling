package com.RideShare.CarPool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarPoolApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarPoolApplication.class, args);
		System.out.println("SpringBoot Started");
		System.out.println("Carpooling Server Started");
	}

}
