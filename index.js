let nombre = "irena";
if(nombre === "irena"){
  console.log("saludo");
}else{
  console.log("no saludo");
}
if(nombre === "irena" || nombre === "irena"){
    alert("hola irena :)");
  }else{
    alert("Quién eres?")
  }

  let usuario = prompt("Ingrese un usuario").toLowerCase();
  while(usuario != "irena"){
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese un usuario");
  }
  alert("Bienvenido");

  let nacionalidadUsuario = "Argentina";

  switch (nacionalidadUsuario) {
    case "Brazilian":
      console.log("Su moneda es el real");
      break;
  
    case "Argentino":
      console.log("Su moneda es el peso argentino");
      break;
  
    default:
      console.log("El usuario tiene nacionalidad no soportada");
      break;
  }

  for(let i = 0; i <= 10; i++){
    if(i === 9){
      continue;
    }
    console.log(i);
  }
  for(let i = 10; i <= 20; i++){
    if(i === 19){
      continue;
    }
    console.log(i);
  }
  console.log("finalizamos proceso");