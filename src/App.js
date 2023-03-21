import './App.css';
import UNITED_STATES from './United_States';
// import CANADA_MEX from './Canada_Mex';
// import AdAPI from './AdAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Trucker Ready US Continental Road-Conditions</h1>
          <h4>Built by Tony J Swearingen</h4>
          <h4>Owned by Swearingen Unlimited LLC</h4>
          <h6>© 01/22/2023</h6>
      
      <UNITED_STATES />
      {/* <CANADA_MEX /> */}
      <br />
      {/* <AdAPI /> */}
      </header>
    </div>
  );
}

export default App;