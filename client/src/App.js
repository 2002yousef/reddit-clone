import Logo from './logo.png'
import Avatar from './avatar.png'
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon} from '@heroicons/react/outline'
import './style.css'

function App() {
  return (
    <div>
      <header className="w-full bg-reddit_dark p-2">
        <div className='mx-4 flex'>
          <img src={Logo} alt='reddit logo' className='w-8 h-8 mr-4'/>
          <form action="" className='bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow'>
          <SearchIcon className='text-gray-300 h-6 w-6 mt-1'/>
          <input type='text' className='bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-gray-400' placeholder='Search'/>
          </form>
          <button className='px-2 py-1'>
            <ChatIcon className='text-gray-400 w-6 h-6 mx-2' />
          </button>
          <button className='px-2 py-1'>
            <BellIcon className='text-gray-400 w-6 h-6 mx-2' />
          </button>
          <button className='px-2 py-1'>
            <PlusIcon className='text-gray-400 w-6 h-6 mx-2' />
          </button>

          <button className='rounded-md flex ml-4'>
            <div className='w-8 h-8 bg-gray-600 rounded-md'>
              <img src={Avatar} alt='avatar' style={{filter: 'invert(100%)'}} className='block'/>
            </div>
            <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 ml-1'/>
          </button>
        </div>
      </header>

      <section className='subheader'>
        <img src='https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png?width=4000&s=9684bc66e812b8730ad694c3f454da8c00a493d7' alt='banner'/>
      </section>
    </div>
  );
}

export default App;
