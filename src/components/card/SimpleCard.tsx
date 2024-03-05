import { MDBIcon } from "mdb-react-ui-kit";
import { Card } from "react-bootstrap";
import { SimpleCardStyled, SimpleCardTextStyled, SimpleCardTitleStyled } from "./card.styles";

type SimpleCardProps = {
    icon?: string;
    title?: string;
    text?: string; 
}
export const SimpleCard = ({ icon, title, text }: SimpleCardProps) => {
    return (
        <SimpleCardStyled>
          <Card.Body>
          <MDBIcon  size="2x" fas icon={icon} style={{ color: '#6A3E7F' }}/>
            <SimpleCardTitleStyled>
                {title}
            </SimpleCardTitleStyled>
            <SimpleCardTextStyled>
              {text}
            </SimpleCardTextStyled>
          </Card.Body>
        </SimpleCardStyled>
      );
};