package com.ro.travel.RoTravel.repository;

import com.ro.travel.RoTravel.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String role);
}
