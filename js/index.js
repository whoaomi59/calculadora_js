/* alert ('calculadora, con js'); */
var valor_digitado="";
var dato1="";
var dato2="";
var operacion="";

function Asignar_uno(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+1;
}

function Asignar_dos(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+2;
}
function Asignar_tres(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+3;
}
function Asignar_cuatro(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+4;
}
function Asignar_cinco(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+5;
}
function Asignar_seis(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+6;
}
function Asignar_siete(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+7;
}
function Asignar_ocho(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+8;
}
function Asignar_nueve(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+9;
}
function Asignar_cero(){
    valor_digitado=document.getElementById('pantalla').value;
    document.getElementById('pantalla').value=valor_digitado+0;
}
function Asignar_suma(){
    dato1=document.getElementById('pantalla').value;
    valor_digitado="";
    document.getElementById('pantalla').value='';
    operacion="suma";
}
function Asignar_resta(){
    dato1=document.getElementById('pantalla').value;
    valor_digitado="";
    document.getElementById('pantalla').value='';
    operacion="resta";
}
function Asignar_multi(){
    dato1=document.getElementById('pantalla').value;
    valor_digitado="";
    document.getElementById('pantalla').value='';
    operacion="multiplicasion";
}
function Asignar_divicionl(){
    dato1=document.getElementById('pantalla').value;
    valor_digitado="";
    document.getElementById('pantalla').value='';
    operacion="division";
}

function Asignar_igual(){
    dato2= document.getElementById('pantalla').value;
    if(operacion=="suma"){
        document.getElementById('pantalla').value=parseFloat(dato1)+parseFloat(dato2);
    }
    if(operacion=="resta"){
        document.getElementById('pantalla').value=parseFloat(dato1)-parseFloat(dato2);
    }
    if(operacion=="multiplicasion"){
        document.getElementById('pantalla').value=parseFloat(dato1)*parseFloat(dato2);
    }
    if(operacion=="division"){
        document.getElementById('pantalla').value=parseFloat(dato1)/parseFloat(dato2);
    }
}
function Asignar_reset(){
    dato1=0;
    dato2=0;
    document.getElementById('pantalla').value='';
}
