import React from "react";
import { render, screen } from "@testing-library/react";

import ContentManagerEditDialogComponent from "../ContentManagerEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contentManager edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContentManagerEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contentManager-edit-dialog-component")).toBeInTheDocument();
});
