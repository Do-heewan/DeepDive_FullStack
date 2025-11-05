import Link from "next/link";

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <h1 style={titleStyle}>
              영화, TV 프로그램을 무제한으로.
            </h1>
            <p style={subtitleStyle}>
              다양한 디바이스에서 시청하세요. 언제든지 해지 가능합니다.
            </p>
            <p style={descriptionStyle}>
              시청할 준비가 되셨나요? 영화를 탐색하려면 아래 버튼을 클릭하세요.
            </p>
            <Link href="/movies" style={ctaButtonStyle}>
              시작하기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#000",
  color: "#fff",
};

const heroStyle: React.CSSProperties = {
  position: "relative",
  height: "80vh",
  backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlayStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "0 2rem",
  maxWidth: "800px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "3.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  lineHeight: "1.1",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "400",
  marginBottom: "1.5rem",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#ccc",
};

const ctaButtonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#e50914",
  color: "#fff",
  padding: "1rem 2.5rem",
  fontSize: "1.5rem",
  fontWeight: "600",
  borderRadius: "4px",
  textDecoration: "none",
  transition: "background-color 0.3s",
  cursor: "pointer",
  border: "none",
};

const featuresStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  padding: "4rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const featureCardStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "2rem",
};

const iconStyle: React.CSSProperties = {
  fontSize: "4rem",
  marginBottom: "1rem",
};