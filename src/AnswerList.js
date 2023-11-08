import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerList = ({ questionId }) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await axios.get(`/api/qa/questions/${questionId}/answers`);
                setAnswers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAnswers();
    }, [questionId]);

    return (
        <ul>
            {answers.map((answer) => (
                <li key={answer.id}>
                    <p>{answer.content}</p>
                    {/* 추가적인 정보 */}
                </li>
            ))}
        </ul>
    );
};

export default AnswerList;
