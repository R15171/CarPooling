

package com.RideShare.CarPool.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Repositories.UserRepository;

@Service
public class UserService {

    @Autowired 
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService; // Inject EmailService

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User findUserByContact(String contactno) {
        return userRepository.findUserByContact(contactno);
    }//find user by contactno

    public User findUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }//find user by id

//    public User userRegister(User user) {
//        User savedUser = userRepository.save(user);
//
//        // Send welcome email
//        String subject = "Welcome to RideShare!";
//        String body = "Hello " + user.getName() + ",\n\nWelcome to Carpool! Your account has been successfully created.\n\nEnjoy your rides!\n\nBest Regards,\nCarpooling Team";
//        emailService.sendEmail(user.getEmail(), subject, body);
//
//        return savedUser;
//    }//user Register
    
    
    
    public User userRegister(User user) {
        User savedUser = userRepository.save(user);

        // Send welcome email
        String subject = "Welcome to Carpool!";
        String body = "<html>" +
                      "<body>" +
                      "<h2>Hello " + user.getName() + ",</h2>" +
                      "<p>Welcome to <strong>Carpool!</strong> Your account has been successfully created.</p>" +
                      "<p>Enjoy your rides!</p>" +
                      "<p>Best Regards,<br>Carpooling Team</p>" +
                      "</body>" +
                      "</html>";

        emailService.sendEmail(user.getEmail(), subject, body);

        return savedUser;
    }



    
    public boolean updateProfile(User profile) {
        Optional<User> userRegistered = userRepository.findById(profile.getUid());

        if (!userRegistered.isPresent()) {
            return false; // User not found
        }

        User old = userRegistered.get();  // Extract the user from Optional

        old.setName(profile.getName());
        old.setEmail(profile.getEmail());
        old.setContactno(profile.getContactno());
        old.setAddress(profile.getAddress());
        old.setDob(profile.getDob());
        old.setPassword(profile.getPassword());
        old.setGender(profile.getGender());

        userRepository.save(old);  // Save updated user
        return true; // Successful update
    }
    
    
    
}//service class

