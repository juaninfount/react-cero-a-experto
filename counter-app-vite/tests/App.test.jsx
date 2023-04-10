import { render } from '@testing-library/react';
import { App } from '../src/App';


describe('Pruebas en <App />', () => {

    test('debe de hacer match con el snapshot', () => {
        const title = 'Hola, Soy Goku';
        const { container } = render(<App title={title} />);

        expect(container).toMatchSnapshot();
        //console.log(container);
    });

    test('debe de mostrar titulo en un h1', () => {
        const title = 'Hola, Soy Goku';
        const { container, getByText } = render(<App title={title} />);
        expect(getByText(title)).toBeTruthy();
    });
});