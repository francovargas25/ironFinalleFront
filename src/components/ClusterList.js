import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {NewClusterForm} from './NewClusterForm';
import {clusterService, getClusters} from '../services/clusterService'
import {Navbar} from './navbar'
import {Barra} from './AppBar'

const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );
  
  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Add User to Cluster</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

  export class ClusterList extends Component{

    state={
      clusters:[],
    }

    componentWillMount(){
      getClusters()
      .then(r=>this.setState({clusters:r}))
    }

    render(){
      return(
        <div id="listaclusters">
          <Barra />            
            <Navbar />
          <NewClusterForm />
      <List>
        <Subheader>Today</Subheader>
        {this.state.clusters.map(cluster=>{
          return(
            <div>
            <ListItem
            rightIconButton={rightIconMenu}
            primaryText={cluster.clusterName}
            secondaryText={
              <p>
                <span>{cluster.members}</span>
                <br />
                {cluster.clusterDescription}
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          </div>
          )
        })}
        
      </List>
    </div>
      )
    }
  }
    
  

