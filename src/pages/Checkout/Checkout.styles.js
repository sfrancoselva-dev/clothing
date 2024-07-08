import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0 auto;
  font-size: 18px;
  min-width: 992px;
  overflow: auto;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #a9a9a9;

  &:last-child {
    border-bottom: 0;
  }
`;

export const TableHeading = styled.th`
  padding: 20px;
  text-align: center;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
`;

export const ProductImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 90%;
  height: 250px;
`;

export const Total = styled(TableData)`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 50px 20px 0 0;
  text-align: right;
`;

export const Arrow = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  padding: 0 10px;
`;

export const RemoveIcon = styled(TableData)`
  font-weight: 700;
  cursor: pointer;
`;
