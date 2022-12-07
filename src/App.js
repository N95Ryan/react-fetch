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
            <input type="text" name="" id="name" required placeholder=" "></input>
            <label>Identifiant : </label>
          </div>

		  <div>
            <input type="text" name="" id="name" required placeholder=" "></input>
            <label>Mot de passe : </label>
          </div>

          <input id="submit" type="submit" value="Se connecter"></input>
        </form>  
  </div>
    </div>
</div>
    </div> 

  )
}


export default App;
