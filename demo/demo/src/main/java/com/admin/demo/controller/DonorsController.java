package com.admin.demo.controller;

import com.admin.demo.model.Donors;
import com.admin.demo.service.DonorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DonorsController {

    @Autowired
    DonorsService service;

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/donors")
    public List<Donors> getAllDonors(){
        return  service.getallDonors();
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/donors/{myId}")
    public Donors getOneDonor(@PathVariable  long myId){
        return  service.getOneDonors(myId);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PostMapping("/donors")
    public  void addDonor(@RequestBody Donors donor){
        System.out.println(donor);
        service.addDonor(donor);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PutMapping("/donors")
    public void updateDonor(@RequestBody Donors donor){
        service.updateDonor(donor);
    }


    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @DeleteMapping("/donors/{myId}")
    public void deleteOneDonor(@PathVariable  long myId){
          service.deleteOneDonor(myId);
    }



}
