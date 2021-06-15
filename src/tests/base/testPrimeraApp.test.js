import PrimeraApp from "../../PrimeraApp";
import React from "react"
import {render} from '@testing-library/react'

describe('test to PrimeraApp', () => {
    test('should show hola', () => {
        const saludo='hola';
        const wrapper= render(<PrimeraApp saludo={saludo}/ >)
        expect(wrapper.getByText("hola")).toBeInTheDocument();
    })
    
});