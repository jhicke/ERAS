//table to hold awards

import React from 'react';
import { Link } from 'react-router';


import AwardsStore from '../stores/AwardsStore';
import AwardsAction  from '../actions/AwardsAction';
import AwardsItem from '../components/AwardsItem';

import AwardsNew  from '../components/AwardsNew';
    

export default class AwardsTable extends React.Component {
    onChangeListener = true;

    state=
    {
        awards: {}
    };


    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.loadDate = this.loadDate.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    saveData(){
         AwardsAction.saveAwards()

    }

     loadDate(){
        fetch('getAwards')
    .then(function(res) {
        return res.json();
            }).then(function(json) {
                
            json.forEach(function (element){
               AwardsAction.loadTable(element.ID,element.Awardee,element.Type,element.From);
              
            });

          });
          
        };
        

    onChange() {
    var self = this;
        if (self.onChangeListener !== null) {
        this.setState({ awards: AwardsStore.getAll() });
      }
    };

    _getData() {
        AwardsAction.getAwardsRDS();

    };

    componentWillMount(){
       this.loadDate();

    }

    componentDidMount() {
    this.onChangeListener = this.onChange.bind(this);
     AwardsStore.addChangeListener(this.onChange);
      AwardsStore.addChangeListener(this.onChangeListener);
    this.onChange(); 
    }

   
  componentWillUnmount() {
       AwardsStore.removeChangeListener(this.onChangeListener);
    this.onChangeListener = null;
    }


    onSave(id, name, type, from){
    AwardsAction.updateAward(id, name, type, from);
   }

    
  render() {
    
    var SaveVar = this.onSave;
    var awards = this.state.awards;
   
    

    var styler = {
        fontSize: 16
        };

        

    return (
    	<div >
    		
            <AwardsNew />
            <table className= 'AwardsTable' >
            <thead style ={styler}>
                <tr>
                    <th>
                        Employee Name
                    </th>
                    <th>
                        Award Type
                    </th>
                    <th>
                        Award From
                    </th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(awards).map(function(key) {
     
                    return <AwardsItem key={awards[key].id}
                        id = {awards[key].id}
                         name = {awards[key].name}
                         type = {awards[key].type}
                         from = {awards[key].from}
                         onSave = {SaveVar}  />
            })}
            </tbody>
            </table>
                <div>
                   
                    <div className="col-xs-12">
                      <input
                        type="button"
                        className="btn btn-primary"
                       
                        value = "SaveData"
                        onClick={this.saveData.bind(this)}/>
                    </div>

                </div>

    	</div>
    	);
	}
}