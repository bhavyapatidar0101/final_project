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
@RequestMapping("/equipment")
@CrossOrigin

public class EquipmentController {
	@Autowired
	private EquipmentService eqservice;
	
	@Autowired
	private UserRepository user_table;
	
	@GetMapping("/all")
	public List<Equipment> getAll(){
		return eqservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody EquipmentAddRequestDTO request) {
		return eqservice.add(request);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody EquipmentUpdateRequestDTO request) {
		return eqservice.update(request);
	}
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		return eqservice.delete(id);
	}
	
	@GetMapping("/purchased")
	public List<Equipment> getPurchased(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getPurchased(id);
	}
	@GetMapping("/notpurchased")
	public List<Equipment> getNotPurchased(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getNotPurchased(id);
	}
	@GetMapping("/assigned")
	public List<Equipment> getAssigned(@AuthenticationPrincipal UserDetails userDetails){
		int id = user_table.findByEmail(userDetails.getUsername()).get().getId();
		return eqservice.getAssigned(id);
	}
	
	
}
