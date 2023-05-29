import logo from './logo.svg';
import './App.css';

/**
 * 웹사이트의 화면 출력
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>Let's Develop Management System</h2>
    </div>
  );
}

export default App;
