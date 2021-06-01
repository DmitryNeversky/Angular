package org.example.Angular.repositories;

import org.example.Angular.entities.Meta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetaRepository extends JpaRepository<Meta, Integer> {
    Meta findById(int id);
}
