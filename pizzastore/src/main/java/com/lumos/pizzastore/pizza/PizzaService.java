package com.lumos.pizzastore.pizza;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PizzaService {


    @Autowired
    private PizzaRepository pizzaRepository;

    public Pizza save(Pizza pizza) {
        pizzaRepository.save(pizza);
        return pizza;
    }


    public List<Pizza> getAll() {
        return pizzaRepository.findAll();
    }


    public Pizza getPizza(Integer id) {
        return pizzaRepository.findById(id).get();
    }

    public void deletePizza(Integer id) {
        pizzaRepository.deleteById(id);
    }
}