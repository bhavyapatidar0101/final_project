package com.sportsclub.backend.service;
import java.util.List;
import com.sportsclub.backend.dto.*;
import com.sportsclub.backend.model.*;
public interface EquipmentService {

	List<Equipment> getAll();
	boolean add(EquipmentAddRequestDTO request);
	boolean delete(int id);
	boolean update(EquipmentUpdateRequestDTO request);
	List<Equipment> getPurchased(int id);
	List<Equipment> getNotPurchased(int id);
	List<Equipment> getAssigned(int id);
}
