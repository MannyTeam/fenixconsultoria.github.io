import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background-color: #f1f7fd;
    color: white;
    padding: 20px 0;
    margin-top: 30px;
`;

export const FooterText = styled.p`
    text-align: center;
    color: #444444;
    font-size: 16px;
`;

export const FooterMobile = styled.div`
    display: none;

    @media (max-width: 600px) {
        text-align: center;
        display:  flex;
        justify-content: center;
        color: #000;
        margin-bottom: 10px;
    }
`;

export const SocialMediaContainer = styled.div`
  display: none;
  

  @media (max-width: 600px)
  {
    i {
        color: #437099;
      }
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-around;
    padding-right: 0px;
  }
`;
