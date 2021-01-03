

import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import "@testing-library/jest-dom";

describe('Testeando el componente AddCategory', () => {

    // const setCategories = () => { };
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })


    test('Prueba 1: Coincidir con el snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    })


    test('Prueba 2: Debe funcionar el onChange en el Input', () => {

        const value = 'test';

        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });

        // expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('Prueba 3: No debe accionarse el submit', () => {
        // const submit = '';
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();
    })


});
