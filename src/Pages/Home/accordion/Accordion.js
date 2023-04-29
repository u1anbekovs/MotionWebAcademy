import React, {useState, useRef} from 'react';
import "./Accordion.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const faqs = [
    {
        id: 1,
        header: "Нужны ли начальные знания для учёбы?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        header: "Как проходит консультация?",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        header: "Какой график обучения? Получится ли совмещать его с работо?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        header: "Мне помогут трудоустроится?",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    },
    {
        id: 5,
        header: "Кто мне поможет, если возникнут вопросы?",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    },
    {
        id: 6,
        header: "Какая техника нужна для обучения?",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq;

    return (
        <div className="card">
            <div className="card--header">
                <div className={`card--header__toggle ${active === id ? 'active' : ''}`}
                     onClick={() => handleToggle(id)}>
                    <h3>{header}</h3>
                    <p><MdOutlineKeyboardArrowDown/></p>
                </div>
            </div>


            <div ref={contentEl} className={`card--collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? {height: contentEl.current.scrollHeight}
                    : {height: "0px"}
            }>

                <div className="card--collapse__body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <section id="accordion">
            <div className="container">
                <div className="accordion">
                    <h1>Частые вопросы</h1>
                    <div className="accordion--details">
                        {faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                               faq={faq}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion