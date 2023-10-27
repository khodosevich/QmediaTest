import React, { useState } from 'react';
import classes from '../style/quiz.module.css';
import {useNavigate} from "react-router-dom";

const QuizComponent = () => {

    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);


    const questionsWithOptions = [
        {
            question: 'Сколько вам лет?',
            options: [
                'Нужны средства для ребёнка младше 10 лет',
                'Мне меньше 25 лет',
                'От 25 до 35 лет',
                'От 35 до 45 лет',
                'Мне больше 45 лет'
            ]
        },
        {
            question: 'Какой у вас тип кожи?',
            options: ['Сухая', 'Нормальная', 'Комбинированная', 'Жирная']
        },
        {
            question: 'Беспокоят ли воспаления на лице?',
            options: ['Да', 'Нет', 'Иногда']
        }
    ];

    const handleRadioChange = (e) => {
        const selectedOption = e.target.value;
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestionIndex]: selectedOption
        }));
    };

    const handleNextButtonClick = () => {
        if (currentQuestionIndex < questionsWithOptions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log('User answers:', userAnswers);
            navigate('/result');
        }
    };

    const handlePrevButtonClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questionsWithOptions[currentQuestionIndex];

    return (
        <div className={classes.quiz_content}>
            <h1 className={classes.title}>Онлайн-подбор средств для лица</h1>
            <p className={classes.description}>
                Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов
            </p>
            <div className={classes.quiz_container}>
                <div>
                    <div className={classes.pagination_group}>
                        <span className={currentQuestionIndex === 0 ? `${classes.pagination_group_item} ${classes.active}` : classes.pagination_group_item}></span>
                        <span className={currentQuestionIndex === 1 ? `${classes.pagination_group_item} ${classes.active}` : classes.pagination_group_item}></span>
                        <span className={currentQuestionIndex === 2 ? `${classes.pagination_group_item} ${classes.active}` : classes.pagination_group_item}></span>
                    </div>
                    <div className={classes.quiz_question}>
                        {`Вопрос ${currentQuestionIndex+1} из 3`}
                    </div>
                </div>
                <div className={classes.question_container}>
                    <div className={classes.quiz_container_title}>
                        <p>{currentQuestion.question}</p>
                    </div>
                    <div className={classes.quizes_radios}>
                        {currentQuestion.options.map((option, index) => (
                            <div key={index} className={classes.quizes_radios_item}>
                                <input
                                    id={`option${index}`}
                                    className={classes.quiz_radio}
                                    type="radio"
                                    value={option}
                                    onChange={handleRadioChange}
                                    checked={userAnswers[currentQuestionIndex] === option}
                                />
                                <label className={classes.quiz_radio_text} htmlFor={`option${index}`}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.btns_quiz}>
                    {
                        currentQuestionIndex > 0 && <div className={classes.btn_container_prev}>
                            <button className={classes.btn_container_prev_quiz} onClick={handlePrevButtonClick}>
                                Назад
                            </button>
                        </div>
                    }
                    <div className={classes.btn_container}>
                        {
                            currentQuestionIndex === 2 ?
                                    <button className={classes.btn_container_quiz} onClick={handleNextButtonClick}>
                                        Узнать результат
                                    </button>
                             :
                                <button className={classes.btn_container_quiz} onClick={handleNextButtonClick}>
                                    Дальше
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;
