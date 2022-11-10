package com.lumos.pizzastore.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        userRepository.save(user);
        return user;
    }


    public List<User> getAll() {
        return userRepository.findAll();
    }


    public User getUser(Integer id) {
        return userRepository.findById(id).get();
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    public ResponseEntity<User> updateUser(Integer id, User user) throws Exception {
        User update = userRepository.findById(id).orElseThrow(()-> new Exception("Doctor not exists with this id: "+id));

        update.setUserId(user.getUserId());
        update.setEmail(user.getEmail());
        update.setContactNumber(user.getContactNumber());
        update.setFirstName(user.getFirstName());
        update.setLastName(user.getLastName());


        userRepository.save(update);
        return ResponseEntity.ok(update);
    }
}