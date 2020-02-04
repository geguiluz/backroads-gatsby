import styled from "styled-components"
const color = "blue"

const Button = styled.button`
  color: ${props => props.color};
  background: ${color};
  padding: 1rem;
  margin: 1rem;
  font-size: ${props => (props.size ? "3rem" : "1rem")};
`
export default Button
