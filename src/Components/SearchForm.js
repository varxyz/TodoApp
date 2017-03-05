import React from 'react';
import Toggle from 'material-ui/Toggle';
import Done from 'material-ui/svg-icons/action/done';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import {connect} from 'react-redux';
import {toggleShowCompleted, setSearchText} from '../actions/index';

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

class SearchForm extends React.Component {
  render() {
    const {dispatch, showCompleted, searchText, _length, countComp} = this.props;

    return (
      <div   className='form-check'>
        <input className='form-control' ref='searchText' type="text"  value={searchText} placeholder='Search todos here...' onChange={() => {
            const searchText = this.refs.searchText.value;
            console.log(_length)
            dispatch(setSearchText(searchText));
            }
          }
        />

        <Toggle
            style={{marginTop:'10%', float:'left', width:'60%'}}
            labelStyle={{fontWeight:700, color: '#674172'}}
            thumbSwitchedStyle={{backgroundColor:'#9b59b6'}}
            trackSwitchedStyle={{backgroundColor:'#BE90D4'}}
            label='Show Completed'
            labelPosition='right'
            ref='showCompleted'
            className='form-check-input'
            defaultToggled={showCompleted}
            onToggle={() => dispatch(toggleShowCompleted())}
        />
          <Status count={_length} todos={countComp}/>

     </div>
    )
  }
}

export default connect(
  (state) =>  {
    return {
    searchText: state.searchText,
    showCompleted: state.showCompleted,
    _length: state.todos.length,
    countComp: state.todos.filter((item) =>  {
      return item.completed === false
    })
  }
  }
)(SearchForm);













