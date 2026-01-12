import styled from 'styled-components';
import Link from 'next/link';

export const MenuCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const MenuCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  width:384px;
  height: 216px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  color: #333333;
  line-height: 1.3;
  align-self: flex-start;
`;

export const ActionLabel = styled.span`
  font-size: 1.8rem;
  color: #666666;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
`;

export const ArrowIcon = styled.span`
  color: #666666;
  font-size: 1.5rem;
`;
