import { Link } from "react-router-dom";
import "./singlePost.css";
import date5 from '../../image/datec2.png';
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
            lassName="singlePostImg"
            src={date5} // 'src' 속성을 임포트한 이미지로 변경합니다.
            alt=""
        />
        <h1 className="singlePostTitle">
          ✨갓성비 내리는 서울 데이트 코스💜 짜드립니다｜팝업 스토어, 미술관, 전시, 체험 추천
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          헥헥.. 🥵 유난히 길고 더운 올여름!
          폭염 속 오아시스🌴 같은
          시원한 실내 데이트 코스, 필요하지 않으세요..?

          그래서 날씨요정 김가영 기상캐스터가 다녀왔습니다!
          더울 틈 없고, 지루할 틈은 더더욱 없는
          갓.성.비. 서울 실내 데이트 코스 5!  🎉

          지금 바로 만나보시죠 😉

          ⭐올드진스 김가영 기상캐스터가 도전한
          뉴진스의 슈퍼샤이 챌린지도 놓치지 마세요⭐


          - 하이커 그라운드
          - 올드진스 김가영 기상캐스터의 슈퍼샤이 챌린지 도전
          - 더현대 서울
          - 국립현대미술관
          - 청운문학도서관
          - 이태원 그래픽
          <br />
          <br />
          꼭 가보세요!~~
        </p>
      </div>
    </div>
  );
}
