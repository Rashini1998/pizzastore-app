package com.lumos.pizzastore.user;

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
@Table(name="user")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;


}