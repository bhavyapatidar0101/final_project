package com.sportsclub.backend.service;

import com.sportsclub.backend.model.*;
import java.util.List;
import com.sportsclub.backend.dto.*;
public interface UserService {
	
	boolean add(UserAddRequestDTO request);
	boolean delete(int id);
	boolean update(User request);
	List<User> getAll();
	UserDetailResponseDTO detail(int id);
	List<UserUnderTrainerResponseDTO> underTrainer(int id);
	List<UserUnderMemberResponseDTO> underMember(int id);
	List<UserUnderMemberResponseDTO> notUnderMember(int id);
	
	
}
