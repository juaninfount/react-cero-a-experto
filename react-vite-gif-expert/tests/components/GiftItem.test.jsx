import { render , screen  } from '@testing-library/react';
import { GiftItem } from '../../src/components/GiftItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    //const url = 'https://static.wikia.nocookie.net/onepunchman/images/c/c0/Anime_-_Saitama.jpg/revision/latest?cb=20200308230733&path-prefix=es';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
       const {container} = render(<GiftItem title={title} url={url}   />);
       expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el ALT indicado', () => {
        render(<GiftItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
     });

    test('debe de mostrar el título en el componente', () => {
        render(<GiftItem title={title} url={url} />);        
        expect( screen.getByText(title)).toBeTruthy( );
     });
});