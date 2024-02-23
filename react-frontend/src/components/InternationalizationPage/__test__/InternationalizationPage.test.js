import React from "react";
import { render, screen } from "@testing-library/react";

import InternationalizationPage from "../InternationalizationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders internationalization page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InternationalizationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("internationalization-datatable")).toBeInTheDocument();
    expect(screen.getByRole("internationalization-add-button")).toBeInTheDocument();
});
