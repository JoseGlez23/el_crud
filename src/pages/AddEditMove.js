import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { storage } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  categorie: "",
  description: "",
  duration: "",
  price: "",
};

const AddEditMove = () => {
  const [data, setData] = useState(initialState);
  const {name, category, duration, price} = data;
  const [file, setfile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = () => {};

  return (
    <div>
      <Grid
        centered
        verticalAlign="middle"
        columns="3"
        style={{ height: "80vh" }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? (
                <Loader active inline="centered" size="huge" />
              ) : (
                <>
                  <h2>Add Movie</h2>
                  <Form>
                    <Form.Input
                      label="Name"
                      placeHolder="Enter Name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      autoFocus
                    />
                       <Form.Input
                      label="Email"
                      placeHolder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                         <Form.Input
                      label="Email"
                      placeHolder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                  </Form>
                </>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AddEditMove;
