import React from "react";
import Form from "react-bootstrap/Form";

export const SearchComponent = (props) => {
  const updateText = (event) => {
    event.preventDefault();
    props.searchTextResult(event.target.value.trim());
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={updateText}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};
