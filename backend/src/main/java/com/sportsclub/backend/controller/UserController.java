package com.sportsclub.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.model.*;
import com.sportsclub.backend.repository.UserRepository;
import com.sportsclub.backend.service.*;


@RestController
@RequestMapping("/user")
@CrossOrigin

public class UserController {
		
	@Autowired
	private UserService userservice;
	
	@Autowired
	private UserRepository user_table;
	
	@PostMapping("/add")
	public boolean add(@RequestBody UserAddRequestDTO request) {
		System.out.println(request);
		return userservice.add(request);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		return userservice.delete(id);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody User request) {
		return userservice.update(request);
	}
	
	
	@GetMapping("/all")
	public List<User> getAll(){
		return userservice.getAll();
	}
	
	@GetMapping("/detail")
	public UserDetailResponseDTO detail(@AuthenticationPrincipal UserDetails userDetails) {
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.detail(id);
	}
	
	@GetMapping("/undertrainer")
	public List<UserUnderTrainerResponseDTO> underTrainer(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.underTrainer(id);
	}
	
	@GetMapping("/undermember")
	List<UserUnderMemberResponseDTO> underMember(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.underMember(id);
	}
	@GetMapping("/notundermember")
	List<UserUnderMemberResponseDTO> notUnderMember(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.notUnderMember(id);
	}
	
	
}
