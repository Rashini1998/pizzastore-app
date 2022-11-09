package com.lumos.pizzastore.pizza;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/pizza")
public class PizzaController {
    @Autowired
    private PizzaService pizzaService;

    @PostMapping("/addpizza")
    public String add(@RequestBody Pizza pizza){
        pizzaService.save(pizza);
        return "success";
    }

    @GetMapping("/getpizza")
    public List<Pizza> getAllPizza(){
        return pizzaService.getAll();
    }

    @GetMapping("/getpizza/{id}")
    public Pizza getPizza(@PathVariable Integer id){
        return pizzaService.getPizza(id);
    }

    @DeleteMapping("/deletepizza/{id}")
    public void delete(@PathVariable Integer id){
        pizzaService.deletePizza(id);
    }

//    @PutMapping("/updatepizza/{id}")
//    public ResponseEntity<Pizza> updateUser(@PathVariable int id, @RequestBody Pizza doctorList){
//        return pizzaService.updatePizza(id);
//    }
}