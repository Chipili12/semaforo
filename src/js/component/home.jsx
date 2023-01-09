import React, { useState } from "react";

const Home = () => {
  const [redClick, setredClick] = useState('');
  const [yellowClick, setyellowClick] = useState('');
  const [greenClick, setgreenClick] = useState('');
  
  
	const setredsemaforo = () => {
	  setredClick('apretado');
	  setyellowClick('');
	  setgreenClick('');
	};
  
	const setyellowsemaforo = () => {
	  setyellowClick('apretado');
	  setredClick('');
	  setgreenClick('');
	};
  
	const setgreensemaforo = () => {
	  setgreenClick('apretado');
	  setredClick('');
	  setyellowClick('');
	};
  
	return (
	  <div className="semaforo container text-center d-flex flex-column">
		<button onClick={setredsemaforo} className={`Red ${redClick} mt-3 mb-2`}></button>
		<button onClick={setyellowsemaforo} className={`Yellow ${yellowClick} mb-2`}></button>
		<button onClick={setgreensemaforo} className={`Green ${greenClick} mb-3`}></button>
	  </div>
	);
	}
  
  
export default Home;
