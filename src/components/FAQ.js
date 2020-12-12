import React from 'react'

const data = [
    {
        "question":"Question 1",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
    {
        "question":"Question 2",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend. Porta nibh venenatis cras sed."
    },
]

const FAQ = () => {

    return (
        <section className="faq">
            <div className="faq__copy">
                <h2>FAQ</h2>
                <p>Below are a list of frequently asked question </p>
            </div>
            {
                data.map((set) => {
                    return (
                        <div className="faq__set">
                            <h3>{set.question}</h3>
                            <p>{set.answer}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default FAQ