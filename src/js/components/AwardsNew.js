//Form to enter new awards

import React from 'react';
import { Link } from 'react-router';
import AwardsAction  from '../actions/AwardsAction';


export default class AwardsItem extends React.Component {
	state = {
      nameValue:  '',
      typeValue: '',
      fromValue:  '' ,
      id: 'NewAward'
	}



	_onChangeName(e){
		  this.setState({
     	 nameValue: e.target.value
   		 });
	}

	_onChangeType(e) {
    	this.setState({
      	typeValue: e.target.value
	    });
    }

	 _onChangeFrom(e) {
    	this.setState({
     	fromValue: e.target.value
    	}); 
    }   

    _onSave(){
    	 AwardsAction.make(this.state.nameValue,this.state.typeValue, this.state.fromValue);
    this.setState({
      nameValue : '',
      typeValue : '',
      fromValue : ''
    });
    }

	render(){
		var styler = {
			padding: 10,
	        margin: 4, 
	        width : '100%',      
	        display: "inline-block",
	        textAlign: "center",
	        marginLeft: 'auto',
    		marginRight: 'auto'
		};

		return(

		<div style ={styler} 	>
	      Enter In New Award :   
	      <input
	        placeholder="Awardee"
	        onChange={this._onChangeName.bind(this)}
	        value={this.state.nameValue}
	        autoFocus={true}
	      />
	      
	      <input
	        placeholder="Award Type"
	        onChange={this._onChangeType.bind(this)}
	        value={this.state.typeValue} 
	      />
	      

	      <input
	        placeholder="Submitted by"
	        onChange={this._onChangeFrom.bind(this)}
	        value={this.state.fromValue}
	      />
     
	     	 <input
	        type="button"
	        className="btn btn-primary"
	       
	        value = "Save"
	        onClick={this._onSave.bind(this)}
	        />
      </div>
		);
	}
}