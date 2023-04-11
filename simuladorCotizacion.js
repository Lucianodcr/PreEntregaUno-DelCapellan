function obtenerPrecio() {
    // Obtiene el valor seleccionado en el menú desplegable
    let localidad = document.getElementById("localidad").value;
  
    // Predetermina los precios para cada localidad
    let precioCaba = 650;
    let precioCordon1 = 1030;
    let precioCordon2 = 1390;
  
    // Muestra el precio correspondiente a la localidad seleccionada
    if (localidad === "Caba") {
      return precioCaba;
    } else if (localidad === "Cordon1") {
      return precioCordon1;
    } else if (localidad === "Cordon2") {
      return precioCordon2;
    } else {
      return "Localidad no válida";
    }
  }