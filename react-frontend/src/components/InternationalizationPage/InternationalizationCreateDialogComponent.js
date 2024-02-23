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

const InternationalizationCreateDialogComponent = (props) => {
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
            dateFormat: _entity.dateFormat,
            multiLanguage: _entity.multiLanguage,
            multiCurrency: _entity.multiCurrency,
            multiRegion: _entity.multiRegion,
        };

        setLoading(true);

        try {
            
        const result = await client.service("internationalization").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info internationalization created successfully" });
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
            <div role="internationalization-create-dialog-component">
            <div>
                <p className="m-0">dateFormat:</p>
                <InputText className="w-full mb-3" value={_entity?.dateFormat} onChange={(e) => setValByKey("dateFormat", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">multiLanguage:</p>
                <Checkbox checked={_entity?.multiLanguage} onChange={ (e) => setValByKey("multiLanguage", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Multi Currency:</p>
                <Checkbox checked={_entity?.multiCurrency} onChange={ (e) => setValByKey("multiCurrency", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Multi Region:</p>
                <Checkbox checked={_entity?.multiRegion} onChange={ (e) => setValByKey("multiRegion", e.checked)}  ></Checkbox>
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

export default connect(mapState, mapDispatch)(InternationalizationCreateDialogComponent);
