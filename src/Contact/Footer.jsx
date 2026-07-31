
const Footer = () => {
    const ContactQuestions = [
        {question: "Do you travel for weddings?", answer: "Yes - anywhere in Lagos as standard and further for destination weddings with travel quoted upfront during your consultation."},
        {question: "How far ahead should i book?", answer: "Most brides reach out 6-12 months ahead, since only one booking is taken per day. Editorial and shoot dates can usually be arranged with less notice."},
        {question: "Do you do makeup for the whole bridal party?", answer: "Yes, bridal party makeup can be added when you fill out the consulation form - just note the number of people in the notes field."}
    ]
    return (
        <div className="bg-custom-taupe flex justify-center mt-15 p-3">
            <div className="flex flex-col space-y-3 mt-15 text-center">
                <div>
                    <p className="text-custom-gold tracking-wider">BEFORE YOU WRITE IN</p>
                    <h1 className="text-2xl espresso tracking-wide">A few things people usually ask</h1>
                </div>
                <div className="mt-15">
                    {ContactQuestions.map((c, index) => (
                        <div className="space-y-1" key={index}>
                            <h1 className="espresso text-xl">{c.question}</h1>
                            <h1 className="espresso">{c.answer}</h1>
                            <hr className="border-custom-gold border-t my-6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
