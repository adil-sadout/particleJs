import ParticleJs from "./ParticleJs"

function App() {
  return (
    <div className="height650 d-flex flex-column justify-content-center align-items-center">
      <div style={{position:"absolute", zIndex:"-999"}} >
        <ParticleJs/>
      </div>
      
      <p className="display-1  text-light">
        KYC WITH PRIVACY
      </p>
      <p className="lead text-light">First ever project to help KYC without having to share your information</p>
      <img width="100px" src="./assets/fingerprint.gif" alt="didn't load ser" />
    </div>
  );
}

export default App;
