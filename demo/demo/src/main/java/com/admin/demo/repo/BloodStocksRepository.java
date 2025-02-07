package com.admin.demo.repo;

import com.admin.demo.model.BloodStocks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodStocksRepository extends JpaRepository<BloodStocks,Long> {
    BloodStocks findByBloodType(String bloodType);
}
