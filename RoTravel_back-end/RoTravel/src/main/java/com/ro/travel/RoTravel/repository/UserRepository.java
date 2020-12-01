package com.ro.travel.RoTravel.repository;

import java.util.List;

import com.ro.travel.RoTravel.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);
}