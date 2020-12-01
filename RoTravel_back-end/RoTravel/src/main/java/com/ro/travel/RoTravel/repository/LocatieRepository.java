package com.ro.travel.RoTravel.repository;

import com.ro.travel.RoTravel.model.Locatie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LocatieRepository extends MongoRepository<Locatie, String> {
    Locatie findByNumeOferta(String numeOferta);
}
