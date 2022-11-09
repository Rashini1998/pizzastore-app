function onclick1() {
  var pizzaName = document.getElementById("name").value;
  alert(pizzaName);
  var pizzaType = document.getElementById("type").value;
  alert(pizzaType);
  var size = document.getElementById("size").value;
  alert(size);
  var price = document.getElementById("price").value;
  alert(price);

  const pizza = {
    pizzaName: pizzaName,
    pizzaType: pizzaType,
    size: size,
    price: price,
  };

  fetch("http://localhost:8080/pizza/addpizza", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(pizza),
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

function onclick2() {
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
         
         <div class="pizza-list">
         <table class="table table-hover">
          
           <tr class="pizza-list"  style="margin-left: 50px">
                    <td style = "width: 150px">${pizza.pizzaName}</td>
                    <td style = "width: 150px">${pizza.pizzaType}</td>
                    <td style = "width: 150px">
                        ${pizza.size}
                    </td>
                    <td style = "width: 150px">
                        ${pizza.price}
                    </td>
                    <td>
                    <button onClick="deletePizza()">Delete</button>
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
  alert("hello2");
}

function deletePizza() {
  fetch("http://localhost:8080/deletepizza/id", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
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
