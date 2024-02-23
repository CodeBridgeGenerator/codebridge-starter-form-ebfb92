
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const ContentManagerDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.fileUpload}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.cms}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.emailTemplates}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.messaging}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.dashboards}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.kambanBoards}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.adminDashboard}  />
    const switchTemplate7 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.calendering}  />
    const switchTemplate8 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.maps}  />
    const switchTemplate9 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.booking}  />
    const switchTemplate10 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.search}  />
    const switchTemplate11 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.imageGallery}  />
    const switchTemplate12 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.videoTube}  />
    const switchTemplate13 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.audioPods}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="fileUpload" header="File Upload to S3" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="cms" header="Content Manager" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="emailTemplates" header="Custom email Templates" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="messaging" header="Messaging Service" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="dashboards" header="Dashboarding" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="kambanBoards" header="Kamban Boards" body={switchTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="adminDashboard" header="Admin Dashboard" body={switchTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="calendering" header="Calendering" body={switchTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="maps" header="Maps" body={switchTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="booking" header="Booking" body={switchTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="search" header="Search" body={switchTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="imageGallery" header="Image Gallery" body={switchTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="videoTube" header="Video Tube" body={switchTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="audioPods" header="Audio Pods" body={switchTemplate13} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default ContentManagerDataTable;