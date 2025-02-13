package com.admin.demo.controller;

import com.admin.demo.model.BloodDriveCamp;
import com.admin.demo.model.Donors;
import com.admin.demo.service.BloodDriveCampService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BloodDriveCampController {

    @Autowired
    BloodDriveCampService driveservice;

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/campdrive")
    public List<BloodDriveCamp> getAllDrives(){
        return  driveservice.getallDrive();
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/campdrive/{myId}")
    public BloodDriveCamp getOneDrive(@PathVariable long myId){
        return  driveservice.getOneDriveDetail(myId);
    }


    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PostMapping("/campdrive")
    public  void addDrive(@RequestBody BloodDriveCamp campdetail){
        System.out.println(campdetail);
        driveservice.addDrive(campdetail);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PutMapping("/campdrive")
    public void updateDonor(@RequestBody BloodDriveCamp campdetails){
        driveservice.updateDrive(campdetails);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @DeleteMapping("/campdrive/{myId}")
    public void deleteOneDrive(@PathVariable  long myId){
        driveservice.deleteOneDrive(myId);
    }


}
