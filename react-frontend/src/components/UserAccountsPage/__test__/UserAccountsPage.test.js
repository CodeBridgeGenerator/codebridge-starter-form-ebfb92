import React from "react";
import { render, screen } from "@testing-library/react";

import UserAccountsPage from "../UserAccountsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userAccounts page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserAccountsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userAccounts-datatable")).toBeInTheDocument();
    expect(screen.getByRole("userAccounts-add-button")).toBeInTheDocument();
});
