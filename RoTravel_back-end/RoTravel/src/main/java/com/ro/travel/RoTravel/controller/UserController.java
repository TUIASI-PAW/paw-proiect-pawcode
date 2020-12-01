package com.ro.travel.RoTravel.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.ro.travel.RoTravel.service.Service;
import com.ro.travel.RoTravel.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/utilizatori")
public class UserController {
    private List<User> users = new ArrayList<User>();
    @Autowired
    private Service service;
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
    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin(origins="http://localhost:4200")
    public List<User> saveUser(@RequestBody User emp)  throws Exception {
        Long nextId = 0L;
        String tempEmail=emp.getEmail();
        if(tempEmail!=null && !"".equals(tempEmail)){
            User userobj= service.findUserByEmail(tempEmail);
            if(userobj!=null){
                throw new Exception("Utilizatorul cu email-ul "+tempEmail+" este deja inregistrat!");
            }
        }
        if (this.users.size() != 0) {
            User lastEmp = this.users.stream().skip(this.users.size() - 1).findFirst().orElse(null);
            nextId = lastEmp.getId() + 1;
        }
        emp.setId(nextId);


        this.users.add(emp);
        service.saveUser(emp);
        return this.users;
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
    public User loginUser(@RequestBody User user){
        String tempEmail=user.getEmail();
        String tempPass=user.getPassword();
        User userObj=null;
        if(tempEmail!=null && tempPass!=null){
           userObj= service.findUserByEmailAndPassword(tempEmail,tempPass);

        }
        return userObj;
    }
}