import React from 'react';
import qs from 'qs';

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>About me</p>
      {showDetail && <p>detail 값을 true로 설정</p>}
    </div>
  );
};
  
export default About;