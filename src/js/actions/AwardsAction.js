//Award actions. used to call functions in the store from components

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AwardsConstants = require('../constants/AwardsConstants');

var AwardsAction = {

  saveAwards: function(awards){
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_SAVE
    }); 
  },

  getAwardsRDS: function(){
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_GETRDS
    });
  },

  make: function( name, type, from) {
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_MAKE,
      name: name,
      type: type,
      from: from
    });
  },

loadTable: function(id, name, type, from) {
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_LOAD,
      id: id,
      name: name,
      type: type,
      from: from
    });
  },

  updateAward: function(id, name, type, from) {
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_UPDATE_AWARD,
      id: id,
      name: name,
      type: type,
      from: from
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: AwardsConstants.AWARD_DESTROY,
      id: id
    });
  }
};

  

module.exports = AwardsAction;
