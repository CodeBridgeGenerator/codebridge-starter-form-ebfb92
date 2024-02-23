import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectManagementCreateDialogComponent from "../ProjectManagementCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectManagement create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectManagementCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectManagement-create-dialog-component")).toBeInTheDocument();
});
