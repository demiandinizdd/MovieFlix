package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.User;

public class UserDTO implements Serializable{	
	private static final long serialVersionUID = 1L;
	
	private Long id;	
	@NotBlank(message = "Preencha o nome do usuário.")
	private String name;
	@Email(message = "Informe um e-mail válido.")
	private String email;
	
	public UserDTO() {
	}
	
	public UserDTO(Long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
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
}