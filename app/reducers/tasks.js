const INITIAL_STATE = {  
    data: [],  
    status: null,  
    error: null,  
    createStatus: null,  
    createError: null,
};

‍export default (state = INITIAL_STATE, action) => {  
    switch (action.type) {
        case 'FETCH_TASKS_SUCCESS':      
        return {        
            ...state,        
            status: 'success',        
            data: action.data,        
            error: null,      
        };   
        case 'FETCH_TASKS_FAILURE':      
        return {        
            ...state,        
            status: 'failure',        
            error: action.error,      
        }; 
        case 'FETCH_TASKS':      
        return {        
          ...state,        
          status: 'loading',        
          error: null,  
        };
        case 'CREATE_TASK':    
        return {      
            ...state,      
            createStatus: 'loading',      
            createError: null,    
        };  
        case 'CREATE_TASK_SUCCESS':    
        return {      
            ...state,      
            createStatus: 'success',      
            data: [...state.data, action.data],      
            createError: null,    
        };  
        case 'CREATE_TASK_FAILURE':    
        return {      
            ...state,      
            createStatus: 'failure',      
            createError: action.error,    
        };
        default:      
            return state;
    }
};