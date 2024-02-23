import React from "react";
import { render, screen } from "@testing-library/react";

import ContentManagerCreateDialogComponent from "../ContentManagerCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contentManager create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContentManagerCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contentManager-create-dialog-component")).toBeInTheDocument();
});
