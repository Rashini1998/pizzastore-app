const url = 'http://localhost:8080/order';

fetch(url)
    .then(response => response.json())
    .then((orders) => {
        let placeholder = document.querySelector("#order-list");
        let out = "";
        console.log(orders);
        for (let order of orders) {
            console.log(order.quantity);
            out += `
     <div id="order-list">
           <tr class="order-data">
                <td>${order.orderId}</td>
                <td>
                    ${order.pizzaId}
                </td>
                <td>
                    ${order.quantity}
                </td>
                <td>
                    ${order.price}
                </td>
            </tr>
   </div>
            `
            placeholder.innerHTML = out;
        }
    })