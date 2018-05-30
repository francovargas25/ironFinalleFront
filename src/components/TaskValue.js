import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {greenA200, blue500, grey400, black, grey800, grey500} from 'material-ui/styles/colors';

const items = [];
for (let i = 1; i < 11; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={i} />);
}

export default class TaskValue extends Component {
  state = {
    tareavalue: 1,
  };

  handleChange = (event, index, tareavalue) => {
    this.setState({tareavalue});
  };

  render() {
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
    return (
      <SelectField
        name="taskValue"
        type="number"
        value={this.state.tareavalue}
        floatingLabelText="Pick task value (1-10)"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {items}
      </SelectField>
    );
  }
}