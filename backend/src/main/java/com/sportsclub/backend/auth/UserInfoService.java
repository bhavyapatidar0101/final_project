package com.sportsclub.backend.auth;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.stereotype.Service;
import com.sportsclub.backend.model.User;
import com.sportsclub.backend.repository.UserRepository;

import java.util.Optional; 
  
@Service
public class UserInfoService implements UserDetailsService { 
  
    @Autowired
    private UserRepository repository; 
  
    @Autowired
    private PasswordEncoder encoder; 
  
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { 
  
        Optional<User> userDetail = repository.findByEmail(username); 
        System.out.println(userDetail);
        // Converting userDetail to UserDetails 
        return userDetail.map(UserInfoDetails::new) 
                .orElseThrow(() -> new UsernameNotFoundException("User not found " + username)); 
    } 
  
    public boolean addUser(User userInfo) { 
        userInfo.setPassword(encoder.encode(userInfo.getPassword())); 
        userInfo.setRole("MEMBER");
        repository.save(userInfo); 
        return true; 
    } 
  
  
} 
