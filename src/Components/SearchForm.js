import React from 'react';
import Toggle from 'material-ui/Toggle';
import Done from 'material-ui/svg-icons/action/done';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

const Status = ({count, todos}) => {
    return (
        <div>
          <Badge badgeContent={todos.length} primary={true}>
            <Done />
          </Badge>
          <Badge badgeContent={count} secondary={true} badgeStyle={{top: 12, right: 12}}>
            <IconButton tooltip="Total todos">
              <DoneAll />
            </IconButton>
          </Badge>
        </div>
    );
}

export default class SearchForm extends React.Component {
  handleSearch = () => {
    const showCompleted = !this.refs.showCompleted.state.switched;
    const searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }
  render() {
    return (
      <div   className='form-check'>
        <input className='form-control' ref='searchText' type="text"  onChange={this.handleSearch} placeholder='Search todos here...'/>
        <Toggle style={{marginTop:'10%', float:'left', width:'60%'}} labelStyle={{color: '#674172'}} thumbSwitchedStyle={{backgroundColor:'#9b59b6'}} trackSwitchedStyle={{backgroundColor:'#BE90D4'}} label='Show Completed' labelPosition='right' ref='showCompleted' className='form-check-input' onToggle={() => this.handleSearch()}/>
          <Status count={this.props.count} todos={this.props.todos}/>
     </div>
    )
  }
}
