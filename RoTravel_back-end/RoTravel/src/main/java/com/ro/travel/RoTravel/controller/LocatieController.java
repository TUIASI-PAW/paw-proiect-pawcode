package com.ro.travel.RoTravel.controller;

import com.ro.travel.RoTravel.model.Locatie;
import com.ro.travel.RoTravel.model.User;
import com.ro.travel.RoTravel.repository.LocatieRepository;
import com.ro.travel.RoTravel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@CrossOrigin(origins="*",maxAge=3600)
@RequestMapping(value = "/api/locatie")
public class LocatieController {

    @Autowired
    private LocatieRepository locatieRepository;

    public LocatieController()
    {}

}
