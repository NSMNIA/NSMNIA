import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./config/Routes";
import Error from "./pages/Error";

type Props = {}

const App = (props: Props) => {
    useEffect(() => {
        if (sessionStorage.getItem('theme') === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                sessionStorage.setItem('theme', 'dark');
            } else {
                sessionStorage.setItem('theme', 'light');
            }
        } else {
            if (sessionStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
            }
        }
    })



    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    {routes.map((route, index) => {
                        return <Route key={index}
                            path={`/${route.path}`}
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