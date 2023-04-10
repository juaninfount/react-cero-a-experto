import { getUser } from '../../src/bases/05-funciones';

describe('pruebas en 05-funciones.js', () => {
    test('getUser debe retornar un objeto', () => {
        const testUsr = {
            uid:'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUsr).toStrictEqual(user);
    });
});