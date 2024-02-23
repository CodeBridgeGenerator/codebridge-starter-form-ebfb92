
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const ProjectManagementDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.projectDocumentation}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.minutesOfmeeting}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.projectCharter}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.projectUATSignOff}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.projectMigrationSignOff}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.productionMigration}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.goLive}  />
    const switchTemplate7 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.projectDelivered}  />
    const switchTemplate8 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.maintenance}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="projectDocumentation" header="Project Documentation" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="minutesOfmeeting" header="Minutes Of meeting" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="projectCharter" header="Project Charter" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="projectUATSignOff" header="Project UAT Sign Off" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="projectMigrationSignOff" header="Project Migration Sign Off" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="productionMigration" header="Production Migration Complete" body={switchTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="goLive" header="Go Live Report" body={switchTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="projectDelivered" header="Project Delivered Report" body={switchTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="maintenance" header="Maintenance Requirements" body={switchTemplate8} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default ProjectManagementDataTable;