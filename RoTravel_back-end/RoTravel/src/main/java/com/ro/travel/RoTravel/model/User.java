package com.ro.travel.RoTravel.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.thymeleaf.standard.inline.StandardHTMLInliner;

@Document(collection = "users")
public class User {
    @Id
    private long id;
    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String firstName;
    private String lastName;

    private String	password;
    private String	email;
    private String telefon;
    private String cnp;

    private String tipCont;

    public User(long id, String firstName,String password, String email, String lastName, String telefon, String cnp, String tipCont) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.telefon = telefon;
        this.cnp = cnp;
        this.tipCont = tipCont;
        this.email = email;
    }
    public long getId() {
        return id;
    }
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

    public void setId(Long id) {
        this.id = id;
    }
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

    public Object[] toObjectArray() {
        return new Object[] { firstName,lastName, password, email };
    }

    @Override
    public String toString() {
        return String.format("User [id=%s, firstName=%s, lastName=%s, email=%s, cnp=%s, telefon=%s, tipCont=%s]", id, firstName, lastName, email, cnp, telefon, tipCont);
    }
}
