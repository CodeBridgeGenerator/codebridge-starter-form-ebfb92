
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';

import moment from "moment";

const EcommerceDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const switchTemplate0 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.subscription}  />
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.payments}  />
    const switchTemplate2 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.transfers}  />
    const switchTemplate3 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.billings}  />
    const switchTemplate4 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.plans}  />
    const switchTemplate5 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.invoicing}  />
    const switchTemplate6 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.shoppingcart}  />
    const switchTemplate7 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.marketPlace}  />
    const switchTemplate8 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.productManagement}  />
    const switchTemplate9 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.inventorySystem}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="subscription" header="Subscription" body={switchTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="payments" header="Receive Payments" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="transfers" header="Make Transfers" body={switchTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="billings" header="Billings" body={switchTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="plans" header="plans" body={switchTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="invoicing" header="Invoicing" body={switchTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="shoppingcart" header="Shopping Cart" body={switchTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="marketPlace" header="Market Place" body={switchTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="productManagement" header="ProductManagement" body={switchTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="inventorySystem" header="InventorySystem" body={switchTemplate9} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default EcommerceDataTable;