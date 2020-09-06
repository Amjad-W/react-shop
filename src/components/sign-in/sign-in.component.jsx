import React from "react";
import {SignInContainer,SignInButtons,SignInTitle} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        }
        catch (err){
            console.log("ERROR: Signing in, ",err);
        }
        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your credentials</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="email" 
                        name='email' 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name='password' 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        label='password'
                        required 
                    />
                    <SignInButtons>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton isGoogleButton onClick={signInWithGoogle}> Sign In with Google</CustomButton>
                    </SignInButtons>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;