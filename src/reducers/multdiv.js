const initialState=10;

const otherNumber=(state= initialState,action)=>{
    switch(action.type){
        case 'MULTIPLY': return state*5;
        case 'DIVISION': return state/5;
        default : return state;
    }
}

export default otherNumber;