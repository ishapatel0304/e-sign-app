import React,{useState} from "react";
import Title from "./components/Title";
import img from "./components/img.jpg";

function App() {
  const [name, setName] = useState('Isha Patel');
  const [date, setDate] = useState('DOB');
  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature app</h1>
      < Title text={name} />
      < Title text={date} />
      <p>
      An e-signature or electronic signature is
       an efficient and legal way to get 
       electronic documents signed quickly. 
       Secure and trusted around the world, 
       e-signatures can replace a handwritten 
       signature in many processes.An electronic 
       signature is defined as "data in electronic 
       form which is attached to or logically 
       associated with other data in electronic 
       form and which is used by the signatory to 
       sign" (eIDAS Article 3) . Thus, something 
       as simple as writing your name under an 
       e-mail might constitute an electronic 
       signature.21 Feb 2024
      </p>
      <div className="img-container">
      <img src={img} alt=" signing" className="img" />
      </div>
      <div className="d-flex input-boxes">
        <input type="date" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
