package com.sportsclub.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.sportsclub.backend.service.*;
import com.sportsclub.backend.model.*;
@RestController
@RequestMapping("/payment")
@CrossOrigin("*")

public class PaymentController {

	@Autowired
	private PaymentService paymentservice;
	
	@GetMapping("/all")
	public List<Payment> getAll(){
		return paymentservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody PaymentAddRequestDTO request) {
		return paymentservice.add(request);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody PaymentUpdateRequestDTO request) {
		return paymentservice.update(request);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		return paymentservice.delete(id);
	}
	
}
