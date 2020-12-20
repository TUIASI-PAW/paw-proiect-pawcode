package com.ro.travel.RoTravel.service;

import com.ro.travel.RoTravel.model.Rezervare;
import com.ro.travel.RoTravel.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class UserDetailsImpl implements UserDetails {

    private static final long serialVersionUID = 1L;
    private long id;
    private String firstName;
    private String lastName;

    private String	password;
    private String	email;
    private String telefon;
    private String cnp;

    private String tipCont;
    private ArrayList<Rezervare> rezervari;
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(long id,String firstName,String password, String email, String lastName, String telefon, String cnp, String tipCont, ArrayList<Rezervare> rezervari,Collection<? extends GrantedAuthority> authorities){
        this.firstName = firstName;
        this.lastName=lastName;

        this.password=password;
        this.email=email;
        this.telefon=telefon;
        this.cnp=cnp;

        this.tipCont=tipCont;
        this.id = id;
        this.rezervari = rezervari;
       this.authorities =authorities;

    }

    public static UserDetailsImpl build(User user)
    {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user.getTipCont());
        authorities.add(authority);

        return new UserDetailsImpl(
                user.getId(),
                user.getFirstName(),
                user.getPassword(),
                user.getEmail(),
                user.getLastName(),
                user.getTelefon(),
                user.getCnp(),
                user.getTipCont(),
                user.getRezervari(),
                authorities);
    }

    public long getId() {
        return id;
    }

    public String getCnp() {
        return cnp;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public ArrayList<Rezervare> getRezervari() {return rezervari;}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public String getTelefon() {
        return telefon;
    }

    public String getTipCont() {
        return tipCont;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDetailsImpl that = (UserDetailsImpl) o;
        return id == that.id &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(password, that.password) &&
                Objects.equals(email, that.email) &&
                Objects.equals(telefon, that.telefon) &&
                Objects.equals(cnp, that.cnp) &&
                Objects.equals(tipCont, that.tipCont) &&
                Objects.equals(rezervari,that.rezervari) &&
                Objects.equals(authorities, that.authorities);
    }
}
