package com.admin.demo.service;


import com.admin.demo.exception.ResourceNotFoundException;
import com.admin.demo.model.BloodDriveCamp;
import com.admin.demo.model.Donors;
import com.admin.demo.repo.BloodDriveCampRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodDriveCampService {

    @Autowired
    BloodDriveCampRepo blooddriverepo;
    // get all drivedetails
    public List<BloodDriveCamp> getallDrive(){
        return   blooddriverepo.findAll();
    }

    // get one driveDetails
    public BloodDriveCamp getOneDriveDetail(long myId){
        return  blooddriverepo.findById(myId).orElseThrow(() ->
                new ResourceNotFoundException("CampDrive with ID " + myId + "not found"));
    }

    //Add a camp drive
    public void addDrive(BloodDriveCamp campdetail) {
        blooddriverepo.save(campdetail);
    }

    // put method / update
    public  void updateDrive(BloodDriveCamp campdetail){
        blooddriverepo.save(campdetail);
    }


    // delete method
    public void deleteOneDrive(long myId){
        if (!blooddriverepo.existsById(myId)) {
            throw new ResourceNotFoundException("CampDrive with ID " + myId + " not found");
        }
        blooddriverepo.deleteById(myId);

    }



}
