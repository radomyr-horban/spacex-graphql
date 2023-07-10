import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.button.secondary};

  min-height: 600px;

  width: 25vw;
  margin-bottom: 50px;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.title.primary};

  margin-bottom: 20px;
  text-transform: uppercase;
`

export const CardDescription = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Lato', sans-serif;

  margin-bottom: 40px;
  padding: 0 40px;
  min-height: 250px;
  text-align: justify;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`
