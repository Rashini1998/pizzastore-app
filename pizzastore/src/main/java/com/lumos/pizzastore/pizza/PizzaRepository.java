package com.lumos.pizzastore.pizza;

import org.springframework.data.jpa.repository.JpaRepository;



public interface PizzaRepository extends JpaRepository<Pizza, Integer> {
}