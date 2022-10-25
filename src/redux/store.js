import {configureStore} from "@reduxjs/toolkit"
import {jsonSliceReducer} from "./standardReportsSlice";


export const store = configureStore({
	reducer: {
		json: jsonSliceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

window.store = store
