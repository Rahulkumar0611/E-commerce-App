package org.jsp.ecommerceapp.service;

import org.jsp.ecommerceapp.dao.AddressDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Address;
import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class AddressService {
	 @Autowired
	 private AddressDao addressDao;
	 
	 
	 public ResponseEntity<ResponseStructure<Address>> saveAddress(Address address) {
	        ResponseStructure<Address> structure = new ResponseStructure<>();
	        structure.setBody(addressDao.saveAddress(address));
	        structure.setMessage("Addresss saved");
	        structure.setStatusCode(HttpStatus.CREATED.value());
	        return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.CREATED);
	    }
}
