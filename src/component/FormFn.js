
import React, {useContext, useEffect, useState} from 'react';
import { DataContext } from '../component/ExpenseTracker/DataContext';


const FormFunctional = () => {

    const tempFormData = { username: '', email: '', password: '' }
    const [formData, setFormData] = useState(tempFormData);
    const [formError, setFormError] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const login_temp = useContext(DataContext);

    const handelFormInput = (e) => {
        validateForm(formData);
        console.log("input clicked");
        let formName = e.target.name;
        let formValue = e.target.value;
        setFormData({ ...formData, [formName]: formValue })
    }

    useEffect(() => {
        console.log("Final Data", formData)
    });

    const handelFormSubmit = (e) => {
        e.preventDefault();
        validateForm(formData);
        if (Object.keys(formError).length === 0) {
            setShowMessage(true);
            setFormData(tempFormData);
        }
    }

    const validateForm = () => {
        console.log("validate worked clicked");
        setShowMessage(false);
        const error = {};
        if (!formData.username) {
            error.username = '*Username should not be blank';
        }
        if (!formData.email) {
            error.email = '*Email should not be blank';
        }
        if (!formData.password) {
            error.password = '*Password should not be blank';
        }
        if (formData.password && formData.password.length < 5) {
            error.password = '*Password minimum length should be 5 Character';
        }

        setFormError(error);
    }

    return (
        <>
            <div className='col-12'>
                <button className="btn btn-primary btn-sm" onClick={login_temp.login}>
                    {
                        login_temp.appstate.loginstatus ? <span>Logout</span> : <span>Login</span>
                    }
                </button>
                Welcome - {login_temp.appstate.loginstatus && login_temp.appstate.username}
                </div>

            <div>Form Functional :</div>
            {(Object.keys(formError).length === 0 && showMessage) && <h1 className="text-success">Form Submitted Succesfully!</h1>}
            <form>
                <div className="form-input">
                    <input type="text" name="username" placeholder="Enter Name" onChange={handelFormInput}></input>
                    <div className="text-danger error">{formError.username}</div>
                </div>
                <div className="form-input">
                    <input type="text" name="email" placeholder="Enter Email" onChange={handelFormInput}></input>
                    <div className="text-danger error">{formError.email}</div>
                </div>
                <div className="form-input">
                    <input type="password" name="password" placeholder="Enter Password" onChange={handelFormInput}></input>
                    <div className="text-danger error">{formError.password}</div>
                </div>
                <div>
                    <button type='button' onClick={handelFormSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default FormFunctional;