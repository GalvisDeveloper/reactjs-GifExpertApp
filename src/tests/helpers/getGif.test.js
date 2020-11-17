
import React from 'react';
const { shallow } = require("enzyme")
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Testeando el helper getGif', () => {
    test('Debe traer 50 elementos', async () => {
        const gif = await getGifs('Dragon Ball');

        //El api key solo trae 50 datos, cuando el límit está requiriendo más
        expect(gif.length).toBe(50);
    })

    test('Debe retornar 0', async () => {
        const gif = await getGifs('');

        expect(gif.length).toBe(0);
    })

});
