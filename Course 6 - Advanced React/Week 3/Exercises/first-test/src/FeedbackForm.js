import { useState } from "react"

function FeedbackForm(onSubmit){
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceHolder = isDisabled 
    ? "Please provide a comment."
    : "Optional Feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label>Score:</label>
                        <input type='range' value={score}  onChange={(e) => {setScore(e.target.value)}} min='0' max='10'/>
                    </div>
                    <div className="Field">
                        <label>Comment:</label>
                        <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                </fieldset>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default FeedbackForm