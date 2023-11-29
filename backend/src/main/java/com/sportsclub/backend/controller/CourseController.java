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
@RequestMapping("/course")
@CrossOrigin("*")

public class CourseController {
    Logger logger = LoggerFactory.getLogger(CourseController.class);

	@Autowired
	private CourseService courseservice;
	
	@Autowired
	private UserRepository user_table;

	@GetMapping("/all")
	public List<Course> getAll(){
		logger.info("All courses requested");
		return courseservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody CourseAddRequestDTO request) {
		logger.info("A new course has been added");
		try {
		return courseservice.add(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody CourseUpdateRequestDTO request) {
		logger.info("Course details have been edited");
		try {
		return courseservice.update(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		logger.info("A course has been deleted");
		try {
		return courseservice.delete(id);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@GetMapping("/purchased")
	public List<Course> getPurchased(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Purchased courses requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getPurchased(id);
	}
	@GetMapping("/notpurchased")
	public List<Course> getNotPurchased(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("unpurchased courses requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getNotPurchased(id);
	}
	@GetMapping("/assigned")
	public List<Course> getAssigned(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Assigned course requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return courseservice.getAssigned(id);
	}
	
	
}
