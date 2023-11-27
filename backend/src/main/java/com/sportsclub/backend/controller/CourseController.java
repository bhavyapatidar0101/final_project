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
@RequestMapping("/course")
@CrossOrigin("*")

public class CourseController {
	
	@Autowired
	private CourseService courseservice;
	
	@Autowired
	private UserRepository user_table;

	@GetMapping("/all")
	public List<Course> getAll(){
		return courseservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody CourseAddRequestDTO request) {
		return courseservice.add(request);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody CourseUpdateRequestDTO request) {
		return courseservice.update(request);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		return courseservice.delete(id);
	}
	
	@GetMapping("/purchased")
	public List<Course> getPurchased(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getPurchased(id);
	}
	@GetMapping("/notpurchased")
	public List<Course> getNotPurchased(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getNotPurchased(id);
	}
	@GetMapping("/assigned")
	public List<Course> getAssigned(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getAssigned(id);
	}
	
	
}
