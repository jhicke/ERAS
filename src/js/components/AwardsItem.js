//Line item in Awards Table

import React from 'react';
import { Link } from 'react-router';
import AwardsAction  from '../actions/AwardsAction';

export default class AwardsItem extends React.Component {
	state = {
		edit:false,
      nameValue: this.props.name || '',
      typeValue: this.props.type || '',
      fromValue: this.props.from || '',
      id: this.props.id || ''
	}

    handleEditButton() {
       this.setState({edit : true});
        
        
    }

    handleDeleteButton(){
       AwardsAction.destroy(this.state.id);
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
         AwardsAction.updateAward(this.state.id, this.state.nameValue,this.state.typeValue, this.state.fromValue);
         this.setState(
            {edit : false}
            )
    }

    _save() {
    this.props.onSave(this.state.id, this.state.nameValue,this.state.typeValue, this.state.fromValue);
      this.setState({
      nameValue : '',
      typeValue : '',
      fromValue : '',
      edit: false
    });
  }


  render() {
  
   
    var editName;
    var editType;
    var editFrom;
    var editSave;
    var editDelete;
    
    if (this.state.edit){
        editName = 
            <input
            placeholder="Awardee"
            onChange={this._onChangeName.bind(this)}
            value={this.state.nameValue}
            autoFocus={true}
          />;
        
          editType=
          <input
            placeholder="Award Type"
            onChange={this._onChangeType.bind(this)}
            value={this.state.typeValue} 
          />;
          editFrom=
          <input
            placeholder="Submitted by"
            onChange={this._onChangeFrom.bind(this)}
            value={this.state.fromValue}
          />;
            editSave=
             <input
            type="button"
            className="btn btn-primary"
           
            value = "Save"
            onClick={this._onSave.bind(this)}
            />;
            editDelete=
             <input
            type="button"
            className="btn btn-primary"
           
            value = "Delete"
            onClick={this.handleDeleteButton.bind(this)}
            />;

    }else{
        editName = 
           this.state.nameValue ;
        
          editType=
          this.state.typeValue ;

          editFrom=
           this.state.fromValue;
           editSave=
           <input
                type = "button"
                value = "Edit"
                 className="btn btn-primary"
                onClick = {this.handleEditButton.bind(this)}
            />;
            editDelete=
             <input
            type="button"
            className="btn btn-primary"
           
            value = "Delete"
            onClick={this.handleDeleteButton.bind(this)}
            />;


    }


  

    return (
    	
    	
        <tr>
         <td>
            {editName} 
            </td>
            <td>
            {editType} 
            </td>
            <td>
            {editFrom}
            </td>
            <td>
            {editSave}
            </td>
            <td>
            {editDelete}
            </td>
        </tr>
        
    	);
	}

	
}