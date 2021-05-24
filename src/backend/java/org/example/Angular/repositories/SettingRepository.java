package org.example.Angular.repositories;

import org.example.Angular.entities.Setting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingRepository extends JpaRepository<Setting, String> {

}
