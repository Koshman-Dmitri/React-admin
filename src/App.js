import React, { useEffect } from 'react';
import { Admin, Resource  } from 'react-admin';
import { UserList, UserEdit } from './users.js';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//const dataProvider = simpleRestProvider('http://3.65.149.62');

const App = () => {
  fetch('http://3.65.149.62/test-api/auth/login', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
     },
    body: JSON.stringify({
      email: "test@nyblecraft.com",
      password: "12345678qQ"
    })
  })
  .then(res => console.log(res))
  .catch(err => console.log(err));

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
