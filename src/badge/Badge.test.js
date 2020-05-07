import React, { Component } from 'react'
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Badge from './Badge';
import Button from '../button/Button';

configure({ adapter: new Adapter() })

describe('test badge component', () => {
  it('should show sup icon when init component', () => {
    const w = mount(<Badge className="icon" value="99">
      <Button type="normal">111</Button>
    </Badge>)
    expect(w.find('.hui-badge').exists()).toBeTruthy();
    expect(w.find('sup.hui-badge__fix').exists()).toBeTruthy();
    expect(w.find('.hui-badge').hasClass('icon')).toBeTruthy();
    expect(w.find('sup.hui-badge__content').text()).toBe(99);
  })
  it('should limit value when set max prop', () => {
    const w1 = mount(<Badge value={100} max={99}>
        <Button type="normal">111</Button>
    </Badge>)
    const w2 = mount(<Badge value={1} max={99}>
        <Button type="normal">111</Button>
    </Badge>)
    expect(w1.find('sup.hui-badge__content').text()).toBe('99+')
    expect(w2.find('sup.hui-badge__content').text()).toBe('1')
  })
  it('should show dot icon when set isDot prop', () => {
    const w = mount(<Badge value="100" isDot>
        <Button type="normal">111</Button>
    </Badge>)
    expect(w.find('.hui-badge__dot').exists()).toBeTruthy();
  })
})