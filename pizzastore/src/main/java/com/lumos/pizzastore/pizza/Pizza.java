package com.lumos.pizzastore.pizza;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="pizza")

public class Pizza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int pizzaId;
    private String pizzaName;
    private String pizzaType;
    private String size;
    private double price;

}