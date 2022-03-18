import ParticleJs from "./ParticleJs"

function App() {
  return (
    <div className="App height650  d-flex justify-content-center align-items-center">
      <div style={{position:"absolute", zIndex:"-999"}}>
        <ParticleJs/>
      </div>
      
      <p className="display-1 text-light">
        Hello Rocket
      </p>
    </div>
  );
}

export default App;
