package com.lumos.pizzastore.order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    //Save an order
    public Order save(Order order){

        orderRepository.save(order);
        return order;
    }

    //Get all orders
    public List<Order> getAll(){
        return orderRepository.findAll();
    }

    //delete an order
    public void deleteOrder(Integer id){
        orderRepository.deleteById(id);
    }
}
