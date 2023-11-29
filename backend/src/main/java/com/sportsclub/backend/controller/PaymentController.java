package com.sportsclub.backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    Logger logger = LoggerFactory.getLogger(PaymentController.class);
	@Autowired
	private PaymentService paymentservice;
	
	@GetMapping("/all")
	public List<Payment> getAll(){
		logger.info("All Payments Controller Hit");
		return paymentservice.getAll();
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody PaymentAddRequestDTO request) {
		logger.info("Purchase Done");
		try {
		return paymentservice.add(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody PaymentUpdateRequestDTO request) {
		logger.info("Payment details edited");
		try {
		return paymentservice.update(request);
		}
		catch(Exception e) {
			return false;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		logger.info("Purchase details deleted");
		try {
		return paymentservice.delete(id);
		}
		catch(Exception e) {
			return false;
		}
	}
	
}
