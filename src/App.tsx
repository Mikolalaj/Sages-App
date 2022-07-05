import './App.scss';
import { RecoilRoot } from 'recoil';
import Desktop from './components/Desktop';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
          <Desktop />
      </div>
    </RecoilRoot>
  );
}

export default App;
