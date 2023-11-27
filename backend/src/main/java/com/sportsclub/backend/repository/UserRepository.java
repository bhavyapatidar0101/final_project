package com.sportsclub.backend.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sportsclub.backend.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
		Optional<User> findByEmail(String email);
}
