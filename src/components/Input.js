import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {setNewVal} from "../redux/standardReportsSlice"
import {MenuItem, Select, Stack, TextField, Typography} from "@mui/material"

const Input = ({value, path}) => {
	const dispatch = useDispatch()

	const [inputValue, setInputValue] = useState(value)

	return (
		<Stack direction={"row"} spacing={1} alignItems={"center"}>
			<Typography component={"p"}>{path.split("/").pop()}:</Typography>
			{typeof value === "string" && (
				<TextField
					placeholder={"value"}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={(e) => dispatch(setNewVal({path, value: e.target.value}))}
				/>
			)}
			{typeof value === "boolean" && (
				<Select
					fullWidth
					placeholder={"value"}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={(e) => dispatch(setNewVal({path, value: e.target.value}))}>
					<MenuItem value={true}>true</MenuItem>
					<MenuItem value={false}>false</MenuItem>
				</Select>
			)}
		</Stack>
	)
}

export const MomoizedInput = React.memo(Input)
