function generarExcusa() {
    let who =['El perro', 'Mi abuela','El cartero','Mi pájaro'];
    let action =['se comió', 'orinó en', 'aplastó','rompió'];
    let what =['mi tarea', 'mi teléfono','el coche'];
    let when =['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio','durante mi almuerzo','mientras estaba rezando'];
    let sujeto =who[Math.floor(Math.random() * who.length)];
    let verbo =action[Math.floor(Math.random() *action.length)];
    let objeto = what[Math.floor(Math.random() * what.length)];
    let momento = when[Math.floor(Math.random() *when.length)];

    let excusa = `${sujeto} ${verbo} ${objeto} ${momento}.`;
    
    document.getElementById("excusa").innerText = excusa;
}
window.onload = generarExcusa;