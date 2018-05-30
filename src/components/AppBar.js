import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import  { Link } from 'react-router-dom'

export class Barra extends Component{
    render(){
        return(
            <AppBar
                iconElementRight={<Link to="/signup"><FlatButton label="Logout" /></Link>}
                title="Apprecia"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}
