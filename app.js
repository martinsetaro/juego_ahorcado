let container=document.querySelector('.container');
let btn = document.querySelector('.btn');
let text=document.querySelector('.entrada_texto');
let incorrectas = document.querySelector('.incorrectas');
let dibujo = document.querySelector('.dibujo');
let ingresarPregunta = document.querySelector('.ingresarPregunta');
let empezar = document.querySelector('.empezar');
let reiniciar = document.querySelector('.reiniciar');
let ingresaRespuesta = document.querySelector('.ingresaRespuesta');
let respuestaSecreta = document.querySelector('.respuestaSecreta');


empezar.addEventListener('click',()=>{
    let palabra = "";
    palabra = ingresarPregunta.value;

    if(palabra.length > 0){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Palabra secreta ingresada ya puedes jugar',
        showConfirmButton: false,
        timer: 1500
      })}
    

    
    for(let i=0;i<palabra.length;i++){
        secretWord.push(palabra[i]);
        
    }
    secretWord.forEach(item =>{
        container.innerHTML+=`<div class="box_letter"><h2>${item}</h2></div>`
     
    })

});

let secretWord =[];
let discovery="";

btn.addEventListener('click',()=>{
    buscar();
    let letter = text.value;
    text.value="";
    let correct = false;
    for(let i=0;i<secretWord.length;i++){
        if(secretWord[i] == letter){
            correct = true;
            container.children[i].innerHTML=`<h2>${letter}</h2>`;
           
        }
    }
    if(!correct){
         
        incorrectas.innerHTML+=`<h2>${letter + " - "}</h2>`;
        dibujarPersonaje();
    }

   limpiarText();

})
   
function buscar(){
   let palabra = ingresarPregunta.value;
    let b = document.querySelectorAll('.box_letter')
    b.forEach(item => {
        if(text.value == item.textContent){
            item.style.marginTop='0rem';
            discovery += item.textContent;
            
            if(discovery.length === palabra.length){
                Swal.fire(
                    'GANASTES!',
                    'Que bien jugado!',
                    'success'
                  )
            }
            setTimeout(limpiarText,500)

           
        }
        else 
        {
            
           
        }
    })
    
}


function limpiarText(){
    text.value='';
}

function dibujarPersonaje(){
    if(incorrectas.children.length == 1){
        dibujo.style.backgroundImage = "url('./img/back1.png')";
    }
    if(incorrectas.children.length == 2){
        dibujo.style.backgroundImage = "url('./img/back2.png')";
    }
    if(incorrectas.children.length == 3){
        dibujo.style.backgroundImage = "url('./img/back3.png')";
    }
    if(incorrectas.children.length == 4){
        dibujo.style.backgroundImage = "url('./img/back4.png')";
    }
    if(incorrectas.children.length == 5){
        dibujo.style.backgroundImage = "url('./img/back5.png')";
    }
    if(incorrectas.children.length == 6){
        dibujo.style.backgroundImage = "url('./img/back6.png')";
    }
    if(incorrectas.children.length == 7){
        dibujo.style.backgroundImage = "url('./img/back7.png')";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Has perdido el juego!',
            footer: `La palabra secreta era: ${secretWord.join('')}`
          })
    }
}

reiniciar.addEventListener('click',()=>{
    location.reload();
})

respuestaSecreta.addEventListener('click',()=>{

    if(ingresaRespuesta.value == secretWord.join('')){
        Swal.fire(
            'GANASTES!',
            `La palabra secreta era: ${secretWord.join('')}`,
            'success'
          )
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La respuesta es incorrecta!',
            footer: `La palabra secreta era: ${secretWord.join('')}`
          })
          location.reload();
    }
})







