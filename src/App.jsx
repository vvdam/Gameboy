import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="Greatcontainer">
            <gameboy-crystal>
                <div className="container">
                    <div className="top">
                        <span className="text">
                            DOT MATRIX WITH STEREO SOUND
                        </span>
                    </div>
                    <div className="bottom">
                        <div className="battery">
                            <div className="led on"></div>
                            <div className="text">BATTERY</div>
                        </div>
                        <gameboy-screen class="container2">
                            {/* </Outlet> */}
                            <h1>hello world</h1>
                        </gameboy-screen>
                    </div>
                </div>
            </gameboy-crystal>
        </div>
    );
}

export default App;
