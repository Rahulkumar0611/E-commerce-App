package org.jsp.ecommerceapp.dto;

import org.jsp.ecommerceapp.model.User;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	private String message;
    private int statusCode;
    private T body;
	
		
		
	}

