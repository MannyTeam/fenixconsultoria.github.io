import { Container } from 'react-bootstrap';
import { MainCard } from '../../components/card/MainCard';
import {
    ABOUT_US,
    PROCEDURES_DIVISION,
    PROJECTS_DIVISION,
    TECHNICAL_SCIENTIFIC_TRAN_DIVISION,
    TRAINING_DIVISION,
} from '../../constants/Constants';
import { SimpleCard } from '../../components/card/SimpleCard';
import { SimpleCardContainer } from './home.styles';

export const WhoWeAre = () => {
    return(
        <Container>
            <SimpleCardContainer>
            <MainCard title='¿Quiénes Somos?' text={ABOUT_US}/>
            <SimpleCard
              icon='list-alt'
              title='División de Proyectos' 
              text={PROJECTS_DIVISION}
            />
            <SimpleCard
              icon='folder-plus'
              title='División de Capacitación' 
              text={TRAINING_DIVISION}
            />
            <SimpleCard
              icon='list-alt'
              title='División de Trámites' 
              text={PROCEDURES_DIVISION}
            />
            <SimpleCard
              icon='list-alt'
              title='División de Traducciones Técnicos-Cientificas' 
              text={TECHNICAL_SCIENTIFIC_TRAN_DIVISION}
            />
            </SimpleCardContainer>
        </Container>
    )};
