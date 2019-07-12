import React from 'react';
import { Button, Modal, Row, Col, Container, Card } from 'react-bootstrap';
import  { MdTablet, MdContactMail, MdLaptopMac } from 'react-icons/lib/md';
import medicalGif from '../../../../public/Images/medical.gif';
import mailGif from '../../../../public/Images/Mail.gif';
import scheduleGif from '../../../../public/Images/Schedule.gif';

class ServiceModal extends React.Component  {
  constructor(props) {
    super(props);
    this.setState = {

    }
  }
  render() {
    const TabletIcon =
      <MdTablet
        name="tablet"
        size={40}
        color="#9EB467"
      />
    const MailIcon =
      <MdContactMail
        name="mail"
        size={40}
        color="#9EB467"
    />
    const LaptopIcon =
      <MdLaptopMac
        name="laptop"
        size={40}
        color="#9EB467"
    />

    // Card layout shared amongst the three cards
    const cardMaker = (gif, title, info) => {
      return (
        <Card style={{ width: '220px' }}>
          <Card.Img variant="top" src={gif} style={{ height: '120px' }}/>
          <Card.Body>
            <Card.Title style={{ color: '#79244A' }}>{title}</Card.Title>
            <Card.Text style={{ color: '#B99468' }}>
              {info}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              MORE SERVICES
            </Modal.Title>
          </Modal.Header>
          <Modal.Header className="Modal-Skill-Header-Container">
            <h5 className="Model-Skills-Header" style={{ color: '#7AB5BF' }}>{TabletIcon} {'  '} Health History Forms</h5>
            <h5 className="Model-Skills-Header" style={{ color: '#7AB5BF' }}>{MailIcon} {'  '} E-Mail</h5>
            <h5 className="Model-Skills-Header" style={{ color: '#7AB5BF' }}>{LaptopIcon} {'  '} Online Scheduling</h5>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  {cardMaker(
                    medicalGif,
                    'Stop Wasting Paper!',
                    'Rooster Grin will take your current Health History Forms and convert the forms to a secure, HIPPA Compliant, online form.'
                  )}
                </Col>
                <Col xs={6} md={4}>
                  {cardMaker(
                    mailGif,
                    'Switch to Google Apps for Email',
                    'With Google Apps, users not only get access to best-in-class email, but they also can utilize Googles suite of Applications'
                  )}
                </Col>
                <Col xs={6} md={4}>
                  {cardMaker(
                    scheduleGif,
                    'Open Chair Online Scheduling',
                    'Now you can book new patient consults directly through your website. Allow a visitor to your website to book an appointment anytime.'
                  )}
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

export default ServiceModal