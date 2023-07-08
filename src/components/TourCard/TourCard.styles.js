import styled from 'styled-components'

export const CardContainer = styled.div`
  min-height: 600px;
  min-width: 400px;
  max-width: 500px;
  border: 1px solid ${(props) => props.theme.button.secondary};
`
export const CardImage = styled.img`
  width: 100%;
  /* max-width: 500px; */
  /* height: auto; */
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
`

export const CardTitle = styled.h3`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`

export const CardDescription = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`
