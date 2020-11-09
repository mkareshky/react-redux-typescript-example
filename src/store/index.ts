import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

// import inventorySaga from "./inventory/sagas";
import { InventoryReducer } from "./inventory/reducer";
import { InventoryState } from "./inventory/types";

// import cartSaga from "./cart/sagas";
import { cartReducer } from "./cart/reducer";
import { cartState } from "./cart/types";


import { RouterState } from "connected-react-router";

// import inventorySaga from "./func/reducer";
import {FuncReducer} from "./func/reducer"
import { FuncState } from "./func/types";

// import inventorySaga from "./todos/reducer";
import { TodoReducer } from "./todos/reducer";
import { TodoState } from "./todos/types";


export interface ApplicationState {
  cart: cartState;
  inventory: InventoryState;
  func: FuncState;
  todo:TodoState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: cartReducer,
    inventory: InventoryReducer,
    func:FuncReducer,
    todo:TodoReducer,
    router: connectRouter(history),
  });
