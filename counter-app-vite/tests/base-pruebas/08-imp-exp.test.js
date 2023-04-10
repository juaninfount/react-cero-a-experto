import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroById', ()=> {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        //expect(hero).toBeFalsy();

    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => {
        const heroes = getHeroesByOwner('DC');

        expect(heroes).toContainEqual({ id: 3, name: 'Superman', owner: 'DC' })

        expect(heroes.length).toBe(3);
    });
});