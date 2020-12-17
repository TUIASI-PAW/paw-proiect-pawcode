package com.ro.travel.RoTravel.controller;

import com.ro.travel.RoTravel.model.Locatie;
import com.ro.travel.RoTravel.model.User;
import com.ro.travel.RoTravel.repository.LocatieRepository;
import com.ro.travel.RoTravel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping(value = "/api/locatie")
public class LocatieController {
    private List<Locatie> locatii = new ArrayList<Locatie>();

    @Autowired
    private LocatieRepository locatieRepository;

    public LocatieController()
    {}

    @RequestMapping(method = RequestMethod.GET)
    public List<Locatie> getLocatii() {
        locatii = locatieRepository.findAll();
        return this.locatii;
    }

    @RequestMapping(value = "/{_locatie}", method = RequestMethod.GET)
    public List<Locatie>  getLocatiiBylocatie(@PathVariable("_locatie") String _locatie) {
        return locatieRepository.findAllByLocatie(_locatie);
    }

    @RequestMapping(value = "/oferta/{numeOferta}", method = RequestMethod.GET)
    public Locatie getLocatieById(@PathVariable("numeOferta") String numeOferta) {
        return locatieRepository.findByNumeOferta(numeOferta);
    }

    @RequestMapping(value = "/{_id}", method = RequestMethod.DELETE)
    public boolean deleteLocatie(@PathVariable("_id") String _id) {
        try {
            locatieRepository.deleteById(_id);
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}
