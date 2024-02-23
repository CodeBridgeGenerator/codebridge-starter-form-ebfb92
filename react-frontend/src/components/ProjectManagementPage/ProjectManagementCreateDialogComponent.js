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

const ProjectManagementCreateDialogComponent = (props) => {
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
            projectDocumentation: _entity.projectDocumentation,
            minutesOfmeeting: _entity.minutesOfmeeting,
            projectCharter: _entity.projectCharter,
            projectUATSignOff: _entity.projectUATSignOff,
            projectMigrationSignOff: _entity.projectMigrationSignOff,
            productionMigration: _entity.productionMigration,
            goLive: _entity.goLive,
            projectDelivered: _entity.projectDelivered,
            maintenance: _entity.maintenance,
        };

        setLoading(true);

        try {
            
        const result = await client.service("projectManagement").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info projectManagement created successfully" });
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
            <div role="projectManagement-create-dialog-component">
            <div>
                <p className="m-0">Project Documentation:</p>
                <Checkbox checked={_entity?.projectDocumentation} onChange={ (e) => setValByKey("projectDocumentation", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Minutes Of meeting:</p>
                <Checkbox checked={_entity?.minutesOfmeeting} onChange={ (e) => setValByKey("minutesOfmeeting", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Project Charter:</p>
                <Checkbox checked={_entity?.projectCharter} onChange={ (e) => setValByKey("projectCharter", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Project UAT Sign Off:</p>
                <Checkbox checked={_entity?.projectUATSignOff} onChange={ (e) => setValByKey("projectUATSignOff", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Project Migration Sign Off:</p>
                <Checkbox checked={_entity?.projectMigrationSignOff} onChange={ (e) => setValByKey("projectMigrationSignOff", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Production Migration Complete:</p>
                <Checkbox checked={_entity?.productionMigration} onChange={ (e) => setValByKey("productionMigration", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Go Live Report:</p>
                <Checkbox checked={_entity?.goLive} onChange={ (e) => setValByKey("goLive", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Project Delivered Report:</p>
                <Checkbox checked={_entity?.projectDelivered} onChange={ (e) => setValByKey("projectDelivered", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Maintenance Requirements:</p>
                <Checkbox checked={_entity?.maintenance} onChange={ (e) => setValByKey("maintenance", e.checked)}  ></Checkbox>
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

export default connect(mapState, mapDispatch)(ProjectManagementCreateDialogComponent);
