import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const EcommerceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            subscription: _entity.subscription,
            payments: _entity.payments,
            transfers: _entity.transfers,
            billings: _entity.billings,
            plans: _entity.plans,
            invoicing: _entity.invoicing,
            shoppingcart: _entity.shoppingcart,
            marketPlace: _entity.marketPlace,
            productManagement: _entity.productManagement,
            inventorySystem: _entity.inventorySystem,
        };

        setLoading(true);
        try {
            
        const result = await client.service("ecommerce").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info ecommerce updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options

    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="ecommerce-edit-dialog-component">
                <div>
                <p className="m-0">Subscription:</p>
                <Checkbox checked={_entity?.subscription} onChange={ (e) => setValByKey("subscription", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Receive Payments:</p>
                <Checkbox checked={_entity?.payments} onChange={ (e) => setValByKey("payments", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Make Transfers:</p>
                <Checkbox checked={_entity?.transfers} onChange={ (e) => setValByKey("transfers", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Billings:</p>
                <Checkbox checked={_entity?.billings} onChange={ (e) => setValByKey("billings", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">plans:</p>
                <Checkbox checked={_entity?.plans} onChange={ (e) => setValByKey("plans", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Invoicing:</p>
                <Checkbox checked={_entity?.invoicing} onChange={ (e) => setValByKey("invoicing", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Shopping Cart:</p>
                <Checkbox checked={_entity?.shoppingcart} onChange={ (e) => setValByKey("shoppingcart", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Market Place:</p>
                <Checkbox checked={_entity?.marketPlace} onChange={ (e) => setValByKey("marketPlace", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">ProductManagement:</p>
                <Checkbox checked={_entity?.productManagement} onChange={ (e) => setValByKey("productManagement", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">InventorySystem:</p>
                <Checkbox checked={_entity?.inventorySystem} onChange={ (e) => setValByKey("inventorySystem", e.checked)}  ></Checkbox>
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(EcommerceCreateDialogComponent);
