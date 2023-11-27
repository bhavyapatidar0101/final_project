package com.sportsclub.backend.service;
import java.util.List;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.model.*;
public interface CourseService {

	List<Course> getAll();
	boolean add(CourseAddRequestDTO request);
	boolean update(CourseUpdateRequestDTO request);
	boolean delete(int id);
	List<Course> getPurchased(int id);
	List<Course> getNotPurchased(int id);
	List<Course> getAssigned(int id);
	
	
}
