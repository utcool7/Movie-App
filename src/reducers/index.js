//to make our app predictable we should make our reducer as pure function
export default function movies(state = [],action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}