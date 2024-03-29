import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
        }catch(error){
            console.log("fail");
        }

        this.setState({email:'',password:''})

    }

    handleChange = event => {
        const {value,name} = event.target;

        

        this.setState({ [name]: value})   //birden fazla input için tek fonksiyon

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail acoount</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange= {this.handleChange}
                    label="Email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange= {this.handleChange}
                    label="Password"
                    required />

                    <div className='buttons'>
                     <CustomButton type="submit"> Sign In</CustomButton>
                     <CustomButton 
                     onClick={signInWithGoogle}
                     isGoogleSignIn
                     > 
                     Sign In with Google</CustomButton>
                    </div>
                   

                </form>
            </div>
        )
    }
    
}

export default SignIn;