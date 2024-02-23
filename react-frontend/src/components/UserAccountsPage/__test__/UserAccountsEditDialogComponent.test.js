import React from "react";
import { render, screen } from "@testing-library/react";

import UserAccountsEditDialogComponent from "../UserAccountsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userAccounts edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserAccountsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userAccounts-edit-dialog-component")).toBeInTheDocument();
});
