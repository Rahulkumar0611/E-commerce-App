package org.jsp.ecommerceapp.controller;

import java.util.List;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Address;

import org.jsp.ecommerceapp.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {
	@Autowired
	private AddressService addressService;

	@PostMapping("/{user_id}")
	public ResponseEntity<ResponseStructure<Address>> saveAddress(@RequestBody Address add, @PathVariable int user_id) {
		return addressService.saveAddress(add, user_id);
	}
	
	
	@PutMapping
	public ResponseEntity<ResponseStructure<Address>> updateAddress(@RequestBody Address add){
		return  addressService.updateAddress(add);
	}
	
	@GetMapping("/{user_id}")
	public ResponseEntity<ResponseStructure<List<Address>>> findByUserId(@PathVariable int user_id) {
		return addressService.findAddressByUserId(user_id);
	}
	
	
}
