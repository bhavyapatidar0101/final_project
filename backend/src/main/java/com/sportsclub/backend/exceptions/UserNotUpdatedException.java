package com.sportsclub.backend.exceptions;

public class UserNotUpdatedException extends Exception{
		public UserNotUpdatedException() {
			super("User details were not updated");
		}
}
