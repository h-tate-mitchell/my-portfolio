import React from 'react'
import Page from '@/components/Page'
import { resume } from '@/data/resume'

const about = () => {
  return (
    <Page title='About | H. Tate Mitchell'>
        <h1>About</h1>
        <p>Hi, my name is Harrison Mitchell. I am from the PNW, but currently live in eastern Idaho.</p>
        <h2>Professional Summary</h2>
        <p>{ resume.proSummary }</p>
    </Page>
  )
}

export default about