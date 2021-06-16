import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
describe("tests to CounterApp render, and default param", () => {
  test("should render properly and match with the snapshot ", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a default value of 100", () => {
    const counter = 100;
    const wrapper = shallow(<CounterApp value={counter} />);
    const value = wrapper.find("h2").text();
    expect(value).toBe("100");
  });
});

describe("test to the buttons of CounterApp +,-,reset", () => {
  //this line is added because i dont wanna lose the intelligence of vscode
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should sum a number to the counter", () => {
    wrapper.find("button").at(0).simulate("click");
    const value = wrapper.find("h2").text();
    expect(value).toBe("2");
  });

  test("should rest a number to the counter", () => {
    wrapper.find("button").at(2).simulate("click");
    const value = wrapper.find("h2").text();
    expect(value).toBe("0");
  });

  test("should return to the default value(test reset button)", () => {
    const wrapper = shallow(<CounterApp value={123} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const value = wrapper.find("h2").text();
    expect(value).toBe('123');
  });
});
