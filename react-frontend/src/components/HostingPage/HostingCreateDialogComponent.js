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

const HostingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            customDomain: _entity.customDomain,
            sit: _entity.sit,
            stg: _entity.stg,
            prod: _entity.prod,
            mir: _entity.mir,
            ddos: _entity.ddos,
            ssl: _entity.ssl,
            loadBalancer: _entity.loadBalancer,
            proxy: _entity.proxy,
        };

        setLoading(true);

        try {
            
        const result = await client.service("hosting").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info hosting created successfully" });
        props.onCreateResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
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

    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="hosting-create-dialog-component">
            <div>
                <p className="m-0">Custom Domain Name:</p>
                <Checkbox checked={_entity?.customDomain} onChange={ (e) => setValByKey("customDomain", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Situational Internal testing:</p>
                <Checkbox checked={_entity?.sit} onChange={ (e) => setValByKey("sit", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Staging:</p>
                <Checkbox checked={_entity?.stg} onChange={ (e) => setValByKey("stg", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Production:</p>
                <Checkbox checked={_entity?.prod} onChange={ (e) => setValByKey("prod", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Mirror:</p>
                <Checkbox checked={_entity?.mir} onChange={ (e) => setValByKey("mir", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">DDOS Protection:</p>
                <Checkbox checked={_entity?.ddos} onChange={ (e) => setValByKey("ddos", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">SSL (HTTPS):</p>
                <Checkbox checked={_entity?.ssl} onChange={ (e) => setValByKey("ssl", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Load Balancer:</p>
                <Checkbox checked={_entity?.loadBalancer} onChange={ (e) => setValByKey("loadBalancer", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Proxy Server:</p>
                <Checkbox checked={_entity?.proxy} onChange={ (e) => setValByKey("proxy", e.checked)}  ></Checkbox>
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
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(HostingCreateDialogComponent);
