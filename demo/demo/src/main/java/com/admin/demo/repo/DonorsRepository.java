package com.admin.demo.repo;

import com.admin.demo.model.Donors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonorsRepository extends JpaRepository<Donors,Long> {
}
