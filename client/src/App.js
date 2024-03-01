import './style.css'
import Header from './Header';
import BoardHeader from './BoardHeader';
import PostForm from './PostForm';


function App() {
  return (
    <div>
      <Header />
      <BoardHeader />
      <PostForm />
      
      <div className='px-6 bg-reddit_dark text-reddit_text'>
        <div className='border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md'>
          <h5 className='text-reddit_text-darker text-sm mb-1'>Posted by u/yousefwael02 2 hours ago</h5>
          <h2 className='text-xl mb-3'>A simple title</h2>
          <div className='text-sm leading-6'> 
            <p>
              some text
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
