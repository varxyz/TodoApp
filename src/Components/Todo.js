import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import SvgIcon from 'material-ui/SvgIcon';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import {connect} from 'react-redux';
import {toggleTodo, deleteBtn} from '../actions/index';

// const str_svgCloseBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const CloseButton = () => (
  <div>
    <IconButton tooltip="Remove" iconStyle={{color:'#e5e5e5'}}>
      <CloseIcon/>
    </IconButton>
  </div>
);

const CloseIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </SvgIcon>
);

const Todo = ({text, id, completed, dispatch}) => {
    return (
      <div style={styles.block} >
        <div onClick={() => dispatch(toggleTodo(id))}>
         { completed ? <Checkbox checked={completed} label={text} style={styles.checkbox} iconStyle={{fill:'rgba(103,65,114, 0.6)'}} labelStyle={{textDecoration:'line-through', color: 'rgba(103,65,114, 0.6)'}} /> : <Checkbox checked={completed} label={text} style={styles.checkbox} iconStyle={{fill:'#674172'}} labelStyle={{color: '#674172'}}/>}
        </div>
        <div key={id} onClick={() => dispatch(deleteBtn(id))} style={{cursor:'pointer', float:'right', 'marginTop':-57, 'marginRight':-110}} >
          {CloseButton()}
        </div>
        <Divider style={{marginRight: -110, marginBottom: 20}}/>
      </div>
    )
  }

module.exports = connect()(Todo)
