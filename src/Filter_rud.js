

const Filter_rud = (state, action) => {
    switch (action.type) {
        case "Sort_change":
            return{
                ...state,
                sort:action.payload
            }
            case "Material_select" :
                return {
                    ...state,
                    Material:action.payload
                }
                case "brand" :
                    return {
                        ...state,
                        brand:action.payload
                    }
                    case "clear" :
                        return {
                            ...state,
                            clear:action.payload
                        }
    
        default:
            break;
    }
    
    }
    
    export default Filter_rud