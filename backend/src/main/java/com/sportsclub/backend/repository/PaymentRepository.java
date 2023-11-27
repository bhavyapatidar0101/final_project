package com.sportsclub.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sportsclub.backend.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
