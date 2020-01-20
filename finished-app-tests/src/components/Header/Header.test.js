import React from 'react';
import Header from './index';

describe('<Header />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Header>
        <div className="unique" />
      </Header>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

});