package org.jsp.ecommerceapp.controller;

import org.jsp.ecommerceapp.service.UserOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/UserOrder")
@CrossOrigin
public class UserOrderController {
	
	@Autowired
	private UserOrderService userOrderService;

}
