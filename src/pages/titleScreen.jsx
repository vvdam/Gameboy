import Blink from "../components/blink";

function TitleScreen() {
    console.info("test");
    return (
        <div>
            <h1>Welcome to the Trivia Game!</h1>
            <p>
                Test your knowledge and compete with others to become the
                ultimate trivia champion!
            </p>
            <h1>Welcome to the Trivia Game!</h1>
            <Blink text="Start Game" />
        </div>
    );
}
export default TitleScreen;
