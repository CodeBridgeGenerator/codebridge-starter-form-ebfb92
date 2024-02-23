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

const ContentManagerCreateDialogComponent = (props) => {
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
            fileUpload: _entity.fileUpload,
            cms: _entity.cms,
            emailTemplates: _entity.emailTemplates,
            messaging: _entity.messaging,
            dashboards: _entity.dashboards,
            kambanBoards: _entity.kambanBoards,
            adminDashboard: _entity.adminDashboard,
            calendering: _entity.calendering,
            maps: _entity.maps,
            booking: _entity.booking,
            search: _entity.search,
            imageGallery: _entity.imageGallery,
            videoTube: _entity.videoTube,
            audioPods: _entity.audioPods,
        };

        setLoading(true);

        try {
            
        const result = await client.service("contentManager").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info contentManager created successfully" });
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
            <div role="contentManager-create-dialog-component">
            <div>
                <p className="m-0">File Upload to S3:</p>
                <Checkbox checked={_entity?.fileUpload} onChange={ (e) => setValByKey("fileUpload", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Content Manager:</p>
                <Checkbox checked={_entity?.cms} onChange={ (e) => setValByKey("cms", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Custom email Templates:</p>
                <Checkbox checked={_entity?.emailTemplates} onChange={ (e) => setValByKey("emailTemplates", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Messaging Service:</p>
                <Checkbox checked={_entity?.messaging} onChange={ (e) => setValByKey("messaging", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Dashboarding:</p>
                <Checkbox checked={_entity?.dashboards} onChange={ (e) => setValByKey("dashboards", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Kamban Boards:</p>
                <Checkbox checked={_entity?.kambanBoards} onChange={ (e) => setValByKey("kambanBoards", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Admin Dashboard:</p>
                <Checkbox checked={_entity?.adminDashboard} onChange={ (e) => setValByKey("adminDashboard", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Calendering:</p>
                <Checkbox checked={_entity?.calendering} onChange={ (e) => setValByKey("calendering", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Maps:</p>
                <Checkbox checked={_entity?.maps} onChange={ (e) => setValByKey("maps", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Booking:</p>
                <Checkbox checked={_entity?.booking} onChange={ (e) => setValByKey("booking", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Search:</p>
                <Checkbox checked={_entity?.search} onChange={ (e) => setValByKey("search", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Image Gallery:</p>
                <Checkbox checked={_entity?.imageGallery} onChange={ (e) => setValByKey("imageGallery", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Video Tube:</p>
                <Checkbox checked={_entity?.videoTube} onChange={ (e) => setValByKey("videoTube", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Audio Pods:</p>
                <Checkbox checked={_entity?.audioPods} onChange={ (e) => setValByKey("audioPods", e.checked)}  ></Checkbox>
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

export default connect(mapState, mapDispatch)(ContentManagerCreateDialogComponent);
