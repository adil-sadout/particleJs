import ParticleJs from "./ParticleJs"


function App() {
  return (
    <div className="container my-5">
      <div className="height650 d-flex flex-column justify-content-center align-items-center">
        <div style={{position:"absolute",zIndex:"-999"}} >
          <ParticleJs/>
        </div>
        
        <p className="display-1  text-light">
          KYC WITH PRIVACY
        </p>
        <p className="lead text-light">First ever project to help KYC without having to share your information</p>
        <img width="100px" src="./assets/fingerprint2.gif" alt="didn't load ser" />
      </div>

    <div className="bg-success rounded p-5 my-5">
      <h2 className="display-1 text-light text-center pt-5">A global turn-key compliance solution</h2>
      <p className="pt-5 text-dark fs-5 text-center">An all-in-one workflow solution to verify your customers’ identities, streamline a KYC on-boarding process and manage the entire customer lifecycle.</p>
      <button className="btn btn-success"></button>

    </div>

    <div className="text-center">
      <img width="50px" src="./assets/down-arrow.gif" alt="" />
    </div>

    <div className="bg-dark p-5 my-5 rounded text-light">
      <h2>
      Bank-Grade Compliance Toolkit
      </h2>
      <div className="grid g-5 py-5">
        <div className="row pb-5">
          <div className="col-sm-4  ">
            <h3>Comply with regulations</h3>
            <p>With 50+ years of hands-on experience in financial and regulatory fields, our team can set up the system to your specific requirements, providing a solution for complying with global, local and future regulations.</p>
          </div>
          <div className="col-sm-4  ">
            <h3>Operate your business globally</h3>
            <p>We authenticate 4,000+ types of documents from over 240+ countries in local languages, which means you can on-board and verify customers around the world.</p>
          </div>
          <div className="col-sm-4  ">
            <h3>Reduce operational costs</h3>
            <p>We help your compliance team efficiently review and process incoming customers by streamlining their workflow and automating the screening and verification process.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h3>Comply with regulations</h3>
            <p>With 50+ years of hands-on experience in financial and regulatory fields, our team can set up the system to your specific requirements, providing a solution for complying with global, local and future regulations.</p>
          </div>
          <div className="col-sm-4">
            <h3>Comply with regulations</h3>
            <p>With 50+ years of hands-on experience in financial and regulatory fields, our team can set up the system to your specific requirements, providing a solution for complying with global, local and future regulations.</p>
          </div>
          <div className="col-sm-4">
            <h3>Comply with regulations</h3>
            <p>With 50+ years of hands-on experience in financial and regulatory fields, our team can set up the system to your specific requirements, providing a solution for complying with global, local and future regulations.</p>
          </div>
        </div>
        
        

      </div>
    </div>

    

    </div>
    
  );
}

export default App;
