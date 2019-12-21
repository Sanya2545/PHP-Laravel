import React, { Component } from "react";
import textFieldGroup from "../../common/TextFieldGroup";
import ImageFieldGroupCropper from "../../common/ImageFieldGroupCropper";
import PhoneFieldGroup from "../../common/PhoneFieldGroup";

import InputMask from "react-input-mask";

export class RegisterPage extends Component {
    state = {
        email: "",
        phone: "",
        photo: "",
        password: "",
        passwordConfirm: "",
        errors: {
            //email: 'Invalid'
        }
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };
    handleSubmit = e=>
    {
        preventDefault();
        console.log("~~~register submit ~~~");
        const{email, photo}= this.state;
        let errors = {};

        if(email === "")
        {
            errors.email="Field is not to be requied !!!";
        }
        if(photo === "")
        {
            errors.photo = "push your photo please !";
        }
        if(phone === "")
        {
            errors.phone = "Give me phone number !";
        }
        const isValid = Object.keys(errors).length === 0;

        if(isValid)
        {
            console.log("Model is valid");
        }
        else
        {
            this.setState=({errors});
        }


    };
    getCroppedImage = img => {
        if (!!this.state.errors["photo"]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors["photo"];
            this.setState({
                photo: img,
                errors
            });
        } else {
            this.setState({ photo: img });
        }
    };
    render() {

        const {
            email,
            phone,
            photo, 
            password,
            passwordConfirm,
            errors
        }=this.state;

        return (
            <div className="container">
                <h1 className="d-flex justify-content-center">Реєстрація</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <textFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value="email"
                        error="errors.email"
                        onChange={this.handleChange}
                    />
                    <textFieldGroup
                        field="phone"
                        label="Phone Number"
                        value="phone"
                        error="erorrs.phone"
                        onChange={this.handleChange}
                    />
                    <textFieldGroup
                        field="password"
                        label="Password"
                        value="password"
                        error="errors.password"
                        onChange={this.handleChange}
                        type="password"
                    />
                    <textFieldGroup
                        field="passwordConfirm"
                        label="PasswordConfirm"
                        value="passwordConfirm"
                        error="errors.passwordConfirm"
                        onChange={this.handleChange}
                        type="password"
                    />
                   <ImageFieldGroupCropper
                        getCroppedImage={this.getCroppedImage}
                        error={errors.photo}
                        photo={photo}
                    />
                </form>
            </div>
        );
    }
}

export default RegisterPage;