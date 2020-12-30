package com.ro.travel.RoTravel.payload.request;

public class BookingRequest {
    public String nume;
    public String pret;
    public String imagine;
    public String email;
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
