import React, {useState} from "react"
import {Input, MomoizedInput} from "./Input"
import {Paper, Stack, Typography} from "@mui/material"
import {styled} from "@mui/system"

export const Folder = ({data, gaps, hidden, parsedJson, path}) => {
	const [hiddenFolder, setHiddenFolder] = useState(hidden)

	const {name, innerFolder, ...restParams} = data

	return (
		<Paper variant="outlined" sx={{padding: 1}}>
			<Stack spacing={1}>
				<Stack direction={"row"} spacing={1} justifyContent={"space-between"} alignItems={"center"}>
					<TypographyStyled
						hashover={data.innerFolder?.length}
						variant={"h5"}
						component={"p"}
						onClick={(e) => {
							e.stopPropagation()
							setHiddenFolder(!hiddenFolder)
						}}>
						{name}
					</TypographyStyled>
					<Stack direction={"column"} spacing={1}>
						{Object.keys(restParams).map((item, i) => (
							<MomoizedInput value={data[item]} key={i} path={path + `/${item}`} />
						))}
					</Stack>
				</Stack>
				{!hiddenFolder &&
					data.innerFolder?.length &&
					data.innerFolder.map((item, i) => (
						<Folder data={item} gaps={gaps + 15} key={item.name} hidden={true} parsedJson={parsedJson} path={path + `/innerFolder/${i}`} />
					))}
			</Stack>
		</Paper>
	)
}

export const TypographyStyled = styled(Typography)(({hashover}) => ({
	...(hashover && {
		"&:hover": {
			cursor: "pointer",
			color: "blue",
		},
	}),
}))
