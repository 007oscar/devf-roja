function quienGanaMas() {

    let nombreEmpleado = "";
    let sueldoEmpleado = 0;
    if(arguments.length == 0 ) return 'Debes de ingresar al menos un empleado con su saldo'
    if (arguments.length % 2 != 0) {
        return "Debes introducir nombre y salario de cada empleado";
    } else
        for (let i = 0; i < arguments.length; i += 2) {
            if (sueldoEmpleado < arguments[i + 1]) {
                nombreEmpleado = arguments[i];
                sueldoEmpleado = arguments[i + 1];
            }
        }
    
    return "El emplado mejor pagado es: \n"
    + nombreEmpleado + ", gana $"
    + sueldoEmpleado;
}
