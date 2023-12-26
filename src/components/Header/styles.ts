import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  height: 6.5rem;  
  width: 70rem;
  display: flex;
  justify-content:space-between;
  
  align-items:center;

  div{
    display: flex;
  }
`;


export const BaseButtonHeader = styled.button`
  height: 2.375rem;
  padding: 0.8rem;
  border-radius: 6px;
  cursor : pointer;
  display: flex;
  gap: 0.25rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ButtonHeaderCity = styled(BaseButtonHeader)`
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-900']};
  font-size: 0.875rem;
  line-height: 130%;
  margin-right: 0.75rem;
`

export const ButtonHeaderCart = styled(BaseButtonHeader)`
  background: ${props => props.theme['yellow-100']};
  position: relative;
  
  span {
    background: ${props => props.theme['yellow-900']};
    color: ${props => props.theme['white']};
    width: 1.25rem;
    padding: 0.188rem;
    border-radius: 100%;
    font-size: 0.75rem;
    font-weight: 700;
    margin: -1.875rem 0 0 2.5rem;
    position: absolute;
  }

  svg{
    color: ${props => props.theme['yellow-900']};
  }

`
