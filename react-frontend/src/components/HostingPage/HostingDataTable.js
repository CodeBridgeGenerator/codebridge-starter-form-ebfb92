
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const HostingDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.customDomain}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.sit}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.stg}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.prod}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.mir}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.ddos}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.ssl}  />
    const switchTemplate7 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.loadBalancer}  />
    const switchTemplate8 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.proxy}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="customDomain" header="Custom Domain Name" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="sit" header="Situational Internal testing" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="stg" header="Staging" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="prod" header="Production" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="mir" header="Mirror" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="ddos" header="DDOS Protection" body={switchTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="ssl" header="SSL (HTTPS)" body={switchTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="loadBalancer" header="Load Balancer" body={switchTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="proxy" header="Proxy Server" body={switchTemplate8} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default HostingDataTable;