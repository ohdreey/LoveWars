import './App.css';
import Gender from './Components/Gender';

import wallpaper from './images/wallpaper.jpg';



const App = () => {

  return (
    <div className='background'>
      <img src={wallpaper} alt="galaxy"/>
      <Gender/>

    </div>
  );
}

export default App;
