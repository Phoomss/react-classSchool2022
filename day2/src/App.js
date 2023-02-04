import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Footer from './Footer';
import Welcome from './Welcome';
import NameCard from './NameCard';
import CoffeeCard from './CoffeeCard';

function App() {
  let coffees = [
    {key: 1,name:"Cappucino",price:{ hot: 45, cold: 50, frappe: 60}, picture: "cappucino.jpg"},
    {key: 2,name:"Latte",price:{ hot: 45, cold: 50, frappe: 60}, picture:"latte.jpg"},
    {key: 3,name:"Americano",price:{ hot: 45, cold: 50, frappe: 60}, picture:"americano.jpg"},
  ]
  
  return(
    <>
      <Head />
      {
        coffees.map((c)=><CoffeeCard  key={c.key} name={c.name} price={c.price} picture={c.picture}/>)
      }
      <Footer />
    </>
  )
}

export default App;
