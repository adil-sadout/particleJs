import Particles from "react-tsparticles";
import {configFile}  from "./ParticleConfig" 
function ParticleJs() {

    

  return (
    <Particles
        id="tsparticles"
        options={configFile}>
    </Particles>
    
  )
}

export default ParticleJs