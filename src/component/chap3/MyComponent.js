import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, num, children }) => {
  
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다.<br/>
      children 값은 {children} 입니다.<br/>
      숫자는 {num} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  num: PropTypes.number.isRequired
};

export default MyComponent;