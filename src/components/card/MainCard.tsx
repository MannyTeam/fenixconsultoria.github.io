import { Card } from 'react-bootstrap';
import { CardStyled, CardTextStyled, CardTitleStyled, } from "./card.styles"
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

type MainCardProps = {
    title?: string;
    text?: string;
}

export const MainCard = ({ title, text }: MainCardProps) => {
    return (
    <CardStyled >
        <Card.Body>
            <CardTitleStyled>
                {title}
            </CardTitleStyled>
            <CardTextStyled>
                {text}
            </CardTextStyled>
            <div className="text-center">
            <Card.Link as={Link} to="/aboutus">
                Ver Más <MDBIcon fas icon="chevron-right" />
            </Card.Link>
            </div>
            </Card.Body>
    </CardStyled>
    )
};