package com.sportsclub.backend.exceptions;

public class PaymentNotAddedException extends Exception {
	public PaymentNotAddedException() {
		super("Payment details have not been added");
	}
}
