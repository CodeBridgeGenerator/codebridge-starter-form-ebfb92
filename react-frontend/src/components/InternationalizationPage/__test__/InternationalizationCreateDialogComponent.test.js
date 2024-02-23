import React from "react";
import { render, screen } from "@testing-library/react";

import InternationalizationCreateDialogComponent from "../InternationalizationCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders internationalization create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InternationalizationCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("internationalization-create-dialog-component")).toBeInTheDocument();
});
