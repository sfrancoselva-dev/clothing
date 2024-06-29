import "./Checkout.styles.css";

const Checkout = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>

        <tr>
          <td>
            <div className="productImage"></div>
          </td>
          <td>Brown Cowboy</td>
          <td>
            <span className="arrow">❰</span>
            <span className="quantity">2</span>
            <span className="arrow">❱</span>
          </td>
          <td>70</td>
          <td className="remove-icon">✕</td>
        </tr>

        <tr>
          <td>
            <div className="productImage"></div>
          </td>
          <td>Brown Cowboy</td>
          <td>
            <span className="arrow">❰</span>
            <span className="quantity">2</span>
            <span className="arrow">❱</span>
          </td>
          <td>70</td>
          <td className="remove-icon">✕</td>
        </tr>

        <tr>
          <td>
            <div className="productImage"></div>
          </td>
          <td>Grey Brim</td>
          <td>
            <span className="arrow">❰</span>
            <span className="quantity">2</span>
            <span className="arrow">❱</span>
          </td>
          <td>25</td>
          <td className="remove-icon">✕</td>
        </tr>

        <tr>
          <td colSpan={5} className="total">
            TOTAL: $95
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Checkout;
