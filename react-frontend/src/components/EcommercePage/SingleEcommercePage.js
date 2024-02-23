import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleEcommercePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("ecommerce")
            .get(urlParams.singleEcommerceId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Ecommerce", type: "error", message: error.message || "Failed get ecommerce" });
            });
    }, [props,urlParams.singleEcommerceId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Ecommerce</h3>
                </div>
                <p>ecommerce/{urlParams.singleEcommerceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Subscription</label>
                    <div className="ml-3"><InputSwitch checked={rowData.subscription} onChange={ (e) => setValByKey("subscription", e.value)}  /></div>
                    <label className="text-sm text-primary">Receive Payments</label>
                    <div className="ml-3"><InputSwitch checked={rowData.payments} onChange={ (e) => setValByKey("payments", e.value)}  /></div>
                    <label className="text-sm text-primary">Make Transfers</label>
                    <div className="ml-3"><InputSwitch checked={rowData.transfers} onChange={ (e) => setValByKey("transfers", e.value)}  /></div>
                    <label className="text-sm text-primary">Billings</label>
                    <div className="ml-3"><InputSwitch checked={rowData.billings} onChange={ (e) => setValByKey("billings", e.value)}  /></div>
                    <label className="text-sm text-primary">plans</label>
                    <div className="ml-3"><InputSwitch checked={rowData.plans} onChange={ (e) => setValByKey("plans", e.value)}  /></div>
                    <label className="text-sm text-primary">Invoicing</label>
                    <div className="ml-3"><InputSwitch checked={rowData.invoicing} onChange={ (e) => setValByKey("invoicing", e.value)}  /></div>
                    <label className="text-sm text-primary">Shopping Cart</label>
                    <div className="ml-3"><InputSwitch checked={rowData.shoppingcart} onChange={ (e) => setValByKey("shoppingcart", e.value)}  /></div>
                    <label className="text-sm text-primary">Market Place</label>
                    <div className="ml-3"><InputSwitch checked={rowData.marketPlace} onChange={ (e) => setValByKey("marketPlace", e.value)}  /></div>
                    <label className="text-sm text-primary">ProductManagement</label>
                    <div className="ml-3"><InputSwitch checked={rowData.productManagement} onChange={ (e) => setValByKey("productManagement", e.value)}  /></div>
                    <label className="text-sm text-primary">InventorySystem</label>
                    <div className="ml-3"><InputSwitch checked={rowData.inventorySystem} onChange={ (e) => setValByKey("inventorySystem", e.value)}  /></div>
            
                    <label className="text-sm text-primary">created</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    <label className="text-sm text-primary">updated</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleEcommercePage);
