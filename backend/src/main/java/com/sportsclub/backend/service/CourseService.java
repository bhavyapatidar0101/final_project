package com.sportsclub.backend.service;
import java.util.List;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.exceptions.CourseNotAddedException;
import com.sportsclub.backend.exceptions.CourseNotDeletedException;
import com.sportsclub.backend.exceptions.CourseNotUpdatedException;
import com.sportsclub.backend.model.*;
public interface CourseService {

	List<Course> getAll();
	boolean add(CourseAddRequestDTO request) throws CourseNotAddedException;
	boolean update(CourseUpdateRequestDTO request) throws CourseNotUpdatedException;
	boolean delete(int id) throws CourseNotDeletedException;
	List<Course> getPurchased(int id);
	List<Course> getNotPurchased(int id);
	List<Course> getAssigned(int id);
	
	
}
