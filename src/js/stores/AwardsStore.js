//Awards store

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AwardsConstants = require('../constants/AwardsConstants');
var assign = require('object-assign');
var superagent = require('superagent');

var CHANGE_EVENT = 'change';

var _awards = {};
var RDSaward;
// database connection.


function isJSON (something) {
    if (typeof something != 'string')
        something = JSON.stringify(something);

    try {
        JSON.parse(something);
        return true;
    } catch (e) {
        return false;
    }
}


function saveTable(){
  
  //clear table
  superagent.get('/clearAwards')
    .end(function(err,res){

    });
    //save table
  for (var key in _awards)
  {
    if(_awards.hasOwnProperty(key)){
      
    
     superagent.get('/saveAwards')
     .query({ id: _awards[key].id })
     .query({ name: _awards[key].name })
     .query({ type: _awards[key].type })
     .query({ from: _awards[key].from })
     .end(function(err, res){
        

      });

    }
  };


}

function getAwardsRDS(){
 
   }


//create a award item
function make(name,type,from) {

  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _awards[id] = {
    id : id,
    name: name,
    type: type,
    from: from,
   
  }
}

function loadTable(id, name, type, from){

  _awards[id] = {
    id : id,
    name: name,
    type: type,
    from: from
  }
}

//update award item
function update(id, updates) {
  _awards[id] = assign({}, _awards[id], updates);
}

//delete award
function destroy(id) {
  delete _awards[id];
}

var name;
var type;
var from;

var AwardsStore = assign({}, EventEmitter.prototype, {

  GetStartState : function(){
    getAwardsRDS();
    return _awards;
  },

   getAll: function() {
   
    return _awards;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {

	switch(action.actionType) {
      case AwardsConstants.AWARD_MAKE:
      name = action.name.trim();
      type = action.type.trim();
      from = action.from.trim();
      if (name !== '' && type !== '' && from !== '') {
        make(name, type, from);
        AwardsStore.emitChange();
      }
      break;	

      case AwardsConstants.AWARD_UPDATE_AWARD:
       name = action.name.trim();
      type = action.type.trim();
      from = action.from.trim();
      if (name !== '' && type !== '' && from !== '') {
        update(action.id, {name: name, type: type, from: from});
        AwardsStore.emitChange();
      }
      break;

      case AwardsConstants.AWARD_DESTROY:
      destroy(action.id);
      AwardsStore.emitChange();
      break;

      case AwardsConstants.AWARD_GETRDS:
      getAwardsRDS();
      AwardsStore.emitChange();
      break;

      case AwardsConstants.AWARD_LOAD:
        name = action.name.trim();
      type = action.type.trim();
      from = action.from.trim();
      if (name !== '' && type !== '' && from !== '') {
        loadTable(action.id,name,type,from);
      AwardsStore.emitChange();
    }
      break;
      case AwardsConstants.AWARD_SAVE:
       
        saveTable();
      AwardsStore.emitChange();
      break;

      default:
      // no op
  	}
});


module.exports = AwardsStore;