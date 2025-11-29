import "../Styles/HomePage.css"
import { useState } from "react";
const HomePage = () => {
    const [x,y] = useState("Get your fortune");
    async function Getyourfortune() {
        const URL = "http://localhost:3000/fortune";
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw error(response.status);
            }
             const data = await response.json();
             y(data.fortune);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className="Home">
        <div className="box">
            <textarea id="message" readOnly value={x}></textarea> 
            <button id="btn_ft" onClick={Getyourfortune}>fortune</button>
        </div>
    </div>
  )
}

export default HomePage
