import { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onmousemove = ({ x, y }) => {
            const coords = { x, y };
            //console.log(coords);
            setCoords(coords);
        }

        window.addEventListener('mousemove', onmousemove);
        return () => {
            window.removeEventListener('mousemove', onmousemove);
        }

    }, []);

    return (
        <>
            <h2>Usuario ya existe</h2>
            {JSON.stringify(coords)}
        </>
    );
}