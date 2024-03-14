
import './App.css'
import Blogs from './Componants/Blogs/Blogs'
import Bookmarks from './Componants/Bookmarks/Bookmarks'
import Header from './Componants/Header/Header'
function App() {


  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
