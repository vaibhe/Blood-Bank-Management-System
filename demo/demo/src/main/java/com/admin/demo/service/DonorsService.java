package com.admin.demo.service;

import com.admin.demo.exception.ResourceNotFoundException;
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


// get all donors
    public List<Donors> getallDonors(){
         return repo.findAll();
    }

    // get one donors
    public Donors getOneDonors(long myId){
        return  repo.findById(myId).orElseThrow(() ->
                new ResourceNotFoundException("Donor with ID " + myId + "not found"));
    }


    // insert
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

    // put method / update
    public  void updateDonor(Donors donor){
        repo.save(donor);
    }


    public void deleteOneDonor(long myId){
        if (!repo.existsById(myId)) {
            throw new ResourceNotFoundException("Donor with ID " + myId + " not found");
        }
        repo.deleteById(myId);

    }



    //=========================================

    // to get all stocks
    public List<BloodStocks> getAllBloodStock() {
        return  bloodstockrepo.findAll();
    }

    // to get the quantity of the stock of specific type
    public Integer getBloodStockByType(String bloodType) {

            return Math.toIntExact(bloodstockrepo.findById(bloodType)
                    .map(BloodStocks::getQuantity)
                    .orElse(null));

    }


    // update the stock method
    public BloodStocks findBloodStockByType(String bloodType) {
        return bloodstockrepo.findByBloodType(bloodType);
    }




}
