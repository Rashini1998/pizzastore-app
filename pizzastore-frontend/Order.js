function getOrders() {

    fetch('http://localhost:8080/order')
        .then(response => response.json())
        .then((orders) => {
            let placeholder = document.querySelector("#order-list");
            let out = "";
            console.log(orders);
            for (let order of orders) {
                console.log(order.quantity);
                out = `
     <div id="order-list">
           <tr >
                <td>${order.orderId}</td>
                <td>
                    ${order.pizzaId}
                </td>
                <td>
            ${order.orderDate}
        </td>
        <td>
            ${order.quantity}
        </td>
        <td>
            ${order.price}
        </td>
        <td>
            <button onclick="deleteorder(order.pizzaId)">Delete</button>
        </td>
            </tr>
   </div>
            `
                placeholder.innerHTML += out;
            }
        })
}
Window.onload = getOrders();

function getPizzaCustomer() {
    fetch("http://localhost:8080/pizza/getpizza", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((result) => {
            let placeholder = document.querySelector("#pizza-list");
            let out = "";

            for (let pizza of result) {
                console.log(pizza.pizzaName);

                out = `
         
         <div>
         <table class="table table-hover">
          
           <tr class="pizza-list"  style="margin-left: 50px">
                    <td>${pizza.pizzaType}</td>
                    <td>
                        ${pizza.size}
                    </td>
                    <td>
                        ${pizza.price}
                    </td>
                    <td>
                    <button onClick="selectPizza(${pizza.pizzaId})"><a href="addOrder.html" >Order</a></button>
                    </td>

                </tr>
       
          
       
          
         </table>
       </div>
               

     
                `;
                placeholder.innerHTML += out;
            }

            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
            }
        });
}

Window.onload = getPizzaCustomer();

function selectPizza(id) {
    localStorage.setItem("pizzaId", JSON.stringify(id));
    window.location = "/addOrder";

}

function addOrder() {

    if (localStorage.getItem("pizzaId") == null) {
        alert("Select Pizza First");
        window.location = "/home.html";
    }
    var id = JSON.parse(localStorage.getItem("pizzaId"));
    localStorage.clear();

    var orderDate = document.getElementById("orderDate").value;
    alert(pizzaType);
    var quantity = document.getElementById("quantity").value;
    alert(size);


    const order = {
        orderDate: orderDate,
        quantity: quantity
    };

    fetch("http://localhost:8080/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.text())
        .then((result) => {
            console.log(result);
            alert(result);
            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
                // window.location="/category"
            }
        });
    alert("hello");
}

