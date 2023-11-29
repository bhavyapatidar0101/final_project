package com.sportsclub.backend.service;

public interface EmailService {
	public void send(String to,String subject,String text);
}
