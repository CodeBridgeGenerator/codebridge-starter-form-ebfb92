import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserAccountsPage from "../components/UserAccountsPage/UserAccountsPage";
import SingleUserAccountsPage from "../components/UserAccountsPage/SingleUserAccountsPage";
import ContentManagerPage from "../components/ContentManagerPage/ContentManagerPage";
import SingleContentManagerPage from "../components/ContentManagerPage/SingleContentManagerPage";
import EcommercePage from "../components/EcommercePage/EcommercePage";
import SingleEcommercePage from "../components/EcommercePage/SingleEcommercePage";
import InternationalizationPage from "../components/InternationalizationPage/InternationalizationPage";
import SingleInternationalizationPage from "../components/InternationalizationPage/SingleInternationalizationPage";
import UsagePage from "../components/UsagePage/UsagePage";
import SingleUsagePage from "../components/UsagePage/SingleUsagePage";
import ProjectManagementPage from "../components/ProjectManagementPage/ProjectManagementPage";
import SingleProjectManagementPage from "../components/ProjectManagementPage/SingleProjectManagementPage";
import HostingPage from "../components/HostingPage/HostingPage";
import SingleHostingPage from "../components/HostingPage/SingleHostingPage";
import ProtectionPage from "../components/ProtectionPage/ProtectionPage";
import SingleProtectionPage from "../components/ProtectionPage/SingleProtectionPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/userAccounts" exact element={<UserAccountsPage />} />
                    <Route path="/userAccounts/:singleUserAccountsId" exact element={<SingleUserAccountsPage />} />
                    <Route path="/contentManager" exact element={<ContentManagerPage />} />
                    <Route path="/contentManager/:singleContentManagerId" exact element={<SingleContentManagerPage />} />
                    <Route path="/ecommerce" exact element={<EcommercePage />} />
                    <Route path="/ecommerce/:singleEcommerceId" exact element={<SingleEcommercePage />} />
                    <Route path="/internationalization" exact element={<InternationalizationPage />} />
                    <Route path="/internationalization/:singleInternationalizationId" exact element={<SingleInternationalizationPage />} />
                    <Route path="/usage" exact element={<UsagePage />} />
                    <Route path="/usage/:singleUsageId" exact element={<SingleUsagePage />} />
                    <Route path="/projectManagement" exact element={<ProjectManagementPage />} />
                    <Route path="/projectManagement/:singleProjectManagementId" exact element={<SingleProjectManagementPage />} />
                    <Route path="/hosting" exact element={<HostingPage />} />
                    <Route path="/hosting/:singleHostingId" exact element={<SingleHostingPage />} />
                    <Route path="/protection" exact element={<ProtectionPage />} />
                    <Route path="/protection/:singleProtectionId" exact element={<SingleProtectionPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
