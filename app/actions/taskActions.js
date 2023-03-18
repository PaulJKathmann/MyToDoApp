import * as types from '../actionTypes/tasks';

export function fetchTasks() {  
    return async dispatch => {        
        dispatch({type: types.FETCH_TASKS});
        try {
            let response = await fetch('http://localhost:4000/tasks');      
            if (response.status !== 200) {        
            throw new Error('FETCH_ERROR');      
            }      
            response = await response.json();              dispatch({type: types.FETCH_TASKS_SUCCESS, data: response});
        } catch (error) { 
            dispatch({type: types.FETCH_TASKS_FAILURE, error}); 
        }
    };
};

export function createTask(task) {  
    return async dispatch => {        dispatch({type: types.CREATE_TASK});    
      try {      
        let response = await fetch('http://localhost:4000/notes', {        
          method: 'POST',        
          headers: {          
            Accept: 'application/json',          
            'Content-Type': 'application/json',        
          },        
          body: JSON.stringify({task}),      
      });      
      if (response.status !== 200) {        
        throw new Error('FETCH_ERROR');      
      }      
      response = await response.json();          
      dispatch({type: types.CREATE_TASK_SUCCESS, data: response});    
      } catch (error) {            
          dispatch({type: types.CREATE_TASK_FAILURE, error});    
      }  
    };
}