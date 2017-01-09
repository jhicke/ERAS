//Awards page
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import  AwardsTable from '../components/AwardsTable.js';

export default class AwardsPage extends React.Component {
  
  render() {
    return (
        <DocumentTitle title='ERAS'>
      <div className="container">
       <div className="col-xs-12">
             <h3>Employees Awards</h3>
        </div>
        <div >
            <AwardsTable />
        </div>
      </div>
      </DocumentTitle>
    );
  }
}
