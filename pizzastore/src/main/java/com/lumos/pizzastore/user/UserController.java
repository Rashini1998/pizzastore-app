package com.lumos.pizzastore.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String add(@RequestBody User user){
        userService.save(user);
        return "success";
    }

    @GetMapping("/getUser")
    public List<User> getAllUser(){
        return userService.getAll();
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable Integer id){
        return userService.getUser(id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void delete(@PathVariable Integer id){
        userService.deleteUser(id);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateuser(@PathVariable int id, @RequestBody User user) throws Exception {
        return userService.updateUser(id,user);
    }
}