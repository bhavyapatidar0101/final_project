package com.sportsclub.backend.auth;


 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize; 
import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
import org.springframework.security.core.Authentication; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.web.bind.annotation.*;

import com.sportsclub.backend.dto.LoginResponseDTO;
import com.sportsclub.backend.model.User;
import com.sportsclub.backend.repository.UserRepository;

@RestController
@RequestMapping("/auth") 
@CrossOrigin("*")
public class AuthController { 
	
	@Autowired
	private UserRepository userRepository;
	
    @Autowired
    private UserInfoService service; 
  
    @Autowired
    private JwtService jwtService; 
  
    @Autowired
    private AuthenticationManager authenticationManager; 
  
    @GetMapping("/welcome") 
    public String welcome() { 
        return "Welcome this endpoint is not secure"; 
    } 
  
    @PostMapping("/register") 
    public boolean addNewUser(@RequestBody User userInfo) { 
        return service.addUser(userInfo); 
    } 
  
    @GetMapping("/user/userProfile") 
    @Secured("ROLE_USER")
    public String userProfile() { 
        return "Welcome to User Profile"; 
    } 
  
    @GetMapping("/admin/adminProfile") 
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") 
    public String adminProfile() { 
        return "Welcome to Admin Profile"; 
    } 
  
    @PostMapping("/login") 
    public LoginResponseDTO authenticateAndGetToken(@RequestBody AuthRequest authRequest) { 
    	System.out.println(authRequest);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())); 
        if (authentication.isAuthenticated()) { 
        	System.out.print("authenticated");
        	LoginResponseDTO response = new LoginResponseDTO();
        	
            response.token = jwtService.generateToken(authRequest.getEmail());
            response.role = userRepository.findByEmail(authRequest.getEmail()).get().getRole();
            return response;
        } else { 
            throw new UsernameNotFoundException("invalid user request !"); 
        } 
    } 
  
} 
