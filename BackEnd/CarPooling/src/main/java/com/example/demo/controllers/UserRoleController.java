package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UserRole;
import com.example.demo.services.UserRoleService;

@RestController
public class UserRoleController {

	@Autowired
	UserRoleService urserv;
	
	@GetMapping("/getalluserroles")
	public List<UserRole> getAll(){
		return urserv.getAll();
	}
}
