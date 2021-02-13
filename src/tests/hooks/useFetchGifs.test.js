// import React from 'react';
import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas al Hook useFetchGifs ', () => {


    test('Debe retornar el estado inicial del useFetchGifs ', async () => {
        // const { data, loading } = useFetchGifs('Moto gp');

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Moto gp'));
        // console.log(result.current);

        expect(result.current.data).toEqual([]);
        // console.log(result.current.data)

        expect(result.current.loading).toBe(true);
        // console.log(result.current.loading)

        await waitForNextUpdate();
    });

    test('Debe retornar el arreglo de imágenes y el loading en false ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Moto gp'));
        await waitForNextUpdate();
        expect(result.current.data.length).toBe(50);
        // console.log(result.current.data.length)

        expect(result.current.loading).toBe(false);
        // console.log(result.current.loading)
    });

});
