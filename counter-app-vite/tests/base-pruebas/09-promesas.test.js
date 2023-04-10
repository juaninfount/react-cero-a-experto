import {getHeroeByIdAsync} from '../../src/bases/09-promesas';


describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
     
        const id = 99;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            //expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });            

            done();
        }).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    });
});