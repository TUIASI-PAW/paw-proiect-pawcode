package com.ro.travel.RoTravel.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("destinatii")
public class Destinatie {
    private String locatie;
    private int proprietatiDisponibile;
    private String image;

    public Destinatie(){}

    public Destinatie( String locatie,int proprietatiDisponibile, String image)
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
    public int getProprietatiDisponibile()
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
    public void setProprietatiDisponibile(int proprietatiDisponibile)
    {
        this.proprietatiDisponibile =proprietatiDisponibile;
    }
    @Override
    public String toString()
    {
        return String.format("Destinatie[lacatie=%s, proprietatiDisponibile=%s, imagine=%s]",locatie, proprietatiDisponibile, image);
    }
}
