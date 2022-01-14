import * as React from 'react'
import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
import simpleRestProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UsersList from './components/users/UsersList'
import UsersEdit from './components/users/UsersEdit'
import UsersCreate from './components/users/UsersCreate'
const App = () => {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UsersList}
        edit={UsersEdit}
        create={UsersCreate}
      />
    </Admin>
  )
}

export default App
