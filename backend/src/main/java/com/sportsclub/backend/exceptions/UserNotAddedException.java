package com.sportsclub.backend.exceptions;

public class UserNotAddedException extends Exception {
		public UserNotAddedException() {
			super("User was not added");
		}
}
