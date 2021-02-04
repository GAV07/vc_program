import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { MdExpandMore } from 'react-icons/md'

const data = [
    {
        "question":"How many hours do I need to commit?",
        "answer": "Our pre-accelerator program features a self-paced online course; weekly masterminds and mentor sessions. Programming will be up to 15 hours per week."
    },
    {
        "question":"Are there any pre-requisites that must be completed before participation?",
        "answer": "Participants in the pre-accelerator must have a registered business. The majority shareholders of that venture must be black entrepreneurs."
    },
    {
        "question":"Do you only work with tech companies?",
        "answer": "No! We hope to welcome founders from a wide range of industries to join our program."
    },
    {
        "question":"Can a solo-founder apply?",
        "answer": "Yes!"
    },
    {
        "question":"Do I need to give equity?",
        "answer": "The Center for Black Innovation does not take equity nor provide funding for startups that participate in our pre-acelerator program."
    },
    {
        "question":"Is this program completely virtual?",
        "answer": "Yes. All programming will be facilitated virtually."
    },
    {
        "question":"How do you choose ventures to accept?",
        "answer": "Applicants are chosen based on the following criteria: quality of team, actual or potential impact, growth potential and alignment to the accelerator."
    },
    {
        "question":"When will I hear back about my application?",
        "answer": "All decision will be sent by February 15, 2021. If you have questions about your application, feel free to reach out to us at info@cfbi.org"
    },
]


const FAQ = () => {

    return (
        <section className="faq">
            <div className="faq__copy">
                <h2>FAQ</h2>
                <p>Below are a list of frequently asked question </p>
            </div>
            <div className="faq__block">
                {
                    data.map((set) => {
                        return (
                            <Accordion key={set.question} >
                                <AccordionSummary expandIcon={<MdExpandMore />}><h3>{set.question}</h3></AccordionSummary>
                                <AccordionDetails><p>{set.answer}</p></AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FAQ