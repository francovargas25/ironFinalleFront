import React, {Component} from 'react';
import {Navbar} from './navbar'
import {Barra} from './AppBar'
import {greenA200, blue500, grey400, black, grey800, grey500} from 'material-ui/styles/colors';
import {NewTaskForm} from './NewTaskForm'
import {TaskList} from './TaskList';
var FontAwesome = require('react-fontawesome');

export class HomePage extends Component{
    render(){
        return(
            
            <div id="mainPage">
                
                <div id="signupben2">
                <h1 style={{color:grey800}}>Getting started!</h1>
                <br/>
                    <ul style={{listStyleType:null}}>
                        <li>
                            <span><FontAwesome                                    
                                    name='address-card-o'                                    
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>You are a Whole new User</h2>
                                <h4 style={{color:grey500}} >Make everything simplier and remarkable with Apprecia</h4>
                            </div>
                        </li>
                        <li>
                            <span><FontAwesome                                    
                                    name='home'
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>Create or Join Clusters</h2>
                                <h4 style={{color:grey500}} >Because Nothing is as fun as doing it Along other users from different spaces</h4>
                            </div>
                        </li>
                        <li>
                            <span><FontAwesome                                    
                                    name='check'
                                    size='4x'                                                                        
                                /></span>
                            <div>
                                <h2 style={{color:grey800}}>Create new tasks whenever you want</h2>
                                <h4 style={{color:grey500}} >Your Home, office, classroom... be part of a cluster and keep both individual and global score</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            
            <Barra />            
            <Navbar />
            
            {/* <NewTaskForm /> */}
            
            </div>
        )
    }
}