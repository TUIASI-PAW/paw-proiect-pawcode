package com.ro.travel.RoTravel.service;

import com.ro.travel.RoTravel.repository.*;
import com.ro.travel.RoTravel.model.User;
import org.springframework.beans.factory.annotation.Autowired;


@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private UserRepository userRepo;

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }
    public User findUserByEmailAndPassword(String email,String password) {
        return userRepo.findByEmailAndPassword(email,password);
    }
}
