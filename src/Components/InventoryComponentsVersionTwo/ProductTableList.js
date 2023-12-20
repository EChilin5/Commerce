import React from "react";
import Table from "react-bootstrap/Table";
import "./ProductTableList.css";

const ProductTableList = (props) => {
  return (
    <div className="prduct-table-chart">
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
          {props.product.slice(props.startIndex, props.endIndex).map((item) => {
            return (
              <tr key={item.productsId}>
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
                <td className="product-chart-btn">
                  <button>Update</button>
                </td>
                <td className="product-chart-btn-delete">
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
