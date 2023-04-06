import logo from './logo.svg';
import axios from 'axios';
import qs from 'qs';
import './App.css';

function App() {
  const requestAPI = async () => {
    try {
        const result = await axios.post(`http://localhost/testYiiReact/web/index.php?r=site/axios`,  qs.stringify({
          cartellino: "734500TO",
          psw: "vuBMCSWPXd93",
      }));
        if(result) {
            console.log(result.data);
        }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={() => requestAPI()}
        >
          Prova Axios
        </a>
      </header>
    </div>
  );

}
export default App;
