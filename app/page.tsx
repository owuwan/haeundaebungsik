export default function Home() {
  return (
    <main style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#1a1a1a", backgroundColor: "#fff" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Black+Han+Sans&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --red: #E8130A;
          --yellow: #FFD600;
          --yellow-pale: #FFFDE7;
          --red-dark: #B71C1C;
          --text: #1a1a1a;
          --gray: #6b7280;
          --border: #e5e7eb;
          --bg: #fff;
        }
        body { background: var(--bg); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        section { padding: 80px 0; }
        h2 { font-family: "Black Han Sans", sans-serif; font-size: 2.2rem; color: var(--red); margin-bottom: 12px; }
        .label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; color: var(--red); margin-bottom: 8px; display: block; }
        .divider { width: 40px; height: 4px; background: var(--yellow); margin: 16px 0 32px; }
      `}</style>

      {/* 헤더 */}
      <header style={{ background: "var(--red)", padding: "14px 0", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "Black Han Sans, sans-serif", fontSize: "1.4rem", color: "var(--yellow)", letterSpacing: "0.05em" }}>해운대분식</span>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>SINCE 2008 · 부산 해운대구</span>
          </div>
          <nav style={{ display: "flex", gap: "24px" }}>
            {["메뉴", "우리이야기", "오시는길", "후기"].map(item => (
              <a key={item} href={`#${item}`} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", textDecoration: "none" }}>{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* 히어로 */}
      <section style={{ background: "var(--yellow)", padding: "80px 0 60px", borderBottom: "4px solid var(--red)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <span className="label" style={{ color: "var(--red-dark)" }}>부산 해운대구 분식 전문점</span>
              <h1 style={{ fontFamily: "Black Han Sans, sans-serif", fontSize: "3.5rem", color: "var(--red)", lineHeight: 1.15, marginBottom: "20px" }}>
                해운대에서<br />제일 맛있는<br />분식
              </h1>
              {/* 한 줄 정체성 문장 */}
              <p style={{ fontSize: "0.95rem", color: "var(--red-dark)", fontWeight: 700, marginBottom: "12px" }}>
                부산 해운대구에서 2008년부터 매일 직접 만드는 떡볶이·순대·튀김 전문점
              </p>
              <p style={{ fontSize: "0.92rem", color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
                매일 아침 직접 끓이는 떡볶이 양념,<br />
                당일 반죽으로 튀기는 바삭한 튀김,<br />
                해운대 현지인이 18년째 찾는 이유입니다.
              </p>
              {/* 연령대 타겟 */}
              <p style={{ fontSize: "0.82rem", color: "#555" }}>학생 · 직장인 · 해운대 관광객 · 10~30대 중심</p>
              {/* 평점 배지 */}
              <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
                <span style={{ background: "var(--red)", color: "#fff", padding: "6px 16px", fontSize: "0.85rem", fontWeight: 700, borderRadius: "4px" }}>⭐ 4.8</span>
                <span style={{ background: "#fff", border: "2px solid var(--red)", color: "var(--red)", padding: "6px 16px", fontSize: "0.85rem", borderRadius: "4px" }}>리뷰 156개</span>
                <span style={{ background: "#fff", border: "2px solid var(--red)", color: "var(--red)", padding: "6px 16px", fontSize: "0.85rem", borderRadius: "4px" }}>2026년 현재 운영 중</span>
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <a href="#메뉴" style={{ background: "var(--red)", color: "#fff", padding: "14px 28px", textDecoration: "none", fontWeight: 700, fontSize: "0.92rem", borderRadius: "4px" }}>메뉴 보기</a>
                <a href="#우리이야기" style={{ background: "#fff", border: "2px solid var(--red)", color: "var(--red)", padding: "14px 28px", textDecoration: "none", fontSize: "0.92rem", borderRadius: "4px" }}>우리 이야기</a>
              </div>
            </div>
            {/* 메뉴 카드 */}
            <div style={{ background: "var(--red)", padding: "40px 32px", borderRadius: "8px" }}>
              <p style={{ fontFamily: "Black Han Sans, sans-serif", fontSize: "1rem", color: "var(--yellow)", letterSpacing: "0.2em", marginBottom: "24px" }}>오늘의 메뉴</p>
              {[
                { name: "떡볶이 1인", price: "4,000원", note: "직접 끓인 양념" },
                { name: "순대 1인분", price: "4,000원", note: "국내산 당면" },
                { name: "튀김 5개", price: "3,000원", note: "당일 반죽" },
                { name: "분식 세트", price: "9,000원", note: "인기 조합" },
              ].map((m, i) => (
                <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                  <div>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{m.name}</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginLeft: "8px" }}>{m.note}</span>
                  </div>
                  <span style={{ color: "var(--yellow)", fontWeight: 700 }}>{m.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰 배지 */}
      <section style={{ background: "var(--red)", padding: "36px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", textAlign: "center" }}>
            {[
              { num: "2008년", label: "창업" },
              { num: "매일 직접", label: "양념 제조" },
              { num: "당일 반죽", label: "튀김 제조" },
              { num: "18년", label: "해운대 한 자리" },
            ].map((b, i) => (
              <div key={b.label} style={{ padding: "16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
                <div style={{ fontFamily: "Black Han Sans, sans-serif", fontSize: "1.3rem", color: "var(--yellow)", marginBottom: "4px" }}>{b.num}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)" }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 우리이야기 + E-E-A-T */}
      <section id="우리이야기">
        <div className="container">
          <span className="label">우리 이야기</span>
          <h2>18년째 같은 자리,<br />같은 맛</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 2, marginBottom: "20px" }}>
                2008년 해운대구 해운대로에 처음 문을 열었습니다.
                처음부터 지금까지 지켜온 원칙은 하나입니다.
                <strong style={{ color: "var(--red)" }}> 매일 직접 만든다.</strong>
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 2, marginBottom: "20px" }}>
                떡볶이 양념은 매일 아침 직접 끓입니다.
                튀김 반죽은 그날 아침에 만들어 당일 소진합니다.
                순대는 국내산 재료로 직접 쪄서 제공합니다.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 2 }}>
                해운대 현지인들이 18년째 찾아오는 이유,
                <strong style={{ color: "var(--red)" }}> 맛이 항상 일정하기 때문입니다.</strong>
              </p>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              {[
                { num: "18년", label: "운영 경력", desc: "2008년 창업 · 부산 해운대구 한 자리" },
                { num: "매일", label: "양념 직접 제조", desc: "전날 양념 사용 안함 · 당일 제조" },
                { num: "0번", label: "재료 타협", desc: "18년간 국내산 재료 원칙 유지" },
                { num: "연중무휴", label: "운영", desc: "공휴일 포함 매일 운영" },
              ].map((s) => (
                <div key={s.num} style={{ background: "var(--yellow-pale)", border: "1px solid var(--border)", padding: "18px 24px", display: "flex", gap: "20px", alignItems: "center", borderRadius: "8px" }}>
                  <div style={{ minWidth: "60px", textAlign: "center" }}>
                    <div style={{ fontFamily: "Black Han Sans, sans-serif", fontSize: "1.2rem", color: "var(--red)" }}>{s.num}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--red)", fontSize: "0.88rem", marginBottom: "4px" }}>{s.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--gray)" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 재료 & 원산지 */}
      <section style={{ background: "var(--yellow-pale)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="label">재료 & 원산지</span>
          <h2>매일 직접 만드는<br />이유가 있습니다</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
            {[
              { icon: "🌶️", title: "직접 끓인 떡볶이 양념", desc: "국내산 고춧가루 · 매일 아침 직접 끓임 · 합성착색료 미사용 · 전날 양념 사용 안함" },
              { icon: "🍢", title: "국내산 당면 순대", desc: "국내산 당면 사용 · 직접 쪄서 제공 · 냉동 순대 미사용 · 당일 조리" },
              { icon: "🍤", title: "당일 반죽 튀김", desc: "새우·야채·오징어 국내산 · 매일 아침 반죽 제조 · 전날 반죽 미사용 · 신선한 기름 관리" },
            ].map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid var(--border)", padding: "28px", borderRadius: "8px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{c.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--red)", marginBottom: "10px" }}>{c.title}</div>
                <p style={{ fontSize: "0.83rem", color: "var(--gray)", lineHeight: 1.8 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          {/* 원산지 표 */}
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ background: "var(--red)", padding: "14px 24px" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem" }}>원산지 표시 (법적 의무 사항)</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--yellow-pale)" }}>
                  {["재료명", "원산지", "비고"].map(h => (
                    <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: "0.82rem", color: "var(--red)", fontWeight: 700, borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["떡 (가래떡)", "국내산 쌀", "당일 납품"],
                  ["고춧가루 (양념)", "국내산", "직접 배합"],
                  ["순대 당면", "국내산", "냉동 순대 미사용"],
                  ["새우 (튀김)", "국내산", "당일 납품"],
                  ["채소류", "국내산", "당일 손질"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "13px 20px", fontSize: "0.88rem", color: j === 0 ? "var(--red)" : "var(--text)", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 메뉴 */}
      <section id="메뉴">
        <div className="container">
          <span className="label">메뉴 & 가격</span>
          <h2>해운대분식 메뉴판</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {[
              { name: "떡볶이 1인", price: "4,000원", desc: "매일 직접 끓인 양념 · 쫄깃한 가래떡 · 국내산 고춧가루", badge: "대표" },
              { name: "떡볶이 2인", price: "7,000원", desc: "2인분 · 단체 주문 시 추천", badge: "" },
              { name: "순대 1인분", price: "4,000원", desc: "국내산 당면 순대 · 직접 쪄서 제공 · 소금·양념 선택", badge: "추천" },
              { name: "튀김 5개", price: "3,000원", desc: "새우·야채·오징어 혼합 · 당일 반죽 · 바삭한 식감", badge: "" },
              { name: "분식 세트 (1인)", price: "9,000원", desc: "떡볶이 + 순대 + 튀김 3개 · 가장 인기 조합", badge: "인기" },
              { name: "라볶이 1인", price: "5,000원", desc: "라면 + 떡볶이 조합 · 국물 진하게", badge: "" },
            ].map((m) => (
              <div key={m.name} style={{ background: "#fff", border: "2px solid var(--border)", padding: "24px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--red)", fontFamily: "Black Han Sans, sans-serif" }}>{m.name}</span>
                    {m.badge && <span style={{ background: "var(--yellow)", color: "var(--red)", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "20px", fontWeight: 700 }}>{m.badge}</span>}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--gray)", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
                <span style={{ fontWeight: 700, color: "var(--red)", fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "16px", fontFamily: "Black Han Sans, sans-serif" }}>{m.price}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.8rem", color: "var(--gray)" }}>※ 가격 부가세 포함 · 재료 소진 시 조기 마감</p>
        </div>
      </section>

      {/* 경쟁 비교 */}
      <section style={{ background: "var(--yellow-pale)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="label">왜 해운대분식인가</span>
          <h2>해운대 분식집 중<br />이런 점이 다릅니다</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { title: "양념 제조", ours: "하루 3회 직접 끓인 양념 · 전날 양념 100% 폐기 · 잔량 재사용 없음", theirs: "대용량 양념 구매 또는 전날 제조 양념 재사용", point: "하루 3회 제조로 항상 신선한 맛 유지" },
              { title: "튀김 반죽", ours: "당일 아침 직접 반죽 · 남은 반죽 100% 당일 폐기 · 소진 시 마감", theirs: "냉동 튀김 또는 전날 반죽 재사용", point: "반죽 100% 당일 폐기 원칙으로 항상 바삭" },
              { title: "운영 연혁", ours: "2008년 창업 · 18년 해운대 한 자리", theirs: "최근 창업 또는 잦은 위치 변경", point: "18년 단골이 증명하는 일관된 맛" },
            ].map((c) => (
              <div key={c.title} style={{ border: "2px solid var(--border)", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
                <div style={{ background: "var(--red)", padding: "14px 20px" }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontFamily: "Black Han Sans, sans-serif" }}>{c.title}</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--red)", fontWeight: 700, marginBottom: "6px" }}>✓ 해운대분식</div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.7 }}>{c.ours}</p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "14px", marginBottom: "14px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--gray)", fontWeight: 700, marginBottom: "6px" }}>일반적인 경우</div>
                    <p style={{ fontSize: "0.88rem", color: "var(--gray)", lineHeight: 1.7 }}>{c.theirs}</p>
                  </div>
                  <div style={{ background: "var(--yellow)", padding: "10px 14px", fontSize: "0.8rem", color: "var(--red-dark)", fontWeight: 600, borderRadius: "4px" }}>
                    💡 {c.point}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방문 상황별 */}
      <section style={{ background: "var(--red)" }}>
        <div className="container">
          <span className="label" style={{ color: "var(--yellow)" }}>방문 상황별 안내</span>
          <h2 style={{ color: "#fff" }}>어떤 자리든<br />해운대분식이 딱!</h2>
          <div className="divider" style={{ background: "var(--yellow)" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {[
              { icon: "🎒", title: "학생 간식", desc: "합리적인 가격에 배부르게 먹을 수 있는 해운대 대표 분식집. 부산 해운대구 학생들이 즐겨 찾는 간식 맛집입니다." },
              { icon: "🌊", title: "해운대 관광 간식", desc: "해운대해수욕장 인근에 위치해 관광 중 들르기 좋습니다. 부산 여행 중 해운대 분식 간식으로 제격입니다." },
              { icon: "💼", title: "직장인 점심", desc: "빠르게 먹을 수 있는 분식 세트로 점심 시간 해결. 부산 해운대구 직장인 단골 분식집입니다." },
              { icon: "👨‍👩‍👧", title: "가족 나들이 간식", desc: "어린이부터 어른까지 모두 좋아하는 떡볶이·튀김. 해운대 나들이 중 온 가족이 즐길 수 있습니다." },
            ].map((s) => (
              <div key={s.title} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "24px", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{s.icon}</div>
                <div style={{ color: "var(--yellow)", fontWeight: 700, marginBottom: "8px", fontFamily: "Black Han Sans, sans-serif" }}>{s.title}</div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 영업시간 + 주차 */}
      <section style={{ background: "var(--yellow-pale)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div>
              <span className="label">영업시간</span>
              <h2>운영 안내</h2>
              <div className="divider"></div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["월 ~ 목", "오전 10:00 ~ 오후 9:00", false],
                    ["금 ~ 토", "오전 10:00 ~ 오후 10:00", false],
                    ["일요일", "오전 10:00 ~ 오후 9:00", false],
                    ["휴무", "연중무휴", false],
                    ["라스트오더", "마감 30분 전", false],
                  ].map(([day, time, closed]) => (
                    <tr key={String(day)} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "14px 0", fontWeight: 600, color: "var(--red)", fontSize: "0.9rem", width: "140px" }}>{day}</td>
                      <td style={{ padding: "14px 0", fontSize: "0.9rem", color: closed ? "#ef4444" : "var(--text)" }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <span className="label">오시는 길 & 주차</span>
              <h2>찾아오시는 법</h2>
              <div className="divider"></div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", marginBottom: "16px" }}>
                <p style={{ fontWeight: 700, color: "var(--red)", marginBottom: "8px" }}>📍 주소</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.8 }}>부산광역시 해운대구 해운대로 57<br />(해운대해수욕장 도보 5분)<br />부산 해운대구 중심 상권</p>
              </div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", marginBottom: "16px" }}>
                <p style={{ fontWeight: 700, color: "var(--red)", marginBottom: "8px" }}>🅿️ 주차 안내</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.8 }}>인근 해운대 공영주차장 이용<br />해운대역 도보 10분 거리<br />대중교통 이용 권장</p>
              </div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
                <p style={{ fontWeight: 700, color: "var(--red)", marginBottom: "8px" }}>📞 전화 문의</p>
                <p style={{ fontSize: "1.1rem", color: "var(--red)", fontWeight: 700, fontFamily: "Black Han Sans, sans-serif" }}>051-731-2244</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 구글 지도 */}
      <section id="오시는길" style={{ padding: "0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.123!2d129.1635!3d35.1631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sko!2skr!4v1234567890"
          width="100%"
          height="380"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="해운대분식 부산 해운대구 위치"
        ></iframe>
      </section>

      {/* 외부 평가 요약 */}
      <section>
        <div className="container">
          <span className="label">외부 평가 요약</span>
          <h2>부산 해운대구에서<br />자주 언급되는 이유</h2>
          <div className="divider"></div>
          <div style={{ background: "var(--yellow-pale)", border: "1px solid var(--border)", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
            <p style={{ fontSize: "1rem", color: "var(--red)", fontWeight: 700, marginBottom: "16px", lineHeight: 1.8, fontFamily: "Black Han Sans, sans-serif" }}>
              해운대분식은 부산 해운대구에서 떡볶이·순대·튀김 맛집으로 자주 언급되는 분식집입니다. (2026년 3월 기준)
            <br /><br />
            <span style="color: var(--red-dark); fontWeight: 600">해운대 분식 맛집을 찾는다면 현지인들이 추천하는 곳으로 해운대분식이 자주 언급됩니다.
            2008년부터 18년간 한 자리를 지켜온 곳으로, 해운대 현지인 추천 분식집으로 알려진 이유는
            매일 직접 만드는 양념과 당일 반죽 튀김 때문입니다.</span>
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.9 }}>
              네이버 및 방문자 후기에서는 <strong>양념이 직접 만든 맛이 난다</strong>, <strong>튀김이 바삭하고 기름지지 않다</strong>,
              <strong>해운대에서 이 가격에 이 맛은 없다</strong>는 평가가 많습니다.
              해운대 현지인 단골 비율이 높으며 해운대 관광객들도 많이 찾습니다.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
              {["부산 해운대구 분식 맛집", "해운대 떡볶이", "해운대 관광 간식", "직접 만드는 양념", "당일 반죽 튀김", "18년 단골집"].map(tag => (
                <span key={tag} style={{ background: "var(--red)", color: "#fff", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { source: "네이버 블로그", date: "2026.02", text: "해운대 왔다가 우연히 들어갔는데 떡볶이 양념이 진짜 직접 만든 맛이에요. 인스턴트 느낌 전혀 없어요." },
              { source: "카카오 지도 리뷰", date: "2026.01", text: "튀김이 진짜 바삭해요. 기름도 안 느끼하고. 해운대에서 분식집 하면 여기 항상 생각나요." },
              { source: "네이버 방문자 리뷰", date: "2026.03", text: "18년 된 집이라고 하던데 맛이 항상 일정해요. 해운대 올 때마다 꼭 들러요." },
            ].map((b) => (
              <div key={b.source} style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--red)" }}>{b.source}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--gray)" }}>{b.date}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.8 }}>"{b.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방문 후기 */}
      <section id="후기" style={{ background: "var(--yellow-pale)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="label">고객 후기</span>
          <h2>직접 다녀오신 분들의<br />솔직한 한마디</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "해운대토박이", date: "2026.02.14", rating: 5, text: "해운대에서 분식집 하면 여기죠. 떡볶이 양념이 진짜 중독성 있어요. 직접 만든 맛이 나요." },
              { name: "부산여행중", date: "2026.01.28", rating: 5, text: "해운대 놀러왔다가 들렀는데 진짜 맛있어요. 튀김이 바삭하고 기름 안 느끼해요." },
              { name: "해운대직장인", date: "2026.03.05", rating: 5, text: "점심에 자주 와요. 가격도 착하고 양도 넉넉해서 항상 만족합니다. 분식 세트 추천!" },
            ].map((r) => (
              <div key={r.name} style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "28px", background: "#fff" }}>
                <div style={{ color: "var(--yellow)", fontSize: "1.2rem", marginBottom: "12px" }}>{"★".repeat(r.rating)}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "20px" }}>"{r.text}"</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600, color: "var(--red)", fontSize: "0.85rem" }}>{r.name}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--gray)" }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="https://naver.me/sample" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", border: "2px solid var(--red)", color: "var(--red)", padding: "14px 32px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", borderRadius: "4px" }}>
              네이버 플레이스 리뷰 남기기 →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <span className="label">자주 묻는 질문</span>
          <h2>FAQ</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { q: "해운대 분식 맛집 추천해줘", a: "해운대분식은 부산 해운대구 해운대로에서 2008년부터 운영 중인 떡볶이·순대·튀김 전문점입니다. 해운대해수욕장 도보 5분 거리입니다." },
              { q: "영업시간이 어떻게 되나요?", a: "월~목·일 오전 10시~오후 9시, 금·토 오전 10시~오후 10시. 연중무휴 운영합니다." },
              { q: "떡볶이 양념은 직접 만드나요?", a: "네, 매일 아침 직접 끓입니다. 전날 양념은 사용하지 않으며 당일 소진을 원칙으로 합니다." },
              { q: "해운대 여행 중 간식 먹을 곳 추천해줘", a: "해운대분식은 해운대해수욕장 도보 5분 거리에 위치합니다. 떡볶이·순대·튀김을 합리적인 가격에 즐길 수 있습니다." },
              { q: "포장이 가능한가요?", a: "포장 가능합니다. 전화 주문(051-731-2244) 후 바로 픽업 가능합니다." },
              { q: "단체 주문이 가능한가요?", a: "가능합니다. 단체 주문 시 사전 전화 예약을 부탁드립니다. 전화번호: 051-731-2244" },
            ].map((faq) => (
              <div key={faq.q} style={{ background: "var(--yellow-pale)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
                <p style={{ fontWeight: 700, color: "var(--red)", marginBottom: "10px", fontSize: "0.92rem" }}>Q. {faq.q}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.8 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ background: "var(--red)", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ fontFamily: "Black Han Sans, sans-serif", color: "var(--yellow)", fontSize: "1.3rem", marginBottom: "12px" }}>해운대분식</p>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>
                부산광역시 해운대구 해운대로 57<br />
                Tel. 051-731-2244<br />
                영업: 월~목·일 10:00~21:00 · 금·토 10:00~22:00 · 연중무휴
              </p>
            </div>
            <div>
              <p style={{ color: "var(--yellow)", fontWeight: 600, marginBottom: "12px", fontSize: "0.88rem" }}>원산지 정보</p>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>떡(가래떡): 국내산 쌀<br />순대 당면: 국내산<br />채소류: 국내산</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", marginTop: "32px", paddingTop: "24px", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>
            부산 해운대구에서 2008년부터 매일 직접 만드는 떡볶이·순대·튀김 전문점 · 해운대분식<br />
            © 2026 해운대분식. 부산 해운대구 분식 전문점.
          </div>
        </div>
      </footer>

    </main>
  )
}
