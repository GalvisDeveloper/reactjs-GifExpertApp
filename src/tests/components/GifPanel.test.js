
import React from 'react';
import { shallow } from 'enzyme';
import GifPanel from '../../components/GifPanel';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componente <GifPanel />', () => {

    const category = 'Moto gp';

    test('Prueba 1: Coincidir el snapshot ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifPanel category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Prueba 2: Mostrar items cuando se cargan las imagenes useFetchGifs(customHook)', () => {

        const gifs = [{
            id: '01',
            url: 'https://www.google.com/',
            title: 'Google'
        },
        {
            id: '02',
            url: 'https://www.youtube.com/',
            title: 'Youtube'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifPanel category={category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridPanel').length).toBe(gifs.length);
    })


});
