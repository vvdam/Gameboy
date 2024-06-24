import { useState, useEffect, useRef } from "react";
import Blink from "../../components/blink";
import "./titleScreen.css";
import { useNavigate } from "react-router-dom";
import Console from "../../components/consolinfo";
function TitleScreen() {
    const navigate = useNavigate();

    const [showContent, setShowContent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false); // État pour contrôler le fondu
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video
                .play()
                .then(() => {
                    // Lecture automatique démarrée avec succès
                })
                .catch((error) => {
                    // La lecture automatique n'a pas démarré, gestion de l'erreur
                    console.error("Could not autoplay video:", error);
                });

            video.onended = () => {
                setFadeOut(true); // Commence le fondu
                setTimeout(() => {
                    setShowContent(true); // Affiche le contenu après le fondu
                }, 1000); // Durée du fondu (1 seconde)
            };
        }
    }, []);

    return (
        <div
            className="container-screen"
            onClick={() => navigate("/ougabouga")}
        >
            <Console />
            {showContent ? (
                <>
                    <h1>Adam Maaloul</h1>
                    <h4>Développeur Web</h4>
                    <Blink text={"Click to Start Game"} />
                </>
            ) : (
                <video
                    src="src/assets/intro.mp4"
                    type="video/mp4"
                    ref={videoRef}
                    autoPlay
                    muted
                    className={fadeOut ? "fade-out" : ""}
                    playsInline
                    style={{
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}

export default TitleScreen;
