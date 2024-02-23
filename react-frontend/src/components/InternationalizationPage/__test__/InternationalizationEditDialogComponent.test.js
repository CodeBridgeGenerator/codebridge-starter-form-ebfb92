import React from "react";
import { render, screen } from "@testing-library/react";

import InternationalizationEditDialogComponent from "../InternationalizationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders internationalization edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <InternationalizationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("internationalization-edit-dialog-component")).toBeInTheDocument();
});
