package com.sportsclub.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.model.*;
import com.sportsclub.backend.repository.*;



@Service
public class EquipmentServiceImpl implements EquipmentService{

	@Autowired
	private EquipmentRepository equipment_table;
	

	
	@Autowired
	private PaymentRepository payment_table;
	
	@Autowired
	private CourseRepository course_table;
	
	
	@Override
	public List<Equipment> getAll() {
		return equipment_table.findAll();
	}

	@Override
	public boolean add(EquipmentAddRequestDTO request) {
		Equipment eq = new Equipment();
		eq.setName(request.name);
		eq.setDescription(request.description);
		eq.setBrand(request.brand);
		eq.setStatus(request.status);
		eq.setCourse(course_table.findById(request.course_id).get());
		equipment_table.save(eq);
		return true;
	}

	@Override
	public boolean delete(int id) {
		equipment_table.deleteById(id);
		return true;
	}

	@Override
	public boolean update(EquipmentUpdateRequestDTO request) {
		Equipment eq = equipment_table.findById(request.id).get();
		eq.setName(request.name);
		eq.setDescription(request.description);
		eq.setStatus(request.status);
		eq.setBrand(request.brand);
		eq.setCourse(course_table.findById(request.course_id).get());
		equipment_table.save(eq);
		return true;
	}

	@Override
	public List<Equipment> getPurchased(int id) {
		List<Integer> purchased_course = new ArrayList<Integer>();
		List<Equipment> list = new ArrayList<Equipment>();
		for(Payment p: payment_table.findAll()) {
			if (p.getMember().getId() == id) {
				purchased_course.add(p.getCourse().getId());
			}
		}
		for (Equipment e: equipment_table.findAll()) {
			if(purchased_course.contains(e.getCourse().getId())) {
				list.add(e);
			}
		}
		return list; 
	}

	@Override
	public List<Equipment> getNotPurchased(int id) {
		List<Integer> purchased_course = new ArrayList<Integer>();
		List<Equipment> list = new ArrayList<Equipment>();
		for(Payment p: payment_table.findAll()) {
			if (p.getMember().getId() == id) {
				purchased_course.add(p.getCourse().getId());
			}
		}
		for (Equipment e: equipment_table.findAll()) {
			if(!purchased_course.contains(e.getCourse().getId())) {
				list.add(e);
			}
		}
		return list; 
	}

	@Override
	public List<Equipment> getAssigned(int id) {
		List<Equipment> list = new ArrayList<Equipment>();
		for (Equipment e: equipment_table.findAll()) {
			if(e.getCourse().getTrainer().getId() == id) {
				list.add(e);
			}
		}
		return list;
	}

}
