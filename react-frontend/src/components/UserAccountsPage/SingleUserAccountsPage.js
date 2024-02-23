import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleUserAccountsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("userAccounts")
            .get(urlParams.singleUserAccountsId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "UserAccounts", type: "error", message: error.message || "Failed get userAccounts" });
            });
    }, [props,urlParams.singleUserAccountsId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">UserAccounts</h3>
                </div>
                <p>userAccounts/{urlParams.singleUserAccountsId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">emailPassword</label>
                    <div className="ml-3"><InputSwitch checked={rowData.emailPassword} onChange={ (e) => setValByKey("emailPassword", e.value)}  /></div>
                    <label className="text-sm text-primary">Google Sign Up</label>
                    <div className="ml-3"><InputSwitch checked={rowData.google} onChange={ (e) => setValByKey("google", e.value)}  /></div>
                    <label className="text-sm text-primary">Facebook Sign Up</label>
                    <div className="ml-3"><InputSwitch checked={rowData.facebook} onChange={ (e) => setValByKey("facebook", e.value)}  /></div>
                    <label className="text-sm text-primary">Linkedin Sign Up</label>
                    <div className="ml-3"><InputSwitch checked={rowData.linkedin} onChange={ (e) => setValByKey("linkedin", e.value)}  /></div>
                    <label className="text-sm text-primary">Github Sign Up</label>
                    <div className="ml-3"><InputSwitch checked={rowData.github} onChange={ (e) => setValByKey("github", e.value)}  /></div>
                    <label className="text-sm text-primary">Email By Invitation</label>
                    <div className="ml-3"><InputSwitch checked={rowData.emailInvite} onChange={ (e) => setValByKey("emailInvite", e.value)}  /></div>
            
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

export default connect(mapState, mapDispatch)(SingleUserAccountsPage);
