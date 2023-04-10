

test('Pruebas en <DemoComponent />', ()=>{
    
    /*
    if(1 === 0 ){
        throw new Error('Falsa premisa'); 
    }*/    

    // Inicializacion 
    const message1 = 'Hola mundo';

    // Aplicamos acciones o estímulos
    const message2 = message1.trim();

    // Observar el comportamiento esperado

    expect(message1).toBe(message2);
})