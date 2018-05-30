import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {greenA200} from 'material-ui/styles/colors';
import  { Link } from 'react-router-dom'

export class Navbar extends Component{

    constructor(props) {
        super(props);
        this.state = {open: false};
      }

      handleToggle = () => this.setState({open: !this.state.open});

    render(){
        const addbutstyle = {
            marginRight: 20,
          };
        return(
            <div>
                <br/><br/>
                <RaisedButton
                    label="Open Menu"
                    secondary={true}
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <br/><br/><br/>
                   <Link to='/'> <img src="../images/appreciaLogo.png" alt="imagen" margin="100px"/> </Link>
                    <br/><br/><br/>
                    <hr/>
                    <FloatingActionButton 
                        mini={true} 
                        style={addbutstyle}
                        backgroundColor={greenA200}
                        >                
                        <ContentAdd />
                    </FloatingActionButton>
                    <strong><span>Add new Task</span></strong>
                    <br/><br/><br/>
                    <Link to="/tasklist"><MenuItem>Tasks</MenuItem></Link>
                    <br/>
                    <Link to="/clusterlist"><MenuItem>Clusters</MenuItem></Link>
                    <br/><br/><hr/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/><br/>
                    <Link to='/'> <img src="../images/appreciaLogo.png" alt="imagen" margin="100px"/> </Link>
                </Drawer>
            </div>
        )
    }
}
