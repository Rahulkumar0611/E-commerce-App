package org.jsp.ecommerceapp.service;

import org.jsp.ecommerceapp.dao.UserOrderDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserOrderService {
    @Autowired
	private UserOrderDao userOrderDao;
	
}
