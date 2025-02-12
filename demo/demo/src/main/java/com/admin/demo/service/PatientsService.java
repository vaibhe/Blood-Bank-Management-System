package com.admin.demo.service;

import com.admin.demo.exception.ResourceNotFoundException;
import com.admin.demo.model.Donors;
import com.admin.demo.model.Patients;
import com.admin.demo.repo.DonorsRepository;
import com.admin.demo.repo.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientsService {

    @Autowired
    PatientsRepository repo;


    public List<Patients> getallPatients(){
        return repo.findAll();
    }

    public Patients getOnePatient(long myId){
        return  repo.findById(myId).orElseThrow(() ->
                new ResourceNotFoundException("Patient with ID " + myId + " not found"));
    }

    public void addPatient(Patients patient){
        repo.save(patient);
    }

    public  void updatePatient(Patients patient){
        repo.save(patient);
    }


    public void deleteOnePatient(long myId){
        if (!repo.existsById(myId)) {
            throw new ResourceNotFoundException("Patient with ID " + myId + " not found");
        }
        repo.deleteById(myId);
    }
}
