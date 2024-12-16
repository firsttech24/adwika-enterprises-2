import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function page() {
  return (
    <div className="d-flex justify-content-center">
      <Button variant="success">React-Bootstrap Button</Button>
      <button className="btn btn-danger ms-3">Regular Bootstrap Button</button>
    </div>
  );
}
