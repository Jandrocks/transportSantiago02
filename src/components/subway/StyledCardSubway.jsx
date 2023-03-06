import styled from "styled-components";

export const ContainerSubway = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2px;
`;
export const CardsSubway = styled.ul`
  margin: 2px;
  background: var(--color-bg-variant);
  border-radius: 0 0 1rem 1rem;
  height: fit-content;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border: 2px solid var(--color-primary);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
export const LineSubway = styled.li`
  font-size: 14px;
`;
export const StatusSubway = styled.li`
  font-size: 15px;
`;
