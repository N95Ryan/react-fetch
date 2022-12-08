import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		<div class="wrapper p-12">
    <div class="box-wrapper">
     <div class="box">
	 <h2 class="brand">Veuillez vous identifier</h2>
        <form id="form" action="">
          <div>
            <p>Identifiant :</p>
            <input type="text" id="name" required placeholder=" "></input>
          </div>

		  <div>
          <p>Mot de passe :</p>
            <input type="text" id="password" required placeholder=" "></input>
          </div>

          <input className="button" id="submit" type="submit" value="Se connecter"></input>
        </form>  
  </div>
    </div>
</div>
    </div> 

  )
}


export default App;
