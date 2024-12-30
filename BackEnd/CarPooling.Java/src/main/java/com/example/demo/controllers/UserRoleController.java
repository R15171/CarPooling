package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UserRole;
import com.example.demo.services.UserRoleService;

@RestController
public class UserRoleController {

	@Autowired
	UserRoleService urService;
	
	@GetMapping("/getalluserroles")
	public List<UserRole> getAll(){
		return urService.getAll();
	}//getall user
	
	
	@GetMapping("/getUseroleByUserId")
	public List<String> getUserRoles(@RequestParam("uid") int uid){
		
		return urService.getUserRoleByuid(uid);
	}
	
	
}//controller
