package com.ro.travel.RoTravel.payload.request;

public class SignUpRequest {
    private String firstName;
    private String lastName;
    private long id;
    private String	password;
    private String	email;
    private String telefon;
    private String cnp;
    private String tipCont;


    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getCnp() {
        return cnp;
    }
    public String getTelefon() {
        return telefon;
    }
    public String getTipCont() {
        return tipCont;
    }
    public String getPassword() {
        return password;
    }
    public String getEmail() {
        return email;
    }
    public long getId(){return id;}

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setCnp(String cnp) {
        this.cnp = cnp;
    }
    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
    public void setTipCont(String tipCont) {
        this.tipCont = tipCont;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setId(long id){this.id=id;}
}
