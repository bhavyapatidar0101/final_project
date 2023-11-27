package com.sportsclub.backend.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


/*Creating an entity for user. It contains, id, first name, last name, email, phone, password, role (ADMIN , TRAINER, MEMBER)
 * It is the data type for storing an instance (row) for user table.
 * Spring boot automatically will create a table in database called user by referencing column definitions from the entity.
 */




@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(nullable=false)
	private String first_name;
	
	@Column(nullable=false)
	private String last_name;
	
	@Column(unique=true,name="email")
	private String email;
	
	@Column(unique=true)
	private String phone;
	
	@Column(nullable=false)
	private String role;
	
	@Column(nullable=false)
	private String password;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User() {
	}

	public User(int id, String first_name, String last_name, String email, String phone, String role, String password) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.phone = phone;
		this.role = role;
		this.password = password;
	}
	
	
}
