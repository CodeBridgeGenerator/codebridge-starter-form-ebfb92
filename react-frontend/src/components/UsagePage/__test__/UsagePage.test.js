import React from "react";
import { render, screen } from "@testing-library/react";

import UsagePage from "../UsagePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders usage page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UsagePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("usage-datatable")).toBeInTheDocument();
    expect(screen.getByRole("usage-add-button")).toBeInTheDocument();
});
