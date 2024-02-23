import React from "react";
import { render, screen } from "@testing-library/react";

import ContentManagerPage from "../ContentManagerPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contentManager page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContentManagerPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contentManager-datatable")).toBeInTheDocument();
    expect(screen.getByRole("contentManager-add-button")).toBeInTheDocument();
});
