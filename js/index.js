//VARIABLES GLOBALES :
let entrada
let producto
let precioProducto
let cantidadProducto
let costoDelEnvio


//FUNCION QUE CALCULA TIEMPO DE LLEGADA (cantidad de letras del producto + costo de envio )
function calculoTiempoDeLlegada(){
    if(producto == null || producto == ""){
        alert("Falta Producto.Redirigiendo a cargar un producto...")
        almacenarProducto();
        costoEnvio();
    }else if(costoDelEnvio == null){
        alert("Falta Ingresar Kilomtros.Redirigiendo...")
        costoEnvio();
    }else{
        console.log("Entro aca")
        let tiempoEnvio = (producto.length) + costoDelEnvio

        alert("Tiempo de envio estimado : " + tiempoEnvio + "Hs.")
        

    }
    return;
}

//FUNCION QUE CALCULA EL PRECIO MAS EL ENVIO 
function calcularPrecioMasEnvio(precio , cantidad , costoDeEnvio){
    let precioMasEnvio= (cantidad * precio) + costoDeEnvio
    return precioMasEnvio;
}

//FUNCION QUE CALCULA EL PRECIO TOTAL
function calcularPrecio(precio){
    let opcion
    do{opcion = parseInt(prompt("¿Desea calcular precio + envio? 1-SI , 2-NO"))
        if(opcion != 2 && opcion != 1){
        alert("Opcion invalida . Elija una opcion valida")
        }

        if(opcion == 1 ){
            let pregunta = costoDelEnvio
            if(costoDelEnvio == null){
                costoEnvio();
            }
            let precioTotalConEnvio = calcularPrecioMasEnvio(precioProducto  , cantidadProducto , costoDelEnvio)
            alert(`El costo total del pedido Con0 entrega es de : ${precioTotalConEnvio}\$` )
        }else if(opcion == 2){
            let precioTotal= cantidadProducto * precioProducto
            alert(`El costo total del pedido sin entrega es de : ${precioTotal}\$` )
        }else {
            alert("Opcion invalida . Elija una opcion valida") 
        }

    

    }while(opcion !=1 && opcion !=2)
    return;
}

//FUNCION QUE CALCULA EL COSTO DEL ENVIO 


function costoEnvio(){
    let distancia 
    if(producto == null || producto == ""){
        alert("Producto no Ingresado.Ingrese un producto antes")
        return;
    }
    do{distancia=parseFloat(prompt("Ingrese distancia en kilometros menor a 1000Km."))
        if(distancia <= 0 || distancia == null ){
            alert("Distancia invalida")
        }else if(distancia > 1000){
            alert("Esta distancia supera nuestro limite de entregas.Por Favor seleccione una distancia menor a 1000Km.")
        }else if(distancia >=900 && distancia <1000){

            costoDelEnvio = 1500

        }else if (distancia >=400 && distancia <900){ 
            costoDelEnvio = 1000
        }else if (distancia >0 && distancia < 400){
            costoDelEnvio = 500
        }

    }while(distancia <= 0)
    return costoDelEnvio;
}

//FUNCION QUE MUESTRA EL PRODUCTO INGRESADO
function mostrarProducto(producto , precioProducto , cantidad){
    return alert("Producto Ingresado : " + producto + " ; " + "Precio : " + precioProducto + " ; " + "Cantidad : " + cantidad )
}


//FUNCION QUE ALMACENA EL PRODUCTO 
function almacenarProducto(){
    let opcion
    do{
    producto = prompt("Ingrese producto")
    precioProducto = parseFloat(prompt("Ingrese Precio"))
    cantidadProducto = parseInt(prompt("Ingrese Cantidad")) 

    mostrarProducto(producto , precioProducto , cantidadProducto);

    
    do{opcion = parseInt(prompt("¿Datos Ingresados correctamente ? 1-SI , 2-NO"))
        if(opcion != 2 && opcion != 1){
            alert("Opcion invalida . Elija una opcion valida")
        }

    }while(opcion !=1 && opcion !=2)
    
    }while(opcion != 1 );
  
 return;   
}


 //MENU
do{entrada = parseInt(prompt("Elija una opcion: 1) agregar Producto 2)calcular costo de envio 3)Calcular precio total 4)Calcular tiempo de llegada 0)Salir "))
    
    
    switch(entrada){
         case 0:
             alert("Simulador finalizado")
            break;
        case 1: 
        almacenarProducto();
        break;

        case 2:
            costoEnvio();
       
        break;
        case 3:
            calcularPrecio(precioProducto)
        break;
        
        case 4:
            //calculo de tiempo de llegada : Con previo ingreso de producto e ingreso de Km . Tiempo de entrega = (relacion 2 horas por letra ) + cantidad de kilometros 
            calculoTiempoDeLlegada()
        break;

        default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
    }
}while( entrada != 0)