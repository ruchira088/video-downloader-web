import React, {useState} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Grid} from "@material-ui/core"
import "./App.css"
import ApplicationContext, {DEFAULT_CONTEXT} from "context/ApplicationContext"
import Navigator from "components/Navigator";
import MainContainer from "./pages/MainContainer";
import TitleBar from "./components/title-bar/TitleBar";

export default () => {
    const [applicationContext, setApplicationContext] = useState(DEFAULT_CONTEXT)

    return (
        <div className="App">
            <ApplicationContext.Provider value={applicationContext}>
                <Router>
                    <Grid container>
                        <TitleBar {...applicationContext} setApplicationContext={setApplicationContext}/>
                        <Navigator/>
                        <MainContainer/>
                    </Grid>
                </Router>
            </ApplicationContext.Provider>
        </div>
    )
}
