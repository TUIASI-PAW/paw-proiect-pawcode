package com.ro.travel.RoTravel.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import com.ro.travel.RoTravel.payload.request.LoginRequest;
import com.ro.travel.RoTravel.payload.request.SignUpRequest;
import com.ro.travel.RoTravel.payload.response.JwtResponse;
import com.ro.travel.RoTravel.payload.response.MessageResponse;
import com.ro.travel.RoTravel.repository.UserRepository;
import com.ro.travel.RoTravel.security.JwtUtils;
import com.ro.travel.RoTravel.service.Service;
import com.ro.travel.RoTravel.model.User;
import com.ro.travel.RoTravel.service.UserDetailsImpl;
import org.apache.coyote.Response;
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
    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return this.users;
    }
    @RequestMapping(value = "/{_id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("_id") Long id) {
        return this.users.stream().filter(emp -> emp.getId() == id).findFirst().orElse(null);
    }
    @RequestMapping(value="/signup",method = RequestMethod.POST)
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<?> saveUser(@RequestBody SignUpRequest signUpRequest)  throws Exception {
        long nextId=0L;
//        String tempEmail=emp.getEmail();
//        if(tempEmail!=null && !"".equals(tempEmail)){
//            User userobj= service.findUserByEmail(tempEmail);
//            if(userobj!=null){
//                throw new Exception("Utilizatorul cu email-ul "+tempEmail+" este deja inregistrat!");
//            }
//        }
//        if (this.users.size() != 0) {
//            User lastEmp = this.users.stream().skip(this.users.size() - 1).findFirst().orElse(null);
//            nextId = lastEmp.getId() + 1;
//        }
//        emp.setId(nextId);
//
//
//        this.users.add(emp);
//        service.saveUser(emp);
       // return this.users;
       if(userRepository.findByEmail(signUpRequest.getEmail()) != null){
           return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already taken"));
       }
       System.out.println(this.users);
       if (this.users.size() != 0) {
           User lastEmp = this.users.get(this.users.size()-1);
           nextId = lastEmp.getId() + 1;

       }
       System.out.println(nextId);
       signUpRequest.setId(nextId);
       User user = new User(signUpRequest.getId(), signUpRequest.getFirstName(), encoder.encode(signUpRequest.getPassword()), signUpRequest.getEmail(), signUpRequest.getLastName(), signUpRequest.getTelefon(), signUpRequest.getCnp(), signUpRequest.getTipCont());
       user.setId(nextId);
       String role = signUpRequest.getTipCont();
       user.setTipCont(role);
       this.users.add(user);
       service.saveUser(user);
       return ResponseEntity.ok(new MessageResponse("User is registered"));
    }
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
    }
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


}