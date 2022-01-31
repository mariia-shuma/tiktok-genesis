import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ErrorMessage from './ErrorMessage';

configure({ adapter: new Adapter() });

describe('errormessage', () => {
  it('should render my component', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.find('h2').text()).toEqual('Oooopsie');
  });
});
