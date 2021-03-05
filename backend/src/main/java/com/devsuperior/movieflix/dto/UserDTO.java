package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Role;
import com.devsuperior.movieflix.entities.User;

public class UserDTO implements Serializable{	
	private static final long serialVersionUID = 1L;
	
	private Long id;	
	@NotBlank(message = "Preencha o nome do usuário.")
	private String name;
	@Email(message = "Informe um e-mail válido.")
	private String email;
	private Set<Role> roles;
	
	public UserDTO() {
	}
	
	public UserDTO(Long id, String name, String email, Set<Role> roles) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.roles = roles;
	}
	
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		roles = entity.getRoles();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public Set<Role> getRoles() {
		return roles;
	}
}