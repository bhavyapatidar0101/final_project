package com.sportsclub.backend.service;

import java.util.List;

import com.sportsclub.backend.dto.PaymentAddRequestDTO;
import com.sportsclub.backend.dto.PaymentUpdateRequestDTO;
import com.sportsclub.backend.model.Payment;

public interface PaymentService {
	boolean add(PaymentAddRequestDTO request);
	List<Payment> getAll();
	boolean update(PaymentUpdateRequestDTO request);
	boolean delete(int id);
}
