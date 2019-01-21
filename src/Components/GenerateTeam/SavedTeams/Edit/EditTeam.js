import React, { Component } from 'react';

import './EditTeam.css';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *POST* COMPONENT

export default class Edit extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      teamName: ''
    };

    this.updateNameFunct = this.updateNameFunct.bind(this)
    
  }

  updateName( value ) {
    this.setState({ teamName: value });
  }

  updateNameFunct() { 
    const {teamName} = this.state
    const {updateTeamNameFn, teamID} = this.props
    
  updateTeamNameFn(teamID, teamName)
  
    

  }

  render() {

    // console.log('teamID',this.props.teamID)
    // console.log('teamNAme',this.state.teamName)
    
    
    

    return (
      <section >

       <textarea className="textarea"  onChange={ ( e ) => this.updateName( e.target.value ) }></textarea>
       <button className="update first" onClick={this.updateNameFunct}>UPDATE</button>
      </section>
    )
  }
}