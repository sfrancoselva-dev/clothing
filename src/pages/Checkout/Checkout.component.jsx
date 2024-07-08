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

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cart.selector";

import {
  actionUpdateQty,
  actionDeleteFromCart,
} from "../../store/cart/cart.action";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

  const updateQty = (e) => {
    const { id, flag } = e.target.dataset;
    dispatch(actionUpdateQty(id, flag));
  };

  const deleteCartItem = (e) => {
    const { id } = e.target.dataset;
    dispatch(actionDeleteFromCart(id));
  };

  return (
    <>
      <Table>
        <TableRow>
          <TableHeading>Product</TableHeading>
          <TableHeading>Description</TableHeading>
          <TableHeading>Quantity</TableHeading>
          <TableHeading>Price</TableHeading>
          <TableHeading>Remove</TableHeading>
        </TableRow>
        {cartItems.map((cartItem) => {
          return (
            <TableRow>
              <TableData>
                <ProductImage
                  style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
                ></ProductImage>
              </TableData>
              <TableData>{cartItem.name}</TableData>
              <TableData>
                <Arrow onClick={updateQty} data-id={cartItem.id} data-flag="-">
                  ❰
                </Arrow>
                <Quantity>{cartItem.quantity}</Quantity>
                <Arrow onClick={updateQty} data-id={cartItem.id} data-flag="+">
                  ❱
                </Arrow>
              </TableData>
              <TableData>{cartItem.price}</TableData>
              <RemoveIcon data-id={cartItem.id} onClick={deleteCartItem}>
                ✕
              </RemoveIcon>
            </TableRow>
          );
        })}

        <TableRow>
          <Total colSpan={5}>TOTAL: ${totalPrice}</Total>
        </TableRow>
      </Table>
    </>
  );
};

export default Checkout;
