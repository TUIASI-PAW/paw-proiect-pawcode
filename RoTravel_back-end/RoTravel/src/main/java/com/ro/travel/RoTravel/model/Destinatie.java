package com.ro.travel.RoTravel.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("destinatii")
public class Destinatie {
    private String locatie;
    private String proprietatiDisponibile;
    private String image;

    public Destinatie(){}

    public Destinatie( String locatie,String proprietatiDisponibile, String image)
    {
        this.locatie = locatie;
        this.image = image;
        this.proprietatiDisponibile =proprietatiDisponibile;
    }
    public String getLocatie()
    {
        return this.locatie;
    }
    public String getImage()
    {
        return this.image;
    }
    public String getProprietatiDisponibile()
    {
        return this.proprietatiDisponibile;
    }

    public void setLocatie(String locatie)
    {
        this.locatie = locatie;
    }
    public void setImage(String image)
    {
        this.image = image;
    }
    public void setProprietatiDisponibile(String proprietatiDisponibile)
    {
        this.proprietatiDisponibile =proprietatiDisponibile;
    }
    @Override
    public String toString()
    {
        return String.format("Destinatie[locatie=%s, proprietatiDisponibile=%s, imagine=%s]",locatie, proprietatiDisponibile, image);
    }
}
