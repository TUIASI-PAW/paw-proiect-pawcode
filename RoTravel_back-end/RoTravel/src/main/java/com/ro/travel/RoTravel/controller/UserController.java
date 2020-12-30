package com.ro.travel.RoTravel.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.ro.travel.RoTravel.model.Rezervare;
import com.ro.travel.RoTravel.payload.request.LoginRequest;
import com.ro.travel.RoTravel.payload.request.BookingRequest;
import com.ro.travel.RoTravel.payload.request.SignUpRequest;
import com.ro.travel.RoTravel.payload.response.JwtResponse;
import com.ro.travel.RoTravel.payload.response.MessageResponse;
import com.ro.travel.RoTravel.repository.UserRepository;
import com.ro.travel.RoTravel.security.JwtUtils;
import com.ro.travel.RoTravel.service.Service;
import com.ro.travel.RoTravel.model.User;
import com.ro.travel.RoTravel.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins="*",maxAge=3600)
@RequestMapping(value = "/api/utilizatori")
public class UserController {

    private List<User> users = new ArrayList<User>();

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private Service service;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    UserController() {
    }

    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        users = userRepository.findAll();
        System.out.println(this.users);
        return this.users;
    }

    @RequestMapping(value = "/{_id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("_id") Long id) {
        return this.users.stream().filter(emp -> emp.getId() == id).findFirst().orElse(null);
    }


    @CrossOrigin(origins="http://localhost:4200")
    @PostMapping(value="/signup")
    public ResponseEntity<?> saveUser(@RequestBody SignUpRequest signUpRequest)  throws Exception {
        long nextId=0L;
        ArrayList<Rezervare> rezervari = new ArrayList<Rezervare>(Arrays.asList());
        users = userRepository.findAll();

       if(userRepository.findByEmail(signUpRequest.getEmail()) != null){
           return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already taken"));
       }

       System.out.println(this.users);

       if (this.users.size() != 0) {
           User lastEmp = this.users.get(this.users.size()-1);
           nextId = lastEmp.getId() + 1;
       }

       System.out.println(nextId);
       System.out.println(signUpRequest.getFirstName());
       System.out.println(signUpRequest.getTipCont());

       User newuser = new User(nextId, signUpRequest.getFirstName(), encoder.encode(signUpRequest.getPassword()), signUpRequest.getEmail(), signUpRequest.getLastName(), signUpRequest.getTelefon(), signUpRequest.getCnp(), signUpRequest.getTipCont(), rezervari);

       String role = signUpRequest.getTipCont();
       newuser.setTipCont(role);
       newuser.setRezervari(rezervari);
       System.out.println(newuser);

       this.users.add(newuser);
       service.saveUser(newuser);
       return ResponseEntity.ok(new MessageResponse("User is registered"));
    }

    /*
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public List<User> deleteUser(@PathVariable Long id) {
        for(Iterator<User> itr=this.users.iterator();itr.hasNext();)
        {
            User emp = itr.next();
            Long inId = emp.getId();
            if(inId == (id)){
                itr.remove();
            }
        }
        return this.users;
    } */

    @RequestMapping(value="/login",method = RequestMethod.POST)
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,userDetails.getId(),userDetails.getEmail(),userDetails.getTipCont()));
    }
    
    @PutMapping("/rezervare")
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<?> addBooking(@RequestBody BookingRequest bookingRequest)
    {
        System.out.println(bookingRequest.getPret());
        System.out.println(bookingRequest.getNume());
        System.out.println(bookingRequest.getEmail());
        User u = userRepository.findByEmail(bookingRequest.getEmail());

        Rezervare rezervare=new Rezervare(bookingRequest.getNume(),bookingRequest.getPret(), bookingRequest.getImagine(), bookingRequest.getEmail());
        ArrayList<Rezervare> temp=u.getRezervari();
        temp.add(rezervare);

        u.setRezervari(temp);
        this.service.updateUser(u);
        System.out.println(temp.size());
        return ResponseEntity.ok(new MessageResponse("Rezervarea a fost adaugata"));
    }

    @PutMapping("/delete")
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<?> deleteUser(@RequestBody User deleteRequest)
    {
        User u= userRepository.findByFirstNameAndLastNameAndEmailAndTipCont(deleteRequest.getFirstName(), deleteRequest.getLastName(), deleteRequest.getEmail(), deleteRequest.getTipCont());
        System.out.println(u);
        userRepository.delete(u);
        return ResponseEntity.ok(new MessageResponse("User sters!!!"));
    }

    @RequestMapping(value="/rezervari/{email}",method = RequestMethod.GET)
    @CrossOrigin(origins="http://localhost:4200")
    public ArrayList<Rezervare> getBooking(@PathVariable("email") String email){
        User u = userRepository.findByEmail(email);
        ArrayList<Rezervare> temp=u.getRezervari();
        return temp;
    }

}