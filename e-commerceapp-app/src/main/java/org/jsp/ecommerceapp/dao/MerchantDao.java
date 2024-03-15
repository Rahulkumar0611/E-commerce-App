package org.jsp.ecommerceapp.dao;

import java.util.Optional;

import org.jsp.ecommerceapp.model.Merchant;
import org.jsp.ecommerceapp.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class MerchantDao {
	 @Autowired
	    private MerchantRepository merchantRepository;

	    public Merchant saveMerchant(Merchant merchant) {
	        return merchantRepository.save(merchant);
	    }
	    public Merchant updateMerchant(Merchant merchant){
	        return merchantRepository.save(merchant);
	    }
	    public Optional<Merchant> verify(long phone, String password) {
			return merchantRepository.verify(phone, password);
		}
	    public Optional<Merchant> findByToken(String token){
	    	return merchantRepository.findByToken(token);
	    }

		public Optional<Merchant> findById(int id) {
			return merchantRepository.findById(id);
		}
}
