import { Col, Row } from "react-bootstrap";
import { DataContainer, InformationRow, SocialMediaContainer } from "./navBar.styles";
import { MDBIcon } from "mdb-react-ui-kit";

export const Information = () => {
    return (
        <InformationRow style={{marginTop: '20px'}}>
            <Col xs={12} md={8}>
            <DataContainer>
                <MDBIcon fas icon="envelope" />
                <a href="mailto:info@fenixconsultoria.com.mx">
                    info@fenixconsultoria.com.mx
                </a>
                <MDBIcon fas icon="mobile-alt" />
                (33) 2734-5701
                <MDBIcon fab icon="whatsapp" />
                (33) 1174-1245
            </DataContainer>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
                <SocialMediaContainer>
                    <MDBIcon fab icon="facebook" />
                    <MDBIcon fab icon="linkedin" />
                    <MDBIcon fab icon="whatsapp" />
                </SocialMediaContainer>
            </Col>
        </InformationRow>
    )
};