package org.jsp.ecommerceapp.dao;

import org.jsp.ecommerceapp.repository.UserOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserOrderDao {
	@Autowired
	private UserOrderRepository userOrderRepository;

}
