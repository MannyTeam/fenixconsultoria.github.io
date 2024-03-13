import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { FooterContainer, FooterText, FooterMobile, SocialMediaContainer } from './footer.styles';
import { MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {

    return (
        <FooterContainer>
          <Container>
            <Row>
              <FooterMobile>
                <MDBIcon style={{marginTop: '3px', marginRight: '4px'}}fas icon="envelope" />
                  <a href="mailto:info@fenixconsultoria.com.mx">
                      info@fenixconsultoria.com.mx
                  </a>
              </FooterMobile>
            </Row>
            <Row>
            <Col xs={12} className="text-md-end">
              <SocialMediaContainer>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/fenixcons/"
                  >
                      <MDBIcon fab icon="facebook" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/urania-barahona-bb017212b/"
                  >
                      <MDBIcon fab icon="linkedin" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/523326279248"
                  >
                      <MDBIcon fab icon="whatsapp" />
                  </a>
              </SocialMediaContainer>
            </Col>
            </Row>
            <Row>
              <FooterMobile>
                  <Col xs={6} className="text-md-end">
                    <MDBIcon fas icon="mobile-alt" />
                      {'  '}(33) 2734-5701
                  </Col>
                  <Col xs={6} className="text-md-end">
                    <MDBIcon fab icon="whatsapp" />
                    {'  '} (33) 1174-1245
                  </Col>
              </FooterMobile>
            </Row>
            <Row>
              <Col>
                <FooterText>© Copyright <span style={{ fontWeight: 'bold', color: '#563167' }}>Fenix Consultoria</span>. All Rights Reserved</FooterText>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col xs lg="3">
                <FooterText>
                  <span style={{ fontWeight: 'bold' }}>  Designed by Quantum Digit </span> 
                     <a style={{fontSize: '18px', color:'#000'}} href="https://quantum3digit.com/" target='_blank' rel="noreferrer noopener">quantum3digit.com</a> 
                    </FooterText>
              </Col>
            </Row>
          </Container>
        </FooterContainer>
      )
};