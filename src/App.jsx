import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <p>
    Hi,
    <br />
    I'm Emir Chacra, a Chilean music producer, bassist, DJ, and digital audio
    researcher.
  </p>
  <p>
    My webpage is under construction :) But soon it'll be online and beautiful
    again.
  </p>
  <p>
    In the meantime, if you wanna contact me about academic/research stuff email
    me at <a href="mailto:echacra@ucsd.edu">echacra@ucsd.edu</a>
  </p>
  <p>
    If you wanna contact me about music requests/collaborations/etc email me at <a href="mailto:music@emirchacra.com">music@emirchacra.com</a>
  </p>
  <p>
    You can also check my music at <a href="https://mncrmo.bandcamp.com">https://mncrmo.bandcamp.com</a>
  </p>
  <p>See you soon :)</p>
</>
  )
}

export default App
