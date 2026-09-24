import { getKakaoAuthorizeUrl } from "../lib/kakao";
import kakaoLoginImg from "../asset/kakao_login_en_large.png";

function LoginPage() {
    const handleKakaoLogin = () => {
        window.location.href = getKakaoAuthorizeUrl();
    };

    return (
        <div style={{ maxWidth: 320, margin: "80px auto", padding: 24, border: "1px solid #ddd", borderRadius: 12, textAlign: "center" }}>
            <h2>카카오 로그인</h2>
            <img src={kakaoLoginImg} alt="카카오 로그인" onClick={handleKakaoLogin} style={{ width: "100%", cursor: "pointer" }} />
        </div>
    );
}

export default LoginPage;
