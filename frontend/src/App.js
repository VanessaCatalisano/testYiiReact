import Router from './components/Router'
import "./css/content.css";
import {format} from "date-fns";
function App() {
    if(localStorage.getItem("login") !== null && localStorage.getItem("dateLogin") !== null){
        if(console.log((new Date(localStorage.getItem("dateLogin"))-new Date(format(new Date("2023-04-25"), 'yyyy-MM-dd')))/ (1000 * 3600 * 24)) > 30){
            localStorage.clear();
        }
    }else{
        if(sessionStorage.getItem("login") !== null){

        }
    }
  return (
    <div className="App">
        <Router></Router>
        <footer className="footer text-center fixed-bottom bg-light text-dark d-none d-sm-block">
            <div className="container">
                <span
                    className="text-muted font-weight-lighter">© <strong>Istituto Buddista Italiano Soka Gakkai</strong>
                        2010-2023 | Via di Bellagio 2/E 50141 Firenze FI |
                        Codice fiscale: 94069310483  |
                    <a href="https://privacy.sgi-italia.org/" target="IBISGprivacy">privacy</a>
                        | questo sito utilizza solo cookie tecnici
                    <a href="https://privacy.sgi-italia.org/#cookie" target="IBISGprivacy">altre informazioni</a>
                </span>
            </div>
        </footer>
    </div>
  );

}
export default App;
