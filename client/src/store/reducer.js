import { combineReducers } from "redux";
import userSlice from "./userSlice";
import UpdateProSlice from "./UpdateProSlice";
import sidebarSlice from "./getProductSlice";
const rootReducer = combineReducers({
  user: userSlice,
  update: UpdateProSlice,
  sidebar: sidebarSlice,
});

export default rootReducer;
