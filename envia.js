
    //quantidades
     //numero de cada categoria de pessoas
    const nhomens = document.getElementById('homens')
    const nmulheres = document.getElementById('mulheres')
    const ncriancas = document.getElementById('criancas')

    //homem
    const carneh = 500
    const frangoh = 200
    const linguicah = 200
    const refrigeranteh = 300
    const cervejah = 800

    //mulher
    const carnem = 300
    const frangom = 200
    const linguicam = 200
    const refrigerantem = 400
    const cervejam = 500

    //crianças
    const carnec = 200
    const frangoc = 100
    const linguicac = 200
    const refrigerantec = 200
    const cervejac = 0


    const form = document.querySelector('form');
//linha acima acessa o formulario do html

    form.addEventListener('submit' , (event) => 
        {
        event.preventDefault();

        const numhomens = parseInt(nhomens.value) || 0;   
        const nummulheres = parseInt(nmulheres.value) || 0;
        const numcriancas = parseInt(ncriancas.value) || 0;

        const carne = (numhomens * carneh) + (nummulheres * carnem) + (numcriancas * carnec)    
        const frango = (numhomens * frangoh) + (nummulheres * frangom) + (numcriancas *frangoc)
        const linguica = (numhomens * linguicah) + (nummulheres * linguicam) + (numcriancas * linguicac)
        const refrigerante = (numhomens * refrigeranteh) + (nummulheres * refrigerantem) + (numcriancas * refrigerantec)
        const cerveja = (numhomens * cervejah) + (nummulheres * cervejam) + (numcriancas * cervejac)

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =`
       
        <p>Carne: ${(carne / 1000)} Kg</p>
        <p>Frabgo: ${ (frango / 1000)} Kg</p>
        <p>Linguiça: ${ (linguica / 1000)} Kg</p>
        <p>Refrigeante:  ${(refrigerante / 1000)} Litros</p>
        <p>Cerveja:  ${(cerveja / 1000)} L</p>
       
        `;
  
  
   

    
    });