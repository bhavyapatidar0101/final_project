package com.sportsclub.backend.exceptions;

public class PaymentNotUpdatedException extends Exception{
	public PaymentNotUpdatedException(){
		super("Payment details have not updated");
	}
}
