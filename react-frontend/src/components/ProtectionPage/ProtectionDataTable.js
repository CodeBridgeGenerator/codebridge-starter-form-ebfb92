
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const ProtectionDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.rateLimiter}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.blocking}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.throttling}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.masking}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.redirect}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.mirror}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.ochestration}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="rateLimiter" header="Rate Limiter" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="blocking" header="Blocking" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="throttling" header="Throttling" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="masking" header="Masking" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="redirect" header="Redirect" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="mirror" header="Mirror" body={switchTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="ochestration" header="Ochestration" body={switchTemplate6} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default ProtectionDataTable;