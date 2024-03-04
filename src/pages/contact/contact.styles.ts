import styled from 'styled-components';

export const ResponsiveMapWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  margin-top: 132px;
  @media (max-width: 768px){
    margin-top: 70px;
  }
`;

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 32px
`;

export const DataIcons = styled.div`
    display: flex;
    margin-bottom: 15px;
    max-width: 300px;
    cursor: pointer;
    &:hover {
        > i {
            background-color: #1977cc; 
            color: #fff;
        }
    }
    i {
        margin-right: 20px;
        ont-size: 20px;
        color: #6A3E7F;
        float: left;
        width: 64px;
        height: 64px;
        background-color: #d6e9fa;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
        
    }
    h4 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
        color: #2c4964;
    }
    p {
        margin-bottom: 0;
        font-size: 14px;
        color: #4b7dab;
    }

`;

export const PersonalDataContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    input {
        margin-bottom: 20px;
        border-radius: 5px;
    }
    @media (min-width: 768px){
        justify-content: space-between;
        flex-direction: row;
        input {
            max-width: 300px
        }    
      }
`;

export const InformationContect = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        margin-bottom: 20px;
    }
`;
export const StyledButton = styled.button`
  background-color: #6A3E7F;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
  margin-top: 15px;
  &:hover {
    background-color: #a87fbb;
  }
`;