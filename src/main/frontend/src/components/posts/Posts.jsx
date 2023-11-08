import React from 'react';
import Post from "../post/Post";
import "./posts.css";
// 이미지 파일을 임포트합니다.
import date1 from '../../image/datec1.png';
import date2 from '../../image/date2.png';
import date3 from '../../image/date3.png';
import date4 from '../../image/qna2.png';
import date5 from '../../image/qna1.png';

export default function Posts() {
    return (
        <div className="posts">
            <Post img={date1} />
            <Post img={date2} />
            <Post img={date3} />
            <Post img={date4} />
            <Post img={date5} />
        </div>
    );
}
