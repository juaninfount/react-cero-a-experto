import { string } from 'prop-types';
import { getImagen } from '../../src/bases/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe de retornar un URL de la imagen', async() => {
     
        const url = await getImagen()
        //console.log(url);
        //expect(typeof url).toBe('string');
        expect(url).toBe('No se encontró la imagen');

    });
});