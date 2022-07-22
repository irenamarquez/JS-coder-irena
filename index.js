const productos = [
  { nombre:"jersey", precio: 60 },
  { nombre: "bib", precio: 45 },
  { nombre: "media", precio: 15 },
  { nombre: "cap", precio: 20 },
]

let carrito = []

let seleccion = prompt ("Hola! Deseas comprar algun producto ALFHO, si o no");

while(seleccion != "si" && seleccion != "no"){
  alert("por favor ingresa: si o no");
  seleccion = prompt("Deseas comprar algo, si o no");
}

if(seleccion == "si"){
  alert("continuar a lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + "" + producto.precio + "$");
    alert(todoslosProductos.join("-"));
}

else if (seleccion == "no"){
  alert("Gracias, hasta pronto!");
}

while(seleccion != "no"){
  let producto = prompt("agregar a carrito");
  let precio = 0;

  if(producto == "jersey" || producto == "bib" || producto == "media" || producto == "cap"){
    switch(producto) {
      case "jersey":
        precio = 60;
        break;
      case "bib":
        precio = 45;
        break;
      case "media":
        precio = 15;
        break;
      case "cap":
        precio = 20;
        break;
    }
    let unidades = parseInt(prompt("cantidad de productos"));

    carrito.push({producto, unidades, precio});

    console.log(carrito);
  }
  else{
    alert("producto no disponible");
  }

  seleccion = prompt("desea seguir comprando?");

  while(seleccion == "no"){
    alert("gracias por su compra! hasta pronto");
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades},
      total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} `)
    })
    break;
  }

}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);

console.log(`el total a pagar por su compra es: ${total}`)


/*{
  function Users(nombre, apellido, edad, email, password)
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.password = password;
    this.userIsCompleted = function () {
        if (this.nombre && this.apellido && this.edad && this.email && this.password) {
            return true;
        } else {
            return false;
        }
    }
  function carritoCompra(nombreTarjeta, numeroTarjeta, fecha, codigo)
  this.nombreTarjeta = nombre;
  this.numeroTarjeta = numero;
  this.fecha = fecha;
  this.codigo = codigo;
  
  
  let user1 = prompt("Completar datos");

  let nombre = prompt("Ingrese nombre del usuario");
  let apellido = prompt("Ingrese apellido del usuario");
  let edad = prompt("Ingrese edad del usuario");
  let email = prompt("Ingrese email del usuario");
  let password = prompt("Ingrese password del usuario");
  
  let carritoCompra = prompt(agregar al carrito);
  
  if(user.userIsCompleted()){
      users.push(user);
      alert("Usuario registrado exitosamente!");
  }else{
      alert(`Usuario NO registrado.`);       
  }
    
let user1 = "irena";
if(user1 === "irena"){
  console.log("saludo");
}else{
  console.log("no saludo");
}
if(user1 === "irena" || user1 === "irena"){
    alert("hola irena :)");
  }else{
    alert("Quién eres?")
  }

  let user1 = prompt("Ingrese un usuario").toLowerCase();
  while(user1 = "irena"){
    alert("Usuario incorrecto");
    user1 = prompt("Ingrese un usuario");
  }

}*/