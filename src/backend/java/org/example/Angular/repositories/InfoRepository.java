package org.example.Angular.repositories;

import org.example.Angular.entities.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoRepository extends JpaRepository<Info, Integer> {
    Info findById(int id);
}
