import React, { useState, useEffect } from "react";

function Blink({ text }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 500);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return <p style={{ display: visible ? "block" : "none" }}>{text}</p>;
}

export default Blink;
