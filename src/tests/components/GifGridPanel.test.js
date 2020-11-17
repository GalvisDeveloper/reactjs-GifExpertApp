import React from 'react';
const { shallow } = require("enzyme")
import '@testing-library/jest-dom';
import { GifGridPanel } from '../../components/GifGridPanel';


describe('Pruebas en el <GifGridPanel />', () => {

    const title = "Titulo prueba";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridPanel url={url} title={title} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe contener un parrafo con el titulo y el (Gif:) antes de el', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe("Gif: " + title);
    })

    test('Testeando la imagen', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })

    test('Debe tener (animate__zoomInDown)', () => {
        const div = wrapper.find('div');
        const classDiv = div.prop('className');

        expect(classDiv.includes('animate__zoomInDow')).not.toBe(false);
    })

})