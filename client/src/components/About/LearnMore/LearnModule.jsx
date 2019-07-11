import React from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';

class LearnModule extends React.Component  {
  constructor(props) {
    super(props);
    this.setState = {

    }
  }
  render() {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Specialization
            </Modal.Title>
          </Modal.Header>
          <Modal.Header className="Modal-Skill-Header-Container">
            <h5 className="Model-Skills-Header">Web Design</h5>
            <h5 className="Model-Skills-Header">Search Engine Optimization</h5>
            <h5 className="Model-Skills-Header">Web Hosting</h5>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <code>Every website built by Rooster Grin is customized to the needs of our client through our design process. We focus on using images, video and text that make your business stand out from the competition.</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>Studies have consistently demonstrated the importance of high search rankings for the success of a website. Rooster Grin utilizes current Search Engine Optimization best practices to get your website to the top of Google.</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>Rooster Grin not only builds websites, but also hosts existing websites. We are experts at solving all problems web related and actively maintain websites for our clients.</code>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} className="Modal-Button">CLOSE</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default LearnModule