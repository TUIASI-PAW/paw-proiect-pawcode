package com.ro.travel.RoTravel.model;

public class Rezervare {
    public String nume;
    public String pret;
    public String imagine;
    public String email;

    public Rezervare(){}
    public Rezervare(String nume, String pret, String imagine, String email)
    {
        this.nume = nume;
        this.pret = pret;
        this.imagine = imagine;
        this.email = email;
    }
    public void setNume(String nume) {
        this.nume = nume;
    }
    public void setPret(String pret) {
        this.pret = pret;
    }
    public void setImagine(String imagine) {
        this.imagine = imagine;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNume() {
        return nume;
    }

    public String getPret() {
        return pret;
    }

    public String getImagine() {
        return imagine;
    }

}
