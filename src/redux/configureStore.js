import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {createBrowserHistory} from "history";
import {connectRouter} from "connected-react-router";
import Ads from "./modules/ads";
import Comment from './modules/comment';
// import User from "./modules/user";
import thunk from "redux-thunk";

export const history = createBrowserHistory({forceRefresh: true});

const rootReducer = combineReducers({
    ads: Ads,
    comment: Comment,
    // user: User,
    router: connectRouter(history),
});
const middlewares = [thunk.withExtraArgument({history:history})];

const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();