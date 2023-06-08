// mostrar los elementos seleccionados
function contar(){
    n = 0;
    // declarar la variable que guarde los elementos de la lista
    lista = document.Selector.telefonos
    for(i=0; i<lista.options.length; i++){
        if(lista.options[i].selected){
            document.write("<br>"+lista.options[i].innerHTML)
            n++
        }
    }
    document.write("<br> Seleccionaste las marcas: " + n + "Favoritas")
}