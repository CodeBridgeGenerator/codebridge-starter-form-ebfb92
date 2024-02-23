import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleInternationalizationPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("internationalization")
            .get(urlParams.singleInternationalizationId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Internationalization", type: "error", message: error.message || "Failed get internationalization" });
            });
    }, [props,urlParams.singleInternationalizationId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Internationalization</h3>
                </div>
                <p>internationalization/{urlParams.singleInternationalizationId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">dateFormat</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.dateFormat}</p></div>
                    <label className="text-sm text-primary">multiLanguage</label>
                    <div className="ml-3"><InputSwitch checked={rowData.multiLanguage} onChange={ (e) => setValByKey("multiLanguage", e.value)}  /></div>
                    <label className="text-sm text-primary">Multi Currency</label>
                    <div className="ml-3"><InputSwitch checked={rowData.multiCurrency} onChange={ (e) => setValByKey("multiCurrency", e.value)}  /></div>
                    <label className="text-sm text-primary">Multi Region</label>
                    <div className="ml-3"><InputSwitch checked={rowData.multiRegion} onChange={ (e) => setValByKey("multiRegion", e.value)}  /></div>
            
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

export default connect(mapState, mapDispatch)(SingleInternationalizationPage);
