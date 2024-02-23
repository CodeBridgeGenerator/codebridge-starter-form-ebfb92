import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleProjectManagementPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("projectManagement")
            .get(urlParams.singleProjectManagementId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "ProjectManagement", type: "error", message: error.message || "Failed get projectManagement" });
            });
    }, [props,urlParams.singleProjectManagementId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">ProjectManagement</h3>
                </div>
                <p>projectManagement/{urlParams.singleProjectManagementId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Project Documentation</label>
                    <div className="ml-3"><InputSwitch checked={rowData.projectDocumentation} onChange={ (e) => setValByKey("projectDocumentation", e.value)}  /></div>
                    <label className="text-sm text-primary">Minutes Of meeting</label>
                    <div className="ml-3"><InputSwitch checked={rowData.minutesOfmeeting} onChange={ (e) => setValByKey("minutesOfmeeting", e.value)}  /></div>
                    <label className="text-sm text-primary">Project Charter</label>
                    <div className="ml-3"><InputSwitch checked={rowData.projectCharter} onChange={ (e) => setValByKey("projectCharter", e.value)}  /></div>
                    <label className="text-sm text-primary">Project UAT Sign Off</label>
                    <div className="ml-3"><InputSwitch checked={rowData.projectUATSignOff} onChange={ (e) => setValByKey("projectUATSignOff", e.value)}  /></div>
                    <label className="text-sm text-primary">Project Migration Sign Off</label>
                    <div className="ml-3"><InputSwitch checked={rowData.projectMigrationSignOff} onChange={ (e) => setValByKey("projectMigrationSignOff", e.value)}  /></div>
                    <label className="text-sm text-primary">Production Migration Complete</label>
                    <div className="ml-3"><InputSwitch checked={rowData.productionMigration} onChange={ (e) => setValByKey("productionMigration", e.value)}  /></div>
                    <label className="text-sm text-primary">Go Live Report</label>
                    <div className="ml-3"><InputSwitch checked={rowData.goLive} onChange={ (e) => setValByKey("goLive", e.value)}  /></div>
                    <label className="text-sm text-primary">Project Delivered Report</label>
                    <div className="ml-3"><InputSwitch checked={rowData.projectDelivered} onChange={ (e) => setValByKey("projectDelivered", e.value)}  /></div>
                    <label className="text-sm text-primary">Maintenance Requirements</label>
                    <div className="ml-3"><InputSwitch checked={rowData.maintenance} onChange={ (e) => setValByKey("maintenance", e.value)}  /></div>
            
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

export default connect(mapState, mapDispatch)(SingleProjectManagementPage);
