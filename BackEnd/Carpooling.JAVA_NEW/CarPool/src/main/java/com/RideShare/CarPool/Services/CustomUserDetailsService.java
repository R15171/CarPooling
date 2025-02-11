package com.RideShare.CarPool.Services;

import com.RideShare.CarPool.Entities.User;
import com.RideShare.CarPool.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String contactno) throws UsernameNotFoundException {
        User user = userRepository.findUserByContact(contactno);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with contact number: " + contactno);
        }

        String roleName = (user.getRole() != null) ? user.getRole().getRname() : "USER"; 

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getContactno()) 
                .password(user.getPassword())
                .roles(roleName)
                .build();
    }
}
