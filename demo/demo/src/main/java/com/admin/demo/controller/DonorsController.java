package com.admin.demo.controller;

import com.admin.demo.model.BloodStocks;
import com.admin.demo.model.Donors;
import com.admin.demo.repo.BloodStocksRepository;
import com.admin.demo.service.DonorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DonorsController {

    @Autowired
    DonorsService service;

    @Autowired
    BloodStocksRepository bloodstockrepo;

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

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/bloodstocks")
    public ResponseEntity<List<BloodStocks>> getBloodStocks(){
        return ResponseEntity.ok(service.getAllBloodStock());
    }

@CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
@GetMapping("/stock/{bloodType}")
public ResponseEntity<Integer> getBloodStockByType(@PathVariable String bloodType) {
    Integer quantity = service.getBloodStockByType(bloodType);
    return (quantity != null) ? ResponseEntity.ok(quantity) : ResponseEntity.notFound().build();
}

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin

    @PutMapping("/bloodstocks/{bloodType}")
    public ResponseEntity<BloodStocks> updateBloodStockByType(@PathVariable String bloodType, @RequestBody BloodStocks updatedStock) {
        BloodStocks existingStock = service.findBloodStockByType(bloodType);

        if (existingStock != null) {
            existingStock.setQuantity(updatedStock.getQuantity()); // Update the quantity
            bloodstockrepo.save(existingStock); // Save updated stock
            return ResponseEntity.ok(existingStock);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    


}
