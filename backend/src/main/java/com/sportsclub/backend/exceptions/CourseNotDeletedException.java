package com.sportsclub.backend.exceptions;

public class CourseNotDeletedException extends Exception{
	public CourseNotDeletedException() {
		super("Course not deleted");
	}
}
