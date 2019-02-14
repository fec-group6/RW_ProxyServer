import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchBar from '../../../client/components/SearchBar'

Enzyme.configure({ adapter: new Adapter() })

describe('SearchBar component', () => {
  test('SearchBar exists', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true)
  });

  test('State automatically updates when user types something in our input field', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.state().searchValue).toEqual('');
    wrapper.find('input').simulate('change', {
      target: { value: 'Hello search bar!' }
    })
    expect(wrapper.state().searchValue).toEqual('Hello search bar!');

  });
})
