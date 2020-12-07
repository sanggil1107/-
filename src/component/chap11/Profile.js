import React from 'react';

const data = {
  yang: {
    name: '양상길',
    description: '리액트 개발자 - yang'
  },
  sanggil: {
    name: '양상길',
    description: '리액트 개발자 - sanggil'
  }
};
  
const Profile = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile