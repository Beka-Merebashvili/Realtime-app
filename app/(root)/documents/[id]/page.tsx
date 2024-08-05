import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

function Document() {
  return (
    <div>
      <Header>
        <p className='text-white'>test</p>
      </Header>
      <Editor />
    </div>
  )
}

export default Document