package com.sportsclub.backend.exceptions;

public class PaymentNotDeletedException extends Exception {
	public PaymentNotDeletedException() {
		super("Payment details have not been deleted");
	}
}
