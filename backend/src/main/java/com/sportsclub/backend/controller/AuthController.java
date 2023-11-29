package com.sportsclub.backend.controller;


 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize; 
import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
import org.springframework.security.core.Authentication; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.web.bind.annotation.*;

import com.sportsclub.backend.dto.AuthRequest;
import com.sportsclub.backend.dto.LoginResponseDTO;
import com.sportsclub.backend.model.User;
import com.sportsclub.backend.repository.UserRepository;
import com.sportsclub.backend.service.EmailService;
import com.sportsclub.backend.service.JwtService;
import com.sportsclub.backend.service.UserInfoService;

@RestController
@RequestMapping("/auth") 
@CrossOrigin("*")
public class AuthController { 
    Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private EmailService email;
	
	@Autowired
	private UserRepository userRepository;
	
    @Autowired
    private UserInfoService service; 
  
    @Autowired
    private JwtService jwtService; 
  
    @Autowired
    private AuthenticationManager authenticationManager; 
  
   
  
    @PostMapping("/register") 
    public boolean addNewUser(@RequestBody User userInfo) { 
    	logger.info("A new member registered");
        return service.addUser(userInfo); 
    } 
  
 
  
    @PostMapping("/login") 
    public LoginResponseDTO authenticateAndGetToken(@RequestBody AuthRequest authRequest) { 
    	
    	System.out.println(authRequest);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())); 
        if (authentication.isAuthenticated()) { 
        	System.out.print("authenticated");
        	LoginResponseDTO response = new LoginResponseDTO();
        	email.send(authRequest.getEmail(), "Login Request", "Login done");
            response.token = jwtService.generateToken(authRequest.getEmail());
            response.role = userRepository.findByEmail(authRequest.getEmail()).get().getRole();
            logger.info("Login successful");
            return response;
        } else { 
            throw new UsernameNotFoundException("invalid user request !"); 
        } 
    } 
  
} 
