import { combineReducers } from "redux";
import AdminSlice from "./AdminSlice";
import UpdateProSlice from "./UpdateProSlice";

const rootReducer = combineReducers({
  admin: AdminSlice,
  update: UpdateProSlice,
});

export default rootReducer;
