import React, { useState } from 'react';
import './App.css';

import Form from './Form'

function App() {
  const [memberList, setMemberList] = useState([{
    id: 1,
    name: 'Isaiah',
    email: 'flaxisaiah@gmail.com',
    role: 'Web Dev'
  }]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

  setMemberList([...memberList, newMember]);
  }
  return (
    <div className="App">
       <Form addNewMember={addNewMember}/>
       {memberList.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );

}

export default App;
