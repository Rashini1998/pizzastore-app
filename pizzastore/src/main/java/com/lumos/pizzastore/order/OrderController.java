package com.lumos.pizzastore.order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/order")
    public Order add(@RequestBody Order order){
        return orderService.save(order);
    }

    @GetMapping("/order")
    public List<Order> listOrders(Model model) {
        return orderRepository.findAll();
    }


    @DeleteMapping("/order/{id}")
    public void delete(@PathVariable Integer id){orderService.deleteOrder(id);
    }
}
