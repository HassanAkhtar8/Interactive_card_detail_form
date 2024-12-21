import './App.css';
import front from '../images/bg-card-front.png';
import back from '../images/bg-card-back.png';
import sv from '../images/card-logo.svg'
function App() {
const onSubmit = (e)=>{
  e.preventdefault()
}
  return (
    <>
      <div className='hero'>
      <img className='backImg' src={back} alt="card back" />
      <div className='frontImgContainer'>
           <img className='frontImg' src={front} alt="card front" />
           <span className='cardNumber'>0000 0000 0000 0000</span>
           <span className='cardName'>Jake Paul</span>
           <img className='cardLogo' src={sv} alt="card logo" />
           <span className='cardExpire'>12 / 25</span>
      </div>
    
      </div>

      <div className='form'>

      <form onSubmit={onSubmit}> 

      <p>CARDHOLDER NAME</p>
      <input type="text" placeholder='e.g. Ali'/>
      <p>CARD NUMBER</p>
      <input placeholder='e.g. 1234 5678 9123 0000' />
      <p>EXP. Date (MM/YY) <span>CVC</span> </p>
      <span>
        <input className='input' type="number" placeholder='MM' />
        <input className='input' type="number" placeholder='YY' />
        <input className='input' type="number" placeholder='e.g. 123' />
      </span>
      <button>Confirm</button>

      </form>

      </div>

    </>
  )
}

export default App
