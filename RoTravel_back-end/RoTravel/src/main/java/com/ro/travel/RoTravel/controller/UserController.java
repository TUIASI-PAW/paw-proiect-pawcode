package com.ro.travel.RoTravel.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.ro.travel.RoTravel.model.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/utilizatori")
public class UserController {
    private List<User> users = new ArrayList<User>();
    UserController() {
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return this.users;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("id") Long id) {
        return this.users.stream().filter(emp -> emp.getId() == id).findFirst().orElse(null);
    }
    @RequestMapping(method = RequestMethod.POST)
    public List<User> saveUser(@RequestBody User emp) {
        Long nextId = 0L;
        if (this.users.size() != 0) {
            User lastEmp = this.users.stream().skip(this.users.size() - 1).findFirst().orElse(null);
            nextId = lastEmp.getId() + 1;
        }
        emp.setId(nextId);
        this.users.add(emp);
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
}