import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/firoz_thapa_curriculum_vitae.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // Update width when window resizes
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Dynamically adjust scale based on window width
  const getPageScale = () => {
    if (width > 1200) return 1.7; // Large screens
    if (width > 786) return 1.2;  // Medium screens
    return 0.6;                    // Small screens
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
        <Particle />
        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: '20px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Resume Pages */}
        <Row className="resume" style={{ justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {/* Render each page */}
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} style={{ marginBottom: "20px" }}>
                <Page
                  pageNumber={index + 1}
                  scale={getPageScale()}
                />
              </div>
            ))}
          </Document>
        </Row>

        {/* Download Button (Bottom) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: '20px' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
