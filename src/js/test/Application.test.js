let expect = require("chai").expect;

import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'mocha-jsdom';

import Application from '../Application.js';

describe("Testea el modulo Application", () => {

  jsdom();
  let container;
  let component;

  before(function(){
    container = document.createElement('div');
  });

  beforeEach(function(){
    component = new Application();
    container.innerHTML = '';
  });

  it("Deberia saludar con un span", () => {
    ReactDOM.render(<Application />, container);

    const actual = container.querySelector('span').nodeName;
    const expected = 'SPAN';

    expect(actual).to.equal(expected);
  });

  it("Deberia saludar a alguien", () => {
    const name = "Dog";
    const output = ReactDOM.render(<Application name={name} />, container);

    expect(output.props.name).to.equal(name);
  });
});
