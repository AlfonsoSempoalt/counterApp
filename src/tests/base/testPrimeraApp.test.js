import PrimeraApp from "../../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";
//import {render} from '@testing-library/react'

describe("test to PrimeraApp", () => {
  /*  test('should show hola', () => {
        const saludo='hola';
        const wrapper= render(<PrimeraApp saludo={saludo}/ >)
        expect(wrapper.getByText("hola")).toBeInTheDocument();
    }) */

  test("<PrimeraApp/ > should renderize properly", () => {
    const saludo = "hoola buenas noches";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("<PrimeraApp/ > test props", () => {
    const saludo = "hoola buenas noches";
    const subtitulo = "soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textAppSubtitles = wrapper.find("h2").text();
    expect(textAppSubtitles).toBe(subtitulo);
  });
});
