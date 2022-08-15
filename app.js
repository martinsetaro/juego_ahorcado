let container=document.querySelector('.container');
let btn = document.querySelector('.btn');
let text=document.querySelector('.entrada_texto');
let incorrectas = document.querySelector('.incorrectas');


 



let palabra = "aguacate";

let secretWord =[];
let discovery="";

for(let i=0;i<palabra.length;i++){
    secretWord.push(palabra[i]);
}
secretWord.forEach(item =>{
    container.innerHTML+=`<div class="box_letter"><h2>${item}</h2></div>`

    
})

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
    }

   limpiarText();

})
   


function buscar(){
  
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








