import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Profile name="Maria Sagwa" email="maria.sagwa@strathmore.edu" />
      <Counter />
    </div>
  );
};

export default App;
