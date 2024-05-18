//what does the data layer look like(this is where the data(that you'll search) is gonna live inside the intial state)
export const intialState = {
    term: null
}

export const actionTypes =  {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}


//reducer's job is to listen to any dispatched actions
const reducer = (state, action) => {
    console.log(action)


    switch (action.type) {
        //but lets day if we do know the dispatched action, lets say its SET_SEARCH_TERM, its going to returnwhat the new data layer should look like
        case actionTypes.SET_SEARCH_TERM:
            return {
                //basically return what the state looked like and overwrite the term with whatever the action term you dispatched
                ...state,
                term: action.term
            }

        //if it don't know what dispatched action is, it just returns the intial whatever the state currently was
        default:
            return state
    }
}

export default reducer;
