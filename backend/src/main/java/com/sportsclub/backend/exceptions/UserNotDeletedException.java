package com.sportsclub.backend.exceptions;

public class UserNotDeletedException extends Exception{
		public UserNotDeletedException() {
			super("User was not deleted");
		}
}
