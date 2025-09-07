import './App.css'
import { FaDiscord } from "react-icons/fa6";

function App() {


    return (
        <div className="app" style={{marginBottom: "10rem"}}>
            <h1>World of Sorcery</h1>

            <div className="card">
                <p>
                    Stay tuned for our Alpha release: <br /> A pirate event to test the waters! <br /> Coming soon...
                </p>
                <p style={{ fontSize: "large" }}>
                    <code>play.worldofsorcery.com</code>
                </p>
            </div>

            <div className="card card--center">
                <div className="badge-discord">
                    <a href="https://discord.gg/72QwfTv2HS" target="_blank" rel="noreferrer">
                        <FaDiscord size={24} /> Join our Discord!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App
