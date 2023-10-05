import {Provider as ReduxProvider} from "react-redux";
import {CssVarsProvider} from "@mui/joy";

import {theme} from "@/theme.ts";
import {store} from "@/store";

function App() {
    return (
        <ReduxProvider store={store}>
            <CssVarsProvider theme={theme}>
            </CssVarsProvider>
        </ReduxProvider>
    )
}

export default App
