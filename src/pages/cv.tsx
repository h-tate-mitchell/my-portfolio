import React from 'react'
import Page from '@/components/Page'
import PDFViewer from '@/components/PDFViewer'

const cv = () => {
  return (
    <Page title='CV & Resume | H. Tate Mitchell'>
        <h1>CV & Resume</h1>
        <h2>CV</h2>
        <PDFViewer pdfUrl="/assets/docs/htmcv.pdf" />
        <h2>Resume</h2>
        <PDFViewer pdfUrl="/assets/docs/htmresume.pdf" />
    </Page>
  )
}

export default cv