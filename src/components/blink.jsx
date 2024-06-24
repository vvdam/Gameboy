import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importation de PropTypes

function Blink({ text }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 500);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return <p style={{ opacity: visible ? 1 : 0 }}>{text}</p>;
}
Blink.propTypes = {
    text: PropTypes.string.isRequired, // Définir le type de prop
};

export default Blink;
