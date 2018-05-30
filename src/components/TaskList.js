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
import {NewTaskForm} from './NewTaskForm';
import {taskService, getTasks} from '../services/taskService'
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
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Completed</MenuItem>
    </IconMenu>
  );

  export class TaskList extends Component{

    state={
      tasks:[],
    }

    componentWillMount(){
      getTasks()
      .then(r=>this.setState({tasks:r}))
    }

    render(){
      return(
        <div id="listatareas">
          <Barra />            
            <Navbar />
          <NewTaskForm />
      <List>
        <Subheader>Today</Subheader>
        {this.state.tasks.map(task=>{
          return(
            <div>
            <ListItem
            rightIconButton={rightIconMenu}
            primaryText={task.taskName}
            secondaryText={
              <p>
                <span>{task.assignee}</span>
                <br />
                {task.description}
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
    
  

