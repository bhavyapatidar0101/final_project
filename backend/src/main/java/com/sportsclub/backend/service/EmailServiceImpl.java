package com.sportsclub.backend.service;
import java.io.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;
 
// Annotation
@Service
// Class
// Implementing EmailService interface
@EnableAsync
public class EmailServiceImpl implements EmailService {
 
    @Autowired private JavaMailSender javaMailSender;
 
    @Value("${spring.mail.username}") private String sender;
 
    // Method 1
    // To send a simple email
    @Async
    public void send(String to,String subject, String text)
    {
 
        // Try block to check for exceptions
        try {
 
            // Creating a simple mail message
            SimpleMailMessage mailMessage
                = new SimpleMailMessage();
 
            // Setting up necessary details
            mailMessage.setFrom("shiwanitiwari2830@gmail.com");
            mailMessage.setTo(to);
            mailMessage.setText(text);
            mailMessage.setSubject(subject);
 
            // Sending the mail
            javaMailSender.send(mailMessage);
            System.out.println("Mail Sent Successfully...");
        }
 
        // Catch block to handle the exceptions
        catch (Exception e) {
        	System.out.println("Error while Sending Mail");
        }
    }
 
    
    }
