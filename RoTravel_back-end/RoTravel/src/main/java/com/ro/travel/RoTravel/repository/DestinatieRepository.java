package com.ro.travel.RoTravel.repository;

import com.ro.travel.RoTravel.model.Destinatie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DestinatieRepository extends MongoRepository<Destinatie, String> {
    Destinatie findByLocatie(String locatie);
}
