import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleContentManagerPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("contentManager")
            .get(urlParams.singleContentManagerId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "ContentManager", type: "error", message: error.message || "Failed get contentManager" });
            });
    }, [props,urlParams.singleContentManagerId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">ContentManager</h3>
                </div>
                <p>contentManager/{urlParams.singleContentManagerId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">File Upload to S3</label>
                    <div className="ml-3"><InputSwitch checked={rowData.fileUpload} onChange={ (e) => setValByKey("fileUpload", e.value)}  /></div>
                    <label className="text-sm text-primary">Content Manager</label>
                    <div className="ml-3"><InputSwitch checked={rowData.cms} onChange={ (e) => setValByKey("cms", e.value)}  /></div>
                    <label className="text-sm text-primary">Custom email Templates</label>
                    <div className="ml-3"><InputSwitch checked={rowData.emailTemplates} onChange={ (e) => setValByKey("emailTemplates", e.value)}  /></div>
                    <label className="text-sm text-primary">Messaging Service</label>
                    <div className="ml-3"><InputSwitch checked={rowData.messaging} onChange={ (e) => setValByKey("messaging", e.value)}  /></div>
                    <label className="text-sm text-primary">Dashboarding</label>
                    <div className="ml-3"><InputSwitch checked={rowData.dashboards} onChange={ (e) => setValByKey("dashboards", e.value)}  /></div>
                    <label className="text-sm text-primary">Kamban Boards</label>
                    <div className="ml-3"><InputSwitch checked={rowData.kambanBoards} onChange={ (e) => setValByKey("kambanBoards", e.value)}  /></div>
                    <label className="text-sm text-primary">Admin Dashboard</label>
                    <div className="ml-3"><InputSwitch checked={rowData.adminDashboard} onChange={ (e) => setValByKey("adminDashboard", e.value)}  /></div>
                    <label className="text-sm text-primary">Calendering</label>
                    <div className="ml-3"><InputSwitch checked={rowData.calendering} onChange={ (e) => setValByKey("calendering", e.value)}  /></div>
                    <label className="text-sm text-primary">Maps</label>
                    <div className="ml-3"><InputSwitch checked={rowData.maps} onChange={ (e) => setValByKey("maps", e.value)}  /></div>
                    <label className="text-sm text-primary">Booking</label>
                    <div className="ml-3"><InputSwitch checked={rowData.booking} onChange={ (e) => setValByKey("booking", e.value)}  /></div>
                    <label className="text-sm text-primary">Search</label>
                    <div className="ml-3"><InputSwitch checked={rowData.search} onChange={ (e) => setValByKey("search", e.value)}  /></div>
                    <label className="text-sm text-primary">Image Gallery</label>
                    <div className="ml-3"><InputSwitch checked={rowData.imageGallery} onChange={ (e) => setValByKey("imageGallery", e.value)}  /></div>
                    <label className="text-sm text-primary">Video Tube</label>
                    <div className="ml-3"><InputSwitch checked={rowData.videoTube} onChange={ (e) => setValByKey("videoTube", e.value)}  /></div>
                    <label className="text-sm text-primary">Audio Pods</label>
                    <div className="ml-3"><InputSwitch checked={rowData.audioPods} onChange={ (e) => setValByKey("audioPods", e.value)}  /></div>
            
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

export default connect(mapState, mapDispatch)(SingleContentManagerPage);
