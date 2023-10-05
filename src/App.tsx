import {theme} from "./theme.ts";
import {CssVarsProvider} from "@mui/joy";

function App() {
    return (
        <CssVarsProvider theme={theme}>
        </CssVarsProvider>
    )
}

export default App
