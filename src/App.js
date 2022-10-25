import "./App.css"
import {Folder} from "./components/Folder"
import {useDispatch, useSelector} from "react-redux"
import {setJson} from "./redux/standardReportsSlice"
import {Button, Stack} from "@mui/material"

function App() {
	const dispatch = useDispatch()

	const jsonFile = useSelector((state) => state.json.jsonFile)

	const handleChange = (e) => {
		const fileReader = new FileReader()
		fileReader.readAsText(e.target.files[0], "UTF-8")
		fileReader.onload = (e) => {
			dispatch(setJson(JSON.parse(e.target.result)))
		}
	}

	function download(content, fileName, contentType) {
		var a = document.createElement("a")
		var file = new Blob([content], {type: contentType})
		a.href = URL.createObjectURL(file)
		a.download = fileName
		a.click()
	}

	return (
		<Stack direction={"column"} spacing={1} margin={"0 auto 0"} padding={"25px 25px 0"} alignItems={"stretch"} maxWidth={500}>
			<input aria-label={"input-file"} type="file" accept=".json" onChange={handleChange} />
			{jsonFile.map((item, i) => (
				<Folder data={item} gaps={0} key={item.name} hidden={true} path={`${i}`} />
			))}
			<Button variant="contained" onClick={() => download(JSON.stringify(jsonFile), "Новый файл", "application/json")}>
				Сохранить
			</Button>
		</Stack>
	)
}

export default App
