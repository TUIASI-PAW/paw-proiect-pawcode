package com.ro.travel.RoTravel.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "locatii")
public class Locatie {
    private String locatie;
    private String numeOferta;
    private String pret;
    private String imagine;
    private String descriere;

    public Locatie(){}
    public Locatie(String locatie, String numeOferta, String pret, String imagine, String descriere)
    {
        this.locatie = locatie;
        this.numeOferta = numeOferta;
        this.pret = pret;
        this.imagine = imagine;
        this.descriere = descriere;
    }
    //Getter
    public String getLocatie()
    {
        return this.locatie;
    }
    public String getNumeOferta() {
        return this.numeOferta;
    }

    public String getPret() {
        return this.pret;
    }

    public String getImagine() {
        return this.imagine;
    }

    public String getDescriere() {
        return this.descriere;
    }
    //Setter
    public void setLocatie(String locatie) {
        this.locatie = locatie;
    }
    public void setNumeOferta(String numeOferta) {
        this.numeOferta = numeOferta;
    }
    public void setImagine(String imagine) {
        this.imagine = imagine;
    }
    public void setPret(String pret) {
        this.pret = pret;
    }
    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }
}
