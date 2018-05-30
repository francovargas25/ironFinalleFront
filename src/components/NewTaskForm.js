import React, {Component} from 'react';
// importar servicio de new task
import {addTask} from '../services/taskService';
import {getUsers} from '../services/authService';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {greenA200, blue500, grey400, black, grey800, grey500} from 'material-ui/styles/colors';
//selectfield de nombres abajo, para clusters y usuarios
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TaskValue from './TaskValue'
//importacion de checkbox
import Checkbox from 'material-ui/Checkbox';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const clusterNames = [
    'Cluster 1',
    'Cluster 2',
    'Cluster 3',
    // como traigo aqui los clusters en los que esté el usuario?
]

const usersNames = [
    'raul',
    'josesito',
    'max',
    'beto',
    'papud',
    'alex',
    'alina',
    'Pepetoño'
    // como traer aqui los usuarios dentro del cluster previamente seleccionado
]

export class NewTaskForm extends Component{
    state = {
        open: false,
        newTask:{},
        userValues:[],
        clusterValue:{},
        checked: false,
        users:[],
    };

    handleSubmit = (e)=>{
        console.log(this.state.newTask)
        e.preventDefault();
        // creamos la tarea
        addTask(this.state.newTask)
        .then(task=>{
            console.log(task)
        //window.location = "http://localhost:3001/"
            //redirect a la homepage
        })            
    };

    componentWillMount(){
        getUsers().then(r=>this.setState({users:r}))
        if(localStorage.getItem('task')){
            this.props.history.push('/');
        }
    };

    //handler de la seleccion de clusters y 
    handleChange = (event, index, userValues) => this.setState({userValues});

    menuItems(userValues) {
        return usersNames.map((name) => (
          <MenuItem
            key={name}
            insetChildren={true}
            checked={userValues && userValues.indexOf(name) > -1}
            value={name}
            primaryText={name}
          />
        ));
    }

    // menuItems2(clusterValue) {
    //     return clusterNames.map((name) => (
    //       <MenuItem
    //         key={name}
    //         insetChildren={true}
    //         checked={clusterValue && clusterValue.indexOf(name) > -1}
    //         value={name}
    //         primaryText={name}
    //       />
    //     ));
    // }


    onChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const {newTask} = this.state;
        newTask[field]= value;
        this.setState({newTask});
        console.log(this.state.newTask);
    };
    
    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

    render(){
        const {userValues} = this.state;

        const {clusterValue} = this.state;

        const actions = [
            <FlatButton
              label="Close"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
        ];

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
            checkbox: {
                marginBottom: 16,
            },
            uploadInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
              },
              uploadButton: {
                verticalAlign: 'middle',
              },
          };

          const butstyle = {
            margin: 12,
          };

          const iconStyles = {
            marginRight: 24,
          };

        return(
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <RaisedButton 
                    label="Add a new Task" 
                    onClick={this.handleOpen} 
                    primary={true}
                    />

                    <Dialog
                    title="Add a new Task"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                        <TextField
                            floatingLabelText="Task Name"
                            onChange={this.onChange}
                            name="taskName"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                        /><br />
            
                        <TextField
                            floatingLabelText="Description"
                            onChange={this.onChange}
                            name="description"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                        />
                        {/* <label htmlFor="">Select Cluster*</label><br/>
                        <SelectField
                            name="cluster"
                            multiple={true}
                            floatingLabelText="Select Cluster*:"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            value={clusterValue}
                            onChange={this.handleChange}
                        >
                            {this.menuItems2(clusterValue)}
                        </SelectField>*/}<br/>     
                        <SelectField
                            name="assignee"
                            multiple={true}
                            hintText="Select a name"
                            floatingLabelText="Assigned to:"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            value={userValues}
                            onChange={this.handleChange}
                        >
                            {this.menuItems(userValues)}
                        </SelectField><br/>
                        {/* <como deshabilitar hasta que haya algo en el cluster>*/}

                        <TaskValue    
                        /><br/>                        
                        <Checkbox
                            label="Check if recurrent task"
                            labelPosition="left"
                            style={styles.checkbox}
                        />                       
                        <DatePicker
                        name="deadline" 
                        hintText="Pick a date" />
                        <br/>
                        <FlatButton
                        label="Choose an Image (optional)"
                        name="evidences"
                        primary={true}
                        labelPosition="before"
                        style={styles.uploadButton}
                        containerElement="label"
                        >
                        <input type="file" style={styles.uploadInput} />
                        </FlatButton>
                        {/* boton del tipo submit */}
                        <RaisedButton 
                            label={"Create Task" }
                            onClick={this.handleSubmit}
                            backgroundColor = {greenA200}
                            style={butstyle} 
                        /><br />

                    </Dialog>
                </form>
            </div>
        )
    }
}