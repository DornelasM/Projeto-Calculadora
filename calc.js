
let divContainer = document.querySelector('.calc-form .container');
let resultArea = document.querySelector('.calc-result');

//criar calc-form
let calcForm = document.createElement('form');
calcForm.name = "form";
//anexa a área de resultado no form
calcForm.appendChild(resultArea);
//anexa calc-form na divContainer
divContainer.appendChild(calcForm);

//cria  h3 (titulo)
let calcTitle = document.createElement('h3');
//adiciona texto
let calcContext = document.createTextNode("Calculadora");

calcTitle.appendChild(calcContext);

calcForm.appendChild(calcTitle);


//criar botões numericos
for(let i =0; i<10;i++){
   
    let calcNumbers = document.createElement('button');
    //adicionar classe
    calcNumbers.className = "but";
    //adicionar value => necessario 
    calcNumbers.value = `${i}`;
    //criar texto
    let numberText = document.createTextNode([i]);
    //adicionar dados 
    calcNumbers.dataset.numbers = "number";
    //anexa texto nos botões
    calcNumbers.appendChild(numberText);
    //anexa botões no calc-form
    calcForm.appendChild(calcNumbers);
}

//cria soma
let plusButton = document.createElement('button');
//adiciona classe soma
plusButton.className = "btn-plus";
// texto
let plusText = document.createTextNode('+');

plusButton.appendChild(plusText);

calcForm.appendChild(plusButton);

//cria subtração
let subButton = document.createElement('button');

subButton.className = "btn-sub";

let subText = document.createTextNode('-');

subButton.appendChild(subText);

calcForm.appendChild(subButton);

//cria multiplicador 
let multButton = document.createElement('button');

multButton.className = "btn-multy";

let multyText = document.createTextNode('x');

multButton.appendChild(multyText);

calcForm.appendChild(multButton);

//cria porcentagem
let modlusButton = document.createElement('button');

modlusButton.className = "btn-mod";

let modlusText = document.createTextNode("%");

modlusButton.appendChild(modlusText);

calcForm.appendChild(modlusButton);

//cria '.' para decimal
let decimalButton = document.createElement('button');

decimalButton.className = "btn-deci";

let decimalText = document.createTextNode(".");

decimalButton.appendChild(decimalText);

calcForm.appendChild(decimalButton);

//cria o "apaga 1 número"
let clearOneNumber = document.createElement('button');

clearOneNumber.className = "btn-CON";

let clearOneNumberText = document.createTextNode("c");

clearOneNumber.appendChild(clearOneNumberText);

calcForm.appendChild(clearOneNumber);

//cria divisão
let divisionButton = document.createElement('button');

divisionButton.className = "btn-div";

let divisionText = document.createTextNode("\u00f7");

divisionButton.appendChild(divisionText);

calcForm.appendChild(divisionButton);

//cria o igual
let equalButton = document.createElement('button');

equalButton.className = "btn-equal";

let equalText = document.createTextNode('=');

equalButton.appendChild(equalText);

calcForm.appendChild(equalButton);

//cria o "Limpa Tudo"
let  clearButton = document.createElement('button');

clearButton.className = "btn-clear";

clearButton.value = "c";

let clearText = document.createTextNode('LIMPAR');

clearButton.appendChild(clearText);

calcForm.appendChild(clearButton);


/////Para Calcular quando Clicar em qualquer botão /////////////
document.addEventListener('click',(e)=>{
      
    e.preventDefault();
        //pega o valor da área do resultado 
    if(e.target.className == "but"){
            //array com os numeros  
        var arr = [0,1,2,3,4,5,6,7,8,9];
            //pega o valor clicado dos numeros
        insert(arr[e.target.value]);
    }
    //acabando o primeiro "if"
        //botão click soma
        //
    if(e.target.className == "btn-plus"){
         insert('+');
    }
    //segundo if 
        //botão click subtração
    if(e.target.className == "btn-sub"){
          insert('-');
    }
    //terceiro if
        //botão click mutiplicador
    if(e.target.className == "btn-multy"){
          insert('*');
          this.backGround.style = "red";
    }
    //quarto if
        //botão click divisor
    if(e.target.className == "btn-div"){
          insert('/');
    }
    //quinto if
        //botão click porcentagem
    if(e.target.className == "btn-mod"){
        insert('%');
    }
    //sexto if
        //botão "." click
    if(e.target.className == "btn-deci"){
        insert('.');
    }
    //setimo if 
    if(e.target.className == "btn-CON"){
        //deleta o numero 
        resultArea.innerHTML = resultArea.innerHTML.slice(0,resultArea.innerHTML.length-1);
    }
        //botão limpa tudo
    if(e.target.className == "btn-clear"){
            //faz a area de resultado ficar vazia
        resultArea.innerHTML = "";
    }
    //oitavo if
        //botão igual click
    if(e.target.className == "btn-equal"){
           
        resultArea.innerHTML = eval(resultArea.innerHTML);
    }else if(e.target.className == "btn-equal" || resultArea.innerHTML == ""){
        console.log("hry");
    }///////faz com que o valor não seja removido quando você clicar em igual se você não colocar o operador
    //nono if 
})
//final dos botões clicaveis 

//função para colocar número ao lado de número e operado
function insert(num){
    resultArea.innerHTML += num;
}



////////NOTA IMPORTANTE 
//resultArea.innerHtml -=1;=> decrease one number from the group numbers (group numbers as one number) == resultArea.innerHTML = (resultArea.innerHTML-1)-e.target.value.
//resultArea.innerHTML = e.target.value-1; => make the all number as (-1).     
//resultArea.innerHTML = e.target.value--; =. increase (-1)
//NÃO FUNCIONA E EU NÃO QUERO DESCOBRIR O MOTIVO
//ESTOU FELIZ ASSIM