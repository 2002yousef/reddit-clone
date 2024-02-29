import Logo from './logo.png'
import {SearchIcon} from '@heroicons/react/solid'

function App() {
  return (
    <div>
      <header className="flex w-full bg-reddit_dark p-2">
        <div className='mx-4'>
          <img src={Logo} alt='reddit logo' className='w-8 h-8 '/>
        </div>
        <from action="" className='bg-gray-800 p-1 flex'>
          <SearchIcon className='text-gray-300 h-7 w-7'/>
          <input type='text' className='bg-gray-800 h-6'/>
        </from>
      </header>
    </div>
  );
}

export default App;
