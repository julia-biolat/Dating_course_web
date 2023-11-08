import { Link } from "react-router-dom";
import "./post.css";
import homeImage1 from '../../image/datecourse1.png';

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              #데이트코스
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              #서울
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            ✨갓성비 내리는 서울 데이트 코스💜 짜드립니다｜팝업 스토어, 미술관, 전시, 체험 추천
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        헥헥.. 🥵 유난히 길고 더운 올여름!
        폭염 속 오아시스🌴 같은
        시원한 실내 데이트 코스, 필요하지 않으세요..?

        그래서 날씨요정 김가영 기상캐스터가 다녀왔습니다!
        더울 틈 없고, 지루할 틈은 더더욱 없는
        갓.성.비. 서울 실내 데이트 코스 5!  🎉
      </p>
    </div>
  );
}
