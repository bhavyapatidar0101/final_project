package com.sportsclub.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sportsclub.backend.model.Course;

public interface CourseRepository extends JpaRepository<Course,Integer>{

}
