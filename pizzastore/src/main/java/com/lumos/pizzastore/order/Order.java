package com.lumos.pizzastore.order;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @Column(name = "pizza_id", nullable = false)
    private String pizzaId;

    @Column(name = "order_date")
    private LocalDate orderDate;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "price", nullable = false)
    private Float price;

    public Order(){
    }

    public Order(Integer orderId, String pizzaId, LocalDate orderDate, Integer quantity, Float price) {
        this.orderId = orderId;
        this.pizzaId = pizzaId;
        this.orderDate = orderDate;
        this.quantity = quantity;
        this.price = price;
        System.out.println(pizzaId);
    }

    //Getters and Setters
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getPizzaId() {
        return pizzaId;
    }

    public void setPizzaId(String pizzaId) {
        this.pizzaId = pizzaId;
    }


    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}