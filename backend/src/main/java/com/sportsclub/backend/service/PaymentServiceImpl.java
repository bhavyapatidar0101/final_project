package com.sportsclub.backend.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sportsclub.backend.model.*;
import com.sportsclub.backend.repository.*;
import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.exceptions.PaymentNotAddedException;
import com.sportsclub.backend.exceptions.PaymentNotDeletedException;
import com.sportsclub.backend.exceptions.PaymentNotUpdatedException;
@Service
public class PaymentServiceImpl implements PaymentService {
	
	
	@Autowired
	private PaymentRepository payment_table;
	
	@Autowired
	private UserRepository user_table;
	
	@Autowired
	private CourseRepository course_table;

	@Override
	public boolean add(PaymentAddRequestDTO request) throws PaymentNotAddedException{
		try {
		Payment row = new Payment();
		row.setTransaction(request.transaction);
		row.setMember(user_table.findById(request.member_id).get());
		row.setCourse(course_table.findById(request.course_id).get());
		row.setDate(request.date);
		payment_table.save(row);
		return true;
		}
		catch(Exception e) {
			throw new PaymentNotAddedException();
		}
	}

	@Override
	public List<Payment> getAll() {
		return payment_table.findAll();
	}

	@Override
	public boolean update(PaymentUpdateRequestDTO request) throws PaymentNotUpdatedException {
		try {
		Payment row = payment_table.findById(request.id).get();
		row.setTransaction(request.transaction);
		row.setDate(request.date);
		row.setCourse(course_table.findById(request.course_id).get());
		row.setMember(user_table.findById(request.member_id).get());
		row.setDate(request.date);
		payment_table.save(row);
		return true;
		}
		catch(Exception e) {
			throw new PaymentNotUpdatedException();
		}
	}

	@Override
	public boolean delete(int id) throws PaymentNotDeletedException {
		try {
		payment_table.deleteById(id);
		return true;
		}
		catch(Exception e) {
			throw new PaymentNotDeletedException();
		}
	}

}
