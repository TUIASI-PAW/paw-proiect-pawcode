package com.ro.travel.RoTravel.repository;

import com.ro.travel.RoTravel.model.Destinatie;
import com.ro.travel.RoTravel.model.Locatie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LocatieRepository extends MongoRepository<Locatie, String> {
    List<Locatie> findAllByLocatie(String locatie);
    Locatie findByNumeOferta(String numeOferta);
}
