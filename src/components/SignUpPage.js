import React, {Component} from 'react';
import {signup, login} from '../services/authService';
import TextField from 'material-ui/TextField';
import {greenA200, blue500, grey400, black, grey800, grey500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router-dom';
// import SvgIcon from 'material-ui/SvgIcon';
var FontAwesome = require('react-fontawesome');


export class SignUpPage extends Component{

    state={
        newUser:{}
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // creamos el usuario
        signup(this.state.newUser)
        .then(user=>{
            this.props.history.push('/')
        return <Redirect to='/' />
        })            
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
        console.log(this.state.newUser);
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
                {/* Description of the bennefits of creating an account */}
                <div id="signupben">
                    <ul style={{listStyleType:null}}>
                        <li>
                            <span><FontAwesome                                    
                                    name='check-square-o'                                    
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>Don't leave anything undone</h2>
                                <h4 style={{color:grey500}} >Keep up with all the things you have to do for yourself and for those You care the most</h4>
                            </div>
                        </li>
                        <li>
                            <span><FontAwesome                                    
                                    name='users'
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>Give love to clusters, get love back</h2>
                                <h4 style={{color:grey500}} >Your Home, office, classroom... be part of a cluster and keep both individual and global score</h4>
                            </div>
                        </li>
                        <li>
                            <span><FontAwesome                                    
                                    name='trophy'
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>Score the good stuff</h2>
                                <h4 style={{color:grey500}} >Sum points for yourself and your cluster when stuff and favours get done... who is the best and selfless being?</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*Description of the bennefits of creating an account   */}


                {/* Beggining of the signup form */}
                <div id="loginformita">
                    <div style={{marginTop:150 , marginBottom:50}} >
                        <img src="./images/appreciaLogo.png" alt="" width="400px" />
                    </div>
                    <form onSubmit={this.handleSubmit}>    
                        <TextField
                            floatingLabelText="Name"
                            onChange={this.onChange}
                            name="username"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                        /><br />

                        <TextField
                            floatingLabelText="Email"
                            onChange={this.onChange}
                            name="email"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                        /><br />

                        <TextField
                            floatingLabelText="Password"
                            onChange={this.onChange}
                            name="password"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            type = "password"
                        /><br /><br />

                        <RaisedButton 
                            label={"Create a Free Account" }
                            type="submit"
                            backgroundColor = {greenA200}
                            style={butstyle} 
                        /><br />
                    </form> 
                    {/* END of the signup form */}

                    {/* Button to signup with facebook */}
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
                    {/* Button to signup with facebook */}
                    <br/><br/>

                    {/* Button redirect to login */}
                    <h5>Have an account already? <a href="/login">Log In!</a></h5>
                    
                </div> 
                                              
            </div>
        )
    }
}