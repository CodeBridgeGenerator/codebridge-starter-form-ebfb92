import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectManagementPage from "../ProjectManagementPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectManagement page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectManagementPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectManagement-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectManagement-add-button")).toBeInTheDocument();
});
