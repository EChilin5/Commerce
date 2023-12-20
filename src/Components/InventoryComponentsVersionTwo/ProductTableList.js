import React from "react";
import Table from "react-bootstrap/Table";

const ProductTableList = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.product.map((item) => {
            return (
              <tr>
                <td>{item.productsId + 1}</td>
                <td>{item.productName}</td>
                <td>
                  <img
                    src={item.productImage}
                    alt="product"
                    width="100%"
                    height="100px"
                  />
                </td>
                <td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book...
                </td>
                <td>{item.productPrice}</td>
                <td>{item.quantity}</td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTableList;
