package com.sportsclub.backend.controller;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    Logger logger = LoggerFactory.getLogger(EquipmentController.class);

	@Autowired
	private UserService userservice;
	
	@Autowired
	private UserRepository user_table;
	
	@PostMapping("/add")
	public boolean add(@RequestBody UserAddRequestDTO request) {
		logger.info("User added");

		System.out.println(request);
		try {
		return userservice.add(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		logger.info("User Deleted");
		try {
		return userservice.delete(id);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody User request) {
		logger.info("User details updated");
		try {
		return userservice.update(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	
	@GetMapping("/all")
	public List<User> getAll(){
		logger.info("All user details requested");

		return userservice.getAll();
	}
	
	@GetMapping("/detail")
	public UserDetailResponseDTO detail(@AuthenticationPrincipal UserDetails userDetails) {
		logger.info("User detail requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.detail(id);
	}
	
	@GetMapping("/undertrainer")
	public List<UserUnderTrainerResponseDTO> underTrainer(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Students under the trainer requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.underTrainer(id);
	}
	
	@GetMapping("/undermember")
	List<UserUnderMemberResponseDTO> underMember(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Trainers assigned to students requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.underMember(id);
	}
	@GetMapping("/notundermember")
	List<UserUnderMemberResponseDTO> notUnderMember(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Trainers not assigned to member requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return userservice.notUnderMember(id);
	}
	
	
}
