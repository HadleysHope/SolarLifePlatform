import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Login from "../Login";
import { MemoryRouter } from "react-router-dom";
jest.mock("axios");

describe("Login component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("submits the form with valid credentials", async () => {
    // Mock successful API response
    const mockResponse = {
      status: 200,
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    // Render the Login component within MemoryRouter
    const { getByLabelText, getByText, debug } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Debug the rendered component
    debug();

    // ...
  });
});
