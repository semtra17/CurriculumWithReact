

const classNames_store = {

    middle_component:{
        className_component:"middle",
        enable:false,
    },

    top_component:{
        className_component:"top",
        enable:true,
    },

    bottom_component:{
        className_component:"bottom",
        enable:true,
    },
    software_component:{
        className_component:"Software",
        enable:true,
    }, 
    menu_component:{
        className_component:"menu",
        enable:true,
    },
    softwareSkills_component:{
        className_component:"softwareSkills",
        enable:true,
    },
    linesPicture_element:{
        className_element:"linesPicture",
        enable:true,
    },
    myPicture_element:{
        className_element:"myPicture",
        enable:true,
    },
    whoAmI_component:{
        className_component:"WhoAmI",
        enable:true,
    },
    works_component:{
        className_component:"Works",
        enable:true,
    },
    certifications_component:{
        className_component:"Certifications",
        enable:true,
    },
    contact_component:{
        className_component:"Contact",
        enable:true,
    },
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
                user: action.payload
            }
        case types.ADD_ANIMATION_COMPONENT:
            classNames_store.map((component) => {
                if(component.className_component == action.payload.className_component && component.enable){
                    return {
                       ...state,
                    }
                }
            })
            return {
                ...state,
            }
        case types.REMOVE_ANIMATION_COMPONENT:
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
}

export { classNames_store,types }
export default storeReducer