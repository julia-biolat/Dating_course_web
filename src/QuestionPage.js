import React, { useState } from 'react';
import axios from 'axios';

const QuestionPage = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionContent, setQuestionContent] = useState('');

    const postQuestion = async () => {
        try {
            const response = await axios.post('/api/qa/questions', {
                title: questionTitle,
                content: questionContent,
                createdAt: new Date()
            });
            // 질문 게시 후 처리 로직...
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="질문 제목"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
            />
            <textarea
                placeholder="질문 내용"
                value={questionContent}
                onChange={(e) => setQuestionContent(e.target.value)}
            />
            <button onClick={postQuestion}>질문 올리기</button>
        </div>
    );
};

export default QuestionPage;
