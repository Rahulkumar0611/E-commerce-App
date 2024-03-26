package org.jsp.ecommerceapp.service;

import java.util.Optional;

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
	 
	 public ResponseEntity<ResponseStructure<Address>> updateAddress(Address address) {
			Optional<Address> recaddress = addressDao.findById(address.getId());
	        ResponseStructure<Address> structure = new ResponseStructure<>();
	        if (recaddress.isPresent()) {
	        	Address dbAddress = recaddress.get();
	        	 dbAddress.setBuildingname(address.getBuildingname());
	        	 dbAddress.setCity(address.getCity());
	        	 dbAddress.setCountry(address.getCountry());
	        	 dbAddress.setHousenumber(address.getHousenumber());
	        	 dbAddress.setPincode(address.getPincode());
	        	 dbAddress.setAddresstype(address.getAddresstype());
	        	 dbAddress.setState(address.getState());
	        	 dbAddress.setLandmark(address.getLandmark());
	        	 structure.setMessage("Merchant Updated");
				 structure.setBody(addressDao.saveAddress(address));
				 structure.setStatusCode(HttpStatus.ACCEPTED.value());
	        }
					return new ResponseEntity<ResponseStructure<Address>>(structure, HttpStatus.ACCEPTED);
	 }
	 
	 
}
