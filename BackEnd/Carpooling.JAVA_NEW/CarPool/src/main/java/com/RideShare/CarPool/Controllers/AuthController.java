package com.RideShare.CarPool.Controllers;

import com.RideShare.CarPool.DTO.AuthResponse;
import com.RideShare.CarPool.DTO.LoginRequest;
import com.RideShare.CarPool.DTO.RegisterRequest;
import com.RideShare.CarPool.Entities.Role;
import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Repositories.UserRepository;
import com.RideShare.CarPool.Security.JwtUtil;
import com.RideShare.CarPool.Services.CustomUserDetailsService;
import com.RideShare.CarPool.Services.RoleService;
import com.RideShare.CarPool.Services.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(
            AuthenticationManager authenticationManager,
            CustomUserDetailsService userDetailsService,
            JwtUtil jwtUtil,
            UserService userService,
            RoleService roleService,
            PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    /** 🔹 User Login with JWT Token */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest.getContactNo() + " " + loginRequest.getPassword());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getContactNo(), loginRequest.getPassword()));

        // Fetch user using UserService instead of UserRepository
        User user = userService.findUserByContact(loginRequest.getContactNo());

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getContactno());

        // Return AuthResponse with token and user details
        return ResponseEntity.ok(new AuthResponse(token, user));
    }



    /** 🔹 User Registration */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
    	System.out.println(registerRequest.toString());
        if (userService.findUserByContact(registerRequest.getContactNo()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists with this contact number.");
        }

        // Get Role from database
        Optional<Role> roleOptional = roleService.findById(2);
        if (roleOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid role ID.");
        }

        User newUser = new User();
        newUser.setName(registerRequest.getName());
        newUser.setContactno(registerRequest.getContactNo());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setGender(registerRequest.getGender());
        newUser.setDob(registerRequest.getDob());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword())); // Encrypt password
        newUser.setAddress(registerRequest.getAddress());
        newUser.setRole(roleOptional.get());
        
        System.out.println("In Controller");

        userService.userRegister(newUser);
        return ResponseEntity.ok("User registered successfully.");
    }
}
