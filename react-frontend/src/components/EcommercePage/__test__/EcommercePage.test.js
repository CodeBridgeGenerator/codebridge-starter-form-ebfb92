import React from "react";
import { render, screen } from "@testing-library/react";

import EcommercePage from "../EcommercePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders ecommerce page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EcommercePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ecommerce-datatable")).toBeInTheDocument();
    expect(screen.getByRole("ecommerce-add-button")).toBeInTheDocument();
});
