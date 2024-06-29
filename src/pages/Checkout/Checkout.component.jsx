import {
  Table,
  TableRow,
  TableHeading,
  TableData,
  ProductImage,
  Total,
  Arrow,
  Quantity,
  RemoveIcon,
} from "./Checkout.styles";

const Checkout = () => {
  return (
    <div>
      <Table>
        <TableRow>
          <TableHeading>Product</TableHeading>
          <TableHeading>Description</TableHeading>
          <TableHeading>Quantity</TableHeading>
          <TableHeading>Price</TableHeading>
          <TableHeading>Remove</TableHeading>
        </TableRow>

        <TableRow>
          <TableData>
            <ProductImage></ProductImage>
          </TableData>
          <TableData>Brown Cowboy</TableData>
          <TableData>
            <Arrow>❰</Arrow>
            <Quantity>2</Quantity>
            <Arrow>❱</Arrow>
          </TableData>
          <TableData>70</TableData>
          <RemoveIcon>✕</RemoveIcon>
        </TableRow>

        <TableRow>
          <TableData>
            <ProductImage></ProductImage>
          </TableData>
          <TableData>Brown Cowboy</TableData>
          <TableData>
            <Arrow>❰</Arrow>
            <Quantity>2</Quantity>
            <Arrow>❱</Arrow>
          </TableData>
          <TableData>70</TableData>
          <RemoveIcon>✕</RemoveIcon>
        </TableRow>

        <TableRow>
          <TableData>
            <ProductImage></ProductImage>
          </TableData>
          <TableData>Grey Brim</TableData>
          <TableData>
            <Arrow>❰</Arrow>
            <Quantity>2</Quantity>
            <Arrow>❱</Arrow>
          </TableData>
          <TableData>25</TableData>
          <RemoveIcon>✕</RemoveIcon>
        </TableRow>

        <TableRow>
          <Total colSpan={5}>TOTAL: $95</Total>
        </TableRow>
      </Table>
    </div>
  );
};

export default Checkout;
