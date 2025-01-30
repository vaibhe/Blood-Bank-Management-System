package com.admin.demo.service;

import com.admin.demo.model.Donors;
import com.admin.demo.repo.DonorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class DonorsService {

    @Autowired
    DonorsRepository repo;

    public List<Donors> getallDonors(){
         return repo.findAll();
    }

    public Donors getOneDonors(long myId){
        return  repo.findById(myId).orElse(new Donors());
    }

    public void addDonor(Donors donor){
        repo.save(donor);
    }

    public  void updateDonor(Donors donor){
        repo.save(donor);
    }


    public void deleteOneDonor(long myId){
          repo.deleteById(myId);
    }

}
