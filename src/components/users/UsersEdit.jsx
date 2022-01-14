import React from 'react'
import { Edit, EmailField, SimpleForm, TextInput } from 'react-admin'

const UsersEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UsersEdit
