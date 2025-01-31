package com.admin.demo.controller;

import com.admin.demo.model.Donors;
import com.admin.demo.model.Patients;
import com.admin.demo.service.DonorsService;
import com.admin.demo.service.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PatientController {
    @Autowired
    PatientsService service;

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/patients")
    public List<Patients> getAllPatients(){
        return  service.getallPatients();
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/patients/{myId}")
    public Patients getOneDonor(@PathVariable long myId){
        return  service.getOnePatient(myId);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PostMapping("/patients")
    public  void addDonor(@RequestBody Patients patient){
        System.out.println(patient);
        service.addPatient(patient);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PutMapping("/patients")
    public void updateDonor(@RequestBody Patients patient){
        service.updatePatient(patient);
    }


    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @DeleteMapping("/patients/{myId}")
    public void deleteOneDonor(@PathVariable  long myId){
        service.deleteOnePatient(myId);
    }

}
