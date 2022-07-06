import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./config/Routes";
import Error from "./pages/Error";

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    {routes.map((route, index) => {
                        return <Route key={index}
                            path={`/NSMNIA${route.path}`}
                            element={<route.element />}
                        />
                    })}
                    <Route path='*' element={<Error message="Page not found" status={404} />} />
                </Routes>
            </Router>
        </>
    )
}

export default App