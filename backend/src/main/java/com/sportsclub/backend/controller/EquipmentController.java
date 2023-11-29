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
@RequestMapping("/equipment")
@CrossOrigin

public class EquipmentController {
    Logger logger = LoggerFactory.getLogger(EquipmentController.class);

	@Autowired
	private EquipmentService eqservice;
	
	@Autowired
	private UserRepository user_table;
	
	@GetMapping("/all")
	public List<Equipment> getAll(){
		logger.info("All Equipments requested");

		return eqservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody EquipmentAddRequestDTO request) {
		logger.info("A new equipment has been added");
		try {
		return eqservice.add(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody EquipmentUpdateRequestDTO request) {
		logger.info("Equipment details have been edited");
		try {
		return eqservice.update(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		logger.info("Equipment details have been deleted");
		try {
		return eqservice.delete(id);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@GetMapping("/purchased")
	public List<Equipment> getPurchased(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Equipments of purchased course requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getPurchased(id);
	}
	@GetMapping("/notpurchased")
	public List<Equipment> getNotPurchased(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Equipments of courses not yet purchsed requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getNotPurchased(id);
	}
	@GetMapping("/assigned")
	public List<Equipment> getAssigned(@AuthenticationPrincipal UserDetails userDetails){
		logger.info("Assigned equipments requested");

		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getAssigned(id);
	}
	
	
}
