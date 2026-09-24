import { useNavigate } from "react-router-dom";
import { getProfile, clearSession } from "../lib/auth";

function HomePage() {
  const navigate = useNavigate();
  const profile = getProfile();

  const handleLogout = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ maxWidth: 320, margin: "80px auto", padding: 24, border: "1px solid #ddd", borderRadius: 12, textAlign: "center" }}>
      {profile?.profileImageUrl && (
        <img src={profile.profileImageUrl} alt="프로필" style={{ width: 80, height: 80, borderRadius: "50%" }} />
      )}
      <h2>{profile?.nickname ?? "회원"}님, 어서오세요!</h2>
      <button onClick={handleLogout} style={{ width: "100%", padding: 12 }}>
        로그아웃
      </button>
    </div>
  );
}

export default HomePage;
