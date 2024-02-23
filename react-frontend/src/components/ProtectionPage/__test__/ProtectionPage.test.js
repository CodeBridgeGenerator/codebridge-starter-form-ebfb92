import React from "react";
import { render, screen } from "@testing-library/react";

import ProtectionPage from "../ProtectionPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders protection page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProtectionPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("protection-datatable")).toBeInTheDocument();
    expect(screen.getByRole("protection-add-button")).toBeInTheDocument();
});
