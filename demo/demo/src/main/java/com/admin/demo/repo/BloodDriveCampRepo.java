package com.admin.demo.repo;

import com.admin.demo.model.BloodDriveCamp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodDriveCampRepo extends JpaRepository<BloodDriveCamp,Long> {
}
