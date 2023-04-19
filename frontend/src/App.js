import Router from './components/Router'
import "./css/content.css";
function App() {
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
