import { createAction } from "../../utils/firebase/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"
export const setCurrenUser = (user) => {
    return {type:'SET_CURRENT_USER' , payload:user}
}