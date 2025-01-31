package com.example.backend;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class Controller {

    private List<Order> orders = new ArrayList<>();

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return orders; 
    }

    @PostMapping("/orders")
    public Order saveOrder(@RequestBody Order order) {
        orders.add(order); 
        return order; 
    }
}

class Order {
    private String name;
    private String email;
    private String book;
    private int quantity;

    // Getters and Setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getBook() {
        return book;
    }
    public void setBook(String book) {
        this.book = book;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}


