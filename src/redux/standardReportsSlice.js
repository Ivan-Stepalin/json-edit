import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	jsonFile: [],
}

const jsonSlice = createSlice({
	name: "standardReports",
	initialState,
	reducers: {
		setJson: (state, action) => {
			state.jsonFile = action.payload
		},
		setNewVal: (state, action) => {
			const props = action.payload.path.split("/")
			const lastKey = props.pop()
			const nestedObj = props.reduce((a, prop) => a[prop], state.jsonFile)
			nestedObj[lastKey] = action.payload.value
		},
	},
})

export const {setJson, setNewVal} = jsonSlice.actions

export const jsonSliceReducer = jsonSlice.reducer
