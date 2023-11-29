package com.sportsclub.backend.service;
import java.util.List;
import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.exceptions.EquipmentNotAddedException;
import com.sportsclub.backend.exceptions.EquipmentNotDeletedException;
import com.sportsclub.backend.exceptions.EquipmentNotUpdatedException;
import com.sportsclub.backend.model.*;
public interface EquipmentService {

	List<Equipment> getAll();
	boolean add(EquipmentAddRequestDTO request) throws EquipmentNotAddedException;
	boolean delete(int id) throws EquipmentNotDeletedException;
	boolean update(EquipmentUpdateRequestDTO request) throws EquipmentNotUpdatedException;
	List<Equipment> getPurchased(int id);
	List<Equipment> getNotPurchased(int id);
	List<Equipment> getAssigned(int id);
}
