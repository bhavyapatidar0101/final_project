package com.sportsclub.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.model.*;
import com.sportsclub.backend.repository.*;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository course_table;
	
	@Autowired
	private PaymentRepository payment_table;
	
	@Autowired
	private UserRepository user_table;

	@Override
	public List<Course> getAll() {
		return course_table.findAll();
	}

	@Override
	public boolean add(CourseAddRequestDTO request) {
		Course course = new Course();
		course.setName(request.name);
		course.setDescription(request.description);
		course.setDuration(request.duration);
		course.setPrice(request.price);
		course.setTrainer(user_table.findById(request.trainer_id).get());
		course_table.save(course);
		return true;
	}

	@Override
	public boolean update(CourseUpdateRequestDTO request) {
		Course course = course_table.findById(request.id).get();
		course.setDescription(request.description);
		course.setName(request.name);
		course.setDuration(request.duration);
		course.setPrice(request.price);
		course.setTrainer(user_table.findById(request.trainer_id).get());
		course_table.save(course);
		
		return true;
	}

	@Override
	public boolean delete(int id) {
		course_table.deleteById(id);
		return true;
	}

	@Override
	public List<Course> getPurchased(int id) {
		List<Course> list = new ArrayList<Course>();
		for (Payment p: payment_table.findAll()) {
			if(p.getMember().getId()==id) {
				list.add(p.getCourse());
			}
		}
		return list;
	}

	@Override
	public List<Course> getNotPurchased(int id) {
		List<Integer> purchased_list = new ArrayList<Integer>();
		List<Course> not_purchased_list = new ArrayList<Course>();
		for (Payment p: payment_table.findAll()) {
			if(p.getMember().getId()==id) {
				purchased_list.add(p.getCourse().getId());
			}
		}
		for (Course c: course_table.findAll()) {
			if(!purchased_list.contains(c.getId())) {
				not_purchased_list.add(c);
			}
		}
		return not_purchased_list;
	}

	@Override
	public List<Course> getAssigned(int id) {
		List<Course> list = new ArrayList<Course>();
		for (Course c:course_table.findAll()) {
			if(c.getTrainer().getId() == id) {
				list.add(c);
			}
		}
		return list;
	}

}
