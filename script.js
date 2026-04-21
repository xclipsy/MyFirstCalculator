const pantalla = document.querySelector('.pantalla')
const botones = document.querySelectorAll('.button')

let calculado = false;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const select = boton.textContent;

        if (boton.id === 'AC'){
            pantalla.textContent = '0';
            calculado = false;
            return;
        }

        if(boton.id === 'DEL'){
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR'){
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            calculado = false;
            return;
        }

        if (boton.id === '='){
            try {
                const expresion = pantalla.textContent;
                const resultado = eval(expresion);
                pantalla.textContent = expresion + ' = ' + resultado;
                calculado = true;
            } catch {
                pantalla.textContent = 'ERROR'
            }
            return;
        }
        
        if (calculado) {
            const resultado = pantalla.textContent.split(' = ')[1];
            pantalla.textContent = ['+','-','*','/'].includes(select) ? resultado + select : select;
            calculado = false;
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR'){
            pantalla.textContent = select;
        } else {
            pantalla.textContent += select
        }
    })
});