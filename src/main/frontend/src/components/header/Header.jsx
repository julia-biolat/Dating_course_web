import "./header.css";
import homeImage from '../../image/home1.png';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">DATING SKILLS</span>
        <span className="headerTitleLg">My Partner's Heart?</span>
      </div>
      <img
          className="headerImg"
          src={homeImage} // 'src' 속성을 임포트한 이미지로 변경합니다.
          alt="Home"
      />
    </div>
  );
}
