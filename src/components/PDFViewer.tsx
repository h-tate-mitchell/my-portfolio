'use client'; // Required for Next.js 13+ App Router to disable SSR

import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type PDFViewerProps = {
  pdfUrl: string;
}

const PDFViewer = ( props: PDFViewerProps ) => { 
  const { pdfUrl } = props;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-viewer" style={{ height: '750px', width: '100%' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;