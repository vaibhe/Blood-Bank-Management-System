package com.admin.demo.service;

import com.admin.demo.model.BloodStocks;
import com.admin.demo.model.Donors;
import com.admin.demo.repo.BloodStocksRepository;
import com.admin.demo.repo.DonorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class DonorsService {

    @Autowired
    DonorsRepository repo;

    @Autowired
    BloodStocksRepository bloodstockrepo;

    public List<Donors> getallDonors(){
         return repo.findAll();
    }

    public Donors getOneDonors(long myId){
        return  repo.findById(myId).orElse(new Donors());
    }


    public void addDonor(Donors donor){
        repo.save(donor);

        // Check if blood stock exists for the given blood type
        BloodStocks stock = bloodstockrepo.findByBloodType(donor.getBloodGroup());

        if (stock == null) {
            // If no stock exists, create a new entry
            stock = new BloodStocks(donor.getBloodGroup() , donor.getQuantity() , donor.getRegistration_Date());
        } else {
                // If stock exists, increment the quantity
                stock.setQuantity(stock.getQuantity() + donor.getQuantity());
        }
        // Save the updated stock
         bloodstockrepo.save(stock);

    }

    public  void updateDonor(Donors donor){
        repo.save(donor);
    }


    public void deleteOneDonor(long myId){
          repo.deleteById(myId);
    }

}
