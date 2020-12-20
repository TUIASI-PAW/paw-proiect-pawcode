package com.ro.travel.RoTravel.service;

import com.ro.travel.RoTravel.model.Locatie;
import com.ro.travel.RoTravel.repository.*;
import com.ro.travel.RoTravel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


@org.springframework.stereotype.Service
public class Service implements UserDetailsService {

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

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);

        return UserDetailsImpl.build(user);
    }
    public User updateUser(User user){
        userRepo.delete(user);
        return userRepo.insert(user);}

}
