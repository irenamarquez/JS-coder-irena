{  
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
  
  
  let user = prompt("Completar datos");

  let nombre = prompt("Ingrese nombre del usuario");
  let apellido = prompt("Ingrese apellido del usuario");
  let edad = prompt("Ingrese edad del usuario");
  let email = prompt("Ingrese email del usuario");
  let password = prompt("Ingrese password del usuario");
  
  let carritoCompra = prompt(agregar al carrito)
  
  if(user.userIsCompleted()){
      users.push(user);
      alert("Usuario registrado exitosamente!");
  }else{
      alert(`Usuario NO registrado.`);       
  }
    
let user = "irena";
if(user === "irena"){
  console.log("saludo");
}else{
  console.log("no saludo");
}
if(user === "irena" || user === "irena"){
    alert("hola irena :)");
  }else{
    alert("Quién eres?")
  }

  let user = prompt("Ingrese un usuario").toLowerCase();
  while(user = "irena"){
    alert("Usuario incorrecto");
    user = prompt("Ingrese un usuario");
  }

}