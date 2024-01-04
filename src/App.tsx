import { useState } from 'react'
import reactLogo from './assets/react.svg'
import monkey from './assets/monkey.jpg'
import './App.css'


const messages=["Well, that's a real masterpiece of chaos!",
"Quite the organized disaster we've got here!",
"It's like someone gave chaos a makeover, and it's working wonders.",
"This is what happens when chaos throws a party and forgets to clean up afterward!",
"It's a symphony of disorder, and everyone's playing their part.",
"Ah, the majestic dance of mayhem is truly a sight to behold!",
"It's not just a mess; it's a celebration of untidiness!",
"Bravo! I've never seen chaos so confidently take the stage.",
"A true masterpiece in the art of disarray!",
"This chaos deserves a standing ovation—it's truly in a league of its own!",
"Behold the grand spectacle of organized chaos, a true marvel!",
"In the realm of disorder, this is the pièce de résistance!",
"A chaotic masterpiece that defies the laws of neatness!",
"Chaos has never looked so polished—truly a work of art!",
"It's not just messy; it's a chaotic ballet of sublime proportions!",
"A symphony of disarray, where every note is out of place but harmonious!",
"Brace yourself for the grand unveiling of this splendid chaos!",
"The chaos gods themselves would tip their hats to this glorious mess!",
"A standing ovation for the unrivaled king of untidiness!",
"Mayhem's magnum opus—a chaos connoisseur's dream come true!",
"Step right up and witness the marvel of controlled pandemonium!",
"If chaos were an art form, this would be the Mona Lisa of disorder!",
"Behold the grand tapestry of entropy, woven with the finest threads of disarray!",
"Chaos at its peak, a true masterpiece that defies all organizational norms!",
"In the chaos Olympics, this would undoubtedly clinch the gold medal!",
"A kaleidoscope of disorder where each hue is a different shade of mayhem!",
"This chaos is so avant-garde; even Picasso would struggle to capture its essence!",
"An orchestrated pandemonium, where every element plays its part in the grand symphony of mess!",
"A chaotic choreography that pirouettes on the edge of total disintegration!",
"This isn't just chaos; it's a chaotic opulence that redefines disorder!"]

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(getRandomMessage())


  return (
    <div  style={{ 
      backgroundImage: `url(${monkey})`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      alignItems: 'stretch'
    }} >
      <h1>IS IT A SHAMBLES?</h1>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={monkey} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      {/* </div> */}
      <div className="card">
        <button onClick={() => setMessage(getRandomMessage)}>
          <h2>
           {message}
          </h2>
        </button>
        
      </div>
     
    </div>
  )
}

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex]
}

export default App