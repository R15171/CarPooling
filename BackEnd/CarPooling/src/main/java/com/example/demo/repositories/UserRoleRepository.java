package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.UserRole;


public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
	
	
	//@Query("Select from userrole Where uid = :uid")
	@Query("SELECT u FROM UserRole u WHERE u.uid = :uid")
	List<String> getUserRoleByuid(int uid);

}
