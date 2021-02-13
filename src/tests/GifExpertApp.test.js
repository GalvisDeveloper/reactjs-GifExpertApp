
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../components/GifExpertApp';
import '@testing-library/jest-dom';

describe('Pruebas al componente <GifExpertApp />', () => {
    test('Prueba 1: El componente debe coincidir con el snapshot ', () => {
        const title = "Search any Gif that you want"
        const wrapper = shallow(<GifExpertApp title={title} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Prueba 2:  Debe mostrar una lista de categorias ', () => {
        const categories = ['Moto gp', 'Formula 1'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find('GifPanel').length).toBe(categories.length); *Enable comments in GifExpertApp component to do this one*
    });
});
