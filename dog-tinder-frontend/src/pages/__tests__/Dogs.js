import React from 'react'
import ReactDOM from 'react-dom'
import Dogs from '../Dogs'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const dogs = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
  }
]

it('Dogs renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dogs dogs={dogs} />, div);
});

it('Renders the dogs', ()=>{
  const component = mount(<Dogs dogs={dogs} />)
  const headings = component.find('h4 > .dog-name')
  expect(headings.length).toBe(3)
})
