

const classNames_store = {
    posicion: 0,
    components:[
        {
            className:"menu",
            enable:true,
        },
        {
            className:"myPicture",
            enable:true,
        },
        
        {
            className:"linesPicture",
            enable:true,
        },
        {
            className:"WhoAmI",
            enable:true,
        },
        
        {
        className:"SkillsSoftware",
        enable:true,
        },
        {
            className:"Software",
            enable:true,
        }, 
        {
            className:"Certifications",
            enable:true,
        },
        {
            className:"Works",
            enable:true,
        },
        {
            className:"Contact",
            enable:true,
        }]
}
   


const types = {
    DESACTIVATE_COMPONENT: 'DESACTIVATE_COMPONENT',
    ACTIVATE_COMPONENT: 'ACTIVATE_COMPONENT',
    ADD_ANIMATION_COMPONENT: 'ADD_ANIMATION_COMPONENT',
    REMOVE_ANIMATION_COMPONENT:'REMOVO_ANIMATION_COMPONENT'
}


const storeReducer = (state, action) => {
    switch(action.type) {
         case types.DESACTIVATE_COMPONENT:
            return {
                ...state,
                
            }
        case types.ACTIVATE_COMPONENT:
            return {
                ...state,
            }
        case types.ADD_ANIMATION_COMPONENT:
            if(!(state.components[action.payload].className).includes("animation"))
                state.components[action.payload].className = `${state.components[action.payload].className} animation`;
               
            return {
                ...state
            }
            case types.REMOVE_ANIMATION_COMPONENT:
                state.components[action.payload].className = (state.components[action.payload].className).replace("animation", "");
            
            return {
                ...state
            }
        default:
            return state;
    }
}

export { classNames_store,types }
export default storeReducer