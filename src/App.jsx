import { useEffect, useState } from 'react';
import { AdviceId, Card } from './components/Card';
import Dice from './assets/icon-dice.svg';
import Pattern from './assets/pattern-divider-desktop.svg';
function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAdvice = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
      );
      const data = await res.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <Card>
        {error && <div>Error fetching advice</div>}
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            <AdviceId>ADVICE #{adviceId}</AdviceId>
            <h1>{`"${advice}"`}</h1>
            <div>
              <img style={{ width: '100%' }} src={Pattern} alt="divider" />
            </div>
          </>
        )}
      </Card>

      <div className="dice-icon">
        <img onClick={getAdvice} className="dice" src={Dice} alt="dice" />
      </div>
    </div>
  );
}

export default App;
