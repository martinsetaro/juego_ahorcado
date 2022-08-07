let container=document.querySelector('.container');
let btn = document.querySelector('.btn');
let text=document.querySelector('.entrada_texto');


 



let palabra = "aguacate";

let secretWord =[];
let discovery="";

for(let i=0;i<palabra.length;i++){
    secretWord.push(palabra[i]);
}
secretWord.forEach(item =>{
    container.innerHTML+=`<div class="box_letter"><h2>${item}</h2></div>`

    
})

btn.addEventListener('click',buscar)

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
            console.log("no esta")
        }
    })

}
 
function limpiarText(){
    text.value='';
}






