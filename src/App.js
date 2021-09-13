import './App.css';
import {useState} from 'react';
import fillOptions from './fillOptions';

function App() {

  const [brutto, setBrutto] = useState(0);
  const [vero, setVero] = useState(1);
  const [vakuutus, setVakuutus] = useState(1);
  const [elake, setElake] = useState (1);
  const [netto, setNetto] = useState(0);
  
  const [veroSumma, setVeroSumma] = useState(0);
  const [elakeSumma, setElakeSumma] = useState(0);
  const [vakuutusSumma, setVakuutusSumma] = useState(0);


  function calculate(e){
    e.preventDefault();
    const veroEurot = brutto / 100 * vero;
    const elakeEurot = brutto / 100 * elake;
    const vakuutusEurot = brutto / 100 * vakuutus;
    setVeroSumma(veroEurot);
    setElakeSumma(elakeEurot);
    setVakuutusSumma(vakuutusEurot);
    setNetto(brutto - veroEurot - elakeEurot - vakuutusEurot);
  }

  return (
    <div id="container">
      <h3>Salary calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Salary</label>
        </div>
        <input type="number" value={brutto}
        onChange={e=> setBrutto(e.target.value)}/>

        <div>
          <label>Tax percentage (%) </label>
          <output>{veroSumma} €</output>
        </div>
        <input type="number" value={vero}
        onChange={e=> setVero(e.target.value)}/>

        <div>
          <label>Pension (%) </label>
          <output>{elakeSumma} €</output>
        </div>
        <select value={elake}
        onChange={e=> setElake(e.target.value)}>
          <fillOptions />
        </select>

        <div>
          <label>Insurance (%) </label>
          <output>{vakuutusSumma} €</output>
        </div>
        <select value={vakuutus}
        onChange={e=> setVakuutus(e.target.value)}>
          <fillOptions />
        </select>

        <div>
          <label>Your salary after payments</label>
          <output id="netto">{netto} €</output>
        </div>
        <button>Calculate</button>
        </form>
      </div>
    );
}

export default App;
