
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const UserAccountsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.emailPassword}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.google}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.facebook}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.linkedin}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.github}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.emailInvite}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="emailPassword" header="emailPassword" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="google" header="Google Sign Up" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="facebook" header="Facebook Sign Up" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="linkedin" header="Linkedin Sign Up" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="github" header="Github Sign Up" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="emailInvite" header="Email By Invitation" body={switchTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default UserAccountsDataTable;