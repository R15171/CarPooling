//package com.RideShare.CarPool.Controllers;
//
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//
//import com.RideShare.CarPool.Entities.User;
//import com.RideShare.CarPool.Services.UserService;
//
//import jakarta.servlet.http.HttpServletResponse;
//
//
//@RestController
//@RequestMapping("/auth")
//public class UserController {
//
//	@Autowired
//	UserService userService;
//
//	@GetMapping("/getallusers")
//	public List<User> getAll(){
//		return userService.getAll(); 
//	}//This method will getAllUSer
//	
//	@GetMapping("/getUserByContact")
//	public User getUserByContact(@RequestParam("c") String c) {
//		return userService.findUserByContact(c);	
//        }//This method will getUserByContact
//	
//	@PostMapping("/Login")
//	public User verifyUser(@RequestBody Map<String,String> req) {
//		String contact = req.get("contactno");
//		String password = req.get("password");
//		
//		User user = userService.findUserByContact(contact);
//		
//			if( user!=null  && user.getPassword().equals(password)) {
//				System.out.println("if "+contact+" "+password);
//				return user;
//			}
//			else {
//				System.out.println("else "+contact+" "+password);
//				return null;
//			}
//		}// This method is called by verifyUser
//	
//		@PostMapping("/Register")
//		public User userRegister(@RequestBody User user) {
//			return userService.userRegister(user);
//		}//UserRegister
//
//		@PutMapping("/ProfileUpdate")
//		public ResponseEntity<String> updateProfile(@RequestBody User user) {
//	        boolean isUpdated = userService.updateProfile(user);
//	        if (isUpdated) {
//	            return ResponseEntity.ok("Profile updated successfully.");
//	        } else {
//	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
//	        }
//	    }
//	
//		@PostMapping("/forget")
//		public ResponseEntity<String> forgetPassword(@RequestBody Map<String, String> requestBody) {
//		    String email = requestBody.get("email");
//		    String contactNo = requestBody.get("contactNo");
//		    return userService.forgetPassword(email,contactNo);
//		}
//
//	
//	
//}//UserController


package com.RideShare.CarPool.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getallusers")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping("/getUserByContact")
    public ResponseEntity<User> getUserByContact(@RequestParam("c") String contact) {
        User user = userService.findUserByContact(contact);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @PutMapping("/profile")
    public ResponseEntity<String> updateProfile(@RequestBody User user) {
        // Get the currently authenticated user from JWT token
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();

        // Ensure the user is updating their own profile
        if (!user.getName().equals(currentUsername)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You can only update your own profile.");
        }

        boolean isUpdated = userService.updateProfile(user);
        return isUpdated ? ResponseEntity.ok("Profile updated successfully.")
                         : ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
    }

    @PostMapping("/forget-password")
    public ResponseEntity<String> forgetPassword(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String contactNo = requestBody.get("contactNo");
        System.out.println(email+" "+contactNo);
        return userService.forgetPassword(email, contactNo);
    }
}
