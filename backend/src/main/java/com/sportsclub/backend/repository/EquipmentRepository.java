package com.sportsclub.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sportsclub.backend.model.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment,Integer> {

}
