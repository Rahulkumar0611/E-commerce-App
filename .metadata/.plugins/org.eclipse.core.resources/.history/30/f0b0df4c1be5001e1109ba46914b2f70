package org.jsp.ecommerceapp.controller;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Address;
import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {
	@Autowired
	private AddressService addressService;

	
	@PostMapping
    public ResponseEntity<ResponseStructure<Address>> saveMerchant(@RequestBody Address address,HttpServletRequest request) {
        return addressService.saveAddress(address);
    }
}
