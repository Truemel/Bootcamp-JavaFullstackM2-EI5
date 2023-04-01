function mostrarFecha(){
    var fecha = new Date();
    var falta = (new Date(fecha.getFullYear()+1, 0, 1)).getTime()-fecha.getTime();
    var dias = falta/(60000*60*24);
    falta = falta%(60000*60*24);
    var minutos = falta/60000;
    falta = falta%60000;
    var segundos = falta/1000;
    var dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    alert("hoy es "+dia[fecha.getDay()]+" "+fecha.getDate()+" de "+fecha.getMonth()+" de "+fecha.getFullYear()+", y son las "+fecha.getHours()+" horas, "+fecha.getMinutes()+" minutos con "+fecha.getSeconds()+" segundos.");
    document.getElementById("tiemporestante").innerText = "Falta "+dias+" días, "+minutos+" minutos y "+segundos+" segundos para que termine el año.";
}