package com.example.demo;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyBeans {

	 //http://localhost:8080/api1/welcome   --  localhost:8081
	 //http://localhost:8080/api1/welcome   -- localhost:8082
	
	@Bean
	public RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
		return builder.routes() 
				.route("service1",r->r.path("/api1/**")
					//.uri("http://localhost:8081"))   
					 .uri("lb://Service1"))
				.route("service2",r->r.path("/api2/**")
					 //.uri("http://localhost:8082"))
					 .uri("lb://Service2"))	
				.build();
		
	}
}
