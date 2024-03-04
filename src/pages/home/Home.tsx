import { Container } from 'react-bootstrap';
import bannerImg from '../../assets/hero-bg.jpg';
import { HomePageStyled, ImageContainer, TextImgContainer } from './home.styles';
import {WhoWeAre} from './WhoWeAre';
import { Agenda } from '../agenda/Agenda';

export const HomePage = () => {
    return(
        <>
            <HomePageStyled>
                <ImageContainer  url={bannerImg} />
                <Container>
                <TextImgContainer style={{ position: 'absolute', top: '30% '}}>
                    <h1 style={{ fontWeight: 'bold' }}>Fénix</h1>
                    <h2 style={{ fontWeight: '400' }}>Consultoria en regulación sanitaria</h2>
                </TextImgContainer>
                </Container>      
                <WhoWeAre/>
                <Agenda />
            </HomePageStyled>
        </>
    )
}