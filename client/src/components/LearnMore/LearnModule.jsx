import React from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';

class LearnModule extends React.Component  {
  constructor(props) {
    super(props);
    this.setState = {

    }
  }
  render() {
    const { handleLearnDisplay } = this.props;
    return (
      <Modal aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Tech Skill Set
            </Modal.Title>
          </Modal.Header>
          <Modal.Header className="Modal-Skill-Header-Container">
            <h5 className="Model-Skills-Header">Front-End</h5>
            <h5 className="Model-Skills-Header">Back-End</h5>
            <h5 className="Model-Skills-Header">Other</h5>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <code>Javascript HTML5 CSS3 React.js/Redux jQuery Axios Styled Components Webpack</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>RESTful APIs Node.js Express Amazon Web Services EC2 Docker MySQL Sequelize MongoDB Mongoose PostgreSQL NGINX Redis</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>Chai Mocha Jest Enzyme NPM Git NewRelic Loader.io Artillery Bootstrap Tmux</code>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => handleLearnDisplay()} className="Modal-Button">CLOSE</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default LearnModule