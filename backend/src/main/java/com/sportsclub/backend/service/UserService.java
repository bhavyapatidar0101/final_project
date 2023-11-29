package com.sportsclub.backend.service;

import com.sportsclub.backend.model.*;
import java.util.List;
import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.exceptions.UserNotAddedException;
import com.sportsclub.backend.exceptions.UserNotDeletedException;
import com.sportsclub.backend.exceptions.UserNotUpdatedException;
public interface UserService {
	
	boolean add(UserAddRequestDTO request) throws UserNotAddedException;
	boolean delete(int id) throws UserNotDeletedException;
	boolean update(User request) throws UserNotUpdatedException;
	List<User> getAll();
	UserDetailResponseDTO detail(int id);
	List<UserUnderTrainerResponseDTO> underTrainer(int id);
	List<UserUnderMemberResponseDTO> underMember(int id);
	List<UserUnderMemberResponseDTO> notUnderMember(int id);
	
	
}
