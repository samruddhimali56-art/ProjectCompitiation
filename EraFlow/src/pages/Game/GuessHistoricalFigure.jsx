import React, { useEffect, useState } from "react";

function GuessHistoricalFigure() {

    const questions = [

        {
            image: "https://i.ibb.co/G1Lh3Rg/gandhi-jpg.png",
            answer: "Mahatma Gandhi",

            clues: [
                "Led India during the Salt March.",
                "Known as the Father of the Nation.",
                "His birthday is celebrated as Gandhi Jayanti."
            ],

            hint: "His first name is Mahatma."
        },

        {
            image: "https://i.ibb.co/QFpgNQsn/shivaji-jpg.png",
            answer: "Shivaji Maharaj",

            clues: [
                "Founder of the Maratha Empire.",
                "Known for guerrilla warfare.",
                "Captured Torna Fort at a young age."
            ],

            hint: "He is known as the pride of Maharashtra."
        },

        {
            image: "https://i.ibb.co/9HQprKvX/ambedkar-jpg.png",
            answer: "B R Ambedkar",

            clues: [
                "Architect of the Indian Constitution.",
                "Born on 14 April.",
                "Also called Babasaheb."
            ],

            hint: "His initials are B.R."
        },

        {
            image: "https://i.ibb.co/bgRWTPqX/bhagatsingh-jpg.png",
            answer: "Bhagat Singh",

            clues: [
                "Freedom fighter.",
                "Associated with Hindustan Socialist Republican Association.",
                "Executed at the age of 23."
            ],

            hint: "Always seen wearing a hat."
        },

        {
            image: "https://i.ibb.co/G4vnNGw8/bose-jpg.png",
            answer: "Subhas Chandra Bose",

            clues: [
                "Founded the Indian National Army.",
                "Slogan: Give me blood, and I will give you freedom.",
                "Called Netaji."
            ],

            hint: "People know him as Netaji."
        },

        {
            image: "https://i.ibb.co/d43k93nN/rani-jpg.png",
            answer: "Rani Lakshmibai",

            clues: [
                "Queen of Jhansi.",
                "Fought in the Revolt of 1857.",
                "Known for bravery on horseback."
            ],

            hint: "She ruled Jhansi."
        },

        {
            image: "https://i.ibb.co/twgYNsq8/ashoka-jpg.png",
            answer: "Ashoka",

            clues: [
                "Mauryan Emperor.",
                "Converted to Buddhism after Kalinga War.",
                "Lion Capital is India's National Emblem."
            ],

            hint: "Mauryan ruler."
        },

        {
            image: "https://i.ibb.co/Fb7Sn2c2/akbar-jpg.png",
            answer: "Akbar",

            clues: [
                "Third Mughal Emperor.",
                "Started Din-i Ilahi.",
                "One of the greatest Mughal rulers."
            ],

            hint: "Mughal emperor."
        },

        {
            image: "https://i.ibb.co/mCSZV0JR/nehru-jpg.png",
            answer: "Jawaharlal Nehru",

            clues: [
                "India's first Prime Minister.",
                "Children celebrate his birthday as Children's Day.",
                "Called Chacha Nehru."
            ],

            hint: "Known as Chacha."
        },

        {
            image: "https://i.ibb.co/mVVDdCcb/patel-jpg.png",
            answer: "Sardar Vallabhbhai Patel",

            clues: [
                "Known as the Iron Man of India.",
                "United princely states after Independence.",
                "Statue of Unity honors him."
            ],

            hint: "Iron Man of India."
        }

    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(30);

    const [clueIndex, setClueIndex] = useState(1);
    const [showHint, setShowHint] = useState(false);
    const [message, setMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [imageBlur, setImageBlur] = useState(true);

    const current = questions[currentQuestion];


    // ---------------- TIMER ----------------

    useEffect(() => {

        if (gameOver) return;

        if (timer === 0) {

            setMessage(
                `⏰ Time Up! Answer : ${current.answer}`
            );

            setAnswered(true);

            setImageBlur(false);

            return;
        }


        const interval = setInterval(() => {

            setTimer(prev => prev - 1);

        }, 1000);

        return () => clearInterval(interval);

    }, [timer, currentQuestion]);


    // -------- Reveal Clues ----------

    useEffect(() => {

        if (gameOver) return;

        const clueTimer = setInterval(() => {

            setClueIndex((prev) => {

                if (prev < 3)
                    return prev + 1;

                return prev;

            });

        }, 8000);

        return () => clearInterval(clueTimer);

    }, [currentQuestion]);


    //---------------- CHECK ANSWER ----------------



   const checkAnswer = () => {

    if (!current || answered) return;

    // Remove extra spaces and convert to lowercase
    const userAnswer = answer
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

    // Empty answer validation
    if (userAnswer === "") {
        setMessage("⚠️ Please enter an answer");
        return;
    }

    // Full answer
    const correctAnswer = current.answer
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

    // Accept common/short names
    const acceptedAnswers = {
        "mahatma gandhi": ["mahatma gandhi", "gandhi"],
        "shivaji maharaj": ["shivaji maharaj", "shivaji", "chhatrapati shivaji"],
        "b r ambedkar": ["b r ambedkar", "br ambedkar", "b.r. ambedkar", "ambedkar", "babasaheb"],
        "bhagat singh": ["bhagat singh", "bhagat"],
        "subhas chandra bose": ["subhas chandra bose", "subhash chandra bose", "subhas bose", "netaji"],
        "rani lakshmibai": ["rani lakshmibai", "lakshmibai", "rani laxmi bai"],
        "ashoka": ["ashoka", "ashoka the great"],
        "akbar": ["akbar", "emperor akbar"],
        "jawaharlal nehru": ["jawaharlal nehru", "nehru", "chacha nehru"],
        "sardar vallabhbhai patel": [
            "sardar vallabhbhai patel",
            "vallabhbhai patel",
            "sardar patel",
            "patel"
        ]
    };

    const validAnswers = acceptedAnswers[correctAnswer] || [correctAnswer];

    // Check answer
    if (validAnswers.includes(userAnswer)) {

        setAnswered(true);
        setImageBlur(false);

        setScore((prev) => prev + 10);
        setMessage("✅ Correct!");

        setTimeout(() => {
            nextQuestion();
        }, 2000);

    } else {

        setAnswered(true);
        setImageBlur(false);

        setMessage(
            `❌ Wrong! Correct Answer : ${current.answer}`
        );
    }
};


    //---------------- NEXT ----------------

    const nextQuestion = () => {

        if (currentQuestion + 1 === questions.length) {

            setGameOver(true);

            return;

        }

        setCurrentQuestion(currentQuestion + 1);

        setAnswer("");

        setMessage("");

        setShowHint(false);

        setClueIndex(1);

        setAnswered(false);

        setImageBlur(true);

        setTimer(30);

    };


    // ---------------- GAME OVER ----------------

    if (gameOver) {

        return (

            <div
                className="container py-5"
                style={{
                    background: "#F8F3EF",
                    minHeight: "100vh"
                }}
            >

                <div
                    className="card mx-auto p-5 text-center shadow"
                    style={{
                        maxWidth: "650px",
                        borderRadius: "20px",
                        border: "1px solid #E8E2DC"
                    }}
                >

                    <h1
                        style={{
                            color: "#8C3C11",
                            fontWeight: "700"
                        }}
                    >
                        🎉 Game Finished
                    </h1>


                    <h3 className="mt-4">
                        Final Score
                    </h3>


                    <h1
                        style={{
                            fontSize: "60px",
                            color: "#8C3C11",
                            fontWeight: "700"
                        }}
                    >
                        {score} / {questions.length * 10}
                    </h1>


                    <h4
                        className="mt-3"
                        style={{
                            color: "#7D7D7D"
                        }}
                    >
                        {
                            score >= 80
                                ? "🏆 Excellent Historian!"
                                : score >= 50
                                    ? "👏 Good Job!"
                                    : "📚 Keep Learning!"
                        }
                    </h4>


                    <button
                        className="btn mt-4"
                        style={{
                            background: "#8C3C11",
                            color: "#fff",
                            padding: "10px 30px",
                            borderRadius: "8px"
                        }}
                        onClick={() => {

                            setCurrentQuestion(0);
                            setScore(0);
                            setTimer(30);
                            setAnswer("");
                            setMessage("");
                            setShowHint(false);
                            setAnswered(false);
                            setImageBlur(true);
                            setGameOver(false);
                            setClueIndex(1);

                        }}
                    >
                        🔄 Play Again
                    </button>

                </div>

            </div>

        );

    }


    return (

        <div
            className="container-fluid py-5"
            style={{
                background: "#F8F3EF",
                minHeight: "100vh"
            }}
        >

            <div className="container">

                {/* Heading */}

                <h1
                    className="text-center mb-5"
                    style={{
                        color: "#8C3C11",
                        fontWeight: "700"
                    }}
                >
                    Guess The Historical Figure
                </h1>


                {/* Progress */}

                <div
                    className="progress mb-4"
                    style={{
                        height: "12px",
                        borderRadius: "20px"
                    }}
                >

                    <div
                        className="progress-bar"
                        style={{
                            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                            background: "#8C3C11"
                        }}
                    >

                    </div>

                </div>


                {/* Top Cards */}

                <div className="row mb-4">

                    <div className="col-md-4">

                        <div
                            className="card text-center p-3 shadow-sm"
                            style={{
                                border: "1px solid #E8E2DC",
                                borderRadius: "15px"
                            }}
                        >

                            <h5
                                style={{
                                    color: "#8C3C11"
                                }}
                            >
                                ⏳ Timer
                            </h5>

                            <h2>{timer}</h2>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div
                            className="card text-center p-3 shadow-sm"
                            style={{
                                border: "1px solid #E8E2DC",
                                borderRadius: "15px"
                            }}
                        >

                            <h5
                                style={{
                                    color: "#8C3C11"
                                }}
                            >
                                🏆 Score
                            </h5>

                            <h2>{score}</h2>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div
                            className="card text-center p-3 shadow-sm"
                            style={{
                                border: "1px solid #E8E2DC",
                                borderRadius: "15px"
                            }}
                        >

                            <h5
                                style={{
                                    color: "#8C3C11"
                                }}
                            >
                                Question
                            </h5>

                            <h2>
                                {currentQuestion + 1}
                            </h2>

                        </div>

                    </div>

                </div>


                {/* Main Card */}

                <div
                    className="card shadow-lg p-4"
                    style={{
                        borderRadius: "20px",
                        border: "1px solid #E8E2DC"
                    }}
                >

                    <div className="row">

                        {/* IMAGE */}

                        <div className="col-lg-5 text-center">

                            <img
                                src={current?.image.trim()}
                                alt="figure"
                                className="img-fluid"
                                style={{
                                    height: "350px",
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: "15px",
                                    filter: imageBlur
                                        ? "blur(12px)"
                                        : "blur(0px)",
                                    transition: "0.5s ease"
                                }}
                            />

                        </div>


                        {/* RIGHT */}

                        <div className="col-lg-7">

                            <h3
                                style={{
                                    color: "#8C3C11"
                                }}
                            >
                                🔎 Clues
                            </h3>


                            <div className="mt-4">

                                {current?.clues
                                    .slice(0, clueIndex)
                                    .map((item, index) => (

                                        <div
                                            key={index}
                                            className="mb-3 p-3"
                                            style={{
                                                background: "#FFF",
                                                borderRadius: "10px",
                                                border: "1px solid #E8E2DC"
                                            }}
                                        >
                                            {item}
                                        </div>

                                    ))}

                            </div>


                            {
                                showHint &&

                                <div
                                    className="alert mt-3"
                                    style={{
                                        background: "#FFF8F2",
                                        color: "#8C3C11",
                                        border: "1px solid #A56A45"
                                    }}
                                >
                                    💡 {current?.hint}
                                </div>

                            }


                            <input
                                className="form-control mt-4"
                                placeholder="Enter your answer"
                                value={answer}
                                disabled={answered}
                                onChange={(e) =>
                                    setAnswer(e.target.value)
                                }
                                style={{
                                    height: "50px"
                                }}
                            />


                            <div className="mt-4 d-flex gap-3 flex-wrap">

                                <button
                                    className="btn"
                                    disabled={answered}
                                    onClick={checkAnswer}
                                    style={{
                                        background: "#8C3C11",
                                        color: "white"
                                    }}
                                >
                                    Check Answer
                                </button>


                                <button
                                    className="btn"
                                    disabled={showHint}
                                    onClick={() => setShowHint(true)}
                                    style={{
                                        background: "#A56A45",
                                        color: "white"
                                    }}
                                >
                                    Hint
                                </button>


                                <button
                                    className="btn"
                                    onClick={nextQuestion}
                                    style={{
                                        background: "#8C3C11",
                                        color: "white"
                                    }}
                                >
                                    Next Question
                                </button>

                            </div>


                            <h4
                                className="mt-4"
                                style={{
                                    color:
                                        message === "✅ Correct!"
                                            ? "green"
                                            : "red"
                                }}
                            >
                                {message}
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default GuessHistoricalFigure;