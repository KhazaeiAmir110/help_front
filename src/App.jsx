import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
            <Toaster />
        </>
    )
}

export default App
