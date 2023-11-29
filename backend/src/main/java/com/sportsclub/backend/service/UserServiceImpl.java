package com.sportsclub.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.exceptions.UserNotAddedException;
import com.sportsclub.backend.exceptions.UserNotDeletedException;
import com.sportsclub.backend.exceptions.UserNotUpdatedException;
import com.sportsclub.backend.model.*;
import com.sportsclub.backend.repository.*;


@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private PasswordEncoder encoder; 
	
	@Autowired
	private UserRepository user_table;
	
	@Autowired 
	private PaymentRepository payment_table;
	
	@Autowired
	private EmailService email;
	

	@Override
	public boolean add(UserAddRequestDTO request) throws UserNotAddedException {
		try {
		User row = new User();
		row.setFirst_name(request.first_name);
		row.setLast_name(request.last_name);
		row.setEmail(request.email);
		row.setPassword(encoder.encode(request.password));
		row.setPhone(request.phone);
		row.setRole(request.role);
		user_table.save(row);
		return true;
		}
		catch(Exception e) {
			throw new UserNotAddedException();
		}
	}

	@Override
	public boolean delete(int id) throws UserNotDeletedException {
		try {
		user_table.deleteById(id);
		return true;
		}
		catch(Exception e) {
			throw new UserNotDeletedException();
		}
	}

	@Override
	public boolean update(User request) throws UserNotUpdatedException{
		try {
		user_table.save(request);
		return true;
		}
		catch(Exception e) {
			throw new UserNotUpdatedException();
		}
	}

	@Override
	public List<User> getAll() {
		return user_table.findAll();
	}

	@Override
	public UserDetailResponseDTO detail(int id) {
		UserDetailResponseDTO response = new UserDetailResponseDTO();
		User row = user_table.findById(id).get();
		response.first_name = row.getFirst_name();
		response.last_name = row.getLast_name();
		response.email = row.getEmail();
		response.phone = row.getPhone();
		response.role = row.getRole();
		response.id = row.getId();
		return response;
	}

	@Override
	public List<UserUnderTrainerResponseDTO> underTrainer(int id) {
		List<UserUnderTrainerResponseDTO> list = new ArrayList<UserUnderTrainerResponseDTO>();
		for (Payment p: payment_table.findAll()) {
			if (p.getCourse().getTrainer().getId() == id) {
				UserUnderTrainerResponseDTO user = new UserUnderTrainerResponseDTO();
				user.id = p.getMember().getId();
				user.first_name = p.getMember().getFirst_name();
				user.last_name = p.getMember().getLast_name();
				user.email = p.getMember().getEmail();
				user.phone = p.getMember().getPhone();
				list.add(user);
			}
		}
		return list;
	}

	@Override
	public List<UserUnderMemberResponseDTO> underMember(int id) {
		List<UserUnderMemberResponseDTO> list = new ArrayList<UserUnderMemberResponseDTO>();
		for (Payment p: payment_table.findAll()) {
			if(p.getMember().getId() == id) {
				UserUnderMemberResponseDTO user = new UserUnderMemberResponseDTO();
				user.id = p.getCourse().getTrainer().getId();
				user.first_name = p.getCourse().getTrainer().getFirst_name();
				user.last_name = p.getCourse().getTrainer().getLast_name();
				user.email = p.getCourse().getTrainer().getEmail();
				user.phone = p.getCourse().getTrainer().getPhone();
				list.add(user);
			}
		}
		return list;
	}

	@Override
	public List<UserUnderMemberResponseDTO> notUnderMember(int id) {
		List<Integer> list = new ArrayList<Integer>();
		List<UserUnderMemberResponseDTO> result_list = new ArrayList<UserUnderMemberResponseDTO>();
		for (Payment p: payment_table.findAll()) {
			if(p.getMember().getId() == id) {
				
				list.add(p.getCourse().getTrainer().getId());
			}
		}
		
		for(User u: user_table.findAll()) {
			if(u.getRole().equals("TRAINER") && !list.contains(u.getId())) {
				UserUnderMemberResponseDTO user = new UserUnderMemberResponseDTO();
				user.id = u.getId();
				user.first_name = u.getFirst_name();
				user.last_name = u.getLast_name();
				user.email = u.getEmail();
				user.phone = u.getPhone();
				result_list.add(user);
			}
		}
		return result_list;
		
	}

}
