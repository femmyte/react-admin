import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const UsersCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default UsersCreate
