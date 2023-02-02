import { Navbar, CreatePost, PreviewPost, TextArea } from './components'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className='main'>

        <div className='create-post'>
          <CreatePost />
        </div>

        <div className='text'>
          <TextArea />
        </div>

        <div className='preview-post'>
          <PreviewPost />
        </div>
      </div>
      
    </div>
  )
}

export default App
