import "./global.css";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
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
                            <Outlet />
                        </gameboy-screen>
                    </div>
                </div>
            </gameboy-crystal>
        </div>
    );
}

export default App;
