package org.jsp.ecommerceapp.controller;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/merchant")
@CrossOrigin
public class MerchantController {
	     @Autowired
	    private MerchantService merchantService;

	    @PostMapping
	    public ResponseEntity<ResponseStructure<Merchant>> saveMerchant(@RequestBody Merchant merchant,HttpServletRequest request) {
	        return merchantService.saveMerchant(merchant,request);
	    }

	    @PutMapping
	    public ResponseEntity<ResponseStructure<Merchant>> updateMerchant(@RequestBody Merchant merchant) {
	        return merchantService.updateMerchant(merchant);
	    }
	    @PostMapping("/verify")
	    public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant(@RequestParam long phone,@RequestParam String password){
			return merchantService.verifyMerchant(phone, password);
	    	
	    }
	    @GetMapping("/activate")
	    public  ResponseEntity<ResponseStructure<String>> activate(@RequestParam  String token){
	 	   	return merchantService.activate(token);
	 	   }
	    
	    
	}
