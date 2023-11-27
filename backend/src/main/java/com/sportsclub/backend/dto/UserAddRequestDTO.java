package com.sportsclub.backend.dto;

public class UserAddRequestDTO {
	public String first_name;
	public String last_name;
	public String email;
	public String phone;
	public String password;
	public String role;
	@Override
	public String toString() {
		return "UserAddRequestDTO [first_name=" + first_name + ", last_name=" + last_name + ", email=" + email
				+ ", phone=" + phone + ", password=" + password + ", role=" + role + "]";
	}
}
