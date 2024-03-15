package org.jsp.ecommerceapp.controller;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.model.User;
import org.jsp.ecommerceapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
	@Autowired
    private UserService userservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user) {
        return userservice.saveUser(user);
    }

    @PutMapping
    public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User user) {
        return userservice.updateUser(user);
}
    @PostMapping("/verify")
    public  ResponseEntity<ResponseStructure<User>> VerifyUser(@RequestParam long phone,String password){
    	return userservice.verifyUser(phone, password);
    }
    
    @PostMapping("/verifyemail")
	   public  ResponseEntity<ResponseStructure<User>> VerifyUser(@RequestParam  String email,String password){
	   	return userservice.verifyUser(email, password);
    
    }
    
}