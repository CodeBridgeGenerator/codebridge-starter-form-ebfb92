import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleProtectionPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("protection")
            .get(urlParams.singleProtectionId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Protection", type: "error", message: error.message || "Failed get protection" });
            });
    }, [props,urlParams.singleProtectionId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Protection</h3>
                </div>
                <p>protection/{urlParams.singleProtectionId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Rate Limiter</label>
                    <div className="ml-3"><InputSwitch checked={rowData.rateLimiter} onChange={ (e) => setValByKey("rateLimiter", e.value)}  /></div>
                    <label className="text-sm text-primary">Blocking</label>
                    <div className="ml-3"><InputSwitch checked={rowData.blocking} onChange={ (e) => setValByKey("blocking", e.value)}  /></div>
                    <label className="text-sm text-primary">Throttling</label>
                    <div className="ml-3"><InputSwitch checked={rowData.throttling} onChange={ (e) => setValByKey("throttling", e.value)}  /></div>
                    <label className="text-sm text-primary">Masking</label>
                    <div className="ml-3"><InputSwitch checked={rowData.masking} onChange={ (e) => setValByKey("masking", e.value)}  /></div>
                    <label className="text-sm text-primary">Redirect</label>
                    <div className="ml-3"><InputSwitch checked={rowData.redirect} onChange={ (e) => setValByKey("redirect", e.value)}  /></div>
                    <label className="text-sm text-primary">Mirror</label>
                    <div className="ml-3"><InputSwitch checked={rowData.mirror} onChange={ (e) => setValByKey("mirror", e.value)}  /></div>
                    <label className="text-sm text-primary">Ochestration</label>
                    <div className="ml-3"><InputSwitch checked={rowData.ochestration} onChange={ (e) => setValByKey("ochestration", e.value)}  /></div>
            
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

export default connect(mapState, mapDispatch)(SingleProtectionPage);
