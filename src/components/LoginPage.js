import React, {Component} from 'react';
import {signup, login} from '../services/authService';
import TextField from 'material-ui/TextField';
import {greenA200, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import SvgIcon from 'material-ui/SvgIcon';
var FontAwesome = require('react-fontawesome');


export class LoginPage extends Component{

    state={
        newUser:{}
    };

    componentWillMount(){
        if(localStorage.getItem('user')){
            this.props.history.push('/');
        }
    };

    onChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const {newUser} = this.state;
        newUser[field]= value;
        this.setState({newUser});
    };

    sendUser = () =>{
        signup(this.state.newUser)
        .then(user=>{
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))
    };

    loginUser = () =>{
        login(this.state.newUser)
        .then(user=>{
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))
    };


    
    render(){
        const styles = {
            errorStyle: {
              color: greenA200,
            },
            underlineStyle: {
              borderColor: greenA200,
            },
            floatingLabelStyle: {
              color: greenA200,
            },
            floatingLabelFocusStyle: {
              color: blue500,
            },
          };

          const butstyle = {
            margin: 12,
          };

          const iconStyles = {
            marginRight: 24,
          };
        
        return(
            
            <div id="loginpaginita" >
                <div id="loginformita">
                    <div style={{marginTop:150 , marginBottom:50}} >
                        <img src="./images/appreciaLogo.png" alt="" width="400px" />
                    </div>
                    <TextField
                        floatingLabelText="Email"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineStyle={styles.underlineStyle}
                        /><br />

                    <TextField
                        floatingLabelText="Password"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineStyle={styles.underlineStyle}
                        type = "password"
                        /><br /><br />

                    <FlatButton label="Forgot Your Password?" primary={true} />
                    <br/><br/>

                    <RaisedButton 
                        label="Log In" 
                        backgroundColor = {greenA200} 
                        style={butstyle} />
                    <RaisedButton
                        backgroundColor = "#3b5998"
                        labelPosition="before"
                        icon={<FontAwesome
                                    className='super-crazy-colors'
                                    name='facebook-official'
                                    size='2x'
                                    inverse
                                />}
                        style={styles.button}
                    />
                    <br/><br/>
                    <h5>Don't you have an Account? <a href="/signup">Create one!</a></h5>
                </div>                                
            </div>
        )
    }
}