package com.sportsclub.backend.service;

import java.util.List;

import com.sportsclub.backend.dto.PaymentAddRequestDTO;
import com.sportsclub.backend.dto.PaymentUpdateRequestDTO;
import com.sportsclub.backend.exceptions.PaymentNotAddedException;
import com.sportsclub.backend.exceptions.PaymentNotDeletedException;
import com.sportsclub.backend.exceptions.PaymentNotUpdatedException;
import com.sportsclub.backend.model.Payment;

public interface PaymentService {
	boolean add(PaymentAddRequestDTO request) throws PaymentNotAddedException;
	List<Payment> getAll();
	boolean update(PaymentUpdateRequestDTO request) throws PaymentNotUpdatedException;
	boolean delete(int id) throws PaymentNotDeletedException;
}
