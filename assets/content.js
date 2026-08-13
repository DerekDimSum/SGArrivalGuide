/* Moving to Singapore — A Family Guide
   All visible text lives here. Every leaf is { en, ko }.
   Figures sourced from CONTENT.md (researched August 2026). Do not edit numbers without a source. */

var CONTENT = {

  /* Language registry — to add a language later: add an entry here, then add that
     code to every leaf in this file (t() falls back to English for missing keys). */
  languages: [
    { code: "en", label: "EN" },
    { code: "ko", label: "한국어" }
  ],

  /* Currency registry. Base amounts throughout this file are written as S$.
     Rates are APPROXIMATE (Aug 2026) and exist for orientation only — edit here. */
  currencies: {
    base: "SGD",
    list: [
      { code: "SGD", label: "S$", rate: 1 },
      { code: "USD", label: "US$", rate: 0.78 },
      { code: "KRW", label: "₩", rate: 1080 }
    ],
    note: {
      en: "Amounts converted from Singapore dollars at approximate August 2026 rates (SGD 1 ≈ USD 0.78 ≈ KRW 1,080) and rounded — for orientation only.",
      ko: "금액은 싱가포르달러 기준을 2026년 8월 대략적인 환율(SGD 1 ≈ USD 0.78 ≈ KRW 1,080)로 환산해 반올림한 참고용 수치예요."
    }
  },

  ui: {
    siteTitle: { en: "Moving to Singapore", ko: "싱가포르 이주 가이드" },
    langGroup: { en: "Language", ko: "언어" },
    curGroup: { en: "Currency", ko: "통화" },
    openInMaps: { en: "Open in Google Maps ↗", ko: "구글 지도에서 열기 ↗" },
    showOnMap: { en: "▲ Show on map", ko: "▲ 지도에서 보기" },
    officialLink: { en: "Official link ↗", ko: "공식 링크 ↗" },
    source: { en: "Source ↗", ko: "출처 ↗" },
    verify: { en: "⚠ verify directly", ko: "⚠ 직접 확인 필요" },
    localTake: { en: "Local take", ko: "로컬 팁" },
    searchLabel: { en: "Search", ko: "검색" },
    searchPlaceholder: { en: "Search the guide… (fees, areas, visas)", ko: "가이드 검색… (학비, 동네, 비자)" },
    searchEmpty: { en: "No matches", ko: "결과가 없어요" },
    glossaryTitle: { en: "Glossary", ko: "용어 사전" },
    sortAsc: { en: "Sort ↑ low to high", ko: "정렬 ↑ 낮은순" },
    sortDesc: { en: "Sort ↓ high to low", ko: "정렬 ↓ 높은순" },
    sortAZ: { en: "Sort A → Z", ko: "정렬 가나다순" },
    sortZA: { en: "Sort Z → A", ko: "정렬 역순" },
    clearFilter: { en: "Clear", ko: "해제" },
    clearAll: { en: "Reset table", ko: "표 초기화" },
    checklistProgress: { en: "done", ko: "완료" },
    resetChecklist: { en: "Reset checklist", ko: "체크리스트 초기화" },
    mapHint: {
      en: "Tap an area to jump to its guide. Schematic — simplified, but true to real geography.",
      ko: "지역을 누르면 해당 카드로 이동해요. 실제 지리에 기반한 개략도예요."
    },
    mapAriaLabel: { en: "Schematic map of Singapore with shortlisted areas", ko: "후보 지역이 표시된 싱가포르 개념 지도" },
    mrtLegend: { en: "MRT lines (simplified)", ko: "MRT 노선 (간략화)" },
    mapTabReal: { en: "Real map", ko: "실제 지도" },
    mapTabSchematic: { en: "MRT schematic", ko: "MRT 노선 개념도" },
    realMapHint: {
      en: "Pinch or double-tap to zoom. Shaded areas are approximate neighbourhood outlines — tap one to jump to its guide.",
      ko: "손가락으로 확대하거나 두 번 탭하세요. 색칠된 구역은 대략적인 동네 범위예요 — 누르면 해당 카드로 이동해요."
    },
    skipToContent: { en: "Skip to content", ko: "본문으로 건너뛰기" },
    homeLabel: { en: "Home", ko: "홈" },
    backToTop: { en: "Back to top", ko: "맨 위로" },
    prevLabel: { en: "Previous", ko: "이전" },
    nextLabel: { en: "Next", ko: "다음" }
  },

  nav: [
    { id: "education", label: { en: "Education", ko: "교육" },
      desc: { en: "The class calculator, the school directory, preschool, primary paths, and enrichment.", ko: "반 배정 계산기와 학교 디렉토리, 유치원, 초등 로드맵, 사교육까지." },
      subs: [
        { id: "edu-calculator", label: { en: "When to apply", ko: "입학·지원 시기" } },
        { id: "schools", label: { en: "School directory", ko: "학교 디렉토리" } },
        { id: "edu-preschool", label: { en: "Preschool", ko: "유치원" } },
        { id: "edu-primary", label: { en: "Primary school", ko: "초등학교" } },
        { id: "edu-enrichment", label: { en: "Enrichment classes", ko: "사교육 클래스" } }
      ] },
    { id: "living", label: { en: "Where to live", ko: "어디에 살까" },
      desc: { en: "How the island works, the sortable area table, maps, and a neighbourhood atlas.", ko: "싱가포르 구조 해설, 정렬 가능한 동네 표, 지도, 동네 아틀라스까지." },
      subs: [
        { id: "living-overview", label: { en: "How it works", ko: "기본 구조" } },
        { id: "sg-map", label: { en: "Map", ko: "지도" } },
        { id: "living-atlas", label: { en: "Neighbourhoods", ko: "동네별" } },
        { id: "living-cards", label: { en: "Deep dives", ko: "상세 카드" } },
        { id: "areas", label: { en: "Find your area", ko: "내게 맞는 동네" } },
        { id: "renting-box", label: { en: "Renting", ko: "임대 절차" } }
      ] },
    { id: "social", target: "community", label: { en: "Social", ko: "한인 생활" },
      desc: { en: "The Korean community network and Korean churches — the fastest ways in.", ko: "한인 커뮤니티 네트워크와 한인 교회 — 가장 빠른 정착 지름길이에요." },
      subs: [
        { id: "community", label: { en: "Korean community", ko: "한인 커뮤니티" } },
        { id: "church", label: { en: "Church", ko: "교회" } }
      ] },
    { id: "helper", label: { en: "Helper", ko: "입주 헬퍼" },
      desc: { en: "Costs, process and timeline for hiring live-in help.", ko: "입주 헬퍼 고용의 비용, 절차, 소요 기간." } },
    { id: "health", label: { en: "Healthcare", ko: "의료" },
      desc: { en: "GPs, paediatricians, kids' emergencies, Korean-speaking care — and 995.", ko: "동네 GP부터 소아과, 아이 응급실, 한국어 진료, 그리고 995까지." } },
    { id: "transport", target: "car", label: { en: "Transport", ko: "교통" },
      desc: { en: "The car question — and life on Grab, taxis and the MRT.", ko: "자동차 고민 — 그리고 Grab·택시·MRT로 사는 법." },
      subs: [
        { id: "car", label: { en: "The car question", ko: "자동차, 살까 말까" } },
        { id: "car-alternatives", label: { en: "MRT · bus · taxi", ko: "MRT · 버스 · 택시" } }
      ] },
    { id: "costs", label: { en: "Monthly costs", ko: "월 생활비" },
      desc: { en: "A realistic monthly budget, low and high.", ko: "현실적인 월 예산, 최소·최대." } },
    { id: "arrival", target: "apps", label: { en: "Arrival", ko: "정착 준비" },
      desc: { en: "Day-one apps and the first-30-days checklist.", ko: "첫날 깔아야 할 앱과 첫 30일 체크리스트." },
      subs: [
        { id: "apps", label: { en: "Useful apps", ko: "유용한 앱" } },
        { id: "checklist", label: { en: "First 30 days checklist", ko: "첫 30일 체크리스트" } }
      ] }
  ],

  hero: {
    title: { en: "Moving to Singapore", ko: "싱가포르 이주 가이드" },
    subtitle: { en: "A Practical Guide", ko: "한국인을 위한 실전 가이드" },
    tagline: {
      en: "A practical, honest guide for anyone moving from Korea to Singapore — visas, schools, neighbourhoods, and what life really costs.",
      ko: "한국에서 싱가포르로 이주하는 분들을 위한 현실적이고 솔직한 안내서예요 — 비자, 학교, 동네, 그리고 진짜 생활비까지."
    }
  },

  checklist: {
    title: { en: "First 30 days checklist", ko: "첫 30일 체크리스트" },
    intro: {
      en: "Grouped into a timeline — some of this has to happen before you fly. Tap items to check them off; progress is saved on this device.",
      ko: "타임라인으로 묶었어요 — 출국 전에 해둬야 하는 것들이 있어요. 항목을 누르면 완료 표시가 되고, 이 기기에 자동 저장돼요."
    },
    phases: {
      pre: { en: "Before departure", ko: "출국 전" },
      week1: { en: "First week", ko: "첫 주" },
      month1: { en: "First month", ko: "첫 달" }
    },
    items: [
      {
        id: "docs-english",
        phase: "pre",
        title: { en: "English documents from 정부24", ko: "정부24에서 영문 서류 발급" },
        body: {
          en: "가족관계증명서, 혼인관계증명서 and 기본증명서 can all be issued in English via 정부24 — they're needed for DP applications; the English 예방접종증명서 (정부24 or 보건소) is needed for the DP immunisation check and preschool enrolment. Print spares.",
          ko: "가족관계증명서·혼인관계증명서·기본증명서는 정부24에서 영문으로 발급돼요 — DP 신청에 필요해요. 영문 예방접종증명서(정부24 또는 보건소)는 DP 예방접종 검증과 유치원 등록에 쓰여요. 여유분까지 출력해 두세요."
        },
        url: "https://www.gov.kr"
      },
      {
        id: "immunisation-precheck",
        phase: "pre",
        title: { en: "Kids' immunisation pre-check (CDA/NIR)", ko: "자녀 예방접종 사전 검증 (CDA/NIR)" },
        body: {
          en: "Diphtheria + measles proof is verified via CDA/NIR before the DP application — allow ~10 working days. Korean records are accepted if they show vaccine types and dates.",
          ko: "디프테리아·홍역 접종 증빙은 DP 신청 전에 CDA/NIR에서 검증받아야 해요 — 약 10영업일 잡으세요. 백신 종류와 접종일이 나오면 한국 기록도 인정돼요."
        },
        url: "https://www.nir.cda.gov.sg/eservices/submitNewVaccMyChildWithoutLoginPage"
      },
      {
        id: "helper-search",
        phase: "pre",
        title: { en: "Start the helper search", ko: "헬퍼 구인 시작" },
        body: {
          en: "A fresh overseas hire takes 6–8+ weeks — if you'll want live-in help, start agencies talking before you land. A transfer helper already in Singapore takes ~2 weeks.",
          ko: "해외 신규 채용은 6–8주 이상 걸려요 — 입주 헬퍼를 쓸 계획이면 도착 전부터 에이전시와 이야기를 시작하세요. 싱가포르에 있는 트랜스퍼 헬퍼는 약 2주면 돼요."
        },
        anchor: "helper",
        anchorLabel: { en: "Helper section ↓", ko: "헬퍼 섹션으로 ↓" }
      },
      {
        id: "tax-consult",
        phase: "pre",
        title: { en: "One session with a 세무사", ko: "세무사 상담 한 번" },
        body: {
          en: "Korean tax duties don't end at the airport — residency status (거주자/비거주자) and Korean-source income need a plan before you leave. Details in the money box under Monthly costs.",
          ko: "한국 세금 의무는 공항에서 끝나지 않아요 — 거주자/비거주자 판정과 한국 원천 소득은 출국 전에 정리해 두는 게 좋아요. 자세한 건 월 생활비의 '돈 관리' 박스에 있어요."
        },
        anchor: "costs",
        anchorLabel: { en: "Money box ↓", ko: "돈 관리 박스로 ↓" }
      },
      {
        id: "meds-supply",
        phase: "pre",
        title: { en: "Pack meds + prescriptions", ko: "상비약·처방약 챙기기" },
        body: {
          en: "Bring a supply of regular prescription meds with the prescription or 소견서, plus familiar fever meds for the kids — Korean over-the-counter combos go by different names here.",
          ko: "상시 복용하는 처방약은 처방전이나 소견서와 함께 넉넉히, 아이들 해열제 같은 익숙한 상비약도 챙기세요 — 한국 상비약은 여기서 이름이 달라요."
        },
        anchor: "health",
        anchorLabel: { en: "Healthcare section ↓", ko: "의료 섹션으로 ↓" }
      },
      {
        id: "arrival-card",
        phase: "pre",
        title: { en: "SG Arrival Card", ko: "SG 입국 카드 (SG Arrival Card)" },
        body: {
          en: "Every traveller submits this within 3 days before arrival (arrival day included). Free via the official ICA e-service or MyICA app — beware look-alike third-party sites that charge a fee.",
          ko: "모든 입국자가 도착 3일 전부터(도착일 포함) 제출해요. ICA 공식 e-서비스나 MyICA 앱에서 무료예요. 수수료를 받는 유사 사이트에 주의하세요."
        },
        url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card"
      },
      {
        id: "ep-dp-cards",
        phase: "week1",
        title: { en: "EP / DP card appointments", ko: "EP·DP 카드 발급 예약" },
        body: {
          en: "Sequence: employer applies → IPA letter (single-entry visa, valid 6 months) → enter Singapore → medical exam if the IPA requires it (chest X-ray + HIV test, S$30–80 at clinics) → pass issuance → notification letter (1 month validity; you can work and travel) → fingerprints & photo at the Employment Pass Services Centre within 2 weeks of issuance, by appointment → card delivered within 5 working days. Fees per pass: S$105 application + S$225 issuance. DP processing takes about 3 weeks and can be filed together with the EP.",
          ko: "진행 순서: 회사가 신청 → IPA 레터 발급(싱글 엔트리 비자, 6개월 유효) → 싱가포르 입국 → IPA에 명시된 경우 신체검사(흉부 X선 + HIV 검사, 클리닉에서 S$30–80) → 패스 발급 → 노티피케이션 레터(1개월 유효, 근무·출입국 가능) → 발급 후 2주 내 EPSC(Employment Pass Services Centre) 예약 방문해 지문·사진 등록 → 5영업일 내 카드 배송. 패스당 신청비 S$105 + 발급비 S$225. DP 심사는 약 3주 걸리고 EP와 함께 신청할 수 있어요."
        },
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass"
      },
      {
        id: "singpass",
        phase: "week1",
        title: { en: "Singpass registration", ko: "싱패스 (Singpass) 등록" },
        body: {
          en: "Register at singpass.gov.sg once your passes are issued. EP and DP holders aged 15+ are eligible. It is the single digital ID for all government services, tax, clinics and bank verification — every adult in the household should register.",
          ko: "패스가 발급되면 singpass.gov.sg에서 등록하세요. EP·DP 소지자(만 15세 이상)가 가입할 수 있어요. 정부 서비스, 세금, 병원, 은행 본인인증까지 모두 쓰이는 디지털 신분증이라 가족 중 성인은 모두 등록하는 게 좋아요.",
        },
        url: "https://ask.gov.sg/singpass/questions/clul28lp4002t3b8g3hnggivy"
      },
      {
        id: "sim",
        phase: "week1",
        title: { en: "SIM / eSIM", ko: "유심 · eSIM 개통" },
        body: {
          en: "Needs a passport or FIN. 2026 SIM-only prices: Circles.Life S$8/mo (500GB), Maxx S$7.90/mo, Simba from S$10/mo, GOMO S$19.99/mo, Singtel/StarHub S$24.50–38/mo. Budget S$10–25 per adult per month.",
          ko: "여권 또는 FIN이 있으면 개통돼요. 2026년 유심 요금: Circles.Life 월 S$8(500GB), Maxx 월 S$7.90, Simba 월 S$10부터, GOMO 월 S$19.99, Singtel/StarHub 월 S$24.50–38. 성인 1인당 월 S$10–25 정도로 잡으면 돼요."
        },
        url: "https://www.misslobang.com/article/best-telco-mobile-plans-singapore-2026"
      },
      {
        id: "bank",
        phase: "week1",
        title: { en: "Bank account", ko: "은행 계좌 개설" },
        body: {
          en: "DBS explicitly opens accounts with just the IPA letter (before the EP card arrives); OCBC/UOB vary by branch and often want the EP card + Singpass. Documents: passport, EP card or IPA, proof of Singapore address, Korean TIN. Salary accounts — DBS Multiplier, OCBC 360, UOB One — pay bonus interest for salary crediting plus card spend.",
          ko: "DBS는 IPA 레터만으로도 계좌를 열어줘요(EP 카드 나오기 전에도 가능). OCBC·UOB는 지점마다 달라서 EP 카드와 싱패스를 요구하는 경우가 많아요. 준비물: 여권, EP 카드 또는 IPA, 싱가포르 주소 증빙, 한국 납세자번호(TIN). 급여 계좌는 DBS Multiplier, OCBC 360, UOB One이 급여이체+카드 사용 조건으로 우대금리를 줘요."
        },
        url: "https://expatmovingtosingapore.com/expat-friendly-bank-accounts-in-singapore/"
      },
      {
        id: "paynow",
        phase: "week1",
        title: { en: "PayNow setup", ko: "PayNow 설정" },
        body: {
          en: "Link your mobile number and/or FIN in the bank app. Free instant transfers — it is how everyone pays rent deposits, school fees, and hawker-stall QR codes.",
          ko: "은행 앱에서 휴대폰 번호나 FIN을 연결하면 끝이에요. 무료 즉시 이체 서비스로, 임대 보증금·학비·호커센터 QR 결제까지 모두 PayNow로 해요. 한국의 계좌이체+토스 같은 존재예요."
        },
        url: "https://www.abs.org.sg/consumer-banking/pay-now"
      },
      {
        id: "simplygo",
        phase: "week1",
        title: { en: "Transport — SimplyGo", ko: "교통 — SimplyGo" },
        body: {
          en: "Contactless Visa/Mastercard works directly on MRT and buses; fares S$1.20–2.80 per ride. Kids: under 7 and up to 0.9m ride free; under 7 but taller than 0.9m still ride free with a free Child Concession Card (any SimplyGo Ticket Office, passport accepted, foreign kids eligible) — get one per child once they pass 0.9m.",
          ko: "컨택리스 Visa/Mastercard를 그대로 MRT·버스 단말기에 찍으면 돼요. 요금은 회당 S$1.20–2.80. 아이들은 만 7세 미만·키 0.9m 이하면 무료, 0.9m를 넘어도 무료 아동 카드(Child Concession Card)를 만들면 계속 무료예요(SimplyGo 매표소에서 여권으로 발급, 외국인 아동도 가능). 키가 0.9m를 넘으면 아이별로 한 장씩 만들어 두세요."
        },
        url: "https://simplygo.com.sg/travel-fares/child-concessionary-fares/"
      },
      {
        id: "rental",
        phase: "week1",
        title: { en: "Rental search & lease signing", ko: "집 구하기 · 임대 계약" },
        body: {
          en: "Start on PropertyGuru and 99.co, then view in person — good units go in days. The full playbook (deposits, diplomatic clause, agent fees) is in the \"How renting works here\" box below.",
          ko: "PropertyGuru와 99.co에서 검색을 시작하고, 마음에 드는 곳은 직접 보러 가세요. 좋은 매물은 며칠 안에 나가요. 보증금·외교 조항·중개 수수료 등 자세한 내용은 아래 \"싱가포르 임대, 이렇게 돌아가요\" 박스에 정리했어요."
        },
        anchor: "renting-box",
        anchorLabel: { en: "Jump to renting guide ↓", ko: "임대 가이드로 이동 ↓" },
        url: "https://www.propertyguru.com.sg/"
      },
      {
        id: "preschool-visits",
        phase: "week1",
        title: { en: "Preschool visits & waitlists", ko: "유치원 투어 · 대기 등록" },
        body: {
          en: "If you're bringing young kids, start immediately — popular centres have 12–18 month waitlists. Details in the Education section.",
          ko: "어린 아이와 함께라면 도착하자마자 시작하세요. 인기 있는 곳은 대기가 12–18개월이에요. 자세한 내용은 교육 섹션에 있어요."
        },
        anchor: "education"
      },
      {
        id: "licence",
        phase: "month1",
        title: { en: "Korean driving licence conversion", ko: "한국 운전면허 전환" },
        body: {
          en: "You can drive on your Korean licence + IDP/official translation for the first 12 months of residence; convert before that ends. Pass the Basic Theory Test (50 MCQs, 45 to pass, S$10.14 per attempt at BBDC/CDC/SSDC), then convert at Traffic Police HQ (10 Ubi Ave 3), S$50 fee. The Korean licence needs an official English translation from a Singapore-registered translation company (or embassy certification). Total ~S$70–80; card in ~2 weeks.",
          ko: "거주 시작 후 12개월까지는 한국 면허 + 국제면허증(또는 공식 번역본)으로 운전할 수 있고, 그 안에 전환해야 해요. 기초 이론 시험(BTT: 객관식 50문항 중 45개 정답, 응시료 S$10.14, BBDC/CDC/SSDC에서 응시) 합격 후 교통경찰청(10 Ubi Ave 3)에서 전환 신청, 수수료 S$50. 한국 면허증은 싱가포르 등록 번역업체의 공식 영문 번역(또는 대사관 공증)이 필요해요. 총 S$70–80 정도, 카드는 약 2주 뒤에 나와요."
        },
        url: "https://www.btt.sg/en/blog/how-to-convert-foreign-driving-licence-singapore"
      },
      {
        id: "overseas-registration",
        phase: "month1",
        title: { en: "재외국민등록 (Overseas Korean Registration)", ko: "재외국민등록" },
        body: {
          en: "Korean citizens staying abroad 90+ days must register with the embassy — online via 영사민원24 (G4K) or at the consulate. Embassy of the Republic of Korea: 47 Scotts Road, Goldbell Towers, S228233 (verify the unit number).",
          ko: "해외에 90일 이상 체류하는 대한민국 국민은 재외국민등록이 의무예요. 영사민원24(G4K)에서 온라인으로 하거나 영사관을 방문하면 돼요. 주싱가포르 대한민국대사관: 47 Scotts Road, Goldbell Towers, S228233 (호수는 방문 전 확인하세요)."
        },
        verify: true,
        url: "https://overseas.mofa.go.kr/sg-ko/wpge/m_2505/contents.do"
      }
    ],
    dpFacts: {
      title: { en: "Bringing family? DP & visa facts worth knowing", ko: "가족과 함께라면 — DP·비자 핵심 정보" },
      items: [
        {
          body: {
            en: "The EP holder needs a minimum S$6,000/month fixed salary to sponsor a spouse and children under 21 on Dependant's Passes.",
            ko: "배우자와 21세 미만 자녀의 DP를 스폰서하려면 EP 소지자의 고정 월급이 최소 S$6,000 이상이어야 해요."
          },
          url: "https://www.mom.gov.sg/passes-and-permits/dependants-pass/eligibility"
        },
        {
          body: {
            en: "Documents: marriage certificate (spouse), birth certificates showing parents' names (kids). Korean documents need the original + English translation uploaded as one file — MOM states no apostille requirement. Tip: 가족관계증명서, 혼인관계증명서 and 기본증명서 can all be issued in English via 정부24.",
            ko: "필요 서류: 혼인관계 증빙(배우자), 부모 이름이 나오는 출생 증빙(자녀). 한국 서류는 원본 + 영문 번역본을 한 파일로 업로드해요 — MOM 기준 아포스티유는 필요 없어요. 팁: 가족관계증명서·혼인관계증명서·기본증명서는 정부24에서 영문으로 바로 발급돼요."
          },
          url: "https://www.mom.gov.sg/passes-and-permits/dependants-pass/documents-required"
        },
        {
          body: {
            en: "DP spouse work rule (2026): the general Letter of Consent is gone. A DP spouse who wants to work must qualify for her own EP, S Pass or Work Permit on her own merits. Only exception: an LOC for DP business owners (sole proprietor/partner/director with ≥30% shareholding).",
            ko: "DP 배우자 취업 규정(2026): 예전의 일반 LOC(Letter of Consent) 제도는 폐지됐어요. DP 배우자가 일하려면 본인 자격으로 EP·S Pass·Work Permit을 받아야 해요. 유일한 예외는 사업자용 LOC(개인사업자·파트너 또는 지분 30% 이상 이사)예요."
          },
          url: "https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility"
        },
        {
          body: {
            en: "Child immunisation gate: proof of diphtheria + measles vaccination is mandatory for foreign-born children 12 and under applying for a DP — verified via CDA/NIR before the MOM application (~10 working days). Korean records are accepted if they show vaccine types and dates; the 예방접종증명서 can be issued in English via 정부24 or a 보건소. After arrival, update records via the NIR e-service.",
            ko: "자녀 예방접종 요건: 12세 이하 외국 출생 아동의 DP 신청에는 디프테리아·홍역 접종 증빙이 필수예요. MOM 신청 전에 CDA/NIR에서 먼저 검증받아야 해요(약 10영업일). 백신 종류와 접종일이 나오면 한국 기록도 인정되고, 예방접종증명서는 정부24나 보건소에서 영문 발급이 돼요. 도착 후에는 NIR e-서비스에서 기록을 갱신하세요."
          },
          url: "https://www.moh.gov.sg/newsroom/documentation-of-diphtheria-and-measles-vaccination-required-for-foreign-born-children-applying-for-long-term-immigration-passes-in-singapore/"
        },
        {
          body: {
            en: "EP context: the 2026 minimum qualifying salary is S$5,600/month (rising with age to S$10,700 at 45+; higher in financial services), and it rises on 1 Jan 2027 to S$6,000–11,500 — relevant at renewal. The COMPASS points framework also applies. No CPF for foreigners (salary is gross); resident income tax is progressive, 0–24%.",
            ko: "EP 참고사항: 2026년 최저 기준 월급은 S$5,600(연령에 따라 상승, 45세 이상은 S$10,700; 금융권은 더 높음)이고, 2027년 1월 1일부터 S$6,000–11,500으로 올라요 — 갱신 때 중요해요. COMPASS 점수제도 함께 적용돼요. 외국인은 CPF(연금) 공제가 없어 월급이 그대로 들어오고, 거주자 소득세는 0–24% 누진세예요."
          },
          url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility"
        }
      ]
    }
  },

  education: {
    title: { en: "Education", ko: "교육" },

    /* Age calculator — one input, one answer per school system */
    calculator: {
      title: { en: "When would my child join — and when to apply?", ko: "우리 아이는 언제 입학하고, 언제 지원할까?" },
      intro: {
        en: "Singapore levels don't map one-to-one from Korea, and each school system uses a different cutoff date. Enter a birth month and year to see where a child lands in each system — and when applications typically happen.",
        ko: "싱가포르 학제는 한국과 1:1로 맞지 않고, 학교 시스템마다 기준일도 달라요. 출생 연월을 입력하면 시스템별로 어느 반·학년인지, 그리고 지원은 보통 언제 하는지 보여드려요."
      },
      monthLabel: { en: "Birth month", ko: "출생 월" },
      yearLabel: { en: "Birth year", ko: "출생 연도" },
      cols: {
        system: { en: "School system", ko: "학교 시스템" },
        now: { en: "This academic year", ko: "올해 학년" },
        next: { en: "Next academic year", ko: "내년 학년" },
        apply: { en: "When to apply (typical)", ko: "지원 시기 (통상)" }
      },
      systems: {
        localPre: {
          name: { en: "Local preschool (ECDA)", ko: "로컬 유치원 (ECDA)" },
          sub: { en: "PCF, My First Skool, MindChamps, Pat's… · 1 Jan cohort", ko: "PCF, My First Skool, MindChamps, Pat's… · 1월 1일 기준" },
          apply: { en: "Join waitlists 12–18 months ahead", ko: "12–18개월 전에 대기 등록" }
        },
        localMoe: {
          name: { en: "Local primary/secondary (MOE)", ko: "로컬 초·중등 (MOE)" },
          sub: { en: "Government schools · P1 the year a child turns 7 · 1 Jan cohort", ko: "공립학교 · 7세 되는 해에 P1 · 1월 1일 기준" },
          apply: { en: "May window the year before P1 (foreigners: Phase 3 indication of interest)", ko: "P1 입학 전해 5월 (외국인은 Phase 3 관심 등록)" }
        },
        british: {
          name: { en: "British", ko: "영국계" },
          sub: { en: "Tanglin, Dulwich, NLCS, Dover Court… · cutoff 1 Sep", ko: "Tanglin, Dulwich, NLCS, Dover Court… · 9월 1일 기준" },
          apply: { en: "~12 months ahead; flagships earlier (UWCSEA opens 1 Sep)", ko: "약 12개월 전; 플래그십은 더 일찍 (UWCSEA는 9월 1일 오픈)" }
        },
        american: {
          name: { en: "American", ko: "미국계" },
          sub: { en: "SAS, SAIS · cutoff 1 Sep", ko: "SAS, SAIS · 9월 1일 기준" },
          apply: { en: "Rolling admissions — ~12 months ahead is comfortable", ko: "수시 — 12개월 전이면 여유 있어요" }
        },
        korean: {
          name: { en: "Korean — SKIS", ko: "한국계 — SKIS" },
          sub: { en: "싱가포르한국국제학교 · March–Feb school year", ko: "싱가포르한국국제학교 · 3월 학기제" },
          apply: { en: "Contact admissions (admission@skis.kr)", ko: "입학처 문의 (admission@skis.kr)" }
        }
      },
      tooYoung: { en: "too young — infant care", ko: "아직 어려요 — 영유아 보육" },
      note: {
        en: "Conventions, not guarantees: IB schools (UWCSEA, CIS, Nexus…) read as the September rows, AIS runs a January calendar, and GESS's German stream differs. Confirm placement with the school.",
        ko: "일반적인 관행일 뿐 학교마다 달라요: IB 스쿨(UWCSEA, CIS, Nexus…)은 9월 기준 행을 보면 되고, AIS는 1월 학기제, GESS 독일 과정은 별도예요. 반 배정은 학교에 확인하세요."
      },
      noteVerify: true
    },

    directoryLink: { en: "Open the full school directory →", ko: "전체 학교 디렉토리 열기 →" },

    /* School directory — its own page. One combined Type facet (curriculum family);
       fees/waitlists come from the researched content pack. */
    schools: {
      title: { en: "School directory", ko: "학교 디렉토리" },
      countLabel: { en: "schools shown", ko: "개 학교 표시 중" },
      stages: {
        pre: { en: "Preschool", ko: "유치원" },
        pri: { en: "Primary & up", ko: "초등 이상" }
      },
      /* Everything here is an international school unless marked Local (MOE/ECDA),
         so the type column just names the curriculum system. */
      kinds: {
        local: { en: "Local (MOE / ECDA)", ko: "로컬 (MOE·ECDA)" },
        british: { en: "British", ko: "영국계" },
        american: { en: "American", ko: "미국계" },
        ib: { en: "IB", ko: "IB" },
        korean: { en: "Korean", ko: "한국" },
        other: { en: "Other", ko: "기타" }
      },
      tiers: {
        anchor: { en: "Anchor (gov-supported)", ko: "앵커 (준공영)" },
        mid: { en: "Mid-range private", ko: "중가 사립" },
        premium: { en: "Premium preschool", ko: "프리미엄 유치원" },
        t1: { en: "Legacy flagship", ko: "전통 플래그십" },
        t15: { en: "Premium", ko: "프리미엄" },
        t2: { en: "Established", ko: "안정형" },
        t3: { en: "Value-focused", ko: "실속형" }
      },
      tierNote: {
        en: "Segments describe fee level and admissions demand, not quality — Singapore has no official school ranking, and strong outcomes happen in every band. (The \"Tier 1/2/3\" shorthand you'll hear from other parents maps onto these segments.)",
        ko: "학교군은 학비 수준과 입학 수요를 나타낼 뿐, 교육의 질 순위가 아니에요 — 싱가포르에 공식 학교 랭킹은 없고, 어느 그룹에서든 좋은 결과는 나와요. (학부모들 사이에서 들리는 'Tier 1/2/3'이라는 표현이 이 구분과 대략 겹쳐요.)"
      },
      feeBands: {
        b1: { label: { en: "≤S$20k/yr", ko: "연 S$20k 이하" }, max: 20000 },
        b2: { label: { en: "S$20–35k/yr", ko: "연 S$20–35k" }, max: 35000 },
        b3: { label: { en: "S$35–50k/yr", ko: "연 S$35–50k" }, max: 50000 },
        b4: { label: { en: "S$50k+/yr", ko: "연 S$50k 이상" }, max: Infinity }
      },
      sortLabel: { en: "Sort", ko: "정렬" },
      sorts: {
        default: { en: "Default", ko: "기본" },
        feeAsc: { en: "Fees low → high", ko: "학비 낮은순" },
        feeDesc: { en: "Fees high → low", ko: "학비 높은순" }
      },
      cols: {
        name: { en: "School", ko: "학교" },
        stage: { en: "Stage", ko: "과정" },
        kind: { en: "Type", ko: "구분" },
        tier: { en: "Segment", ko: "학교군" },
        fees: { en: "Fees", ko: "학비" },
        waitlist: { en: "Admissions", ko: "입학·대기" },
        location: { en: "Location", ko: "위치" }
      },
      rows: [
        { name: "PCF Sparkletots", stage: "pre", kind: "local", tier: "anchor", feeYr: 15300, site: "https://pcfsparkletots.org.sg",
          fees: { en: "S$1,277/mo (foreigner, official 2026)", ko: "월 S$1,277 (외국인, 2026 공식)" },
          waitlist: { en: "Popular centres 12–18 months", ko: "인기 센터 12–18개월" },
          location: { en: "Island-wide", ko: "전국 캠퍼스" } },
        { name: "Skool4Kidz", stage: "pre", kind: "local", tier: "anchor", feeYr: 14100, site: "https://www.skool4kidz.com.sg",
          fees: { en: "~S$1,175/mo (per centre)", ko: "월 약 S$1,175 (센터별 상이)" }, verify: true,
          waitlist: { en: "Popular centres 12–18 months", ko: "인기 센터 12–18개월" },
          location: { en: "Island-wide", ko: "전국 캠퍼스" } },
        { name: "My First Skool", stage: "pre", kind: "local", tier: "anchor", feeYr: 20400, site: "https://www.myfirstskool.com",
          fees: { en: "~S$1,600–1,800/mo", ko: "월 약 S$1,600–1,800" }, verify: true,
          waitlist: { en: "Popular centres 12–18 months", ko: "인기 센터 12–18개월" },
          location: { en: "Island-wide", ko: "전국 캠퍼스" } },
        { name: "MindChamps", stage: "pre", kind: "local", tier: "mid", feeYr: 22800, site: "https://www.mindchamps.org",
          fees: { en: "~S$1,700–2,100/mo", ko: "월 약 S$1,700–2,100" },
          waitlist: { en: "Varies by centre", ko: "센터별 상이" },
          location: { en: "Island-wide", ko: "전국 캠퍼스" } },
        { name: "Pat's Schoolhouse", stage: "pre", kind: "local", tier: "mid", feeYr: 26700, site: "https://www.patsschoolhouse.com",
          fees: { en: "~S$1,850–2,600/mo", ko: "월 약 S$1,850–2,600" },
          waitlist: { en: "Varies by centre", ko: "센터별 상이" },
          location: { en: "Island-wide (incl. Katong)", ko: "전국 (Katong 포함)" } },
        { name: "MapleBear", stage: "pre", kind: "local", tier: "mid", feeYr: 24600, site: "https://maplebear.sg",
          fees: { en: "~S$1,500–2,600/mo", ko: "월 약 S$1,500–2,600" },
          waitlist: { en: "Varies by centre", ko: "센터별 상이" },
          location: { en: "Island-wide", ko: "전국 캠퍼스" } },
        { name: "EtonHouse", stage: "pre", kind: "local", tier: "premium", feeYr: 34800, site: "https://www.etonhouse.edu.sg",
          fees: { en: "~S$2,800–3,000/mo equiv.; 10% sibling discount", ko: "월 환산 약 S$2,800–3,000; 형제 할인 10%" },
          waitlist: { en: "Varies by campus", ko: "캠퍼스별 상이" },
          location: { en: "Newton, Upper Bukit Timah, Mountbatten…", ko: "Newton, Upper Bukit Timah, Mountbatten…" } },
        { name: "Odyssey", stage: "pre", kind: "local", tier: "premium", feeYr: 39300, site: "https://www.odysseytheglobalpreschool.com",
          fees: { en: "~S$2,650–3,900/mo", ko: "월 약 S$2,650–3,900" },
          waitlist: { en: "Varies by campus", ko: "캠퍼스별 상이" },
          location: { en: "Multiple campuses (incl. Kay Siang Rd)", ko: "여러 캠퍼스 (Kay Siang Rd 포함)" } },
        { name: "SAIS Early Learning Village", stage: "pre", kind: "american", tier: "t15", feeYr: 30820, site: "https://www.sais.edu.sg",
          fees: { en: "S$30,820/yr (pre-N/N, 2026/27)", ko: "연 S$30,820 (pre-N/N, 2026/27)" },
          waitlist: { en: "Rolling admissions", ko: "수시 입학" },
          location: "Woodleigh" },
        { name: { en: "Tanglin Trust (Early Years)", ko: "Tanglin Trust (유아부)" }, stage: "pre", kind: "british", tier: "t1", feeYr: 36300, site: "https://www.tts.edu.sg",
          fees: { en: "Nursery S$36,300/yr", ko: "Nursery 연 S$36,300" },
          waitlist: { en: "Multi-year", ko: "수년 대기" },
          location: "One-North" },
        { name: { en: "SKIS kindergarten (from age 3)", ko: "SKIS 유치부 (만 3세부터)" }, stage: "pre", kind: "korean", tier: null, feeYr: 13425, site: "https://www.skis.kr",
          fees: { en: "~S$13,425/yr + S$3,270 one-time", ko: "연 약 S$13,425 + 1회성 S$3,270" }, verify: true,
          waitlist: { en: "Contact admissions", ko: "입학처 문의" },
          location: { en: "Upper Bukit Timah", ko: "Upper Bukit Timah" } },
        { name: { en: "Local MOE schools", ko: "로컬 MOE 학교" }, stage: "pri", kind: "local", tier: null, feeYr: 12420, site: "https://www.moe.gov.sg",
          fees: { en: "S$1,035/mo (int'l non-ASEAN, 2026)", ko: "월 S$1,035 (비아세안 외국인, 2026)" },
          waitlist: { en: "Phase 3 — school assigned, no choice", ko: "Phase 3 — 학교 지정 배정, 선택 불가" },
          location: { en: "Island-wide", ko: "전국" } },
        { name: "Singapore American School (SAS)", stage: "pri", kind: "american", tier: "t1", feeYr: 49000, site: "https://www.sas.edu.sg",
          fees: { en: "S$38–60k/yr (flagship band)", ko: "연 S$38–60k (플래그십 범위)" },
          waitlist: { en: "Multi-year, selective", ko: "수년 대기, 선발형" },
          location: "Woodlands" },
        { name: "Tanglin Trust", stage: "pri", kind: "british", tier: "t1", feeYr: 45375, site: "https://www.tts.edu.sg",
          fees: { en: "Y1 S$45,375 (2026/27)", ko: "Y1 S$45,375 (2026/27)" },
          waitlist: { en: "Multi-year", ko: "수년 대기" },
          location: "One-North" },
        { name: { en: "UWCSEA (Dover & Tampines)", ko: "UWCSEA (Dover · Tampines)" }, stage: "pri", kind: "ib", tier: "t1", feeYr: 48606, site: "https://www.uwcsea.edu.sg",
          fees: { en: "K1–G1 first year S$48,606 incl. levy", ko: "K1–G1 첫해 S$48,606 (부담금 포함)" },
          waitlist: { en: "Multi-year; applications open 1 Sep", ko: "수년 대기; 매년 9월 1일 지원 오픈" },
          location: { en: "Dover & Tampines", ko: "Dover · Tampines" } },
        { name: "Dulwich College", stage: "pri", kind: "british", tier: "t1", feeYr: 36500, site: "https://singapore.dulwich.org",
          fees: { en: "~S$35–38k/yr early years", ko: "유아부 연 약 S$35–38k" },
          waitlist: { en: "Multi-year, selective", ko: "수년 대기, 선발형" },
          location: "Bukit Batok" },
        { name: "SJII (St Joseph's Institution International)", stage: "pri", kind: "ib", tier: "t15", feeYr: 45500, site: "https://www.sji-international.com.sg",
          fees: { en: "S$35–56k/yr (premium band)", ko: "연 S$35–56k (프리미엄 범위)" },
          waitlist: { en: "Selective; 50% local cohort", ko: "선발형; 학생 50%가 로컬" },
          location: "Thomson" },
        { name: "NLCS Singapore", stage: "pri", kind: "british", tier: "t15", feeYr: 45500, site: "https://www.nlcssingapore.sg",
          fees: { en: "S$35–56k/yr (premium band)", ko: "연 S$35–56k (프리미엄 범위)" },
          waitlist: { en: "Selective", ko: "선발형" },
          location: { en: "Depot Road", ko: "Depot Road" } },
        { name: "Canadian International School (CIS)", stage: "pri", kind: "ib", tier: "t15", feeYr: 45500, site: "https://www.cis.edu.sg",
          fees: { en: "S$35–56k/yr (premium band)", ko: "연 S$35–56k (프리미엄 범위)" },
          waitlist: { en: "Varies; strong EAL", ko: "학교별 상이; EAL 강함" },
          location: "Lakeside" },
        { name: "Stamford American (SAIS)", stage: "pri", kind: "american", tier: "t15", feeYr: 45500, site: "https://www.sais.edu.sg",
          fees: { en: "S$35–56k/yr (premium band)", ko: "연 S$35–56k (프리미엄 범위)" },
          waitlist: { en: "Rolling admissions", ko: "수시 입학" },
          location: "Woodleigh" },
        { name: "Australian International School (AIS)", stage: "pri", kind: "other", tier: "t15", feeYr: 45500, site: "https://www.ais.com.sg",
          fees: { en: "S$35–56k/yr (premium band)", ko: "연 S$35–56k (프리미엄 범위)" },
          waitlist: { en: "Varies", ko: "학교별 상이" },
          location: "Serangoon" },
        { name: "Dover Court (Nord Anglia)", stage: "pri", kind: "british", tier: "t2", feeYr: 36500, site: "https://www.nordangliaeducation.com/dover-court-singapore",
          fees: { en: "S$28–45k/yr (established band)", ko: "연 S$28–45k (안정형 범위)" },
          waitlist: { en: "Moderate; strong EAL", ko: "보통; EAL 강함" },
          location: "Dover" },
        { name: "GESS (German European School)", stage: "pri", kind: "other", tier: "t2", feeYr: 36500, site: "https://www.gess.sg",
          fees: { en: "S$28–45k/yr (established band)", ko: "연 S$28–45k (안정형 범위)" },
          waitlist: { en: "Moderate", ko: "보통" },
          location: { en: "Dairy Farm (Bukit Timah)", ko: "Dairy Farm (Bukit Timah)" } },
        { name: "Nexus International", stage: "pri", kind: "ib", tier: "t2", feeYr: 36500, site: "https://www.nexus.edu.sg",
          fees: { en: "S$28–45k/yr (established band)", ko: "연 S$28–45k (안정형 범위)" },
          waitlist: { en: "Moderate; strong EAL", ko: "보통; EAL 강함" },
          location: "Aljunied" },
        { name: "Overseas Family School (OFS)", stage: "pri", kind: "ib", tier: "t2", feeYr: 36500, site: "https://www.ofs.edu.sg",
          fees: { en: "S$28–45k/yr (established band)", ko: "연 S$28–45k (안정형 범위)" },
          waitlist: { en: "Moderate", ko: "보통" },
          location: "Pasir Ris" },
        { name: "Chatsworth International", stage: "pri", kind: "ib", tier: "t2", feeYr: 36500, site: "https://www.chatsworth.com.sg",
          fees: { en: "S$28–45k/yr (established band)", ko: "연 S$28–45k (안정형 범위)" },
          waitlist: { en: "Moderate", ko: "보통" },
          location: "Bukit Timah" },
        { name: "One World International (OWIS)", stage: "pri", kind: "ib", tier: "t3", feeYr: 21500, site: "https://owis.org",
          fees: { en: "S$15–28k/yr (value band)", ko: "연 S$15–28k (실속형 범위)" },
          waitlist: { en: "Direct entry; nationality caps", ko: "바로 입학; 국적별 정원 제한" },
          location: { en: "Jurong / Mountbatten", ko: "Jurong · Mountbatten" } },
        { name: "Invictus International", stage: "pri", kind: "other", kindVerify: true, tier: "t3", feeYr: 21500, site: "https://invictus.edu.sg",
          fees: { en: "S$15–28k/yr (value band)", ko: "연 S$15–28k (실속형 범위)" },
          waitlist: { en: "Direct entry", ko: "바로 입학" },
          location: { en: "Multiple campuses", ko: "여러 캠퍼스" } },
        { name: "Middleton (by EtonHouse)", stage: "pri", kind: "other", kindVerify: true, tier: "t3", feeYr: 21500, site: "https://www.middleton.edu.sg",
          fees: { en: "S$15–28k/yr (value band)", ko: "연 S$15–28k (실속형 범위)" },
          waitlist: { en: "Direct entry", ko: "바로 입학" },
          location: { en: "Tampines / Upper Bukit Timah", ko: "Tampines · Upper Bukit Timah" } },
        { name: { en: "Singapore Korean International School (SKIS, K–12)", ko: "싱가포르한국국제학교 (SKIS, K–12)" }, stage: "pri", kind: "korean", tier: null, feeYr: 13425, site: "https://www.skis.kr",
          fees: { en: "~S$13,425/yr kindergarten; K–12 fees verify", ko: "유치부 연 약 S$13,425; K–12 학비는 확인 필요" }, verify: true,
          waitlist: { en: "Contact admissions (admission@skis.kr)", ko: "입학처 문의 (admission@skis.kr)" },
          location: { en: "Upper Bukit Timah", ko: "Upper Bukit Timah" } }
      ]
    },

    preschool: {
      title: { en: "Preschool (ages 2–4)", ko: "유치원 (2–4세)" },
      intro: {
        en: "Levels are named by the calendar year your child turns that age — not by a birthday cut-off. Preschool is not compulsory.",
        ko: "반 배정은 '그 해에 몇 살이 되는지' 기준이에요(생일 기준 아님). 유치원은 의무교육이 아니에요."
      },
      levels: {
        title: { en: "Level names vs age", ko: "레벨 이름과 나이" },
        rows: [
          { level: "Playgroup", age: { en: "18 months – 2 years", ko: "18개월–2세" } },
          { level: "N1 (Nursery 1)", age: { en: "year the child turns 3", ko: "그 해 3세가 되는 아이" } },
          { level: "N2 (Nursery 2)", age: { en: "year the child turns 4", ko: "그 해 4세가 되는 아이" } },
          { level: "K1 (Kindergarten 1)", age: { en: "year the child turns 5", ko: "그 해 5세가 되는 아이" } },
          { level: "K2 (Kindergarten 2)", age: { en: "year the child turns 6", ko: "그 해 6세가 되는 아이" } },
          { level: "P1 (Primary 1)", age: { en: "year the child turns 7", ko: "그 해 7세가 되는 아이" } }
        ],
        srcUrl: "https://www.myfirstskool.com/resources/whats-the-right-preschool-age-in-singapore-is-it-compulsory/"
      },
      dpNote: {
        en: "DP kids can enrol at any ECDA-licensed preschool — the DP exempts them from needing a Student's Pass. But all government subsidies are citizens-only, so foreigners pay the top fee tier. That means the price gap between \"subsidised local\" and \"private\" chains narrows a lot for you.",
        ko: "DP 자녀는 ECDA 인가 유치원 어디든 등록할 수 있어요 — DP가 있으면 학생비자(Student's Pass)가 따로 필요 없어요. 다만 정부 보조금은 시민권자 전용이라 외국인은 최고 요율을 내요. 그래서 '보조금 받는 로컬'과 '사립' 체인의 가격 차이가 외국인 기준으로는 크게 줄어들어요."
      },
      dpNoteUrl: "https://www.ica.gov.sg/reside/STP/apply/msf",
      fees: {
        title: { en: "Monthly full-day fees for foreigners (per child)", ko: "외국인 종일반 월 학비 (아이 1명 기준)" },
        cols: {
          tier: { en: "Group", ko: "구분" },
          example: { en: "Examples", ko: "예시" },
          fee: { en: "Foreigner monthly fee", ko: "외국인 월 학비" }
        },
        rows: [
          { tier: { en: "Anchor operators", ko: "앵커 오퍼레이터 (대형 준공영)" }, example: "PCF Sparkletots", fee: { en: "S$1,277 incl. GST (official 2026)", ko: "S$1,277 GST 포함 (2026 공식)" }, url: "https://pcfsparkletots.org.sg/enrolment/fees/" },
          { tier: { en: "", ko: "" }, example: "Skool4Kidz", fee: { en: "~S$1,175 (per centre)", ko: "약 S$1,175 (센터별 상이)" }, verify: true, url: "https://sgschoolkaki.com/preschools/centre/aop-campus-one-punggol" },
          { tier: { en: "", ko: "" }, example: "My First Skool", fee: { en: "~S$1,600–1,800 (third-party figure)", ko: "약 S$1,600–1,800 (비공식 집계)" }, verify: true, url: "https://skoolopedia.com/blog/my-first-skool-complete-fee-guide-full-pricing-breakdown-subsidies/" },
          { tier: { en: "Mid-tier private (same fee for all nationalities)", ko: "중가 사립 (국적 무관 동일 학비)" }, example: "MindChamps", fee: { en: "~S$1,700–2,100", ko: "약 S$1,700–2,100" }, url: "https://www.littleolivetree.edu.sg/post/net-fee-calculator-comparing-5-big-preschool-chains-in-singapore" },
          { tier: { en: "", ko: "" }, example: "Pat's Schoolhouse", fee: { en: "~S$1,850–2,600", ko: "약 S$1,850–2,600" }, url: "https://skoolopedia.com/blog/top-30-preschools-in-singapore-complete-fee-comparison-and-parent-reviews/" },
          { tier: { en: "", ko: "" }, example: "MapleBear", fee: { en: "~S$1,500–2,600", ko: "약 S$1,500–2,600" }, url: "https://maplebearjurongwest.com/blog/preschool-fees-comparison-singapore-2026" },
          { tier: { en: "Premium", ko: "프리미엄" }, example: "EtonHouse (Newton)", fee: { en: "~S$2,800–3,000/mo equivalent (S$8,392–9,007 per term, 4 terms). 10% sibling discount", ko: "월 환산 약 S$2,800–3,000 (학기당 S$8,392–9,007, 연 4학기). 형제 할인 10%" }, url: "https://www.etonhouse.edu.sg/school/newton/fees/" },
          { tier: { en: "", ko: "" }, example: "Odyssey", fee: { en: "~S$2,650–3,900", ko: "약 S$2,650–3,900" }, url: "https://skoolopedia.com/blog/top-30-preschools-in-singapore-complete-fee-comparison-and-parent-reviews/" },
          { tier: { en: "International school early years", ko: "국제학교 유아부" }, example: "SAIS Early Learning Village", fee: { en: "S$30,820/yr (pre-N/N full day, 2026/27)", ko: "연 S$30,820 (pre-N/N 종일반, 2026/27)" }, url: "https://www.sais.edu.sg/admissions/fees/early-year-fees-schedule/" },
          { tier: { en: "", ko: "" }, example: "Tanglin Trust", fee: { en: "Nursery S$36,300/yr", ko: "Nursery 연 S$36,300" }, url: "https://www.tts.edu.sg/admissions/fees" },
          { tier: { en: "Korean option", ko: "한국 학교 옵션" }, example: { en: "Singapore Korean International School kindergarten (from age 3)", ko: "싱가포르한국국제학교 유치부 (3세부터)" }, fee: { en: "~S$13,425/yr ≈ S$1,120/mo + S$3,270 one-time (verify with admission@skis.kr)", ko: "연 약 S$13,425 ≈ 월 S$1,120 + 입학금 등 1회성 S$3,270 (admission@skis.kr로 확인)" }, verify: true, url: "https://www.msmc.global/singapore-korean-international-school/" }
        ]
      },
      siblings: {
        title: { en: "Costs scale per child", ko: "비용은 아이 수만큼 늘어나요" },
        body: {
          en: "Fees are per child, so budget accordingly — the builder in Monthly costs does the math for your situation. Sibling discounts of 5–10% exist at some chains (EtonHouse gives 10%).",
          ko: "학비는 아이 1명 기준이라 인원수만큼 잡아야 해요 — 월 생활비의 예산 계산기가 상황에 맞게 계산해 줘요. 일부 체인에 형제 할인 5–10%가 있어요(EtonHouse는 10%)."
        }
      },
      waitlist: {
        title: { en: "Waitlists", ko: "대기 리스트" },
        body: {
          en: "Popular centres fill 12–18 months ahead. January (start-of-year) intakes are the easiest point to land a spot — or sibling spots together. Start touring the moment you land.",
          ko: "인기 센터는 12–18개월 전에 마감돼요. 자리를 잡기엔(형제 자리를 한 번에 잡기에도) 1월 학년 시작 입학이 가장 수월해요. 도착하자마자 투어를 시작하세요."
        },
        srcUrl: "https://skoolopedia.com/blog/top-30-preschools-in-singapore-complete-fee-comparison-and-parent-reviews/"
      },
      docs: {
        title: { en: "Enrolment documents (ECDA Form 1)", ko: "입학 서류 (ECDA Form 1)" },
        items: [
          { en: "Child's passport + DP card", ko: "아이 여권 + DP 카드" },
          { en: "Birth certificate (with English translation)", ko: "출생증명서 (영문 번역 포함)" },
          { en: "Immunisation records — keep an English 예방접종증명서 on hand", ko: "예방접종 기록 — 영문 예방접종증명서를 미리 준비해 두세요" },
          { en: "A photo of the child", ko: "아이 사진" },
          { en: "Parents' passports and passes", ko: "부모 여권과 패스" }
        ],
        srcUrl: "https://file.go.gov.sg/ecda-form1.pdf"
      }
    },

    primary: {
      title: { en: "Primary school paths", ko: "초등학교 로드맵" },
      framing: {
        en: "Local P1 starts the year a child turns 7. But note the calendar trap: international schools start formal school much earlier — British-system Reception at 4 and Year 1 at 5, American Kindergarten at 5 — so if you're leaning international, the \"primary decision\" arrives two to three years before local P1. One honest note up front: Singapore has no official school tiers. The segments below describe fees and admissions demand — the \"Tier 1/2/3\" labels other parents use are informal shorthand, not any official ranking.",
        ko: "로컬 P1(초1)은 그 해 7세가 되는 해에 시작해요. 다만 '달력 함정'을 알아두세요: 국제학교는 정규 과정을 훨씬 일찍 시작해요 — 영국계는 4세에 Reception, 5세에 Year 1, 미국계는 5세에 Kindergarten. 국제학교 쪽으로 기운다면 '초등 결정'이 로컬 P1보다 2–3년 일찍 찾아와요. 그리고 미리 솔직하게 말씀드리면, 싱가포르에 공식적인 학교 등급은 없어요. 아래의 구분은 학비와 입학 수요를 나타낼 뿐이고, 학부모들이 쓰는 'Tier 1/2/3'은 공식 순위가 아니라 비공식 은어예요."
      },
      local: {
        title: { en: "Path 1 — Local (MOE) schools", ko: "경로 1 — 로컬 (MOE) 학교" },
        items: [
          {
            en: "International students register in Phase 3 — after ALL citizens and PRs. You must first submit an online indication of interest (the 2026 window was 19–25 May; missing it means automatic rejection).",
            ko: "외국인 학생은 Phase 3에서 등록해요 — 시민권자와 영주권자가 모두 끝난 다음이에요. 먼저 온라인 관심 등록(indication of interest)을 제출해야 하고(2026년은 5월 19–25일이었어요), 이 기간을 놓치면 자동 탈락이에요."
          },
          {
            en: "If offered a place, MOE assigns a designated school — no school choice, no appeal. Vacancies are essentially in less-subscribed neighbourhood schools (~69 schools had Phase 3 openings in 2024).",
            ko: "자리가 나오면 MOE가 학교를 지정해 줘요 — 학교 선택권도, 이의 신청도 없어요. 빈자리는 사실상 경쟁이 덜한 동네 학교에 있어요(2024년 기준 약 69개교에 Phase 3 자리가 있었어요)."
          },
          {
            en: "Fees for international students (non-ASEAN): S$1,035/month in 2026, rising annually — still far cheaper than international schools.",
            ko: "외국인(비아세안) 학비는 2026년 기준 월 S$1,035이고 매년 올라요 — 그래도 국제학교보다는 훨씬 저렴해요."
          },
          {
            en: "Siblings (twins included) are separate applicants — there is no same-school guarantee in Phase 3. Verify with MOE.",
            ko: "형제자매(쌍둥이 포함)는 각각 별도 지원자예요 — Phase 3에서는 같은 학교 배정이 보장되지 않아요. MOE에 직접 확인하세요.",
            verify: true
          },
          {
            en: "The informal \"popular tier\" (Nan Hua, Rosyth, Pei Hwa Presbyterian, Nanyang…) ballots even for citizens and is effectively unavailable to internationals. That conversation only matters if the family later gets PR.",
            ko: "학부모들이 말하는 '인기 학교'(Nan Hua, Rosyth, Pei Hwa Presbyterian, Nanyang 등)는 시민권자끼리도 추첨을 하는 곳이라, 외국인에게는 사실상 문이 닫혀 있어요. 이 이야기는 나중에 영주권을 받으면 그때 의미가 생겨요."
          }
        ],
        srcUrl: "https://www.moe.gov.sg/primary/p1-registration/international-students"
      },
      intl: {
        title: { en: "Path 2 — International schools", ko: "경로 2 — 국제학교" },
        intro: {
          en: "The informal tier framework expat parents actually use (no official ranking exists; fees are 2026/27 published figures).",
          ko: "실제로 외국인 학부모들이 쓰는 비공식 티어 구분이에요(공식 순위는 없고, 학비는 2026/27 공시 기준이에요)."
        },
        cols: {
          tier: { en: "Segment", ko: "학교군" },
          schools: { en: "Schools", ko: "학교" },
          fees: { en: "Fees / year", ko: "연간 학비" },
          waitlist: { en: "Admissions reality", ko: "입학 현실" },
          eal: { en: "EAL (English support)", ko: "EAL (영어 지원)" }
        },
        rows: [
          {
            tier: { en: "Legacy flagship · 'Tier 1'", ko: "전통 플래그십 · 'Tier 1'" },
            schools: { en: "Legacy non-profit flagships: Singapore American School (Woodlands, US/AP) · Tanglin Trust (One-North, British → A-Level/IB; Y1 S$45,375) · UWCSEA Dover & Tampines (IB; K1–G1 first year S$48,606 incl. levy) · Dulwich College (Bukit Batok, British → IB, ~S$35–38k early years)", ko: "전통 비영리 명문: Singapore American School (우드랜즈, 미국/AP) · Tanglin Trust (원노스, 영국식 → A-Level/IB; Y1 S$45,375) · UWCSEA Dover & Tampines (IB; K1–G1 첫해 S$48,606, 부담금 포함) · Dulwich College (부킷 바톡, 영국식 → IB, 유아부 약 S$35–38k)" },
            fees: "S$38–60k",
            waitlist: { en: "Multi-year waitlists, selective. UWCSEA applications open 1 Sep for the following year", ko: "수년 대기, 선발형. UWCSEA는 매년 9월 1일에 이듬해 지원 오픈" },
            eal: { en: "Selective entry — not the EAL-friendly route", ko: "선발형 입학 — 영어 지원 중심 경로는 아니에요" }
          },
          {
            tier: { en: "Premium · 'Tier 1.5'", ko: "프리미엄 · 'Tier 1.5'" },
            schools: { en: "Premium / local-international flagships: SJII (Thomson; 50% local cohort, strong IB) · NLCS Singapore (Depot Rd, selective) · Canadian International School (Lakeside; Chinese/English dual-language) · SAIS (Woodleigh; IB+AP, rolling admissions, Early Learning Village ages 2–6) · Australian International School (Serangoon)", ko: "프리미엄 · 로컬-국제 혼합 명문: SJII (톰슨; 학생 50%가 로컬, IB 강세) · NLCS Singapore (Depot Rd, 선발형) · Canadian International School (레이크사이드; 중국어/영어 이중언어) · SAIS (우드리; IB+AP, 수시 입학, 2–6세 Early Learning Village 운영) · Australian International School (세랑군)" },
            fees: "S$35–56k",
            waitlist: { en: "SAIS rolling admissions; others vary", ko: "SAIS는 수시 입학, 나머지는 학교별 상이" },
            eal: { en: "CIS — strong EAL", ko: "CIS — EAL 지원 강함" }
          },
          {
            tier: { en: "Established · 'Tier 2'", ko: "안정형 · 'Tier 2'" },
            schools: { en: "Established mid-tier: Dover Court (Nord Anglia; inclusive) · GESS (Bukit Timah; German/European + IB) · Nexus (Aljunied) · Overseas Family School (Pasir Ris) · Chatsworth (Bukit Timah)", ko: "안정적인 중상위권: Dover Court (Nord Anglia; 포용적 학풍) · GESS (부킷 티마; 독일/유럽계 + IB) · Nexus (알주니드) · Overseas Family School (파시르 리스) · Chatsworth (부킷 티마)" },
            fees: "S$28–45k",
            waitlist: { en: "Moderate waitlists", ko: "대기 보통" },
            eal: { en: "Strong EAL support (Dover Court, Nexus) — the practical route for Korean-speaking kids", ko: "EAL 지원 강함 (Dover Court, Nexus) — 한국어가 모어인 아이에게 현실적인 경로" }
          },
          {
            tier: { en: "Value-focused · 'Tier 3'", ko: "실속형 · 'Tier 3'" },
            schools: { en: "Value international: One World International (Jurong/Mountbatten; nationality caps) · Invictus · Middleton by EtonHouse (Tampines/Upper Bukit Timah)", ko: "실속형 국제학교: One World International (주롱/마운트배튼; 국적별 정원 제한) · Invictus · Middleton by EtonHouse (탐피니스/어퍼 부킷 티마)" },
            fees: "S$15–28k",
            waitlist: { en: "Direct entry", ko: "바로 입학 가능" },
            eal: { en: "—", ko: "—" }
          }
        ],
        extras: {
          en: "Extras at every segment: application S$290–3,500, enrolment S$2,900–5,780, first-year development levy S$3,000–10,000. Sector guidance: apply ~12 months ahead; flagship-segment waitlists are multi-year.",
          ko: "모든 학교군 공통 추가 비용: 지원비 S$290–3,500, 등록비 S$2,900–5,780, 첫해 발전기금 S$3,000–10,000. 업계 통념상 약 12개월 전에 지원하고, 플래그십 학교군은 대기가 수년이에요."
        },
        extrasUrl: "https://www.tutopiya.com/blog/parents-blog/international-school-fees-structure-singapore/",
        prepNote: {
          en: "Several international schools also run preparatory or bridging intakes (foundation classes, intensive English) for children joining mid-track — ask each admissions office what exists for your child's year; a proper list is pending a research round.",
          ko: "일부 국제학교는 중간에 합류하는 아이들을 위한 준비·브리지 과정(파운데이션 반, 집중 영어)도 운영해요 — 아이 학년에 맞는 과정이 있는지 각 학교 입학처에 문의하세요. 제대로 된 목록은 다음 조사 라운드에서 다룰 예정이에요."
        },
        decision: {
          title: { en: "How to decide", ko: "선택 기준" },
          items: [
            {
              en: "Short stay (1–3 years) → Northern-hemisphere-calendar credit systems (SAS, SAIS, CIS) for an easy exit back into other systems.",
              ko: "단기 체류(1–3년)라면 → 북반구 학기제·학점 체계인 SAS, SAIS, CIS가 다른 나라로 옮겨가기 쉬워요."
            },
            {
              en: "Long stay → 12-year tracks with deep local networks (Tanglin, UWCSEA, SJII).",
              ko: "장기 체류라면 → 12년 일관 과정에 현지 네트워크가 탄탄한 Tanglin, UWCSEA, SJII가 좋아요."
            },
            {
              en: "Kids with developing English → the premium/established segments with strong EAL (CIS, Nexus, Dover Court).",
              ko: "영어가 아직 자라는 아이라면 → EAL이 강한 프리미엄·안정형 학교들(CIS, Nexus, Dover Court)을 보세요."
            }
          ]
        }
      },
      skis: {
        title: { en: "Path 3 — Singapore Korean International School (SKIS)", ko: "경로 3 — 싱가포르한국국제학교 (SKIS)" },
        body: {
          en: "71 Bukit Tinggi Road, Upper Bukit Timah (near Beauty World). K–12, established 1993, approved by both governments; Korean-medium with a parallel international curriculum and English instruction. At ~S$13,425/yr for kindergarten (verify current fees) it costs a fraction of Western international schools, keeps Korean identity strong, and eases a later return to Korea. Contact: admission@skis.kr · +65-6741-0778.",
          ko: "71 Bukit Tinggi Road, 어퍼 부킷 티마(Beauty World 근처). 유치부부터 고등부까지(K–12), 1993년 설립, 한국·싱가포르 양국 정부 인가를 받았어요. 한국어 중심 수업에 국제 커리큘럼과 영어 수업을 병행해요. 유치부 기준 연 약 S$13,425(최신 학비는 확인 필요)로 서구권 국제학교의 몇 분의 일 수준이고, 한국인 정체성을 지키면서 나중에 한국으로 돌아갈 때도 부담이 적어요. 문의: admission@skis.kr · +65-6741-0778."
        },
        verify: true,
        url: "https://www.skis.kr/"
      }
    },

    enrichment: {
      title: { en: "Enrichment (ages 2–4)", ko: "사교육 · 액티비티 (2–4세)" },
      intro: {
        en: "Enrichment is everywhere in Singapore — Korean-style education intensity maps naturally onto this scene. Typical costs:",
        ko: "싱가포르는 어딜 가나 사교육 인프라가 있어요 — 한국식 교육열이 자연스럽게 통하는 동네예요. 대략적인 비용은 이래요:"
      },
      items: [
        {
          name: { en: "Swimming", ko: "수영" },
          detail: { en: "Group S$120–200/mo; private S$300–400/mo; public pool entry S$0.80–1.50.", ko: "그룹 월 S$120–200, 개인 레슨 월 S$300–400. 공공 수영장 입장료는 S$0.80–1.50이에요." },
          url: "https://swimminglessonscoach.com/kids-swimming-lessons-in-singapore-2025-price-guide-for-parents/"
        },
        {
          name: { en: "Phonics / reading (from 3)", ko: "파닉스 · 읽기 (3세부터)" },
          detail: { en: "Julia Gabriel S$570–690/term; British Council S$500–680/term; Berries S$400–520/term.", ko: "Julia Gabriel 학기당 S$570–690, British Council 학기당 S$500–680, Berries 학기당 S$400–520." },
          url: "https://skoolopedia.com/blog/top-10-phonics-and-reading-classes-in-singapore-expert-reviews-and-fee-comparison/"
        },
        {
          name: { en: "Right-brain programmes (시치다/헤구루)", ko: "우뇌 교육 (시치다·헤구루)" },
          detail: { en: "Familiar from Korea. Shichida ~S$780/term with a 5% sibling discount (verify — dated figure); Heguru is quote-on-enquiry, budget S$70–90/session.", ko: "한국에서 익숙한 그 프로그램이에요. 시치다는 학기당 약 S$780, 형제 할인 5%(오래된 정보라 확인 필요). 헤구루는 문의 후 견적인데 회당 S$70–90으로 잡으면 돼요." },
          verify: true,
          url: "https://www.hegurueducation.com.sg/infant-toddler-course.html"
        },
        {
          name: { en: "Music & movement / Art", ko: "음악 · 미술" },
          detail: { en: "Music S$150–350/mo (Yamaha, Aureus); art S$150–350/mo.", ko: "음악 월 S$150–350 (Yamaha, Aureus), 미술 월 S$150–350." },
          url: "https://parentlah.com/blog/best-enrichment-classes-by-age-singapore/"
        },
        {
          name: { en: "Gym / multi-sport", ko: "체육 · 놀이체육" },
          detail: { en: "S$200–400/mo (My Gym, The Little Gym, Ready Steady Go Kids).", ko: "월 S$200–400 (My Gym, The Little Gym, Ready Steady Go Kids)." },
          url: "https://parentlah.com/blog/best-enrichment-classes-by-age-singapore/"
        },
        {
          name: { en: "Taekwondo (from age 4)", ko: "태권도 (4세부터)" },
          detail: { en: "From age 4, not 3. S$120–260/mo (J H Kim et al.) — a natural Korean-culture anchor.", ko: "3세는 안 되고 4세부터 받아줘요. 월 S$120–260 (J H Kim 등) — 한국 문화를 이어주는 자연스러운 연결고리예요." },
          url: "https://smiletutor.sg/15-best-kids-martial-arts-classes-in-singapore-taekwondo-karate-judo-bjj-kids-mma-with-prices-trials/"
        },
        {
          name: { en: "Keeping up the Korean curriculum (귀국 대비)", ko: "한국 교과 유지 (귀국 대비)" },
          detail: {
            en: "If a return to Korea is on the horizon: SKIS's Saturday Hangul School covers language and culture, Kumon runs centres across the island for math habits, Korean-curriculum tutors (국어·수학 진도) are found through the 한국촌 tutoring board, and EBS/인강 stream fine from here.",
            ko: "귀국을 염두에 둔다면: 한국어·문화는 토요한글학교(SKIS)로 챙기고, 수학 습관은 싱가포르 전역에 센터가 있는 구몬(Kumon)도 방법이에요. 한국 교과 진도(국어·수학) 과외는 한국촌 과외 게시판에서 구하는 게 정석이고, EBS·인강도 여기서 잘 돌아가요."
          },
          url: "https://www.hankookchon.com/"
        }
      ],
      budget: {
        en: "Budget guidance: 1–2 activities per child ≈ S$300–700/month per child. United Square in Novena is the informal \"kids' learning mall\" (verify current tenants).",
        ko: "예산 감각: 아이 1명당 1–2개 활동 기준 월 S$300–700 정도예요. 노베나의 United Square가 비공식 '유아 학원 몰'로 통해요(현재 입점 학원은 확인 필요)."
      },
      budgetVerify: true
    }
  },

  living: {
    title: { en: "Where to live", ko: "어디에 살까" },

    overviewTitle: { en: "How the island works", ko: "싱가포르, 이렇게 생겼어요" },
    overviewIntro: {
      en: "Singapore is a city-state you can cross in under an hour. The CBD and Marina Bay sit on the south coast, Orchard and the embassy belt just north of them, and the island fans out from there: leafy central districts, the family-heavy east coast, the value-and-nature west, and HDB heartlands everywhere in between. Almost everywhere is safe and green — the real variables are commute, space per dollar, and which community you want around you.",
      ko: "싱가포르는 한 시간이면 가로지르는 도시국가예요. 남쪽 해안에 CBD와 Marina Bay가 있고 바로 그 위가 오차드와 대사관 벨트, 거기서부터 섬이 펼쳐져요: 숲이 우거진 중부, 가족이 많은 동해안, 실속과 자연의 서부, 그리고 그 사이사이의 HDB 주거지대까지. 어디든 대체로 안전하고 푸르기 때문에, 실제 변수는 통근, 돈 대비 공간, 그리고 어떤 커뮤니티 곁에 살고 싶은지예요."
    },

    /* §3.0 — the district decoder */
    districts: {
      title: { en: "How Singapore is divided — the district decoder", ko: "싱가포르 구역 읽는 법 — 디스트릭트 해설" },
      intro: {
        en: "Property listings and agents speak in postal districts (D1–D28) — an old classification the market still runs on. Analysts group them into three bands: CCR (Core Central: D9/D10/D11 plus the CBD — priciest), RCR (city fringe) and OCR (suburbs). Government statistics use URA planning-area names instead, which mostly overlap.",
        ko: "부동산 매물과 에이전트들은 우편 구역(D1–D28) 단위로 이야기해요 — 오래된 분류지만 시장은 여전히 이걸로 돌아가요. 분석에서는 이걸 세 구간으로 묶어요: CCR(핵심 중심부: D9·D10·D11 + CBD — 가장 비쌈), RCR(시티 프린지), OCR(외곽). 정부 통계는 URA 계획구역 이름을 따로 쓰는데, 범위는 대체로 겹쳐요."
      },
      cols: {
        d: { en: "District", ko: "구역" },
        name: { en: "Name", ko: "이름" },
        sub: { en: "Sub-areas that matter", ko: "눈여겨볼 동네" },
        rel: { en: "For this guide", ko: "이 가이드에서는" }
      },
      rows: [
        { d: "D10", name: "Bukit Timah / Holland / Tanglin", sub: { en: "Holland Village, Farrer Road, Sixth Avenue, Tan Kah Kee, the landed Avenues/Namly belt", ko: "Holland Village, Farrer Road, Sixth Avenue, Tan Kah Kee, 단독주택 벨트(Avenues/Namly)" }, rel: { en: "Shortlist (cards 1b, 4)", ko: "후보 (카드 1b, 4)" } },
        { d: "D21", name: "Upper Bukit Timah", sub: { en: "Beauty World, King Albert Park, Toh Tuck/Eng Kong, Hume", ko: "Beauty World, King Albert Park, Toh Tuck/Eng Kong, Hume" }, rel: { en: "Shortlist (card 1a) — SKIS + the Korean node", ko: "후보 (카드 1a) — SKIS + 한인 거점" } },
        { d: "D23", name: "Hillview / Bukit Batok / Bukit Panjang", sub: { en: "Hillview is the upscale pocket of a heartland district", ko: "Hillview는 서민형 구역 속의 고급 포켓이에요" }, rel: { en: "Shortlist (card 1c)", ko: "후보 (카드 1c)" } },
        { d: "D5", name: "Clementi / Buona Vista / West Coast", sub: { en: "Clementi, Dover, one-north, Pasir Panjang", ko: "Clementi, Dover, one-north, Pasir Panjang" }, rel: { en: "Shortlist (card 2)", ko: "후보 (카드 2)" } },
        { d: "D15", name: "Katong / Marine Parade", sub: { en: "Katong/Joo Chiat, Amber–Meyer, Marine Parade, Tanjong Rhu", ko: "Katong/Joo Chiat, Amber–Meyer, Marine Parade, Tanjong Rhu" }, rel: { en: "Shortlist (card 3)", ko: "후보 (카드 3)" } },
        { d: "D11", name: "Newton / Novena / Thomson", sub: { en: "Newton, Novena, Chancery", ko: "Newton, Novena, Chancery" }, rel: { en: "Shortlist (card 5)", ko: "후보 (카드 5)" } },
        { d: "D9", name: "Orchard / River Valley", sub: { en: "Robertson Quay, Emerald Hill", ko: "Robertson Quay, Emerald Hill" }, rel: { en: "Couples more than families", ko: "가족보다는 커플 취향" } },
        { d: "D16", name: "Bedok / Upper East Coast", sub: { en: "Siglap, Frankel — the quieter landed continuation of D15", ko: "Siglap, Frankel — D15에서 이어지는 조용한 주택가" }, rel: { en: "Adjacent option", ko: "인접 대안" } },
        { d: "D1/D2", name: "CBD / Tanjong Pagar", sub: { en: "Marina One (the office) is D1; K-town is D2", ko: "Marina One(회사)은 D1, K-타운은 D2" }, rel: { en: "Work + play, not toddler territory", ko: "일과 외식의 동네 — 유아 육아 지역은 아님" } },
        { d: "D3", name: "Queenstown / Tiong Bahru", sub: { en: "The Holland Close/Ghim Moh HDB hack lives here administratively", ko: "Holland Close/Ghim Moh HDB 꿀팁이 행정상 여기 소속이에요" }, rel: { en: "Budget lever", ko: "예산 조절 카드" } },
        { d: "D25", name: "Woodlands", sub: { en: "American school orbit", ko: "미국학교 생활권" }, rel: { en: "Off-shortlist", ko: "후보 외" } }
      ],
      notes: [
        {
          en: "\"District + sub-area + layout\" is a complete agent brief — \"D21, Beauty World side, 3BR with utility room\" is how the search actually runs.",
          ko: "'디스트릭트 + 동네 + 구조'면 에이전트 브리핑으로 충분해요 — 실제 검색은 \"D21, Beauty World 쪽, 유틸리티룸 있는 3BR\" 이런 식으로 돌아가요."
        },
        {
          en: "District labels carry price signaling — D10 on a listing commands a premium partly for the label itself, which is why same-quality condos in D21/D23, sometimes literally across the road, rent S$1,500–2,000/month cheaper. That is the Hillview arbitrage in one sentence.",
          ko: "디스트릭트 라벨 자체가 가격 신호예요 — 매물에 D10이 붙으면 라벨값만으로도 프리미엄이 붙어요. 그래서 말 그대로 길 하나 건너인데도 D21/D23의 같은 급 콘도가 월 S$1,500–2,000 저렴해요. 이게 한 문장으로 요약한 '힐뷰 아비트라지'예요."
        }
      ]
    },

    /* §3.1 — housing types decoder */
    housingTypes: {
      title: { en: "Housing types — a newcomer's decoder", ko: "주거 형태 해설 — 처음 온 사람용" },
      items: [
        {
          name: { en: "HDB flat", ko: "HDB (공공주택)" },
          body: {
            en: "Public housing towers where ~80% of Singaporeans live. Whole-flat rental to foreigners is legal (quota per block). Sizes: 3-room ≈ 700 sqft, 4-room ≈ 970 sqft, 5-room ≈ 1,200 sqft. No pool, gym or security, but hawker centres, shops and playgrounds at the doorstep — and 30–50% cheaper than condos. Minimum 6-month tenancy.",
            ko: "싱가포르 국민의 약 80%가 사는 공공주택이에요. 외국인도 전체 임대가 합법이에요(동별 쿼터 있음). 크기는 3-room 약 700sqft, 4-room 약 970sqft, 5-room 약 1,200sqft. 수영장·헬스장·보안은 없지만 호커센터·상가·놀이터가 문앞이고, 콘도보다 30–50% 저렴해요. 최소 6개월 계약이에요."
          },
          url: "https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-the-open-market/eligibility"
        },
        {
          name: { en: "Condominium", ko: "콘도미니엄" },
          body: {
            en: "Private development with security, pool, gym, playground and BBQ pits; management fees are the landlord's problem. What most expat families rent. Leasehold (99-yr) vs freehold matters to buyers, not tenants — what matters to a tenant is the build era: pre-2012 condos have bigger units and helper's rooms (see the rule of thumb below).",
            ko: "보안·수영장·헬스장·놀이터·BBQ장이 딸린 민간 아파트예요. 관리비는 집주인 부담이고, 외국인 가족 대부분이 콘도를 임대해요. 99년/프리홀드 구분은 매수자 이야기고, 세입자에게 중요한 건 건축 연식이에요 — 2012년 이전 콘도가 더 넓고 헬퍼룸이 있어요(아래 공식 참고)."
          }
        },
        {
          name: { en: "Executive Condominium (EC)", ko: "EC (Executive Condominium)" },
          body: {
            en: "An HDB-condo hybrid in the suburbs that becomes fully private after 10 years; rents and looks like a condo. Just know the label.",
            ko: "외곽의 HDB-콘도 하이브리드로, 10년이 지나면 완전 민간이 돼요. 임대 경험은 콘도와 똑같아요. 라벨만 알아두면 돼요."
          }
        },
        {
          name: { en: "Walk-up apartment", ko: "워크업 (엘리베이터 없는 저층)" },
          body: {
            en: "Older low-rise (3–4 storeys), no lift, no facilities; big square footage for the money. Common in Katong/Joo Chiat.",
            ko: "3–4층짜리 구옥 저층으로 엘리베이터도 시설도 없지만, 같은 돈에 평수가 넓어요. Katong/Joo Chiat에 흔해요."
          }
        },
        {
          name: { en: "Landed — the ladder", ko: "단독주택 — 등급 사다리" },
          body: {
            en: "Houses: terrace (row house, shared side walls) → semi-detached (one shared wall) → detached/bungalow → Good Class Bungalow (GCB: plots ≥1,400 sqm — Singapore's most exclusive housing, S$16k–100k+/month to rent). The tenant usually takes on garden and pool upkeep, and older houses may lack central aircon. No shared facilities, no security.",
            ko: "테라스(연립, 양옆 벽 공유) → 세미디(한쪽 벽 공유) → 단독/방갈로 → GCB(부지 1,400㎡ 이상 — 싱가포르 최상급 주거, 임대 월 S$16k–100k+) 순이에요. 정원·수영장 관리는 보통 세입자 몫이고, 오래된 집은 중앙 에어컨이 없을 수 있어요. 공용 시설과 보안은 없어요."
          }
        },
        {
          name: { en: "Cluster house", ko: "클러스터 하우스" },
          body: {
            en: "Strata landed: a landed-style house (often 3–4 storeys) inside a gated development that shares condo-style facilities (pool, security). Best-of-both for families wanting space plus a pool — but supply is thin and concentrated in pockets (Toh Tuck/Eng Kong near Beauty World; Chestnut/Hillview — e.g. Chestnut Residences).",
            ko: "게이트 단지 안의 3–4층 단독주택 형태로, 수영장·보안 같은 콘도식 시설을 공유하는 '스트라타 랜디드'예요. 공간과 수영장을 다 원하는 가족에게 최고의 절충안인데, 공급이 적고 특정 포켓에 몰려 있어요(Beauty World 근처 Toh Tuck/Eng Kong, Chestnut/Hillview — 예: Chestnut Residences)."
          },
          url: "https://www.singaporeexpats.com/condo/cluster-house/2555/CHESTNUT-RESIDENCES"
        },
        {
          name: { en: "Conservation shophouse", ko: "보존 숍하우스" },
          body: {
            en: "Heritage two/three-storey buildings with shops below and homes above; character living in Katong/Joo Chiat and Emerald Hill.",
            ko: "1층은 상가, 위층은 주거인 2–3층 헤리티지 건물이에요. Katong/Joo Chiat과 Emerald Hill의 감성 주거예요."
          }
        },
        {
          name: { en: "Serviced apartment", ko: "서비스드 아파트" },
          body: {
            en: "Furnished, minimum 7-day stays — the standard landing pad for the first 1–2 months while house-hunting.",
            ko: "가구 완비에 최소 7일 단위 — 집을 구하는 첫 1–2개월의 표준 베이스캠프예요."
          }
        }
      ]
    },

    /* §3.2 — market context */
    market: {
      title: { en: "Market context (2026)", ko: "시장 분위기 (2026)" },
      paras: [
        {
          en: "The rental market is roughly flat: the 2025 index rose 1.9%, and 2026 quarterly moves are small and mixed (Q2 2026: prime central +1.2%, city fringe 0.0%, suburbs −0.3%; vacancy 6.4%; ~61k units in the pipeline). The practical line: tenant-friendly in supply-heavy suburbs, firm in prime central — landlords of a ~S$6k 3BR are typically accepting ~S$500 below asking in 2026, and transacted rents land ~3–8% below asking.",
          ko: "임대 시장은 대체로 보합세예요. 2025년 지수는 +1.9%였고, 2026년 분기 변동은 작고 엇갈려요(2026년 2분기: 핵심 중심부 +1.2%, 시티 프린지 0.0%, 외곽 −0.3%; 공실률 6.4%, 공급 대기 약 6만 1천 세대). 실전 감각으로는: 공급 많은 외곽은 세입자 우위, 핵심 중심부는 집주인 우위 — 2026년 기준 월 S$6k쯤 되는 3BR이면 집주인이 호가보다 약 S$500 낮춰 받는 게 보통이고, 실제 계약가는 호가보다 3–8% 낮게 성사돼요."
        },
        {
          en: "Family-unit scarcity: new-launch 3BRs have shrunk to ~893–1,300 sqft (vs 1,700+ sqft pre-2000s) and increasingly drop the helper's room and yard — genuinely large 3BR-plus-utility units concentrate in pre-2012 condos, and that segment holds its price better.",
          ko: "가족형 평형은 귀해지고 있어요: 신축 3BR은 약 893–1,300sqft로 줄었고(2000년대 이전엔 1,700sqft 이상), 헬퍼룸과 야드도 점점 사라져요. 넉넉한 '3BR+유틸리티' 유닛은 2012년 이전 콘도에 몰려 있고, 그래서 이 구간은 가격도 잘 버텨요."
        },
        {
          en: "EP holders CAN rent whole HDB flats (pass valid ≥6 months; 6-month minimum tenancy; non-citizen quota per block — check the HDB quota tool).",
          ko: "EP 소지자도 HDB 전체를 임대할 수 있어요(패스 잔여기간 6개월 이상, 최소 6개월 계약, 동별 외국인 쿼터 있음 — HDB 쿼터 조회 도구로 확인하세요)."
        }
      ],
      srcUrl: "https://propertynet.sg/private-rents-rise-suburban-condo-prices-dip-q2-2026-landlords-tenants/",
      scarcityUrl: "https://stackedhomes.com/editorial/shrinking-3-bedroom-new-condo-sizes-how-much-smaller-can-it-go/",
      hdbUrl: "https://services2.hdb.gov.sg/webapp/BR12AWNCQuota/BR12PEnquire.jsp"
    },

    /* §3.3 — the office anchor */
    office: {
      title: { en: "The office anchor — Marina One, West Tower", ko: "회사 기준점 — Marina One 웨스트 타워" },
      paras: [
        {
          en: "Marina One (7 Straits View, Marina Bay) connects to four MRT lines. Best access: Shenton Way (TE19, Thomson–East Coast Line) — station Exit 5 opens directly into Marina One Basement 2, no street crossing. Also Downtown (DT17, ~3–5 min walk), Marina Bay (NS27/CC33/TE20, ~5–8 min) and Raffles Place (NS26/EW14, ~10–12 min via the underground Marina Bay Link network).",
          ko: "Marina One(7 Straits View, Marina Bay)은 MRT 4개 노선과 연결돼요. 가장 편한 길은 Shenton Way(TE19, 톰슨-이스트코스트선) — 역 5번 출구가 Marina One 지하 2층으로 바로 이어져서 길을 건널 필요가 없어요. 그 외에 Downtown(DT17, 도보 3–5분), Marina Bay(NS27/CC33/TE20, 5–8분), Raffles Place(NS26/EW14, 지하 Marina Bay Link 통로로 10–12분)가 있어요."
        },
        {
          en: "The big 2026 change: Circle Line Stage 6 opened on 12 July 2026 (Keppel, Cantonment, Prince Edward Road), closing the full loop — Holland Village is now a one-seat Circle Line ride to Marina Bay.",
          ko: "2026년의 큰 변화: 7월 12일에 서클선 6단계(Keppel, Cantonment, Prince Edward Road)가 개통해 순환선이 완성됐어요 — 이제 Holland Village에서 Marina Bay까지 환승 없이 한 번에 가요."
        }
      ],
      srcUrl: "https://landtransportguru.net/shenton-way-station/",
      cclUrl: "https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/5/news-releases/circle-line-stage-6-to-open-for-public-preview-on-4-july-2026.html"
    },
    /* Priorities picker — chips with nice-to-have / must-have states.
       Every atlas entry carries `tags` from these criterion ids. */
    picker: {
      title: { en: "What are you optimising for?", ko: "무엇을 우선하시나요?" },
      intro: {
        en: "Tap what matters — tap again to make it a must-have (neighbourhoods without it drop out). Matches appear below, best first, and your picks are saved on this device.",
        ko: "중요한 항목을 눌러 선택하세요 — 한 번 더 누르면 '필수'가 돼요(해당 없는 동네는 결과에서 빠져요). 아래에 잘 맞는 동네부터 나타나고, 선택은 이 기기에 저장돼요."
      },
      stateNice: { en: "nice to have", ko: "있으면 좋음" },
      stateMust: { en: "must-have", ko: "필수" },
      resultsTitle: { en: "Your matches", ko: "잘 맞는 동네" },
      empty: { en: "Select a few priorities above to see neighbourhood matches.", ko: "위에서 우선순위를 몇 개 고르면 잘 맞는 동네가 나와요." },
      noMatch: { en: "No neighbourhood ticks every must-have — try relaxing one.", ko: "모든 필수 조건을 만족하는 동네가 없어요 — 조건 하나만 완화해 보세요." },
      matchedLabel: { en: "matches:", ko: "일치:" },
      reset: { en: "Clear picks", ko: "선택 초기화" },
      criteria: [
        { id: "mrt", label: { en: "Walk to MRT & daily errands", ko: "MRT·장보기 도보 생활권" } },
        { id: "schools", label: { en: "Preschools & enrichment nearby", ko: "유치원·학원 근접" } },
        { id: "families", label: { en: "Families with young kids around", ko: "또래 아이 있는 가족들" } },
        { id: "amenities", label: { en: "Condo facilities (pool, playground)", ko: "콘도 시설 (수영장·놀이터)" } },
        { id: "helper-room", label: { en: "Helper's-room layouts", ko: "헬퍼룸 나오는 구조" } },
        { id: "commute", label: { en: "Short CBD commute", ko: "CBD 통근 짧게" } },
        { id: "korean", label: { en: "Korean community & marts", ko: "한인 커뮤니티·한국 마트" } },
        { id: "skis", label: { en: "Near the Korean school (SKIS)", ko: "한국학교(SKIS) 가까이" } },
        { id: "expat", label: { en: "Expat social network", ko: "외국인 네트워크" } },
        { id: "value", label: { en: "Space per dollar", ko: "돈 대비 공간·가성비" } },
        { id: "hdb", label: { en: "Open to HDB", ko: "HDB도 고려" } },
        { id: "landed", label: { en: "Landed / cluster house", ko: "단독주택·클러스터" } },
        { id: "br4", label: { en: "4BR+ space", ko: "4BR 이상" } },
        { id: "beach", label: { en: "Beach & big parks", ko: "바다·대형 공원" } },
        { id: "quiet", label: { en: "Quiet & green", ko: "조용하고 푸른 동네" } },
        { id: "city", label: { en: "City buzz & dining", ko: "도심 활기·다이닝" } }
      ]
    },

    /* Neighbourhood atlas — the 7 researched sub-areas plus qualitative profiles.
       Entries WITHOUT `researched: true` deliberately carry no figures. */
    atlas: {
      title: { en: "Neighbourhood atlas", ko: "동네 아틀라스" },
      intro: {
        en: "A wider sweep of the island. The shortlist areas link to their researched deep-dive cards below; the rest are qualitative sketches — no rent figures until they've been properly researched.",
        ko: "섬 전체를 조금 더 넓게 훑어본 지도예요. 후보 지역은 아래의 상세 조사 카드로 이어지고, 나머지는 분위기 중심의 스케치예요 — 제대로 조사하기 전까지 시세 숫자는 싣지 않아요."
      },
      researchedBadge: { en: "researched — card below", ko: "상세 조사됨 — 아래 카드" },
      sketchBadge: { en: "no researched figures yet", ko: "조사된 시세 없음" },
      entries: [
        {
          id: "beauty-world", cardId: "bukit-timah",
          name: { en: "Beauty World / Upper Bukit Timah", ko: "Beauty World · Upper Bukit Timah" },
          dist: "D21", vibe: { en: "Leafy", ko: "숲세권" }, researched: true,
          tags: ["korean", "skis", "schools", "families", "quiet", "mrt", "helper-room", "landed"],
          body: {
            en: "The Korean node — SKIS walkable, Sol Mart and Korean restaurants at Bukit Timah Plaza, nature reserve at the back door.",
            ko: "한인 거점 — SKIS 도보권, Bukit Timah Plaza의 Sol Mart와 한식당들, 뒷문이 자연보호구역이에요."
          }
        },
        {
          id: "kap-sixth", cardId: "bukit-timah",
          name: { en: "KAP / Sixth Avenue / Tan Kah Kee", ko: "KAP · Sixth Avenue · Tan Kah Kee" },
          dist: "D10/D21", vibe: { en: "Prestige", ko: "명문가" }, researched: true,
          tags: ["schools", "quiet", "landed", "families", "skis", "mrt"],
          body: {
            en: "The prestige end of the corridor: elite local schools, landed enclaves, a handful of condos around the DTL stations.",
            ko: "코리도의 명문가 구간: 명문 로컬 학교들, 단독주택 단지, DTL역 주변의 소수 콘도들."
          }
        },
        {
          id: "hillview", cardId: "bukit-timah",
          name: { en: "Hillview", ko: "Hillview" },
          dist: "D23", vibe: { en: "Tucked-away", ko: "아늑" }, researched: true,
          tags: ["value", "quiet", "skis", "families", "amenities", "landed"],
          body: {
            en: "The value play near the Korean school — condo strip plus cluster houses by the nature reserve, anchored by the HillV2 mall.",
            ko: "한국학교 생활권의 가성비 카드 — 자연보호구역 옆 콘도 스트립과 클러스터하우스, HillV2 몰이 중심이에요."
          }
        },
        {
          id: "clementi-bv", cardId: "clementi",
          name: { en: "Clementi / Buona Vista / West Coast", ko: "Clementi · Buona Vista · West Coast" },
          dist: "D5", vibe: { en: "Practical", ko: "실속" }, researched: true,
          tags: ["value", "hdb", "mrt", "families", "schools"],
          body: {
            en: "Authentically local heartland with the island's best HDB play, hawker food, and West Coast Park's playgrounds.",
            ko: "진짜 로컬 동네 — 섬에서 가장 쏠쏠한 HDB 선택지, 호커 음식, West Coast Park의 놀이터들."
          }
        },
        {
          id: "holland-v", cardId: "holland-village",
          name: { en: "Holland Village / Farrer", ko: "Holland Village · Farrer" },
          dist: "D10", vibe: { en: "Sociable", ko: "사교" }, researched: true,
          tags: ["expat", "families", "amenities", "mrt", "schools", "city", "br4"],
          body: {
            en: "The classic expat-family heartland: brunch-and-playdate density, Botanic Gardens, now one-seat to Marina Bay.",
            ko: "전형적인 외국인 가족 중심지: 브런치와 플레이데이트 밀도, 보타닉 가든, 이제 Marina Bay까지 한 번에."
          }
        },
        {
          id: "east-coast", cardId: "east-coast",
          name: { en: "East Coast / Katong", ko: "East Coast · Katong" },
          dist: "D15", vibe: { en: "Breezy", ko: "여유" }, researched: true,
          tags: ["beach", "families", "commute", "mrt", "city", "helper-room", "value", "br4", "landed"],
          body: {
            en: "Beach-park living with heritage food streets and the best CBD commute since the TEL opened.",
            ko: "바닷가 공원 라이프에 헤리티지 맛집 거리, TEL 개통 이후 CBD 통근 최강."
          }
        },
        {
          id: "newton-novena", cardId: "newton",
          name: { en: "Newton / Novena", ko: "Newton · Novena" },
          dist: "D11", vibe: { en: "Central", ko: "도심" }, researched: true,
          tags: ["commute", "mrt", "city", "schools", "helper-room", "amenities", "br4"],
          body: {
            en: "Maximum convenience: two lines, the United Square enrichment mall, the medical hub, and big older units with helper's rooms.",
            ko: "편의성 최강: 두 개 노선, United Square 학원 몰, 의료 허브, 헬퍼룸 있는 구축 대형 평형까지."
          }
        },
        {
          id: "river-valley",
          name: { en: "River Valley / Robertson Quay", ko: "River Valley · Robertson Quay" },
          dist: "D9", vibe: { en: "Riverside", ko: "리버사이드" },
          tags: ["city", "commute", "mrt", "amenities"],
          body: {
            en: "Between Orchard and the river, west of Fort Canning: a dense condo belt with quay-side dining. It splits into Robertson Quay (riverside restaurants, strollable promenade), the Great World pocket (mall + TEL station), and the older boutique condos up Institution Hill / Mohamed Sultan. Couples and young families who want town living without living on Orchard Road.",
            ko: "오차드와 강 사이, Fort Canning 서쪽의 촘촘한 콘도 벨트예요. Robertson Quay(강변 레스토랑, 산책로), Great World 포켓(몰 + TEL역), 그리고 Institution Hill·Mohamed Sultan 쪽 구축 부티크 콘도로 나뉘어요. 오차드 한복판은 아니면서 시내 생활을 원하는 커플·젊은 가족의 선택지예요."
          }
        },
        {
          id: "orchard-tanglin",
          name: { en: "Orchard / Tanglin", ko: "Orchard · Tanglin" },
          dist: "D9/D10", vibe: { en: "Polished", ko: "럭셔리" },
          tags: ["city", "commute", "amenities", "expat", "mrt"],
          body: {
            en: "The retail spine and the embassy belt behind it. Luxury condos and serviced apartments; the Tanglin end is quieter, greener and borders the Botanic Gardens. Convenience is absolute — neighbourhood feel is not the point.",
            ko: "쇼핑 중심축과 그 뒤의 대사관 벨트예요. 럭셔리 콘도와 서비스드 아파트가 많고, Tanglin 쪽 끝은 더 조용하고 푸르며 보타닉 가든과 맞닿아 있어요. 편의성은 절대적이지만, 동네 감성은 이곳의 포인트가 아니에요."
          }
        },
        {
          id: "tiong-bahru",
          name: { en: "Tiong Bahru / Queenstown", ko: "Tiong Bahru · Queenstown" },
          dist: "D3", vibe: { en: "Heritage-hip", ko: "힙한 구도심" },
          tags: ["city", "hdb", "mrt", "value", "commute"],
          body: {
            en: "Pre-war walk-ups, indie cafes and a famous wet market, ringed by ordinary HDB estates — the Redhill/Queenstown corridor on the EWL is one of the practical value plays close to town (and where the Holland Close/Ghim Moh HDB hack sits administratively).",
            ko: "전전(戰前) 워크업과 인디 카페, 유명한 재래시장이 있는 동네를 평범한 HDB 단지들이 둘러싸요. EWL의 Redhill·Queenstown 구간은 도심 가까운 실속 카드 중 하나예요(Holland Close·Ghim Moh HDB 꿀팁도 행정상 여기 소속이에요)."
          }
        },
        {
          id: "tanjong-rhu",
          name: { en: "Tanjong Rhu / Mountbatten", ko: "Tanjong Rhu · Mountbatten" },
          dist: "D15", vibe: { en: "Waterfront-quiet", ko: "조용한 수변" },
          tags: ["quiet", "beach", "amenities", "commute"],
          body: {
            en: "A calm waterfront condo pocket between the Sports Hub and the western end of East Coast Park — stadium-side TEL access, water views, very little street life of its own. People pick it for quiet and proximity, not buzz.",
            ko: "Sports Hub와 East Coast Park 서쪽 끝 사이의 조용한 수변 콘도 포켓이에요. 경기장 쪽 TEL역, 물가 전망이 장점이고 동네 자체의 번화함은 거의 없어요. 활기보다는 고요함과 접근성 때문에 선택하는 곳이에요."
          }
        },
        {
          id: "thomson",
          name: { en: "Thomson / Upper Thomson", ko: "Thomson · Upper Thomson" },
          dist: "D20/D26", vibe: { en: "Local-green", ko: "로컬 그린" },
          tags: ["quiet", "landed", "value", "families", "mrt"],
          body: {
            en: "Food streets, MacRitchie Reservoir trails and the TEL spine. A mix of landed pockets, older condos and new TEL-side launches — a local-flavour alternative to Bukit Timah for nature-adjacent family living.",
            ko: "맛집 거리, MacRitchie 저수지 트레일, 그리고 TEL 축이 있는 동네예요. 단독주택 포켓과 구축 콘도, TEL역 주변 신축이 섞여 있어요 — 자연 곁 가족 생활을 원한다면 부킷 티마의 로컬 감성 대안이에요."
          }
        },
        {
          id: "serangoon",
          name: { en: "Serangoon Gardens / Kovan", ko: "Serangoon Gardens · Kovan" },
          dist: "D19", vibe: { en: "Villagey", ko: "동네 감성" },
          tags: ["landed", "value", "families", "hdb", "quiet"],
          body: {
            en: "A landed enclave with its own village centre (Chomp Chomp food centre, myVillage mall) and a Franco-expat pocket around the French school. Cheaper landed living than Bukit Timah, further from the CBD.",
            ko: "자체 중심가(Chomp Chomp 호커센터, myVillage 몰)를 갖춘 단독주택 동네이고, 프랑스학교 주변에 프랑스계 외국인 포켓이 있어요. 부킷 티마보다 저렴한 단독주택 생활이 가능하지만 CBD에서는 더 멀어요."
          }
        },
        {
          id: "pasir-panjang",
          name: { en: "Pasir Panjang / Kent Ridge", ko: "Pasir Panjang · Kent Ridge" },
          dist: "D5", vibe: { en: "Hillside", ko: "언덕 동네" },
          tags: ["quiet", "value", "mrt"],
          body: {
            en: "Hillside condos between the ridge parks and the port, on the Circle Line. An academic/NUS crowd, sea glimpses, Labrador and Kent Ridge parks — quiet value close to the west-coast job nodes.",
            ko: "능선 공원과 항구 사이 언덕의 콘도들로, 서클선 라인이에요. NUS·학계 사람들이 많고 바다가 언뜻 보이며 Labrador·Kent Ridge 공원이 곁에 있어요 — 서부 업무지구와 가까운 조용한 실속 동네예요."
          }
        },
        {
          id: "bishan-amk",
          name: { en: "Bishan / Ang Mo Kio", ko: "Bishan · Ang Mo Kio" },
          dist: "D20", vibe: { en: "Heartland-prime", ko: "중심 주거지" },
          tags: ["hdb", "value", "families", "mrt", "schools"],
          body: {
            en: "Dead-centre heartland with cross-island MRT access, big parks (Bishan–AMK Park) and one of the strongest local-school belts — a favourite of families playing the local-education long game.",
            ko: "섬 정중앙의 주거지대로, MRT 접근성이 사방으로 좋고 Bishan–AMK Park 같은 대형 공원과 손꼽히는 로컬 학군이 있어요 — 로컬 교육 장기전을 노리는 가족들이 좋아하는 동네예요."
          }
        },
        {
          id: "tampines",
          name: { en: "Tampines / Pasir Ris", ko: "Tampines · Pasir Ris" },
          dist: "D18", vibe: { en: "East-hub", ko: "동부 허브" },
          tags: ["hdb", "value", "families", "mrt", "schools"],
          body: {
            en: "The east's own regional centre: three malls at one interchange, big HDB estates, beach-adjacent Pasir Ris — and the orbit of UWCSEA East and Overseas Family School.",
            ko: "동부의 자체 중심지예요: 환승역 하나에 몰 세 개, 대형 HDB 단지, 바닷가의 Pasir Ris — 그리고 UWCSEA East와 Overseas Family School 생활권이에요."
          }
        },
        {
          id: "woodlands",
          name: { en: "Woodlands", ko: "Woodlands" },
          dist: "D25", vibe: { en: "Frontier", ko: "북부 관문" },
          tags: ["value", "quiet", "expat"],
          body: {
            en: "The far north by the Malaysia causeway — practical, spacious and cheap, and home to the Singapore American School orbit; a long haul from the CBD.",
            ko: "말레이시아 코즈웨이 옆 최북단이에요 — 실속 있고 넓고 저렴하며, Singapore American School 생활권이에요. 대신 CBD까지는 꽤 멀어요."
          }
        },
        {
          id: "sentosa",
          name: { en: "Sentosa Cove / HarbourFront", ko: "Sentosa Cove · HarbourFront" },
          dist: "D4", vibe: { en: "Resort", ko: "리조트" },
          tags: ["beach", "amenities", "landed", "quiet"],
          body: {
            en: "Marina-side villas and condos on the resort island, plus the HarbourFront/Keppel Bay towers opposite. Waterfront living with a holiday feel — and a daily reminder that the island gate adds time to every trip.",
            ko: "리조트 섬의 마리나 빌라·콘도, 그리고 맞은편 HarbourFront·Keppel Bay 타워들이에요. 휴양지 감성의 수변 생활이 가능하지만, 섬 게이트 때문에 모든 이동에 시간이 조금씩 더 든다는 점은 매일 체감하게 돼요."
          }
        },
        {
          id: "bukit-batok",
          name: { en: "Bukit Batok / Bukit Panjang", ko: "Bukit Batok · Bukit Panjang" },
          dist: "D23", vibe: { en: "Heartland-green", ko: "자연 옆 주거지" },
          tags: ["hdb", "value", "quiet", "families"],
          body: {
            en: "The HDB heartland wrapped around Hillview's condo pocket — nature parks, new DTL access, and some of the cheapest family-sized flats near the Korean school's orbit.",
            ko: "Hillview 콘도 포켓을 둘러싼 HDB 주거지대예요 — 자연공원, DTL 접근성, 그리고 한국학교 생활권에서 가장 저렴한 축에 드는 가족형 HDB가 있어요."
          }
        }
      ]
    },

    tableLink: { en: "Find your area — matcher + full table →", ko: "내게 맞는 동네 찾기 — 매처 + 전체 표 →" },
    cardsTitle: { en: "Deep dives — the researched corridors", ko: "상세 카드 — 조사가 끝난 지역들" },

    /* All-areas table — every atlas neighbourhood with indicative prices, stock mix
       and commute estimates to user-set work/school anchors. Prices on rows marked
       rough:true are BALLPARKS to structure thinking, not researched figures. */
    areaTable: {
      title: { en: "Every area at a glance", ko: "전체 동네 한눈에 보기" },
      intro: {
        en: "Set your own work and school anchors below — commutes recompute for every row. Prices marked ~ are unresearched ballparks (averages to orient by, not quotes); rows without ~ carry researched Aug 2026 figures. Stock columns show roughly how much of each housing type an area has.",
        ko: "아래에 직장과 학교 주소를 직접 넣어 보세요 — 모든 행의 통근 시간이 다시 계산돼요. ~ 표시가 붙은 가격은 조사 전의 대략적인 감(見) 잡기용 평균이고, ~ 없는 행은 2026년 8월 조사 수치예요. 주거 형태 열은 그 동네에 각 유형이 얼마나 있는지를 보여줘요."
      },
      estNote: {
        en: "Commutes are straight-line estimates calibrated against researched door-to-door times (±10 min) — good for comparing areas, not for planning a specific trip. Address lookup uses the Singapore government's free OneMap service.",
        ko: "통근 시간은 실측 조사값에 맞춰 보정한 직선거리 기반 추정치예요(±10분) — 동네끼리 비교하는 용도이지, 특정 이동 계획용은 아니에요. 주소 검색은 싱가포르 정부의 무료 OneMap 서비스를 써요."
      },
      workLabel: { en: "Work address / postcode", ko: "직장 주소 · 우편번호" },
      schoolLabel: { en: "School address / postcode", ko: "학교 주소 · 우편번호" },
      setLabel: { en: "Set", ko: "설정" },
      resetLabel: { en: "Defaults", ko: "기본값" },
      workDefaultName: { en: "Marina One (default)", ko: "Marina One (기본값)" },
      schoolDefaultName: { en: "SKIS (default)", ko: "SKIS (기본값)" },
      resolveError: { en: "Address not found — try a postcode", ko: "주소를 찾지 못했어요 — 우편번호로 시도해 보세요" },
      lookupOffline: { en: "Lookup unavailable (offline?) — using defaults", ko: "검색을 사용할 수 없어요(오프라인?) — 기본값을 사용해요" },
      br3Bands: {
        b1: { label: { en: "≤S$5k/mo", ko: "월 S$5k 이하" }, max: 5000 },
        b2: { label: { en: "S$5–7k/mo", ko: "월 S$5–7k" }, max: 7000 },
        b3: { label: { en: "S$7k+/mo", ko: "월 S$7k 이상" }, max: Infinity }
      },
      br4Bands: {
        b1: { label: { en: "≤S$8k/mo", ko: "월 S$8k 이하" }, max: 8000 },
        b2: { label: { en: "S$8–12k/mo", ko: "월 S$8–12k" }, max: 12000 },
        b3: { label: { en: "S$12k+/mo", ko: "월 S$12k 이상" }, max: Infinity },
        none: { label: { en: "— (thin supply)", ko: "— (매물 적음)" } }
      },
      commuteBands: {
        b1: { label: { en: "≤20 min", ko: "20분 이하" }, max: 20 },
        b2: { label: { en: "21–35 min", ko: "21–35분" }, max: 35 },
        b3: { label: { en: "36+ min", ko: "36분 이상" }, max: Infinity }
      },
      stockLevels: {
        l3: "●●●",
        l2: "●●",
        l1: "●",
        l0: "—"
      },
      cols: {
        district: { en: "District", ko: "구역" },
        area: { en: "Area", ko: "지역" },
        br3: { en: "3BR (avg)", ko: "3BR (평균)" },
        br4: { en: "4BR (avg)", ko: "4BR (평균)" },
        work: { en: "To work (MRT, est.)", ko: "직장까지 (MRT, 추정)" },
        school: { en: "To school (drive, est.)", ko: "학교까지 (차량, 추정)" },
        walk: { en: "Walkability", ko: "도보 생활" },
        malls: { en: "Malls & groceries", ko: "몰 · 장보기" },
        condo: { en: "Condo", ko: "콘도" },
        hdb: { en: "HDB", ko: "HDB" },
        landed: { en: "Landed", ko: "단독" }
      },
      stockNote: {
        en: "Stock and walkability: ●●● lots / errands fully on foot · ●● some / mostly walkable · ● a little / car-leaning · — none / car-dependent. Rough characterisations, not counts.",
        ko: "주거 형태·도보 생활: ●●● 많음/도보로 다 해결 · ●● 어느 정도/대체로 도보 · ● 조금/차가 편함 · — 거의 없음/차 필수. 개수가 아니라 대략적인 성격이에요."
      },
      districtNote: {
        en: "Rows follow the sub-district neighbourhoods agents actually name; the listings portals (PropertyGuru, 99.co) search by these same D1–D28 districts, so \"district + area\" is exactly how to brief an agent.",
        ko: "행은 에이전트들이 실제로 부르는 세부 동네 단위예요. 매물 포털(PropertyGuru, 99.co)도 같은 D1–D28 구역으로 검색하니, 에이전트에게는 '구역 + 동네'로 말하면 정확해요."
      },
      /* rows reference atlas entries by id for names/links (name/cardId override for
         split rows); lat/lng are area centroids; walk 0–3 like the stock ratings */
      rows: [
        { id: "beauty-world", district: "D21", lat: 1.3410, lng: 103.7758, br3: 5500, br4: 8500, walk: 3, malls: "Beauty World Centre · Bukit Timah Plaza (Sol Mart) · FairPrice Finest", condo: 2, hdb: 0, landed: 2 },
        { id: "kap-sixth", district: "D10/21", lat: 1.3315, lng: 103.7970, br3: 6800, br4: 10000, walk: 1, malls: "KAP Mall · Cold Storage (Guthrie House)", condo: 1, hdb: 0, landed: 3 },
        { id: "hillview", district: "D23", lat: 1.3624, lng: 103.7674, br3: 4400, br4: null, walk: 2, malls: "HillV2 (CS Fresh) · Rail Mall", condo: 2, hdb: 1, landed: 2 },
        { id: "clementi-bv", district: "D5", lat: 1.3120, lng: 103.7700, br3: 6000, br4: 9500, walk: 3, malls: "Clementi Mall · 321 Clementi · Star Vista", condo: 2, hdb: 3, landed: 1 },
        { id: "holland-v", cardId: "holland-village", name: { en: "Holland Village", ko: "Holland Village (홀랜드 빌리지)" }, district: "D10", lat: 1.3115, lng: 103.7960, br3: 8000, br4: 13000, rough: true, walk: 3, malls: "Holland V enclave · One Holland Village · Cold Storage", condo: 3, hdb: 1, landed: 2 },
        { id: "farrer-road", cardId: "holland-village", name: { en: "Farrer Road", ko: "Farrer Road (파러 로드)" }, district: "D10", lat: 1.3175, lng: 103.8074, br3: 7000, br4: 11500, rough: true, walk: 2, malls: "Empress Market · d'Leedon shops · Holland V one stop", condo: 3, hdb: 0, landed: 1 },
        { id: "katong-joochiat", cardId: "east-coast", name: { en: "Katong / Joo Chiat", ko: "Katong · Joo Chiat (카통)" }, district: "D15", lat: 1.3075, lng: 103.9010, br3: 6000, br4: 8500, rough: true, walk: 3, malls: "i12 Katong · Katong V · Cold Storage", condo: 2, hdb: 1, landed: 2 },
        { id: "amber-meyer", cardId: "east-coast", name: { en: "Amber / Meyer", ko: "Amber · Meyer (앰버)" }, district: "D15", lat: 1.2980, lng: 103.8880, br3: 7800, br4: 9500, rough: true, walk: 2, malls: "Katong Park TEL · i12 Katong (walk)", condo: 3, hdb: 0, landed: 0 },
        { id: "marine-parade", cardId: "east-coast", name: { en: "Marine Parade / Siglap", ko: "Marine Parade · Siglap (마린 퍼레이드)" }, district: "D15", lat: 1.3025, lng: 103.9130, br3: 6000, br4: 8000, rough: true, walk: 3, malls: "Parkway Parade · FairPrice · hawker centres", condo: 2, hdb: 3, landed: 1 },
        { id: "newton-novena", district: "D11", lat: 1.3165, lng: 103.8420, br3: 7200, br4: 9500, walk: 3, malls: "United Square · Velocity · Square 2 (Sol Mart)", condo: 3, hdb: 0, landed: 0 },
        { id: "river-valley", district: "D9", lat: 1.2935, lng: 103.8330, br3: 8500, br4: 13000, rough: true, walk: 3, malls: "Great World (TEL) · UE Square", condo: 3, hdb: 0, landed: 0 },
        { id: "orchard-tanglin", district: "D9/10", lat: 1.3050, lng: 103.8250, br3: 9500, br4: 15000, rough: true, walk: 3, malls: "Orchard malls · Tanglin Mall", condo: 3, hdb: 0, landed: 1 },
        { id: "tiong-bahru", district: "D3", lat: 1.2860, lng: 103.8270, br3: 6500, br4: 9000, rough: true, walk: 3, malls: "Tiong Bahru Plaza · wet market & cafes", condo: 2, hdb: 3, landed: 0 },
        { id: "tanjong-rhu", district: "D15", lat: 1.2960, lng: 103.8760, br3: 6500, br4: 9000, rough: true, walk: 1, malls: "Kallang Wave · Leisure Park Kallang", condo: 3, hdb: 1, landed: 1 },
        { id: "thomson", district: "D20/26", lat: 1.3540, lng: 103.8330, br3: 5500, br4: 8000, rough: true, walk: 2, malls: "Thomson Plaza · Upper Thomson food strip", condo: 2, hdb: 2, landed: 3 },
        { id: "serangoon", district: "D19", lat: 1.3640, lng: 103.8660, br3: 5000, br4: 7000, rough: true, walk: 2, malls: "myVillage · Chomp Chomp · NEX nearby", condo: 1, hdb: 2, landed: 3 },
        { id: "pasir-panjang", district: "D5", lat: 1.2760, lng: 103.7910, br3: 5500, br4: 8000, rough: true, walk: 1, malls: "No mall — Pasir Panjang Food Centre", condo: 2, hdb: 1, landed: 1 },
        { id: "bishan-amk", district: "D20", lat: 1.3610, lng: 103.8480, br3: 5000, br4: 7000, rough: true, walk: 3, malls: "Junction 8 · AMK Hub", condo: 2, hdb: 3, landed: 1 },
        { id: "tampines", district: "D18", lat: 1.3530, lng: 103.9440, br3: 4500, br4: 6500, rough: true, walk: 3, malls: "Tampines Mall · Century Square · Tampines 1", condo: 2, hdb: 3, landed: 1 },
        { id: "woodlands", district: "D25", lat: 1.4360, lng: 103.7860, br3: 3800, br4: 5500, rough: true, walk: 2, malls: "Causeway Point", condo: 1, hdb: 3, landed: 1 },
        { id: "sentosa", district: "D4", lat: 1.2490, lng: 103.8300, br3: 9000, br4: 14000, rough: true, walk: 1, malls: "Quayside Isle · VivoCity (HarbourFront side)", condo: 2, hdb: 0, landed: 2 },
        { id: "bukit-batok", district: "D23", lat: 1.3590, lng: 103.7500, br3: 4200, br4: 6000, rough: true, walk: 2, malls: "West Mall (Sol Mart) · Hillion Mall", condo: 2, hdb: 3, landed: 1 }
      ]
    },

    /* §3.4 — comparison table (7 rows; commutes are estimates) */
    comparison: {
      title: { en: "The researched shortlist, compared", ko: "조사된 후보 동네 비교" },
      note: { en: "Aug 2026 asking rents; commute times are door-to-door estimates.", ko: "2026년 8월 호가 기준이고, 통근 시간은 문앞 기준 추정치예요." },
      cols: {
        area: { en: "Area (district)", ko: "지역 (구역)" },
        br3: { en: "3BR condo", ko: "3BR 콘도" },
        br4: { en: "4BR condo", ko: "4BR 콘도" },
        commute: { en: "MRT to Marina One (est.)", ko: "Marina One 통근 (추정)" },
        skis: { en: "Drive to SKIS", ko: "SKIS 등하교 (차량)" },
        hdb: { en: "HDB 4-rm proxy", ko: "HDB 4룸 참고가" },
        vibe: { en: "Vibe", ko: "분위기" }
      },
      rows: [
        {
          target: "bukit-timah",
          area: { en: "Bukit Timah — Beauty World / Upper BT (D21)", ko: "Bukit Timah — Beauty World · Upper BT (D21)" },
          br3: { en: "S$5,000–6,700 (new); S$4,500–5,000 (older 999-yr)", ko: "S$5,000–6,700 (신축); S$4,500–5,000 (999년 구축)" },
          br4: "S$6,200–11,000",
          commute: { en: "DTL direct → Downtown, ~23-min ride; 35–45 min", ko: "DTL 직행 → Downtown, 승차 약 23분; 35–45분" },
          skis: { en: "walkable–5 min", ko: "도보권–5분" },
          hdb: { en: "n/a (Bt Batok S$3,250)", ko: "없음 (Bt Batok S$3,250)" },
          vibe: { en: "Leafy", ko: "숲세권" }
        },
        {
          target: "bukit-timah",
          area: { en: "Bukit Timah — KAP / Sixth Ave (D10/D21)", ko: "Bukit Timah — KAP · Sixth Ave (D10/D21)" },
          br3: "S$6,000–7,500",
          br4: "S$9,000–11,000",
          commute: { en: "DTL direct, ~20-min ride; 30–40 min", ko: "DTL 직행, 승차 약 20분; 30–40분" },
          skis: { en: "5 min", ko: "5분" },
          hdb: { en: "n/a", ko: "없음" },
          vibe: { en: "Prestige", ko: "명문가" }
        },
        {
          target: "bukit-timah",
          area: { en: "Bukit Timah — Hillview (D23)", ko: "Bukit Timah — Hillview (D23)" },
          br3: { en: "S$3,900–4,900", ko: "S$3,900–4,900" },
          br4: { en: "thin supply", ko: "매물 적음" },
          commute: { en: "DTL direct, ~27-min ride; 40–50 min", ko: "DTL 직행, 승차 약 27분; 40–50분" },
          skis: { en: "5–10 min", ko: "5–10분" },
          hdb: { en: "Bt Panjang (cheap)", ko: "Bt Panjang (저렴)" },
          vibe: { en: "Tucked-away", ko: "아늑" }
        },
        {
          target: "clementi",
          area: { en: "Clementi – Buona Vista – West Coast (D5)", ko: "Clementi · Buona Vista · West Coast (D5)" },
          br3: "S$5,500–6,500",
          br4: "S$8,000–11,000",
          commute: { en: "EWL → Raffles Place + 10-min walk; 40–50 min", ko: "EWL → Raffles Place + 도보 10분; 40–50분" },
          skis: { en: "15–20 min (shuttle from Clementi MRT ⚠)", ko: "15–20분 (Clementi MRT 셔틀 ⚠)" },
          hdb: "Clementi S$3,900",
          vibe: { en: "Practical", ko: "실속" }
        },
        {
          target: "east-coast",
          area: { en: "East Coast / Katong (D15)", ko: "East Coast · Katong (D15)" },
          br3: "S$4,500–8,500",
          br4: "S$7,500–12,000",
          commute: { en: "TEL direct → Shenton Way, into the office basement; 20–30 min — best commute", ko: "TEL 직행 → Shenton Way, 회사 지하 직결; 20–30분 — 통근 최강" },
          skis: { en: "35–45 min — worst school run", ko: "35–45분 — 등하교 최악" },
          hdb: "Marine Parade S$3,500",
          vibe: { en: "Breezy", ko: "여유" }
        },
        {
          target: "holland-village",
          area: { en: "Holland V / Farrer (D10)", ko: "Holland V · Farrer (D10)" },
          br3: "S$5,500–10,000",
          br4: "S$10,000–15,000",
          commute: { en: "CCL one-seat → Marina Bay (since Jul 2026); 35–45 min", ko: "CCL 한 번에 → Marina Bay (2026년 7월부터); 35–45분" },
          skis: { en: "12–18 min", ko: "12–18분" },
          hdb: "Queenstown S$4,000",
          vibe: { en: "Sociable", ko: "사교" }
        },
        {
          target: "newton",
          area: { en: "Newton / Novena (D11)", ko: "Newton · Novena (D11)" },
          br3: "S$6,400–7,900",
          br4: "S$6,800–12,000",
          commute: { en: "NSL direct → Marina Bay, ~16-min ride; 25–35 min", ko: "NSL 직행 → Marina Bay, 승차 약 16분; 25–35분" },
          skis: { en: "20–25 min (shuttle from Newton MRT ⚠)", ko: "20–25분 (Newton MRT 셔틀 ⚠)" },
          hdb: "Whampoa/T.Payoh S$3,600",
          vibe: { en: "Central", ko: "도심" }
        }
      ],
      footNotes: [
        {
          en: "Commute figures are Rome2rio station-pair estimates plus walk allowances — treat them as estimates. Peak drives run roughly double off-peak, and a peak CBD car commute crosses 2–4 ERP gantries: S$6–12/day one-way (CTE is worst — the Chin Swee gantry is S$5–6).",
          ko: "통근 시간은 Rome2rio 역간 추정치에 도보 시간을 더한 값이라 '추정'으로 보세요. 러시아워 운전은 한산할 때의 약 2배이고, 출근길 CBD 진입은 ERP 게이트를 2–4개 지나 편도 하루 S$6–12예요(최악은 CTE — Chin Swee 게이트가 S$5–6)."
        },
        {
          en: "SKIS reportedly runs free school-day shuttles to Newton MRT and Clementi MRT — verify routes and eligibility with admission@skis.kr before relying on this.",
          ko: "SKIS가 등교일마다 Newton MRT·Clementi MRT까지 무료 셔틀을 운행한다고 알려져 있어요 — 계획에 반영하기 전에 admission@skis.kr로 노선과 이용 자격을 꼭 확인하세요.",
          verify: true
        }
      ],
      erpUrl: "https://www.smartcalculator.sg/articles/erp-timings-rates-2026",
      skisBusUrl: "https://www.doris.school/schools/singapore/singapore-korean-international-school"
    },
    map: {
      title: { en: "Map — a visual table of contents", ko: "지도 — 한눈에 보는 목차" },
      lines: {
        nsl: { en: "North–South Line", ko: "남북선 (NSL)" },
        ewl: { en: "East–West Line", ko: "동서선 (EWL)" },
        ccl: { en: "Circle Line", ko: "서클선 (CCL)" },
        dtl: { en: "Downtown Line", ko: "다운타운선 (DTL)" },
        tel: { en: "Thomson–East Coast Line", ko: "톰슨-이스트코스트선 (TEL)" }
      },
      /* Real-map overlay data (Leaflet). Approximate neighbourhood outlines + landmark pins,
         WGS84 lat/lng. These are deliberately fuzzy — neighbourhoods, not boundaries. */
      geo: {
        bounds: [[1.240, 103.690], [1.455, 103.995]],
        areas: {
          "bukit-timah": [
            [1.3690, 103.7620], [1.3760, 103.7730], [1.3620, 103.7830], [1.3450, 103.7900],
            [1.3330, 103.8050], [1.3220, 103.8130], [1.3160, 103.8060], [1.3300, 103.7880],
            [1.3420, 103.7760], [1.3560, 103.7660]
          ],
          "clementi": [
            [1.3230, 103.7580], [1.3220, 103.7760], [1.3130, 103.7930], [1.3010, 103.7950],
            [1.2900, 103.7850], [1.2870, 103.7650], [1.2990, 103.7560], [1.3150, 103.7530]
          ],
          "east-coast": [
            [1.3120, 103.8850], [1.3130, 103.9100], [1.3080, 103.9230], [1.2990, 103.9260],
            [1.2950, 103.9080], [1.2930, 103.8870], [1.3000, 103.8790]
          ],
          "holland-village": [
            [1.3230, 103.8020], [1.3210, 103.8110], [1.3130, 103.8130], [1.3060, 103.8050],
            [1.3060, 103.7930], [1.3140, 103.7890]
          ],
          "newton": [
            [1.3290, 103.8390], [1.3280, 103.8480], [1.3190, 103.8500], [1.3090, 103.8440],
            [1.3090, 103.8350], [1.3200, 103.8330]
          ]
        },
        landmarks: [
          { id: "skis", lat: 1.3446, lng: 103.7780, star: true, dir: "top", label: { en: "Korean School (SKIS)", ko: "한국국제학교 (SKIS)" } },
          { id: "ktown", lat: 1.2785, lng: 103.8435, dir: "left", label: { en: "K-town · Tanjong Pagar", ko: "코리아타운 · 탄종파가" } },
          { id: "office", lat: 1.2764, lng: 103.8540, dir: "right", label: { en: "Marina One (office)", ko: "마리나 원 (회사)" } },
          { id: "changi", lat: 1.3644, lng: 103.9915, dir: "top", label: { en: "Changi Airport", ko: "창이공항" } }
        ],
        /* Atlas spots — every atlas neighbourhood without a polygon above.
           Labels come from living.atlas.entries by id (single source of truth).
           sub:true = Bukit Timah corridor sub-areas: small dots, label on hover only
           (they sit inside the corridor polygon, permanent pills would pile up). */
        spots: [
          { id: "beauty-world",   lat: 1.3410, lng: 103.7757, sub: true },
          { id: "kap-sixth",      lat: 1.3328, lng: 103.7896, sub: true },
          { id: "hillview",       lat: 1.3625, lng: 103.7645, sub: true },
          { id: "river-valley",   lat: 1.2934, lng: 103.8360, dir: "left" },
          { id: "orchard-tanglin",lat: 1.3048, lng: 103.8255, dir: "right" },
          { id: "tiong-bahru",    lat: 1.2865, lng: 103.8140, dir: "left" },
          { id: "tanjong-rhu",    lat: 1.2965, lng: 103.8735, dir: "right" },
          { id: "thomson",        lat: 1.3545, lng: 103.8330, dir: "top" },
          { id: "serangoon",      lat: 1.3620, lng: 103.8790, dir: "top" },
          { id: "pasir-panjang",  lat: 1.2762, lng: 103.7915, dir: "bottom" },
          { id: "bishan-amk",     lat: 1.3690, lng: 103.8480, dir: "top" },
          { id: "tampines",       lat: 1.3530, lng: 103.9440, dir: "right" },
          { id: "woodlands",      lat: 1.4370, lng: 103.7880, dir: "top" },
          { id: "sentosa",        lat: 1.2530, lng: 103.8320, dir: "bottom" },
          { id: "bukit-batok",    lat: 1.3520, lng: 103.7455, dir: "bottom" }
        ]
      },
      /* Hand-drawn schematic (map.svg) — coordinates and paths are verbatim; do not edit them.
         Only the .area group ids were dropped (they collided with the card ids) and
         data-target="holland-v" was renamed to match the holland-village card. */
      svg: `<svg id="sgmap" viewBox="0 0 1000 627" xmlns="http://www.w3.org/2000/svg" role="img"
     aria-label="Schematic map of Singapore showing the five shortlisted areas">
  <rect class="sea" x="0" y="0" width="1000" height="627" rx="14"/>
  <path class="johor" d="M 0.0,0.0 L 0.0,84.3 L 127.5,103.9 L 245.1,92.2 L 366.7,72.5 L 480.4,45.1 L 607.8,68.6 L 754.9,52.9 L 911.8,84.3 L 1000.0,68.6 L 1000.0,0.0 Z"/>
  <path class="island" d="M 68.6,468.6 C 62.7,459.5 91.5,418.9 103.9,398.0 C 116.3,377.1 130.0,366.3 143.1,343.1 C 156.2,319.9 171.6,287.6 182.4,258.8 C 193.2,230.1 197.4,192.5 207.8,170.6 C 218.2,148.7 227.4,135.3 245.1,127.5 C 262.8,119.7 291.1,128.7 313.7,123.5 C 336.2,118.3 353.3,103.3 380.4,96.1 C 407.5,88.9 444.1,77.1 476.5,80.4 C 508.9,83.7 546.7,101.3 574.5,115.7 C 602.3,130.1 622.8,151.0 643.1,166.7 C 663.4,182.4 676.8,200.7 696.1,209.8 C 715.4,219.0 739.2,219.6 758.8,221.6 C 778.4,223.6 792.8,224.9 813.7,221.6 C 834.6,218.3 866.6,200.1 884.3,202.0 C 901.9,203.9 914.7,215.7 919.6,233.3 C 924.5,250.9 918.3,285.6 913.7,307.8 C 909.1,330.0 908.2,354.3 892.2,366.7 C 876.2,379.1 846.4,377.2 817.6,382.4 C 788.8,387.6 753.6,391.8 719.6,398.0 C 685.6,404.2 639.9,409.8 613.7,419.6 C 587.6,429.4 579.7,446.4 562.7,456.9 C 545.7,467.4 533.4,480.4 511.8,482.4 C 490.2,484.3 458.8,477.8 433.3,468.6 C 407.8,459.5 383.0,437.6 358.8,427.5 C 334.6,417.4 312.4,408.1 288.2,407.8 C 264.0,407.5 238.5,418.0 213.7,425.5 C 188.9,433.0 163.4,445.7 139.2,452.9 C 115.0,460.1 74.5,477.8 68.6,468.6 Z"/>
  <ellipse class="island" cx="500.0" cy="502.9" rx="26" ry="8"/>
  <g class="mrt">
    <path class="ln nsl" d="M 327.5,337.3 C 329.8,332.1 340.6,322.9 341.2,305.9 C 341.8,288.9 327.1,260.1 331.4,235.3 C 335.6,210.5 353.0,173.9 366.7,156.9 C 380.4,139.9 394.8,141.2 413.7,133.3 C 432.6,125.5 464.4,107.2 480.4,109.8 C 496.4,112.4 500.0,123.2 509.8,149.0 C 519.6,174.8 535.0,239.2 539.2,264.7 C 543.5,290.2 537.2,285.7 535.3,302.0 C 533.3,318.3 530.8,350.0 527.5,362.7 C 524.2,375.4 519.6,373.2 515.7,378.4 C 511.8,383.6 501.3,389.9 503.9,394.1 C 506.5,398.4 524.9,400.3 531.4,403.9 C 537.9,407.5 541.5,410.8 543.1,415.7 C 544.7,420.6 540.5,427.8 541.2,433.3 C 541.9,438.9 546.1,446.4 547.1,449.0 "/>
    <path class="ln ewl" d="M 121.6,323.5 C 144.1,323.8 222.6,323.2 256.9,325.5 C 291.2,327.8 308.2,329.5 327.5,337.3 C 346.8,345.1 356.8,364.0 372.5,372.5 C 388.2,381.0 408.2,381.6 421.6,388.2 C 435.0,394.8 436.6,403.0 452.9,411.8 C 469.2,420.6 504.9,437.6 519.6,441.2 C 534.3,444.8 537.3,437.6 541.2,433.3 C 545.1,429.1 541.5,420.9 543.1,415.7 C 544.7,410.5 544.8,407.9 551.0,402.0 C 557.2,396.1 568.3,386.3 580.4,380.4 C 592.5,374.5 604.2,370.9 623.5,366.7 C 642.8,362.4 678.8,357.8 696.1,354.9 C 713.4,351.9 722.6,358.5 727.5,349.0 C 732.4,339.5 724.5,313.0 725.5,298.0 C 726.5,283.0 732.0,265.3 733.3,258.8 "/>
    <path class="ln ewl" d="M 727.5,349.0 C 732.4,346.4 743.2,343.1 756.9,333.3 C 770.6,323.5 801.0,297.4 809.8,290.2 "/>
    <path class="ln ccl" d="M 531.4,403.9 C 534.3,405.9 544.1,413.7 549.0,415.7 C 553.9,417.7 554.3,419.0 560.8,415.7 C 567.3,412.4 577.8,404.3 588.2,396.1 C 598.7,387.9 624.1,382.1 623.5,366.7 C 622.9,351.3 599.0,314.7 584.3,303.9 C 569.6,293.1 546.4,297.8 535.3,302.0 C 524.2,306.2 528.4,319.9 517.6,329.4 C 506.8,338.9 481.1,352.3 470.6,358.8 C 460.2,365.3 461.1,365.0 454.9,368.6 C 448.7,372.2 438.9,377.1 433.3,380.4 C 427.8,383.7 425.5,382.3 421.6,388.2 C 417.7,394.1 409.2,405.6 409.8,415.7 C 410.4,425.8 413.1,439.9 425.5,449.0 C 437.9,458.1 467.6,469.0 484.3,470.6 C 501.0,472.2 515.0,462.4 525.5,458.8 C 536.0,455.2 541.2,456.2 547.1,449.0 C 553.0,441.8 558.5,421.2 560.8,415.7 "/>
    <path class="ln dtl" d="M 366.7,247.1 C 368.3,252.6 371.9,268.0 376.5,280.4 C 381.1,292.8 388.9,312.8 394.1,321.6 C 399.3,330.4 400.9,330.0 407.8,333.3 C 414.7,336.6 424.8,336.9 435.3,341.2 C 445.8,345.4 461.1,355.2 470.6,358.8 C 480.1,362.4 484.7,359.4 492.2,362.7 C 499.7,366.0 508.2,374.1 515.7,378.4 C 523.2,382.6 531.4,384.3 537.3,388.2 C 543.2,392.1 547.1,397.4 551.0,402.0 C 554.9,406.6 559.8,409.8 560.8,415.7 C 561.8,421.6 562.4,434.4 556.9,437.3 C 551.4,440.2 526.5,443.8 527.5,433.3 C 528.5,422.8 547.7,388.2 562.7,374.5 C 577.7,360.8 599.3,357.9 617.6,351.0 C 635.9,344.1 654.5,342.1 672.5,333.3 C 690.5,324.5 711.4,298.0 725.5,298.0 C 739.6,298.0 751.7,327.4 756.9,333.3 "/>
    <path class="ln tel" d="M 413.7,111.8 C 413.7,115.4 403.2,116.6 413.7,133.3 C 424.2,150.0 461.1,184.7 476.5,211.8 C 491.9,238.9 499.0,276.5 505.9,296.1 C 512.8,315.7 519.9,318.3 517.6,329.4 C 515.3,340.5 494.5,351.9 492.2,362.7 C 489.9,373.5 501.9,385.6 503.9,394.1 C 505.8,402.6 501.3,405.9 503.9,413.7 C 506.5,421.5 514.7,434.7 519.6,441.2 C 524.5,447.7 528.7,451.6 533.3,452.9 C 537.9,454.2 540.2,450.6 547.1,449.0 C 554.0,447.4 563.7,450.0 574.5,443.1 C 585.3,436.2 599.7,415.3 611.8,407.8 C 623.9,400.3 632.1,402.9 647.1,398.0 C 662.1,393.1 692.9,381.7 702.0,378.4 "/>
  </g>
  <text class="ctx lang-en" x="195" y="52" text-anchor="middle">JOHOR BAHRU · MALAYSIA</text><text class="ctx lang-ko" x="195" y="52" text-anchor="middle">조호르바루 · 말레이시아</text>
  <text class="water lang-en" x="640" y="118" text-anchor="middle">Straits of Johor</text><text class="water lang-ko" x="640" y="118" text-anchor="middle">조호르 해협</text>
  <text class="water lang-en" x="680" y="585" text-anchor="middle">Singapore Strait</text><text class="water lang-ko" x="680" y="585" text-anchor="middle">싱가포르 해협</text>
  <text class="tiny lang-en" x="500.0" y="524.9" text-anchor="middle">Sentosa</text><text class="tiny lang-ko" x="500.0" y="524.9" text-anchor="middle">센토사</text>
  <g class="lm">
    <circle cx="413.7" cy="133.3" r="3.5"/>
    <text class="tiny lang-en" x="422.7" y="137.3" text-anchor="start">Woodlands · causeway to Malaysia</text><text class="tiny lang-ko" x="422.7" y="137.3" text-anchor="start">우드랜즈 · 말레이시아 육로</text>
    <rect x="543.5" y="443.5" width="8" height="8" rx="1.5" class="office"/>
    <text class="lm-lbl lang-en" x="557" y="453" text-anchor="start">Marina One (office)</text><text class="lm-lbl lang-ko" x="557" y="453" text-anchor="start">마리나 원 (회사)</text>
    <circle cx="527.5" cy="446.1" r="4.5" class="dot-k"/>
    <line x1="527.5" y1="452.1" x2="501.5" y2="480.1" class="leader"/>
    <text class="lm-lbl lang-en" x="497.5" y="494.1" text-anchor="end">K-town · Tanjong Pagar</text><text class="lm-lbl lang-ko" x="497.5" y="494.1" text-anchor="end">코리아타운 · 탄종파가</text>
    <circle cx="809.8" cy="290.2" r="3.5"/>
    <text class="tiny lang-en" x="817.8" y="284.2" text-anchor="start">Changi Airport ✈</text><text class="tiny lang-ko" x="817.8" y="284.2" text-anchor="start">창이공항 ✈</text>
    <path class="star" transform="translate(394.5,322.5) scale(1.15)"
          d="M0,-7 L1.9,-2.2 7,-2.2 2.9,1 4.3,6 0,3 -4.3,6 -2.9,1 -7,-2.2 -1.9,-2.2 Z"/>
    <line x1="388.5" y1="317.5" x2="324.5" y2="270.5" class="leader"/>
    <text class="lm-lbl lang-en" x="320.5" y="262.5" text-anchor="end">Korean School (SKIS)</text><text class="lm-lbl lang-ko" x="320.5" y="262.5" text-anchor="end">한국국제학교 (SKIS)</text>
  </g>

  <g class="area" data-target="bukit-timah" tabindex="0" role="link"
     aria-label="Bukit Timah — jump to section">
    <ellipse cx="400" cy="312" rx="90" ry="52" transform="rotate(-35 400 312)"/>
    <text class="area-name lang-en" x="400" y="288" text-anchor="middle">Bukit Timah</text><text class="area-name lang-ko" x="400" y="288" text-anchor="middle">부킷 티마</text>

    <text class="area-vibe lang-en" x="400" y="303" text-anchor="middle">Leafy</text><text class="area-vibe lang-ko" x="400" y="303" text-anchor="middle">녹음</text>
  </g>
  <g class="area" data-target="clementi" tabindex="0" role="link"
     aria-label="Clementi — jump to section">
    <ellipse cx="380.4" cy="390.2" rx="74.0" ry="40.5" transform="rotate(-15 380.4 390.2)"/>
    <text class="area-name lang-en" x="364.4" y="402.2" text-anchor="middle">Clementi</text><text class="area-name lang-ko" x="364.4" y="402.2" text-anchor="middle">클레멘티</text>
    <text class="area-sub lang-en" x="364.4" y="418.2" text-anchor="middle">Buona Vista · West Coast</text><text class="area-sub lang-ko" x="364.4" y="418.2" text-anchor="middle">부오나비스타 · 웨스트코스트</text>
    <text class="area-vibe lang-en" x="364.4" y="434.2" text-anchor="middle">Practical</text><text class="area-vibe lang-ko" x="364.4" y="434.2" text-anchor="middle">실속</text>
  </g>
  <g class="area" data-target="east-coast" tabindex="0" role="link"
     aria-label="East Coast — jump to section">
    <ellipse cx="649.0" cy="396.1" rx="81.0" ry="35.2" transform="rotate(12 649.0 396.1)"/>
    <text class="area-name lang-en" x="649.0" y="392.1" text-anchor="middle">East Coast</text><text class="area-name lang-ko" x="649.0" y="392.1" text-anchor="middle">이스트 코스트</text>
    <text class="area-sub lang-en" x="649.0" y="408.1" text-anchor="middle">Katong</text><text class="area-sub lang-ko" x="649.0" y="408.1" text-anchor="middle">카통</text>
    <text class="area-vibe lang-en" x="649.0" y="424.1" text-anchor="middle">Breezy</text><text class="area-vibe lang-ko" x="649.0" y="424.1" text-anchor="middle">여유</text>
  </g>
  <g class="area" data-target="holland-village" tabindex="0" role="link"
     aria-label="Holland V — jump to section">
    <ellipse cx="441.2" cy="375.5" rx="40.5" ry="28.2" transform="rotate(-20 441.2 375.5)"/>
    <text class="area-name sm lang-en" x="445.2" y="373.5" text-anchor="middle">Holland V</text><text class="area-name sm lang-ko" x="445.2" y="373.5" text-anchor="middle">홀랜드 빌리지</text>

    <text class="area-vibe lang-en" x="445.2" y="388.5" text-anchor="middle">Sociable</text><text class="area-vibe lang-ko" x="445.2" y="388.5" text-anchor="middle">사교</text>
  </g>
  <g class="area" data-target="newton" tabindex="0" role="link"
     aria-label="Newton · Novena — jump to section">
    <ellipse cx="521.6" cy="368.6" rx="42.3" ry="33.5" transform="rotate(70 521.6 368.6)"/>
    <text class="area-name sm lang-en" x="521.6" y="360.6" text-anchor="middle">Newton · Novena</text><text class="area-name sm lang-ko" x="521.6" y="360.6" text-anchor="middle">뉴튼 · 노베나</text>

    <text class="area-vibe lang-en" x="521.6" y="376.6" text-anchor="middle">Central</text><text class="area-vibe lang-ko" x="521.6" y="376.6" text-anchor="middle">도심</text>
  </g>
  <g class="scale" transform="translate(42,593)">
    <line x1="0" y1="0" x2="176.1" y2="0"/>
    <line x1="0" y1="-5" x2="0" y2="5"/><line x1="176.1" y1="-5" x2="176.1" y2="5"/>
    <text class="tiny lang-en" x="88.05" y="-8" text-anchor="middle">10 km</text><text class="tiny lang-ko" x="88.05" y="-8" text-anchor="middle">10 km</text>
  </g>
  <g class="north" transform="translate(954,96)">
    <path d="M0,-14 L6,8 0,3 -6,8 Z"/><text x="0" y="24" text-anchor="middle">N</text>
  </g>
</svg>`
    },
    areas: [
      {
        id: "bukit-timah",
        name: { en: "Bukit Timah corridor (D21/D10/D23)", ko: "Bukit Timah 코리도 (D21/D10/D23) — 부킷 티마" },
        short: { en: "Bukit Timah", ko: "부킷 티마" },
        vibe: { en: "Leafy", ko: "숲세권" },
        gmapsQuery: "Bukit Timah, Singapore",
        pitch: {
          en: "One corridor, three personalities: the Downtown Line spine, the elite school belt, and the Korean family cluster. Condo and landed territory — almost no HDB. Pick your sub-area below.",
          ko: "하나의 축에 세 가지 얼굴이 있어요: 다운타운선 라인, 명문 학군 벨트, 그리고 한인 가족 클러스터. 콘도와 단독주택 지역이라 HDB는 거의 없어요. 아래에서 동네를 골라 보세요."
        },
        subAreas: [
          {
            name: { en: "1a — Beauty World / Upper Bukit Timah (D21)", ko: "1a — Beauty World · Upper Bukit Timah (D21)" },
            body: {
              en: "The Korean node: SKIS is walkable (71 Bukit Tinggi Rd), Bukit Timah Plaza houses Sol Mart (B1-66) plus several Korean restaurants and a tuition-centre cluster, and Koryo Mart sits at 17 Lorong Kilat. Malls on three corners of the MRT (Beauty World Centre with its Level-4 hawker centre, Beauty World Plaza, Bukit Timah Plaza with FairPrice Finest); an interim hawker centre sits beside the station (rebuilt hub ~2029), and The Reserve Residences integrated mall + bus interchange opens on top of the MRT (~2028). 3BR: new stock S$5,000–6,700 (Forett ~S$5,800–6,700 at an 11-min walk; Linq's compact 3BRs ~S$5,000–5,500 right above the MRT); the older 999-yr Southaven II runs ~S$4,500–5,000 by the Nature Reserve. Cluster-house pocket in Toh Tuck/Eng Kong.",
              ko: "한인 거점이에요: SKIS(71 Bukit Tinggi Rd)가 도보권이고, Bukit Timah Plaza에는 Sol Mart(B1-66)와 한식당 여러 곳, 학원 클러스터가 들어와 있어요. Koryo Mart는 17 Lorong Kilat에 있어요. MRT 세 모퉁이마다 몰이 하나씩 있고(4층에 호커센터가 있는 Beauty World Centre, Beauty World Plaza, FairPrice Finest가 있는 Bukit Timah Plaza), 역 옆에 임시 호커센터(재건축 허브는 2029년경), 역 바로 위에는 The Reserve Residences 복합몰+버스 인터체인지가 2028년경 열려요. 3BR: 신축 S$5,000–6,700(도보 11분 Forett 약 S$5,800–6,700, 역 위 Linq 콤팩트 3BR 약 S$5,000–5,500), 자연보호구역 쪽 999년 구축 Southaven II는 약 S$4,500–5,000이에요. Toh Tuck/Eng Kong에 클러스터하우스 포켓이 있어요."
            },
            take: {
              en: "Likely the highest Korean concentration, but the shops are older-strata-mall grade rather than upscale, and it can feel remote — travel in and out drags at peak (the DTL ride itself is ~23 min to Downtown; the \"remote\" feeling is mostly a car thing).",
              ko: "한인 밀도는 아마 싱가포르에서 가장 높아요. 다만 상권은 고급이라기보단 오래된 상가 수준이고, 러시아워엔 드나들기가 답답할 수 있어요 — DTL 승차 자체는 Downtown까지 약 23분이라, '외지다'는 느낌은 주로 차로 다닐 때 이야기예요."
            }
          },
          {
            name: { en: "1b — King Albert Park / Sixth Avenue / Tan Kah Kee (D10/D21 border)", ko: "1b — King Albert Park · Sixth Avenue · Tan Kah Kee (D10/D21 경계)" },
            body: {
              en: "The prestige end. Sixth Avenue is a landed/GCB enclave where condos are the exception — a small newer cluster at Sixth Ave MRT (RoyalGreen ~S$7,000–8,500 est., Fourth Avenue Residences) and older freeholds near KAP (Maplewoods 3BR ~S$6,200; The Cascadia S$6,000–7,500; Signature Park's big, cheap older units ~S$5,800–6,500 for 4BR-scale space). Cold Storage at Guthrie House; KAP Mall is cinema-and-cafes with no supermarket (verify). On the doorstep of Nanyang, Hwa Chong, MGS and NJC; SKIS is a ~5-minute drive.",
              ko: "명문가 구간이에요. Sixth Avenue는 단독주택·GCB 동네라 콘도가 오히려 예외예요 — Sixth Ave역 옆의 작은 신축 클러스터(RoyalGreen 약 S$7,000–8,500 추정, Fourth Avenue Residences)와 KAP 근처 구축 프리홀드(Maplewoods 3BR 약 S$6,200, The Cascadia S$6,000–7,500, 4BR급 공간이 크고 저렴한 구축 Signature Park 약 S$5,800–6,500)가 있어요. Guthrie House에 Cold Storage가 있고, KAP Mall은 영화관·카페 위주라 슈퍼마켓은 없어요(확인 필요). Nanyang, Hwa Chong, MGS, NJC가 문앞이고 SKIS는 차로 약 5분이에요."
            },
            verify: true,
            take: {
              en: "Sixth Avenue itself has very few condos — it's really a landed neighbourhood with an MRT station.",
              ko: "Sixth Avenue 자체엔 콘도가 정말 몇 없어요 — 사실상 MRT역이 딸린 단독주택 동네예요."
            }
          },
          {
            name: { en: "1c — Hillview (D23)", ko: "1c — Hillview (D23)" },
            body: {
              en: "The corridor's value play: 3BR from S$3,900–5,300 (Glendale Park, 2-min walk to the MRT) to S$4,600–4,850 (Midwood, next to HillV2) — S$1,500–2,000/month below Beauty World's new stock. The stock is a condo strip along Hillview Avenue plus landed estates and a thin cluster-house pocket on the Chestnut side (Chestnut Residences, Chestnut Ville). HillV2 anchors the lifestyle: CS Fresh (Cold Storage's premium format) plus a restaurant strip (iO Italian Osteria, Wine Connection, Joyden Canton); Rail Mall Cold Storage nearby; the Rail Corridor and Bukit Timah Nature Reserve on the doorstep; GESS one stop up at Dairy Farm Lane. Two DTL stations (Hillview DT3; the new Hume DT4, 2025). Caveats: parts of the estate are a long uphill walk from the MRT (Hazel Park is really Cashew-side), Hillhaven isn't rentable until 2027, and it's ~27 min by DTL to Downtown. SKIS is a 5–10 min drive.",
              ko: "이 축의 가성비 카드예요: 3BR이 S$3,900–5,300(MRT 도보 2분 Glendale Park)에서 S$4,600–4,850(HillV2 옆 Midwood)까지 — Beauty World 신축보다 월 S$1,500–2,000 저렴해요. Hillview Avenue를 따라 콘도가 줄지어 있고, 단독주택 단지와 Chestnut 쪽의 얇은 클러스터하우스 포켓(Chestnut Residences, Chestnut Ville)도 있어요. 생활은 HillV2가 책임져요: CS Fresh(Cold Storage 프리미엄 매장) + 레스토랑 스트립(iO Italian Osteria, Wine Connection, Joyden Canton). 근처에 Rail Mall Cold Storage, 문앞에 Rail Corridor와 Bukit Timah 자연보호구역, 한 정거장 위 Dairy Farm Lane에 GESS가 있어요. DTL 역이 두 개예요(Hillview DT3, 2025년 신설 Hume DT4). 주의: 단지에 따라 MRT까지 오르막을 한참 걸어야 하고(Hazel Park는 사실상 Cashew 생활권), Hillhaven은 2027년까지 임대가 안 되고, Downtown까지 DTL로 약 27분이에요. SKIS는 차로 5–10분."
            },
            take: {
              en: "Feels like a walkable upscale suburb — the CS Fresh + restaurant strip does a lot of work — but check the specific condo's MRT walk before committing.",
              ko: "걸어 다닐 수 있는 고급 교외 같은 느낌이에요 — CS Fresh와 레스토랑 스트립이 큰 몫을 해요. 다만 계약 전에 그 콘도의 MRT 도보 거리를 꼭 확인하세요."
            }
          }
        ],
        kids: {
          en: "Across the corridor: EtonHouse Upper Bukit Timah + Vanda; White Lodge Upper Bukit Timah; Blue House at The Grandstand. Long term, this is the elite local school belt (Nanyang, Hwa Chong, MGS, NJC) — mostly relevant if PR happens.",
          ko: "코리도 전체 기준: EtonHouse 어퍼 부킷 티마·Vanda, White Lodge 어퍼 부킷 티마, The Grandstand의 Blue House가 있어요. 장기적으로는 명문 로컬 학군 벨트(Nanyang, Hwa Chong, MGS, NJC)인데, 이건 영주권을 받으면 의미가 생기는 이야기예요."
        },
        community: {
          en: "Expats and well-heeled Singaporeans side by side; German/Swiss/Dutch school families — and the main Korean family cluster, centred on Beauty World–Bukit Timah Plaza. High family density.",
          ko: "외국인과 여유 있는 싱가포르 가정이 섞여 살고, 독일·스위스·네덜란드 학교 가족들도 있어요 — 무엇보다 Beauty World–Bukit Timah Plaza를 중심으로 한 싱가포르 최대 한인 가족 클러스터예요. 아이 있는 가정 밀도가 높아요."
        },
        property: {
          en: "Landed reality (D21): terrace S$7,500–22,000, semi-detached S$8,000–9,300, cluster house S$9,000–18,500; the D10 side runs roughly double (terraces from ~S$14,500).",
          ko: "단독주택 시세(D21): 테라스 S$7,500–22,000, 세미디 S$8,000–9,300, 클러스터하우스 S$9,000–18,500. D10 쪽은 대략 두 배예요(테라스 약 S$14,500부터)."
        },
        srcUrl: "https://property.singaporeexpats.com/district/landed-property/rent/21"
      },
      {
        id: "clementi",
        name: { en: "Buona Vista – Clementi – West Coast", ko: "Buona Vista · Clementi · West Coast (부오나 비스타 · 클레멘티)" },
        short: { en: "Clementi", ko: "클레멘티" },
        vibe: { en: "Practical", ko: "실속" },
        gmapsQuery: "Clementi, Singapore",
        pitch: {
          en: "The best value-for-commute if work is at one-north or NUS; to Marina One it's the East–West Line to Raffles Place plus a 10-minute underground walk (~40–50 min door-to-door). Authentically local — hawker food and heartland malls — trading expat polish for space and savings.",
          ko: "직장이 one-north나 NUS라면 통근 대비 가성비 최고예요. Marina One까지는 동서선으로 Raffles Place까지 간 뒤 지하 통로로 10분 걸어요(문앞부터 약 40–50분). 호커 음식과 동네 몰이 있는 진짜 로컬 동네 — 세련됨 대신 넓은 공간과 절약을 얻는 선택이에요."
        },
        walk: {
          en: "Buona Vista (EWL+CCL interchange), Clementi and Dover on the East–West Line; one-north/Kent Ridge on the Circle Line. Clementi Mall + the Clementi 448 hawker centre; The Star Vista; West Coast Park has some of the island's best playgrounds.",
          ko: "동서선의 Buona Vista(서클선 환승), Clementi, Dover역과 서클선의 one-north/Kent Ridge역이 있어요. Clementi Mall과 Clementi 448 호커센터, The Star Vista가 가깝고, West Coast Park에는 싱가포르에서 손꼽히는 놀이터가 있어요."
        },
        kids: {
          en: "Dense anchor-operator coverage (My First Skool, PCF) — plenty of affordable places; weaker on boutique international preschools. SKIS reportedly shuttles from Clementi MRT (verify).",
          ko: "앵커 오퍼레이터(My First Skool, PCF)가 촘촘해서 합리적인 선택지가 많아요. 대신 부티크·국제 유치원은 적은 편이에요. SKIS는 Clementi MRT에서 셔틀을 운행한다고 알려져 있어요(확인 필요)."
        },
        kidsVerify: true,
        community: {
          en: "The most local-majority of the five. A quiet Japanese family undercurrent (the Japanese School has Clementi and West Coast campuses) and an academic/tech expat crowd around NUS and one-north. Korean presence: modest.",
          ko: "다섯 곳 중 로컬 비중이 가장 높아요. 일본인 학교(클레멘티·웨스트코스트 캠퍼스) 덕에 일본 가족이 조용히 많고, NUS·one-north 주변에는 학계·테크 외국인들이 살아요. 한인은 많지 않은 편이에요."
        },
        property: {
          en: "3BR S$5,500–6,500: Whistler Grand S$6,000–6,500 (958 sqft), Hundred Trees S$6,200–6,400 (1,163–1,302 sqft), the older Westcove S$5,500 (1,259 sqft), Clement Canopy ~S$5,800–6,400. 4BR S$8,000–11,000: Clavon S$8,000 (1,281 sqft), Parc Clematis ~S$8,500–9,500. Stock mix: an HDB-heavy heartland ringed by mega new 99-yr condos and 1990s West Coast condos; landed only in pockets (the Pasir Panjang hillside). Best HDB play of the group: Clementi 4-room median S$3,900, Queenstown S$4,000 — saving S$2,000+/month.",
          ko: "3BR S$5,500–6,500: Whistler Grand S$6,000–6,500(958sqft), Hundred Trees S$6,200–6,400(1,163–1,302sqft), 구축 Westcove S$5,500(1,259sqft), Clement Canopy 약 S$5,800–6,400. 4BR S$8,000–11,000: Clavon S$8,000(1,281sqft), Parc Clematis 약 S$8,500–9,500. 매물 구성은 HDB 중심의 서민 지역을 신축 대단지 99년 콘도와 1990년대 West Coast 콘도가 둘러싼 형태이고, 단독주택은 Pasir Panjang 언덕 쪽 일부뿐이에요. HDB 활용도는 후보 중 최고: Clementi 방4개 중위 S$3,900, Queenstown S$4,000 — 월 S$2,000 이상 아껴요."
        },
        srcUrl: "https://property.singaporeexpats.com/district/apartment-condo/rent/05"
      },
      {
        id: "east-coast",
        name: { en: "East Coast / Katong", ko: "East Coast · Katong (이스트코스트 · 카통)" },
        short: { en: "East Coast", ko: "이스트코스트" },
        vibe: { en: "Breezy", ko: "여유" },
        gmapsQuery: "Katong, Singapore",
        pitch: {
          en: "Beach-park weekends, stroller-flat terrain, Singapore's best casual food — and since the TEL opened, the best CBD commute of any area: Marine Parade → Shenton Way direct, exiting into the Marina One basement (~20–30 min door-to-door). The trade-off is the Korean-school run: SKIS is cross-island (35–45 min at peak), so this area fits best if young kids attend preschool locally.",
          ko: "주말마다 바닷가 공원, 유모차 끌기 좋은 평지, 싱가포르 최고의 캐주얼 맛집 — 그리고 TEL 개통 이후로는 모든 후보 중 CBD 통근이 가장 좋아요: Marine Parade에서 Shenton Way까지 직행해서 Marina One 지하로 바로 나와요(문앞부터 약 20–30분). 대신 한국학교 등하교가 트레이드오프예요: SKIS까지 섬을 가로질러야 해서(러시아워 35–45분), 아이들이 동네 유치원에 다닐 때 가장 잘 맞는 동네예요."
        },
        subAreas: [
          {
            name: { en: "Katong / Joo Chiat", ko: "Katong · Joo Chiat" },
            body: {
              en: "Heritage shophouses, walk-ups and boutique freeholds — the most character.",
              ko: "헤리티지 숍하우스, 워크업, 부티크 프리홀드 — 감성은 여기가 최고예요."
            }
          },
          {
            name: { en: "Amber / Meyer", ko: "Amber · Meyer" },
            body: {
              en: "Condo towers near Katong Park TEL — the newest stock (Amber Park ~S$7,800–8,800 for a 3BR).",
              ko: "Katong Park TEL역 근처의 콘도 타워들 — 가장 새 매물이에요(Amber Park 3BR 약 S$7,800–8,800)."
            }
          },
          {
            name: { en: "Marine Parade / Siglap", ko: "Marine Parade · Siglap" },
            body: {
              en: "Older big-unit estates and HDB by the sea — the most space per dollar.",
              ko: "바닷가의 구축 대형 평형과 HDB — 돈 대비 공간은 여기가 최고예요."
            }
          }
        ],
        walk: {
          en: "Thomson–East Coast Line: Katong Park, Tanjong Katong, Marine Parade, Marine Terrace (opened 2024). i12 Katong, Parkway Parade and Katong V malls; the Katong/Joo Chiat shophouse food scene; East Coast Park as your backyard.",
          ko: "톰슨-이스트코스트선: Katong Park, Tanjong Katong, Marine Parade, Marine Terrace(2024년 개통). 몰은 i12 Katong, Parkway Parade, Katong V가 있고, Katong/Joo Chiat 숍하우스 거리는 맛집 천국이에요. East Coast Park가 뒷마당이 돼요."
        },
        kids: {
          en: "Pat's Schoolhouse Katong; EtonHouse Mountbatten 223 + Nature Pre-School; White Lodge East Coast; Brighton Montessori.",
          ko: "Pat's Schoolhouse Katong, EtonHouse Mountbatten 223 + Nature Pre-School, White Lodge East Coast, Brighton Montessori가 있어요."
        },
        community: {
          en: "A long-established expat pocket — skewing Australian/British/Western plus Indian expat families (directional, not exact) — blended into a strongly local, Peranakan-heritage area. Laid-back family lifestyle. Korean presence: minimal, and SKIS is a cross-island trek.",
          ko: "호주·영국계 서양 가족과 인도계 외국인 가족이 많은(대략적인 경향이에요) 오래된 외국인 포켓이, 페라나칸 전통이 살아있는 로컬 동네와 섞여 있어요. 느긋한 가족 라이프스타일이 특징이에요. 한인은 거의 없고, SKIS까지는 섬을 가로질러야 해요."
        },
        property: {
          en: "3BR S$4,500–8,500: The Esta ~S$6,000–6,800 (1,346 sqft, helper rooms common), Seaside Residences ~S$6,400–7,200, Villa Marina S$5,800 (1,281 sqft). 4BR S$7,500–12,000: One Amber ~S$8,500 (1,700 sqft); Mandarin Gardens' huge older units S$7,000–7,700 (1,787–2,034 sqft — the cheapest big space around). Landed: terraces from S$6,500–15,500 — roughly half Bukit Timah's D10 prices. HDB: Marine Parade 4-room median S$3,500 (live asks ~S$4,100), right by the TEL and Parkway Parade.",
          ko: "3BR S$4,500–8,500: The Esta 약 S$6,000–6,800(1,346sqft, 헬퍼룸 흔함), Seaside Residences 약 S$6,400–7,200, Villa Marina S$5,800(1,281sqft). 4BR S$7,500–12,000: One Amber 약 S$8,500(1,700sqft), Mandarin Gardens의 초대형 구축 S$7,000–7,700(1,787–2,034sqft — 넓은 집 기준 최저가). 단독주택: 테라스 S$6,500–15,500부터 — 부킷 티마 D10의 대략 절반 가격이에요. HDB: Marine Parade 방4개 중위 S$3,500(실제 호가는 약 S$4,100) — TEL역과 Parkway Parade 바로 옆이에요."
        },
        srcUrl: "https://www.edgeprop.sg/condo-apartment/the-esta"
      },
      {
        id: "holland-village",
        name: { en: "Holland Village / Farrer Road", ko: "Holland Village · Farrer Road (홀랜드 빌리지)" },
        short: { en: "Holland V", ko: "홀랜드 빌리지" },
        vibe: { en: "Sociable", ko: "사교" },
        gmapsQuery: "Holland Village, Singapore",
        pitch: {
          en: "The default answer when expats ask \"where does everyone live\" — unmatched brunch-and-playdate density with the Botanic Gardens on the doorstep. You pay a S$1,500–3,000/month premium for the network effect. Commute upgrade, July 2026: the Circle Line now runs one-seat Holland Village → Marina Bay (~35–45 min door-to-door).",
          ko: "외국인들이 '다들 어디 살아요?'라고 물으면 나오는 기본 답이에요 — 브런치와 플레이데이트 밀도가 압도적이고 보타닉 가든이 문앞이에요. 이 네트워크 효과에 월 S$1,500–3,000의 프리미엄을 내는 셈이에요. 그리고 2026년 7월부터 통근이 업그레이드됐어요: 서클선이 Holland Village → Marina Bay를 환승 없이 이어줘요(문앞부터 약 35–45분)."
        },
        walk: {
          en: "Holland Village and Farrer Road on the Circle Line; the Buona Vista interchange is one stop away. The Holland V enclave (Cold Storage, wet market, restaurants), One Holland Village mall, Empress Market.",
          ko: "서클선 Holland Village역과 Farrer Road역이 있고, 환승역 Buona Vista가 한 정거장이에요. Holland V 중심가(Cold Storage, 재래시장, 레스토랑), One Holland Village 몰, Empress Market이 걸어서 닿아요."
        },
        kids: {
          en: "Odyssey (Kay Siang Road), EtonHouse Vanda nearby, Blue House at The Grandstand — and SKIS is a 12–18 minute drive.",
          ko: "Odyssey(Kay Siang Road), EtonHouse Vanda가 가깝고, The Grandstand의 Blue House도 있어요. SKIS는 차로 12–18분이에요."
        },
        community: {
          en: "The traditional Western-expat heartland: high expat and family density, and hiring a helper is the near-universal norm. Korean families are present at the fringe of the Bukit Timah cluster.",
          ko: "전통적인 서양 외국인 중심지예요. 외국인·가족 밀도가 높고, 입주 헬퍼 고용이 거의 기본값인 동네예요. 부킷 티마 한인 클러스터의 가장자리라 한인 가족도 어느 정도 있어요."
        },
        property: {
          en: "3BR S$5,500–10,000: The Serenade @ Holland S$5,500 (1,152 sqft), d'Leedon ~S$6,500–8,100 (compact Zaha layouts, mostly no utility room), the older freehold Sommerville Park S$7,000–8,500 (1,600–2,000 sqft, utility rooms standard), One Holland Village Residences ~S$10,000. 4BR S$10,000–15,000: Leedon Green ~S$10,000 (1,490 sqft), d'Leedon ~S$12,900 (2,300 sqft); the Orchard-side luxury tail runs S$15,000–39,000. Stock mix: a prestige condo belt plus GCB/landed enclaves and the low-rise Chip Bee Gardens terraces; no walk-ups to speak of. Prime central = the least negotiating room. The HDB hack: Holland Close/Ghim Moh blocks (Queenstown 4-room median S$4,000) give the Holland Village lifestyle at half price, quota permitting. If you'd trade space for location: One Holland Village 2BR runs S$6,200–7,000.",
          ko: "3BR S$5,500–10,000: The Serenade @ Holland S$5,500(1,152sqft), d'Leedon 약 S$6,500–8,100(자하 하디드 설계의 콤팩트 구조, 유틸리티룸 없는 유닛이 대부분), 구축 프리홀드 Sommerville Park S$7,000–8,500(1,600–2,000sqft, 유틸리티룸 기본), One Holland Village Residences 약 S$10,000. 4BR S$10,000–15,000: Leedon Green 약 S$10,000(1,490sqft), d'Leedon 약 S$12,900(2,300sqft); 오차드 쪽 럭셔리 구간은 S$15,000–39,000까지 가요. 매물 구성은 명품 콘도 벨트 + GCB·단독주택 단지 + 저층 Chip Bee Gardens 테라스이고, 워크업은 거의 없어요. 핵심 중심부라 협상 여지가 가장 적어요. HDB 꿀팁: Holland Close/Ghim Moh 단지(Queenstown 방4개 중위 S$4,000)는 '홀랜드 빌리지 라이프를 반값에' — 외국인 쿼터가 허용된다면요. 공간을 줄이고 위치를 택한다면 One Holland Village 2BR이 S$6,200–7,000이에요."
        },
        srcUrl: "https://www.edgeprop.sg/condo-apartment/dleedon"
      },
      {
        id: "newton",
        name: { en: "Newton / Novena", ko: "Newton · Novena (뉴턴 · 노베나)" },
        short: { en: "Newton", ko: "뉴턴" },
        vibe: { en: "Central", ko: "도심" },
        gmapsQuery: "Novena, Singapore",
        pitch: {
          en: "Maximum convenience: NSL direct to Marina Bay (~16-min ride, 25–35 min door-to-door), Orchard next door, Singapore's biggest medical hub, and an entire mall of toddler enrichment at United Square. City-condo living rather than village feel — ideal if one parent commutes hard.",
          ko: "편의성의 끝판왕이에요. 남북선으로 Marina Bay까지 직행(승차 약 16분, 문앞부터 25–35분), 옆동네가 오차드, 싱가포르 최대 의료 허브, 그리고 몰 전체가 유아 학원가인 United Square까지. 동네 감성보다는 도심 콘도 라이프에 가까워서, 한 명이 통근을 많이 해야 한다면 최적이에요."
        },
        walk: {
          en: "Newton (North–South + Downtown Line interchange) and Novena (North–South Line). Newton Food Centre; United Square, Velocity and Square 2 malls; Cold Storage and FairPrice Finest; Sol Mart Korean grocery at Square 2.",
          ko: "Newton역(남북선+다운타운선 환승)과 Novena역(남북선)이 있어요. Newton Food Centre, 몰은 United Square·Velocity·Square 2, 마트는 Cold Storage와 FairPrice Finest. Square 2에는 한국 마트 Sol Mart가 있어요."
        },
        kids: {
          en: "EtonHouse Newton (39 Newton Road); the United Square enrichment cluster (Julia Gabriel and others — verify current tenants); paediatric-medical convenience with Mount Elizabeth Novena and Thomson Medical nearby. SKIS reportedly shuttles from Newton MRT (verify) — the drive is 20–25 min at peak.",
          ko: "EtonHouse Newton(39 Newton Road), United Square 학원 클러스터(Julia Gabriel 등 — 현재 입점은 확인 필요), 그리고 Mount Elizabeth Novena·Thomson Medical이 가까워 소아과 접근성이 뛰어나요. SKIS는 Newton MRT에서 셔틀을 운행한다고 알려져 있고(확인 필요), 차로는 러시아워 기준 20–25분이에요."
        },
        kidsVerify: true,
        community: {
          en: "Younger expats and professional couples; mixed-nationality with no single cluster; strong local affluent families (the ACS/SJI/CHIJ school belt). Lower expat-family density than Bukit Timah or Holland V.",
          ko: "젊은 외국인 직장인과 전문직 커플이 많고, 특정 국적 클러스터 없이 다국적이에요. 로컬 부유층 가족도 많아요(ACS/SJI/CHIJ 학군 벨트). 외국인 가족 밀도는 부킷 티마나 홀랜드 빌리지보다 낮아요."
        },
        property: {
          en: "3BR S$6,400–7,900: Amaryllis Ville ~S$7,200 (1,300 sqft), Park Infinia ~S$7,400, Chancery Court S$6,400–7,600 (huge 2,034–2,271 sqft older units); newer/larger stock runs S$9,000–12,000 (Soleil @ Sinaran S$11,800). 4BR S$6,800–12,000: Hillcrest Arcadia S$6,900–8,500 (1,970 sqft — bargain space), Chancery Court S$7,600 (2,271 sqft), Sky@Eleven ~S$11,000–12,000 (2,700 sqft). Stock mix: essentially all high-rise condo — but the abundant older large stock means families can get a helper's room here without jumping to a 4BR. HDB: basically none in-district (Whampoa/Toa Payoh S$3,600 nearby).",
          ko: "3BR S$6,400–7,900: Amaryllis Ville 약 S$7,200(1,300sqft), Park Infinia 약 S$7,400, Chancery Court S$6,400–7,600(2,034–2,271sqft의 초대형 구축). 신축·대형은 S$9,000–12,000(Soleil @ Sinaran S$11,800). 4BR S$6,800–12,000: Hillcrest Arcadia S$6,900–8,500(1,970sqft — 공간 가성비 갑), Chancery Court S$7,600(2,271sqft), Sky@Eleven 약 S$11,000–12,000(2,700sqft). 매물 구성은 사실상 전부 고층 콘도인데, 구축 대형 평형이 많아서 4BR로 올라가지 않아도 헬퍼룸을 구할 수 있는 동네예요. HDB는 구역 안에는 거의 없어요(인근 Whampoa/Toa Payoh S$3,600)."
        },
        srcUrl: "https://www.edgeprop.sg/condo-apartment/amaryllis-ville"
      }
    ],
    /* §3.6 — helper's-room rule of thumb */
    helperRoom: {
      title: { en: "The helper's-room rule of thumb", ko: "헬퍼룸 공식" },
      body: {
        en: "New-launch 3BRs (post-~2012) are compact (900–1,100 sqft) and usually have no helper's room. A live-in helper means hunting for \"3BR + utility/yard\" in pre-2012 condos (the Maplewoods, Signature Park, Sommerville Park, The Esta, One Amber, Park Infinia, Chancery Court era) — or paying for a 4BR in new stock. Search terms that matter on PropertyGuru/99.co: \"utility room\", \"yard\", \"+study\".",
        ko: "2012년 이후 신축 3BR은 콤팩트(900–1,100sqft)하고 헬퍼룸이 없는 게 보통이에요. 입주 헬퍼와 함께라면 2012년 이전 콘도(Maplewoods, Signature Park, Sommerville Park, The Esta, One Amber, Park Infinia, Chancery Court 세대)에서 '3BR + 유틸리티/야드'를 찾거나, 신축이라면 4BR로 올라가야 해요. PropertyGuru/99.co에서 통하는 검색어: \"utility room\", \"yard\", \"+study\"."
      },
      srcUrl: "https://stackedhomes.com/editorial/shrinking-3-bedroom-new-condo-sizes-how-much-smaller-can-it-go/"
    },

    /* §3.7 — decision block (guidance, not a verdict) */
    decision: {
      title: { en: "Which sub-area? A starting framework", ko: "어느 동네로? 판단의 출발점" },
      intro: {
        en: "Guidance by priority, not a verdict — most families land on two finalists and let specific listings decide.",
        ko: "정답이 아니라 우선순위별 가이드예요 — 대부분의 가족이 최종 후보 두 곳을 두고, 실제 매물을 보며 결정하게 돼요."
      },
      items: [
        {
          priority: { en: "Korean community + school", ko: "한인 커뮤니티 + 학교" },
          pick: {
            en: "Beauty World / Upper Bukit Timah — SKIS walkable, Sol Mart at Bukit Timah Plaza; accept older-mall retail and a ~40-min office commute. (The Reserve Residences mall + interchange upgrades this story from 2028.)",
            ko: "Beauty World · Upper Bukit Timah — SKIS 도보권에 Bukit Timah Plaza의 Sol Mart까지. 대신 오래된 상가 수준의 쇼핑과 약 40분 통근을 감수해요. (2028년부터는 The Reserve Residences 몰+인터체인지가 이 스토리를 업그레이드해요.)"
          }
        },
        {
          priority: { en: "Office commute + lifestyle", ko: "통근 + 라이프스타일" },
          pick: {
            en: "East Coast (Marine Parade/Amber) — the TEL runs straight into the office basement, beach weekends; accept the cross-island school run, so plan on local preschool.",
            ko: "East Coast(Marine Parade/Amber) — TEL이 회사 지하까지 바로 이어지고 주말엔 바다가 있어요. 대신 등하교가 크로스아일랜드라, 동네 유치원을 전제로 하세요."
          }
        },
        {
          priority: { en: "Balance on one line", ko: "한 줄로 밸런스" },
          pick: {
            en: "KAP / Sixth Avenue — 5 min to SKIS, ~30–40 min DTL to the office, the elite-school belt for the local-primary long shot; pay D10 prices for thin condo supply.",
            ko: "KAP · Sixth Avenue — SKIS까지 5분, DTL로 회사까지 30–40분, 로컬 초등 장기 베팅용 명문 학군까지. 대신 콘도 매물이 적은데 D10 가격을 내야 해요."
          }
        },
        {
          priority: { en: "Space per dollar in the school orbit", ko: "학교 생활권 안에서 공간 가성비" },
          pick: {
            en: "Hillview — S$1,500–2,000/month cheaper with the HillV2/CS Fresh lifestyle; accept the longer DTL ride and check each condo's MRT walk.",
            ko: "Hillview — 월 S$1,500–2,000 아끼면서 HillV2·CS Fresh 라이프스타일을 누려요. 대신 DTL이 좀 길고, 콘도별 MRT 도보 거리를 확인해야 해요."
          }
        },
        {
          priority: { en: "Expat network for a non-working partner", ko: "함께 오는 배우자의 네트워크" },
          pick: {
            en: "Holland Village — the deepest expat-family bench, now one-seat to Marina Bay; the highest rents of the realistic options.",
            ko: "Holland Village — 외국인 가족 네트워크가 가장 두텁고, 이제 Marina Bay까지 한 번에 가요. 대신 현실적인 옵션 중 임대료가 가장 높아요."
          }
        },
        {
          priority: { en: "Urban convenience", ko: "도심 편의성" },
          pick: {
            en: "Newton / Novena — the shortest MRT ride, the enrichment mall, and big older units with helper's rooms; the least neighbourhood feel, and the car route (CTE) carries Singapore's priciest ERP.",
            ko: "Newton · Novena — MRT가 가장 짧고, 학원 몰과 헬퍼룸 있는 구축 대형 평형까지. 대신 동네 감성이 가장 옅고, 차로 다니면 싱가포르에서 가장 비싼 CTE ERP를 내요."
          }
        }
      ]
    },

    renting: {
      title: { en: "How renting works here", ko: "싱가포르 임대, 이렇게 돌아가요" },
      items: [
        {
          en: "<strong>Lease length:</strong> 12 or 24 months standard (24 is common for families); almost no landlord takes under 12. Legal minimum stay: 3 months private, 6 months HDB.",
          ko: "<strong>계약 기간:</strong> 12개월 또는 24개월이 표준이에요(가족은 24개월이 흔해요). 12개월 미만을 받는 집주인은 거의 없어요. 법정 최소 거주는 사유 주택 3개월, HDB 6개월이에요."
        },
        {
          en: "<strong>Deposit:</strong> 1 month per year of lease (so 2 months on a 2-year lease); returned 7–30 days after the lease ends, less any damage beyond fair wear and tear.",
          ko: "<strong>보증금:</strong> 계약 1년당 1개월치예요(2년 계약이면 2개월치). 계약 종료 후 7–30일 안에 돌려받는데, 통상적인 사용 흔적을 넘는 손상은 차감돼요."
        },
        {
          en: "<strong>Agent commission:</strong> if rent is above ~S$3,500/month the landlord pays; below that, the tenant pays about half a month per lease year. Pay the agency by cheque or transfer — never cash to the agent.",
          ko: "<strong>중개 수수료:</strong> 월세가 약 S$3,500 이상이면 집주인이 내요. 그 아래면 세입자가 계약 1년당 반 달치 정도를 부담해요. 수수료는 반드시 중개법인 앞으로 수표나 이체로 — 중개인 개인에게 현금은 절대 금물이에요."
        },
        {
          en: "<strong>Diplomatic clause — essential for EP holders:</strong> lets you break the lease after 12 months with 2 months' notice if the job ends or relocates. Pair it with a pro-rated commission refund clause.",
          ko: "<strong>외교 조항(diplomatic clause) — EP 소지자 필수:</strong> 실직·전근 시 12개월 거주 후 2개월 통지로 계약을 해지할 수 있는 조항이에요. 중개 수수료 일할 환급 조항과 세트로 넣으세요."
        },
        {
          en: "<strong>Minor repairs:</strong> the tenant covers roughly the first S$150–200 per item (negotiate this cap). Aircon: the tenant takes a quarterly servicing contract — keep the receipts.",
          ko: "<strong>소액 수리:</strong> 건당 약 S$150–200까지는 세입자 부담이에요(이 상한은 협상 가능). 에어컨은 세입자가 분기별 정기점검 계약을 들고 영수증을 보관해요."
        },
        {
          en: "<strong>Speed & process:</strong> view → Letter of Intent + good-faith deposit (1 month, converts to the security deposit) → sign the Tenancy Agreement. Good units go in days. Documents: passport + EP or IPA letter. Stamp duty (tenant pays): 0.4% of total rent over the lease.",
          ko: "<strong>속도와 절차:</strong> 집 보기 → 의향서(LOI) + 가계약금(1개월치, 보증금으로 전환) → 임대차 계약(TA) 서명 순이에요. 좋은 매물은 며칠 만에 나가요. 서류는 여권 + EP 또는 IPA 레터. 인지세(세입자 부담)는 총 임대료의 0.4%예요."
        },
        {
          en: "<strong>Utilities:</strong> open an SP Group account; a family of four runs ~S$250–400/month with heavy aircon use, plus broadband S$30–50 (500Mbps–1Gbps).",
          ko: "<strong>공과금:</strong> SP Group 계정을 개설해요. 4인 가족 기준 에어컨 많이 쓰면 월 약 S$250–400, 인터넷은 S$30–50(500Mbps–1Gbps)이에요."
        }
      ],
      srcUrl: "https://www.singaporeexpats.com/guides-for-expats/procedure-for-rental.htm"
    }
  },

  community: {
    title: { en: "Korean community", ko: "한인 커뮤니티" },
    intro: {
      en: "Think of the Korean community as a network layer that works from any neighbourhood — you don't have to live in a Korean enclave, because there isn't one.",
      ko: "싱가포르의 한인 커뮤니티는 '어느 동네에 살든 연결되는 네트워크'라고 생각하면 돼요 — 애초에 한인 밀집 주거지가 따로 없거든요."
    },
    items: [
      {
        title: { en: "The community at a glance", ko: "한눈에 보는 한인 사회" },
        body: {
          en: "Roughly 20,000+ Korean residents (21,203 in 2023 — the 18th-largest Korean community worldwide). No single residential enclave: families gravitate to the Bukit Timah/west-central belt (near SKIS and the Korean marts); young professionals to the Tanjong Pagar–CBD fringe.",
          ko: "한인은 약 2만 명이 넘어요(2023년 기준 21,203명 — 세계 18위 규모의 한인 사회). 밀집 주거지는 없고, 가족들은 SKIS와 한국 마트가 있는 부킷 티마·서중부 벨트로, 젊은 직장인들은 탄종 파가–CBD 주변으로 모여요."
        },
        url: "https://en.wikipedia.org/wiki/Koreans_in_Singapore"
      },
      {
        title: { en: "Korean Association Singapore (싱가포르한인회)", ko: "싱가포르한인회" },
        body: {
          en: "71B Tanjong Pagar Road #03-01, S088492 · +65 6299 8966 · info@koreansingapore.org · singapore.korean.net · Instagram @koreanassociation.sg. The first stop for community notices and events.",
          ko: "71B Tanjong Pagar Road #03-01, S088492 · +65 6299 8966 · info@koreansingapore.org · singapore.korean.net · 인스타그램 @koreanassociation.sg. 교민 공지와 행사 소식의 첫 번째 창구예요."
        },
        url: "https://singapore.korean.net/bbs/content.php?co_id=location"
      },
      {
        title: { en: "Online communities", ko: "온라인 커뮤니티" },
        body: {
          en: "한국촌 (hankookchon.com) is the dominant hub — the 벼룩시장 secondhand board is the standard channel for baby gear, plus housing listings with Korean-speaking agents, jobs and a business directory; mobile apps on both stores. Also KORdotSIN (korea.com.sg) and the Facebook group 싱가포르코리안커뮤니티. There's no single dominant Naver cafe — find current parenting and neighbourhood rooms via KakaoTalk 오픈채팅, searching \"싱가포르\" in-app.",
          ko: "한국촌(hankookchon.com)이 압도적인 허브예요 — 벼룩시장 게시판은 유아용품 중고거래의 표준 채널이고, 한국어 가능한 부동산 에이전트의 매물, 구인구직, 업소록까지 다 있어요(앱도 양대 스토어에 있어요). KORdotSIN(korea.com.sg)과 페이스북 '싱가포르코리안커뮤니티' 그룹도 있어요. 네이버 카페는 지배적인 곳이 딱히 없어서, 육아·동네 방은 카카오톡 오픈채팅에서 '싱가포르'로 검색해 찾는 게 현재의 정석이에요."
        },
        url: "https://www.hankookchon.com/"
      },
      {
        title: { en: "K-town — Tanjong Pagar", ko: "K-타운 — 탄종 파가" },
        body: {
          en: "Tanjong Pagar Road / Craig Road / Duxton: dozens of Korean restaurants (O.BBa BBQ, Wang Dae Bak, Um Yong Baek, Seorae…), noraebang, Korean salons and services. Other clusters: Telok Ayer, Bugis, Orchard, Beauty World.",
          ko: "Tanjong Pagar Road·Craig Road·Duxton 일대에 한식당 수십 곳(오빠 BBQ, 왕대박, 엄용백, 서래…)과 노래방, 한국식 미용실·서비스 업소가 모여 있어요. 그 외 클러스터는 Telok Ayer, Bugis, Orchard, Beauty World예요."
        },
        url: "https://eatbook.sg/korean-restaurants-tanjong-pagar/"
      },
      {
        title: { en: "Korean groceries & delivery", ko: "한국 식료품 · 배달" },
        body: {
          en: "Sol Mart (Bukit Timah Plaza, Jem, Square 2/Novena, West Mall; free delivery ≥S$80) · Shine Korea (~10+ outlets; free ≥S$80) · Koryo Mart (313@Somerset, Tanjong Pagar, Beauty World, Parkway Parade; free ≥S$70; also on GrabMart/Shopee) · Lee Mart (7 outlets; kimbap/banchan counters) · Seoul Butchery (Korean BBQ cuts) · K-Fresh via RedMart. Basic staples (ramyeon, gochujang, frozen mandu) are in FairPrice/Cold Storage too. Price reality: Korean-import staples run ~1.5–2× Korea; soju is ~S$10 a bottle in restaurants; but local pork, chicken and fruit are often cheaper than in Korea.",
          ko: "Sol Mart(Bukit Timah Plaza, Jem, Square 2/노베나, West Mall; S$80 이상 무료배송) · Shine Korea(10여 개 매장; S$80 이상 무료) · Koryo Mart(313@Somerset, Tanjong Pagar, Beauty World, Parkway Parade; S$70 이상 무료; GrabMart/Shopee 입점) · Lee Mart(7개 매장; 김밥·반찬 코너) · Seoul Butchery(한국식 정육) · RedMart의 K-Fresh. 라면·고추장·냉동만두 같은 기본템은 FairPrice/Cold Storage에도 있어요. 물가 감각: 한국 수입 식품은 한국의 약 1.5–2배, 식당 소주는 병당 약 S$10 — 대신 현지 돼지고기·닭고기·과일은 한국보다 싼 경우가 많아요."
        },
        url: "https://thesmartlocal.com/read/korean-supermarkets-singapore/"
      },
      {
        title: { en: "Saturday Hangul School (토요한글학교)", ko: "토요한글학교" },
        body: {
          en: "Run by SKIS on its campus on Saturdays — Korean language and culture for kids attending local or international schools, from kindergarten age (verify the intake age with admission@skis.kr).",
          ko: "SKIS가 매주 토요일 교내에서 운영해요 — 로컬·국제학교에 다니는 아이들을 위한 한국어·한국문화 수업이고, 유치부 나이부터 받아요(정확한 입학 연령은 admission@skis.kr로 확인하세요)."
        },
        verify: true,
        url: "https://www.skis.kr/default/mp6/mp6_sub6.php?sub=06"
      }
    ]
  },

  church: {
    title: { en: "Church", ko: "교회" },
    intro: {
      en: "Korean churches double as the fastest Korean-language social network in Singapore — kids' Sunday school, new-family welcome ministries, moms' groups. Especially valuable for a spouse with limited English. There are around a dozen Korean Protestant congregations across Presbyterian, Methodist, full-gospel and independent traditions — see the Sing KCMA (한인교회 및 선교사 협의회) list for the full picture.",
      ko: "싱가포르에서 한인 교회는 가장 빠른 한국어 네트워크이기도 해요 — 아이들 주일학교, 새가족 환영 모임, 엄마들 소모임까지. 영어가 편하지 않은 배우자에게 특히 소중한 커뮤니티예요. 장로교·감리교·순복음·독립교단까지 한인 개신교회가 십여 곳 있어요 — 전체 목록은 Sing KCMA(한인교회 및 선교사 협의회)에서 볼 수 있어요."
    },
    introUrl: "https://www.facebook.com/SingKCMA/",
    items: [
      {
        name: { en: "싱가폴한인교회 (Korean Church in Singapore)", ko: "싱가폴한인교회" },
        body: {
          en: "The flagship and oldest Korean congregation. 21 Gangsa Road, S678973 (Bukit Panjang — near the Bukit Timah cluster) · +65 6468 6694 · koreanchurch.sg. Korean-language worship with a full ministry programme.",
          ko: "가장 오래된 대표 한인 교회예요. 21 Gangsa Road, S678973(부킷 판장 — 부킷 티마 클러스터에서 가까워요) · +65 6468 6694 · koreanchurch.sg. 한국어 예배와 전 연령 사역을 운영해요."
        },
        url: "https://koreanchurch.sg/"
      },
      {
        name: { en: "Bartley Christian Church — Korean Congregation", ko: "Bartley Christian Church 한인 예배부" },
        body: {
          en: "Sunday 11am Korean service, 4 How Sun Drive (above Bartley MRT). Pastor Kim Taehoon, kimth@bartley.org.sg.",
          ko: "주일 오전 11시 한국어 예배, 4 How Sun Drive(Bartley MRT 바로 위). 김태훈 목사, kimth@bartley.org.sg."
        },
        url: "https://www.bartley.org.sg/korean"
      },
      {
        name: { en: "선한목자교회 (Good Shepherd Korean Church)", ko: "선한목자교회" },
        body: {
          en: "Near Tai Seng MRT; Sunday school plus 속회 small groups.",
          ko: "Tai Seng MRT 근처예요. 주일학교와 속회 소모임이 있어요."
        },
        url: "https://sgskc.com/"
      },
      {
        name: { en: "싱가폴한인순복음교회 (Full Gospel)", ko: "싱가폴한인순복음교회" },
        body: {
          en: "Yoido lineage — verify the current venue. Other congregations (생명의말씀교회, 영광교회, 한인선교교회) are listed via KCMA.",
          ko: "여의도순복음 계열이에요 — 현재 예배 장소는 확인이 필요해요. 그 외 교회들(생명의말씀교회, 영광교회, 한인선교교회)은 KCMA 목록에서 찾을 수 있어요."
        },
        verify: true,
        url: "https://www.facebook.com/SingKCMA/"
      },
      {
        name: { en: "Catholic — 싱가포르 한인 천주교 공동체", ko: "천주교 — 싱가포르 한인 천주교 공동체" },
        body: {
          en: "Home parish: Church of the Nativity of the Blessed Virgin Mary, 1259 Upper Serangoon Road. Korean Mass Sunday 12.45pm (verify current times).",
          ko: "본당은 Church of the Nativity of the Blessed Virgin Mary(1259 Upper Serangoon Road)예요. 한국어 미사는 주일 오후 12시 45분(시간은 최신 공지로 확인하세요)."
        },
        verify: true,
        url: "https://catholicnews.sg/2012/12/10/singapore-korean-catholic-community-gets-new-home-in-nativity-church/"
      }
    ]
  },

  helper: {
    title: { en: "Hiring a helper", ko: "입주 헬퍼 고용" },
    intro: {
      en: "For households with young children, a live-in helper (MDW — migrant domestic worker) is one of the most common quality-of-life decisions expat families make here. EP families are eligible; first-time employers complete MOM's Employers' Orientation Programme at least 2 working days before the Work Permit application.",
      ko: "어린 아이가 있는 집이라면, 입주 헬퍼(MDW) 고용은 이곳 외국인 가정이 가장 흔하게 선택하는 삶의 질 투자예요. EP 가정은 고용 자격이 있고, 첫 고용주는 Work Permit 신청 최소 2영업일 전에 MOM의 고용주 오리엔테이션(EOP)을 이수해야 해요."
    },
    items: [
      {
        title: { en: "Levy", ko: "고용부담금 (Levy)" },
        body: {
          en: "S$300/month at the standard rate. The S$60 concessionary rate does NOT apply to foreigner households — it requires a Singapore-citizen child, a detail agency websites often gloss over.",
          ko: "표준 요율 월 S$300이에요. S$60 할인 요율은 외국인 가정에는 해당되지 않아요 — 싱가포르 시민권 자녀가 있어야 하는 조건인데, 에이전시 사이트들이 이 부분을 얼버무리는 경우가 많아요."
        },
        url: "https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy/levy-concession"
      },
      {
        title: { en: "Salary (2026, monthly)", ko: "급여 (2026년, 월)" },
        body: {
          en: "Filipino S$620–850 · Indonesian S$550–780 · Myanmar S$550–750 · experienced transfer helpers S$750–1,000+.",
          ko: "필리핀 S$620–850 · 인도네시아 S$550–780 · 미얀마 S$550–750 · 경력 있는 트랜스퍼 헬퍼는 S$750–1,000 이상이에요."
        },
        url: "https://upwill.com.sg/resources/maid-salary"
      },
      {
        title: { en: "Upfront costs", ko: "초기 비용" },
        body: {
          en: "Agency fee S$1,000–3,000 + Work Permit fees S$70 + medical S$40–150 + 26-month insurance S$400–800 ≈ S$3,000–5,000 one-time. Compulsory: medical insurance ≥S$60k/yr, personal accident ≥S$60k, and a S$5,000 security bond (discharged via the insurer). First-time MDWs also do a Settling-In Programme (S$76–93).",
          ko: "에이전시 수수료 S$1,000–3,000 + Work Permit 수수료 S$70 + 건강검진 S$40–150 + 26개월 보험 S$400–800 ≈ 일회성 약 S$3,000–5,000. 의무 사항: 연 S$60k 이상 의료보험, S$60k 이상 상해보험, S$5,000 보증금(보험사로 대체 가능). 첫 입국 헬퍼는 정착 교육(SIP, S$76–93)도 받아요."
        },
        url: "https://www.singsaver.com.sg/blog/cost-guide-to-hiring-a-domestic-helper-maid-singapore"
      },
      {
        title: { en: "Ongoing obligations", ko: "고용주 의무" },
        body: {
          en: "You provide food, adequate private lodging and medical care — budget S$200–350/month in living costs on top of salary.",
          ko: "식사, 적절한 개인 숙소, 의료비를 고용주가 부담해요 — 급여 외에 생활비로 월 S$200–350을 잡아 두세요."
        }
      },
      {
        title: { en: "All-in monthly cost", ko: "월 총비용" },
        body: {
          en: "≈ S$1,150–1,550 (salary + levy + insurance amortised + food/lodging).",
          ko: "약 S$1,150–1,550이에요 (급여 + 부담금 + 보험 분할 + 식비·생활비 포함)."
        }
      },
      {
        title: { en: "Timeline", ko: "소요 기간" },
        body: {
          en: "Transfer helper (already in Singapore): ~2 weeks. Fresh overseas hire: 6–8+ weeks. If you'll need the help, start the search before or immediately on arrival.",
          ko: "트랜스퍼 헬퍼(이미 싱가포르 체류 중)는 약 2주, 해외 신규 채용은 6–8주 이상 걸려요. 헬퍼가 필요할 예정이라면 도착 전이나 도착 즉시 알아보기 시작하세요."
        },
        url: "https://www.jazhelpers.com.sg/guides/how-long-hiring-a-helper-takes"
      }
    ]
  },

  /* Healthcare — qualitative guide; fee figures are unresearched ballparks (~, verify) */
  health: {
    title: { en: "Healthcare", ko: "의료" },
    intro: {
      en: "Figure out the medical system before you need it. Private care here is excellent and fast — and fee-for-service, so check what your employer's insurance covers first (DP holders have no access to the public MediShield scheme).",
      ko: "아프기 전에 의료 시스템부터 파악해 두세요. 이곳 사립 의료는 수준 높고 빠르지만 전부 건별 유료라서, 회사 보험이 무엇을 보장하는지부터 확인하는 게 순서예요 (DP 소지자는 공공 MediShield 대상이 아니에요)."
    },
    items: [
      {
        title: { en: "Everyday illness — GP first", ko: "가벼운 병 — 동네 GP부터" },
        body: {
          en: "GP (general practitioner) clinics sit in every neighbourhood mall — walk in, no appointment; a private consult with simple meds runs ~S$50–80. Public polyclinics are cheaper but queue-heavy and priced for residents. Telemedicine apps (Doctor Anywhere, WhiteCoat) do video consults with meds delivered — handy with a feverish kid at home.",
          ko: "GP(일반의) 클리닉이 동네 몰마다 있어요 — 예약 없이 바로 가면 되고, 진료+기본 약 포함 약 S$50–80이에요. 공공 폴리클리닉은 더 싸지만 대기가 길고 요금 체계가 거주자 중심이에요. 원격진료 앱(Doctor Anywhere, WhiteCoat)은 화상 진료 후 약을 배달해 줘요 — 아이가 집에서 열날 때 유용해요."
        },
        verify: true
      },
      {
        title: { en: "Kids — paediatricians", ko: "아이 — 소아과" },
        body: {
          en: "Private paediatricians (PD) cluster around Novena (the medical hub), Mount Elizabeth and neighbourhood medical centres; consults run ~S$120–180. Many families use a GP for routine bugs and a PD for anything worrying. Vaccination records live in the NIR — see the First 30 days checklist.",
          ko: "사립 소아과(PD)는 노베나(의료 허브), Mount Elizabeth, 동네 메디컬센터에 몰려 있고 진료비는 약 S$120–180이에요. 평소 잔병은 GP, 걱정되는 건 소아과로 나눠 다니는 집이 많아요. 예방접종 기록은 NIR로 관리돼요 — 첫 30일 체크리스트를 참고하세요."
        },
        verify: true
      },
      {
        title: { en: "Emergencies — where to run", ko: "응급 — 어디로 달려갈까" },
        body: {
          en: "For children, KKH Children's Emergency is the 24-hour default (NUH runs one too); the attendance fee alone is roughly ~S$150+, treatment extra. Private 24-hour A&Es: Mount Elizabeth (Orchard & Novena), Gleneagles, Raffles Hospital. In a real emergency call 995 — the SCDF ambulance is free for genuine emergencies; 1777 books a private non-emergency ambulance.",
          ko: "아이는 KKH 아동 응급실이 24시간 기본값이에요(NUH에도 있어요). 접수비만 대략 S$150+이고 치료비는 별도예요. 사립 24시간 응급실은 Mount Elizabeth(오차드·노베나), Gleneagles, Raffles Hospital. 진짜 응급이면 995 — SCDF 구급차는 실제 응급 상황이면 무료예요. 비응급 이송은 1777(민간 구급차)이에요."
        },
        verify: true
      },
      {
        title: { en: "Korean-language care", ko: "한국어 진료" },
        body: {
          en: "There's no Korean hospital, but Korean-speaking GPs and clinics cluster around Tanjong Pagar and Orchard — they change over time, so check the 한국촌 business directory or the Korean Embassy's medical listings for current ones. The big private hospitals all run international patient centres where an interpreter can be arranged.",
          ko: "한국 병원은 없지만, 한국어 가능한 GP·클리닉이 탄종 파가와 오차드 주변에 모여 있어요 — 바뀌는 곳들이라 최신 목록은 한국촌 업소록이나 대사관 의료기관 안내에서 확인하세요. 대형 사립병원에는 국제환자센터가 있어 통역을 요청할 수 있어요."
        },
        verify: true,
        url: "https://www.hankookchon.com/"
      },
      {
        title: { en: "Pharmacies & meds from Korea", ko: "약국 · 한국에서 가져올 약" },
        body: {
          en: "Guardian, Watsons and Unity are in every mall; fever meds and basics are over-the-counter. Bring a supply of any regular Korean prescription meds together with the prescription or 소견서 — and note that familiar Korean over-the-counter combos go by different names here (ask the pharmacist).",
          ko: "Guardian, Watsons, Unity 약국이 몰마다 있어요. 해열제 같은 기본 약은 처방 없이 살 수 있어요. 상시 복용하는 한국 처방약은 처방전이나 소견서와 함께 넉넉히 챙겨 오세요. 한국에서 쓰던 상비약은 여기선 이름이 다를 수 있으니 약사에게 물어보면 돼요."
        }
      },
      {
        title: { en: "Insurance, one more time", ko: "보험, 한 번 더" },
        body: {
          en: "Everything above is fee-for-service. Check the employer package first — dependants aren't always included — and see Monthly costs for what international family plans run.",
          ko: "위의 모든 게 건별 유료예요. 회사 보험 패키지부터 확인하세요(가족이 빠져 있는 경우도 있어요). 국제 가족보험 비용 감각은 월 생활비 섹션에 있어요."
        }
      }
    ],
    numbersTitle: { en: "Emergency numbers", ko: "긴급 연락처" },
    numbers: [
      { num: "995", desc: { en: "Ambulance & fire (SCDF)", ko: "구급차·소방 (SCDF)" } },
      { num: "999", desc: { en: "Police", ko: "경찰" } },
      { num: "1777", desc: { en: "Non-emergency private ambulance", ko: "비응급 민간 구급차" } },
      { num: "+82-2-3210-0404", desc: { en: "영사콜센터 — 24h Korean consular hotline", ko: "영사콜센터 — 24시간 영사 상담" } },
      { num: "+65-6256-1101", desc: { en: "Korean Embassy, Singapore (47 Scotts Road)", ko: "주싱가포르 대한민국대사관 (47 Scotts Road)" }, verify: true }
    ],
    feeNote: {
      en: "Fee figures in this section are unresearched ballparks — confirm with the clinic or hospital.",
      ko: "이 섹션의 진료비는 조사 전의 대략적인 감이에요 — 병원에 직접 확인하세요."
    }
  },

  car: {
    title: { en: "The car question", ko: "자동차, 살까 말까" },
    coe: {
      title: { en: "COE in one paragraph", ko: "COE 한 문단 요약" },
      body: {
        en: "To own a car in Singapore you must first buy a Certificate of Entitlement (COE) at a government auction — a 10-year licence just to put a car on the road. As of August 2026 (1st bidding): Cat A (smaller cars) S$123,890, Cat B (larger) S$129,910 — that's the certificate alone, before the car itself.",
        ko: "싱가포르에서 차를 가지려면 먼저 정부 경매에서 COE(차량취득권리증)를 사야 해요 — 차를 도로에 올릴 '10년짜리 권리'에 붙는 값이에요. 2026년 8월 1차 입찰 기준: Cat A(소형) S$123,890, Cat B(대형) S$129,910 — 차 값은 별도이고, 이건 순수하게 증서 값이에요."
      },
      url: "https://www.motorist.sg/coe-results"
    },
    reality: {
      title: { en: "The real numbers", ko: "실제 비용" },
      items: [
        {
          en: "All-in, a Corolla-class family car costs ≈ S$170k–220k on the road (the COE is ~64% of the price). True monthly cost including depreciation ≈ S$2,300–3,000; running costs alone are S$700–1,200 (road tax, insurance S$120–200, petrol ~S$3.16/L, parking, ERP, servicing).",
          ko: "코롤라급 패밀리카의 실구매가는 약 S$170k–220k예요(COE가 가격의 약 64%). 감가상각까지 포함한 실질 월 비용은 약 S$2,300–3,000이고, 유지비만 해도 월 S$700–1,200이에요(도로세, 보험 S$120–200, 휘발유 리터당 약 S$3.16, 주차, ERP 통행료, 정비)."
        },
        {
          en: "Leasing (all-in, no COE risk): compact S$1,400–1,800/mo; family SUV S$2,000–2,800/mo.",
          ko: "리스(모든 비용 포함, COE 리스크 없음): 소형 월 S$1,400–1,800, 패밀리 SUV 월 S$2,000–2,800이에요."
        },
        {
          en: "Grab/taxi instead: cross-town rides run S$8–18; even heavy family use lands around S$400–800/month — far below car cost. Verdict for an MRT-adjacent family: skip the car.",
          ko: "대신 Grab·택시를 쓰면: 시내 횡단이 S$8–18이고, 가족이 아주 많이 타도 월 S$400–800 선이에요 — 차 유지비보다 훨씬 낮아요. MRT 역세권에 사는 가족이라면 결론은: 차 없이 사세요."
        }
      ],
      srcUrl: "https://www.smartcalculator.sg/articles/how-much-car-cost-singapore-2026"
    },
    altTitle: { en: "Getting around without a car — MRT, bus, taxi", ko: "차 없이 다니기 — MRT · 버스 · 택시" },
    alternatives: [
      {
        title: { en: "MRT & buses — the default", ko: "MRT · 버스 — 기본값" },
        body: {
          en: "The MRT is fast, air-conditioned and reaches every area in this guide; fares run S$1.20–2.80 and young kids ride free (SimplyGo and child cards are in the checklist). Buses tap in with the same card, transfers price as one journey, and feeder buses cover the last stretch inside estates — slower than the train, but they go everywhere. Trains run every few minutes at peak and stop around midnight.",
          ko: "MRT는 빠르고 시원하고, 이 가이드의 모든 동네에 닿아요. 요금은 S$1.20–2.80이고 어린 아이는 무료예요(SimplyGo와 아동 카드는 체크리스트에 있어요). 버스는 같은 카드로 타고 환승해도 한 번의 요금으로 계산돼요. 단지 안쪽 마지막 구간은 피더버스가 이어줘요 — 기차보다 느리지만 안 가는 곳이 없어요. 출퇴근 시간 배차는 몇 분 간격이고, 자정쯤 끊겨요."
        }
      },
      {
        title: { en: "Taxis & ride-hailing — the apps and the money", ko: "택시 · 호출 앱 — 앱과 비용" },
        body: {
          en: "Grab dominates; CDG Zig books ComfortDelGro taxis (child-seat-exempt — the go-to with small kids); Gojek, TADA and Ryde are worth installing as backups for when Grab surges. Money feel: cross-town rides run S$8–18, taxi flagdown starts around ~S$4–5 with peak, late-night and location surcharges on top, and an airport run is roughly ~S$25–40 depending on the hour. Rain and rush hour mean surge pricing and longer waits everywhere.",
          ko: "Grab이 압도적이고, CDG Zig로는 ComfortDelGro 택시를 불러요(카시트 면제라 어린 아이 동반 이동의 정석이에요). Gojek, TADA, Ryde는 Grab이 비쌀 때를 대비해 백업으로 깔아두면 좋아요. 비용 감각: 시내 횡단은 S$8–18, 택시 기본요금은 약 S$4–5에 피크·심야·장소 할증이 붙고, 공항까지는 시간대에 따라 대략 S$25–40이에요. 비 오는 날과 러시아워엔 어디서나 요금이 오르고 대기가 길어져요."
        },
        verify: true
      },
      {
        title: { en: "The farther out, the fewer cabs", ko: "외곽일수록 택시가 귀해요" },
        body: {
          en: "Ride availability tracks density. In town a car is minutes away; in Hillview, Woodlands or Sentosa at peak or late night, expect longer waits and the occasional failed booking. If you're shortlisting a quieter outer area, weight the MRT walk more heavily — the train doesn't surge.",
          ko: "호출 성공률은 인구 밀도를 따라가요. 시내에선 몇 분이면 잡히지만, Hillview·Woodlands·Sentosa 같은 곳은 피크나 심야에 대기가 길어지고 가끔 배차가 실패하기도 해요. 조용한 외곽 동네를 고려한다면 MRT 도보 거리를 더 무겁게 보세요 — 지하철은 할증이 없어요."
        }
      }
    ],
    childSeats: {
      title: { en: "Child seats — kids under 1.35m", ko: "카시트 — 키 1.35m 미만 아이들" },
      body: {
        en: "Child restraints are mandatory in private cars AND in Grab/private-hire (not exempt — S$150 fine + 3 demerit points for the driver). Taxis ARE exempt (kids ride in the rear seat). Options: GrabFamily (car-seat-equipped, ~S$2–5 extra, limited availability), carry portable seats, or simply use taxis (the CDG Zig app).",
        ko: "자가용과 Grab 같은 승차공유 차량에서는 카시트가 의무예요(면제 아님 — 위반 시 벌금 S$150 + 벌점 3점). 택시는 면제예요(아이는 뒷좌석 탑승). 선택지: GrabFamily(카시트 장착 차량, 추가 요금 약 S$2–5, 배차 제한적), 휴대용 카시트 지참, 아니면 그냥 택시 이용(CDG Zig 앱)이에요."
      },
      url: "https://singaporelegaladvice.com/car-seat-rules-singapore/"
    }
  },

  apps: {
    title: { en: "Useful apps", ko: "유용한 앱" },
    intro: {
      en: "Day-one downloads, roughly in order of how often you'll open them.",
      ko: "도착 첫날 깔아야 할 앱들이에요. 자주 쓰게 될 순서대로 정리했어요."
    },
    items: [
      { name: "Grab", why: { en: "The super-app: rides, food delivery, payments.", ko: "슈퍼앱이에요: 차량 호출, 음식 배달, 결제까지." } },
      { name: "WhatsApp", why: { en: "Local life runs on WhatsApp, not KakaoTalk — condo groups, agents, preschool chats. Keep KakaoTalk for Korea.", ko: "현지 생활은 카톡이 아니라 WhatsApp으로 돌아가요 — 콘도 단톡, 부동산 에이전트, 유치원 공지까지. 카톡은 한국용으로 유지하세요." } },
      { name: "Singpass", why: { en: "The digital ID for everything government, banking and medical.", ko: "정부·은행·병원 모든 곳에서 쓰는 디지털 신분증이에요." } },
      { name: { en: "Bank app + PayNow", ko: "은행 앱 + PayNow" }, why: { en: "DBS digibank / OCBC / UOB TMRW — instant transfers for rent, fees, hawker QR.", ko: "DBS digibank / OCBC / UOB TMRW — 월세, 학비, 호커 QR까지 즉시 이체로 해결해요." } },
      { name: "SimplyGo", why: { en: "Transit management + the kids' concession cards.", ko: "대중교통 관리와 아이들 무료 카드 관리용이에요." } },
      { name: "FairPrice", why: { en: "The main supermarket chain — groceries and delivery.", ko: "최대 슈퍼마켓 체인 — 장보기와 배송 주문용이에요." } },
      { name: "PropertyGuru & 99.co", why: { en: "The two rental portals. Search both.", ko: "양대 부동산 포털이에요. 둘 다 검색하세요." } },
      { name: "ActiveSG", why: { en: "Public pools and sports facilities — pool entry S$1–2.", ko: "공공 수영장·체육시설 예약 — 수영장 입장이 S$1–2예요." } },
      { name: { en: "Google Maps / Citymapper", ko: "Google Maps / Citymapper" }, why: { en: "Transit routing. (Gothere.sg is defunct — skip it.)", ko: "대중교통 길찾기예요. (Gothere.sg는 서비스 종료 — 무시하세요.)" } },
      { name: "Parking.sg", why: { en: "Street parking payment (if you ever drive).", ko: "노상 주차 결제용이에요 (운전할 일이 생기면)." } },
      { name: "MyICA", why: { en: "Immigration services, incl. the SG Arrival Card.", ko: "출입국 서비스 — SG 입국 카드 제출도 여기서 해요." } },
      { name: "SGWorkPass", why: { en: "Check pass validity by scanning the card.", ko: "패스 카드를 스캔해 유효성을 확인하는 앱이에요." } },
      { name: "CDG Zig", why: { en: "Taxis — child-seat-exempt, so the easiest way to move small kids.", ko: "택시 호출 — 카시트 면제라 어린 아이와 이동할 때 가장 간편해요." } },
      { name: "myENV", why: { en: "Rain radar — trust it, this is the tropics.", ko: "비 레이더예요 — 열대지방이니 믿고 쓰세요." } },
      { name: { en: "한국촌 app", ko: "한국촌 앱" }, why: { en: "The Korean community hub in your pocket.", ko: "한인 커뮤니티 허브를 주머니에 넣는 셈이에요." } }
    ],
    srcUrl: "https://www.expatica.com/sg/about/basics/singapore-apps-2172803/"
  },

  costs: {
    title: { en: "Monthly cost snapshot", ko: "월 생활비 한눈에" },
    intro: {
      en: "Build your own estimate below — the snapshot table after it is one worked example so you can sanity-check the parts. Low = anchor preschool + value area; High = mid-tier preschool + pricier area.",
      ko: "아래 계산기로 내 예산을 직접 만들어 보세요 — 그 아래 스냅샷 표는 항목별 감을 잡기 위한 예시 하나예요. Low는 앵커 유치원 + 실속 지역, High는 중가 사립 + 비싼 지역 기준이에요."
    },
    /* Budget builder — figures are the midpoints of this page's tables */
    builder: {
      title: { en: "Build your monthly estimate", ko: "내 월 예산 만들어 보기" },
      intro: {
        en: "Pick your situation — the total updates live in your chosen currency and is saved on this device. Figures are midpoints from the tables on this page; treat the result as a planning number.",
        ko: "상황을 고르면 합계가 선택한 통화로 바로 계산되고, 이 기기에 저장돼요. 수치는 이 페이지 표들의 중간값이라, 결과는 계획용 숫자로 보세요."
      },
      totalLabel: { en: "Estimated monthly total", ko: "예상 월 합계" },
      perKid: { en: "per child", ko: "아이당" },
      groups: {
        housing: { label: { en: "Housing", ko: "주거" }, options: [
          { id: "hdb4", v: 3800, label: { en: "HDB 4/5-room", ko: "HDB 4·5룸" } },
          { id: "condoValue", v: 5000, label: { en: "Condo 3BR — value area", ko: "콘도 3BR — 실속 지역" } },
          { id: "condoMid", v: 7000, label: { en: "Condo 3BR — central", ko: "콘도 3BR — 중심부" } },
          { id: "condo4", v: 10000, label: { en: "Condo 4BR+", ko: "콘도 4BR+" } },
          { id: "landed", v: 12000, label: { en: "Landed / cluster", ko: "단독·클러스터" } }
        ] },
        kids: { label: { en: "Children", ko: "아이" }, options: [
          { id: "k0", v: 0, label: "0" },
          { id: "k1", v: 1, label: "1" },
          { id: "k2", v: 2, label: "2" },
          { id: "k3", v: 3, label: "3" }
        ] },
        preschool: { label: { en: "Preschool (per child)", ko: "유치원 (아이당)" }, options: [
          { id: "none", v: 0, label: { en: "Not yet / school-age", ko: "아직 안 다녀요·학령기" } },
          { id: "anchor", v: 1277, label: { en: "Anchor operator", ko: "앵커 오퍼레이터" } },
          { id: "mid", v: 1900, label: { en: "Mid-range private", ko: "중가 사립" } },
          { id: "premium", v: 2900, label: { en: "Premium", ko: "프리미엄" } },
          { id: "skis", v: 1120, label: "SKIS" },
          { id: "intl", v: 2570, label: { en: "International early years", ko: "국제학교 유아부" } }
        ] },
        helper: { label: { en: "Live-in helper", ko: "입주 헬퍼" }, options: [
          { id: "no", v: 0, label: { en: "No", ko: "없음" } },
          { id: "yes", v: 1350, label: { en: "Yes (all-in)", ko: "있음 (총비용)" } }
        ] },
        insurance: { label: { en: "Health insurance", ko: "건강보험" }, options: [
          { id: "employer", v: 0, label: { en: "Employer covers family", ko: "회사가 가족까지 보장" } },
          { id: "intl", v: 2125, label: { en: "International family plan", ko: "국제 가족보험" } }
        ] },
        lifestyle: { label: { en: "Daily life (food, utilities, transport)", ko: "생활비 (식비·공과금·교통)" }, options: [
          { id: "lean", v: 1470, label: { en: "Lean", ko: "알뜰" } },
          { id: "mid", v: 2100, label: { en: "Typical", ko: "보통" } },
          { id: "comfy", v: 2730, label: { en: "Comfortable", ko: "여유" } }
        ] },
        enrich: { label: { en: "Enrichment (per child)", ko: "사교육 (아이당)" }, options: [
          { id: "none", v: 0, label: { en: "None", ko: "없음" } },
          { id: "light", v: 300, label: { en: "1 activity", ko: "1개" } },
          { id: "full", v: 700, label: { en: "2+ activities", ko: "2개 이상" } }
        ] }
      }
    },

    rent: {
      title: { en: "Rent — budget by housing type", ko: "월세 — 주거 형태별 예산" },
      intro: {
        en: "Rent is the variable that dwarfs everything else, so it lives outside the snapshot. Ranges below span the whole island — the Area table shows where each neighbourhood lands within them.",
        ko: "월세는 다른 모든 항목을 압도하는 변수라 스냅샷과 분리했어요. 아래 범위는 섬 전체 기준이고, 각 동네가 범위의 어디쯤인지는 동네 표에서 확인할 수 있어요."
      },
      cols: {
        type: { en: "Housing type", ko: "주거 형태" },
        range: { en: "Monthly range", ko: "월세 범위" },
        note: { en: "Note", ko: "메모" }
      },
      rows: [
        { type: { en: "HDB 3-room (~700 sqft)", ko: "HDB 3룸 (~700sqft)" }, range: "~S$2,600–3,400", rough: true, note: { en: "Compact, but daily life sits downstairs", ko: "작지만 생활 인프라가 아래층에 있어요" } },
        { type: { en: "HDB 4/5-room", ko: "HDB 4·5룸" }, range: "S$3,250–4,400", note: { en: "Researched estate medians (Q2 2025)", ko: "단지별 중위값 조사치 (2025년 2분기)" } },
        { type: { en: "Condo 3BR", ko: "콘도 3BR" }, range: "S$3,900–10,000+", note: { en: "Hillview cheapest of the researched areas; Holland V and Orchard-side top the band", ko: "조사 지역 중 Hillview가 최저, Holland V·오차드 쪽이 최고예요" } },
        { type: { en: "Condo 4BR+", ko: "콘도 4BR+" }, range: "~S$5,500–15,000", rough: true, note: { en: "Family-sized new stock is scarce — see the helper's-room rule", ko: "가족형 신축은 귀해요 — 헬퍼룸 공식 참고" } },
        { type: { en: "Landed — terrace / semi-D", ko: "단독 — 테라스·세미디" }, range: "S$6,500–22,000", note: { en: "The east runs roughly half of Bukit Timah D10 prices", ko: "동부가 부킷 티마 D10의 대략 절반 수준이에요" } },
        { type: { en: "Cluster house", ko: "클러스터 하우스" }, range: "S$9,000–18,500", note: { en: "Landed space + condo facilities; thin supply", ko: "단독의 공간 + 콘도 시설; 공급이 적어요" } },
        { type: { en: "Good Class Bungalow", ko: "GCB (최상급 단독)" }, range: "S$16,000–100,000+", note: { en: "Listed for completeness", ko: "참고용이에요" } },
        { type: { en: "Serviced apartment", ko: "서비스드 아파트" }, range: { en: "hotel-priced", ko: "호텔급 요금" }, note: { en: "The first 1–2 months while house-hunting", ko: "집 구하는 첫 1–2개월용" } }
      ],
      note: {
        en: "Whole-island asking ranges (Aug 2026); ~ marks unresearched ballparks. Deposits, agent fees and stamp duty live in the renting box.",
        ko: "섬 전체 호가 범위(2026년 8월)예요. ~ 표시는 조사 전의 감이에요. 보증금·중개 수수료·인지세는 임대 박스에 있어요."
      }
    },
    snapshotTitle: { en: "The monthly snapshot (excluding rent)", ko: "월 스냅샷 (월세 제외)" },
    cols: {
      item: { en: "Item", ko: "항목" },
      low: { en: "Low", ko: "낮게" },
      high: { en: "High", ko: "높게" },
      note: { en: "Note", ko: "메모" }
    },
    rows: [
      { item: { en: "Preschool ×2", ko: "유치원 ×2" }, low: "S$2,400", high: "S$5,200", note: { en: "Anchor vs mid-tier; the SKIS route is ~S$2,240", ko: "앵커 vs 중가 사립; SKIS 노선이면 약 S$2,240" } },
      { item: { en: "Helper, all-in", ko: "헬퍼 총비용" }, low: "S$1,150", high: "S$1,550", note: { en: "Salary + levy + insurance + food/lodging", ko: "급여+부담금+보험+생활비 포함" } },
      { item: { en: "Groceries", ko: "장보기" }, low: "S$500", high: "S$700", note: { en: "+10–20% if buying Korean imports", ko: "한국 수입품 위주면 +10–20%" } },
      { item: { en: "Eating out", ko: "외식" }, low: "S$400", high: "S$1,000", note: { en: "Hawker S$4–7/person; mid-range for two ~S$80", ko: "호커 1인 S$4–7; 중급 레스토랑 2인 약 S$80" } },
      { item: { en: "Utilities + internet", ko: "공과금 + 인터넷" }, low: "S$250", high: "S$450", note: { en: "Aircon-heavy assumption", ko: "에어컨 많이 쓰는 기준" } },
      { item: { en: "Mobile ×2", ko: "휴대폰 ×2" }, low: "S$20", high: "S$80", note: { en: "SIM-only plans", ko: "유심 요금제" } },
      { item: { en: "Transport", ko: "교통" }, low: "S$300", high: "S$500", note: { en: "MRT + Grab; the kids ride free", ko: "MRT + Grab; 아이들은 무료" } },
      { item: { en: "Health insurance", ko: "건강보험" }, low: "S$0", high: "S$2,100", note: { en: "Employer group cover is common — check the package FIRST. DP family has no MediShield access; an international family plan averages ~S$25.5k/yr", ko: "회사 단체보험이 흔해요 — 패키지부터 확인하세요. DP 가족은 MediShield 대상이 아니고, 국제 가족보험은 평균 연 약 S$25.5k예요" } },
      { item: { en: "Enrichment ×2", ko: "사교육 ×2" }, low: "S$0", high: "S$1,400", note: { en: "Optional; S$300–700 per child", ko: "선택사항; 아이당 S$300–700" } }
    ],
    total: {
      item: { en: "Total", ko: "합계" },
      low: "~S$5,000",
      high: "~S$12,000",
      note: { en: "Typical mid case with employer insurance ≈ S$6,500–8,000", ko: "회사 보험이 있는 일반적인 중간 케이스는 약 S$6,500–8,000이에요" }
    },
    insuranceUrl: "https://www.pacificprime.com/blog/health-insurance-cost-in-singapore.html",
    moneyBox: {
      title: { en: "Money between Korea and Singapore", ko: "한국 ↔ 싱가포르 돈 관리" },
      items: [
        {
          en: "Remittance: won moves via specialist transfer services (Wise and similar) far cheaper than bank wires — compare the live exchange-rate margin, not the advertised fee. PayNow and Korean instant transfers don't interconnect.",
          ko: "송금: 원화는 은행 전신송금보다 Wise 같은 전문 송금 서비스가 훨씬 저렴해요 — 광고 수수료가 아니라 실제 적용 환율 마진을 비교하세요. PayNow와 한국 간편이체는 서로 연결되지 않아요."
        },
        {
          en: "Korean tax: leaving Korea doesn't automatically end Korean tax duties — Korean-source income (rent, business) is still reported in Korea, and the Korea–Singapore double-tax treaty prevents paying twice. Residency status (거주자/비거주자) drives everything, so book one session with a 세무사 before departure.",
          ko: "한국 세금: 출국해도 한국 세금 의무가 자동으로 끝나지 않아요 — 한국 원천 소득(임대·사업 등)은 계속 한국에 신고하고, 한·싱 이중과세방지협정이 이중 납부를 막아줘요. 모든 건 거주자/비거주자 판정에 달려 있으니, 출국 전에 세무사 상담을 한 번 받아두세요."
        },
        {
          en: "Banking hygiene: keep one Korean account and card alive (공동인증서/OTP included) — Korean apps, banks and 정부24 still matter from abroad.",
          ko: "은행 정리: 한국 계좌와 카드 하나는 살려두세요(공동인증서·OTP 포함) — 해외에서도 한국 앱, 은행, 정부24를 쓸 일이 계속 생겨요."
        }
      ],
      note: {
        en: "Directions, not advice — rules change; confirm with your bank and a tax professional.",
        ko: "참고용 방향이지 자문이 아니에요 — 규정은 바뀌니 은행과 세무 전문가에게 확인하세요."
      }
    }
  },

  /* Glossary — the acronym soup, one line each. Terms get dotted-underline
     tooltips wherever they appear in body text; full list renders in the footer. */
  glossary: [
    { k: "EP", d: { en: "Employment Pass — the main skilled-work visa", ko: "Employment Pass — 전문직 취업비자" } },
    { k: "DP", d: { en: "Dependant's Pass — for an EP holder's spouse/children", ko: "Dependant's Pass — EP 소지자의 배우자·자녀 동반비자" } },
    { k: "IPA", d: { en: "In-Principle Approval — the pre-arrival approval letter for a pass", ko: "In-Principle Approval — 입국 전 패스 승인 레터" } },
    { k: "LOC", d: { en: "Letter of Consent — old DP work permission, now business-owners only", ko: "Letter of Consent — 과거 DP 취업 허가, 지금은 사업자만" } },
    { k: "FIN", d: { en: "Foreign Identification Number — your ID number on any pass", ko: "Foreign Identification Number — 패스에 붙는 외국인 신분번호" } },
    { k: "PR", d: { en: "Permanent Resident(-cy) — Singapore's green-card equivalent", ko: "영주권(자) — 싱가포르의 영주 자격" } },
    { k: "CPF", d: { en: "Central Provident Fund — the citizens'/PR pension; foreigners don't contribute", ko: "Central Provident Fund — 시민·영주권자 연금; 외국인은 미가입" } },
    { k: "COE", d: { en: "Certificate of Entitlement — the S$100k+ licence to own a car for 10 years", ko: "Certificate of Entitlement — 차량 10년 보유권, S$100k+ 증서" } },
    { k: "ERP", d: { en: "Electronic Road Pricing — per-gantry road tolls", ko: "Electronic Road Pricing — 도로 통행료 시스템" } },
    { k: "HDB", d: { en: "Housing & Development Board flats — public housing ~80% live in", ko: "HDB — 국민 약 80%가 사는 공공주택" } },
    { k: "EC", d: { en: "Executive Condominium — HDB-condo hybrid, private after 10 years", ko: "Executive Condominium — 10년 뒤 민간이 되는 HDB·콘도 하이브리드" } },
    { k: "GCB", d: { en: "Good Class Bungalow — the top tier of landed housing", ko: "Good Class Bungalow — 최상급 단독주택" } },
    { k: "CCR", d: { en: "Core Central Region — the priciest districts (D9/10/11 + CBD)", ko: "Core Central Region — 가장 비싼 핵심 중심부 (D9/10/11 + CBD)" } },
    { k: "RCR", d: { en: "Rest of Central Region — the city fringe", ko: "Rest of Central Region — 시티 프린지" } },
    { k: "OCR", d: { en: "Outside Central Region — the suburbs", ko: "Outside Central Region — 외곽" } },
    { k: "MOM", d: { en: "Ministry of Manpower — issues work passes", ko: "노동부 — 취업 패스 발급 부처" } },
    { k: "ICA", d: { en: "Immigration & Checkpoints Authority", ko: "이민국" } },
    { k: "MOE", d: { en: "Ministry of Education — runs local schools", ko: "교육부 — 로컬 학교 관할" } },
    { k: "ECDA", d: { en: "Early Childhood Development Agency — licenses preschools", ko: "유아교육청 — 유치원 인가 기관" } },
    { k: "NIR", d: { en: "National Immunisation Registry — official vaccination records", ko: "국가 예방접종 등록부" } },
    { k: "MDW", d: { en: "Migrant Domestic Worker — the official term for a live-in helper", ko: "Migrant Domestic Worker — 입주 헬퍼의 공식 명칭" } },
    { k: "GP", d: { en: "General Practitioner — the walk-in neighbourhood doctor", ko: "일반의 — 동네 1차 진료 의사" } },
    { k: "PD", d: { en: "Paediatrician", ko: "소아과 전문의" } },
    { k: "EAL", d: { en: "English as an Additional Language — school English support", ko: "English as an Additional Language — 학교의 영어 지원 과정" } },
    { k: "IB", d: { en: "International Baccalaureate — the international curriculum", ko: "International Baccalaureate — 국제 공통 커리큘럼" } },
    { k: "SCDF", d: { en: "Singapore Civil Defence Force — runs the 995 ambulance/fire service", ko: "싱가포르 민방위대 — 995 구급·소방 담당" } }
  ],

  footer: {
    updated: {
      en: "Figures researched August 2026. Rents, COE prices and school fees move — verify before committing.",
      ko: "수치는 2026년 8월에 조사한 것이에요. 임대료·COE·학비는 계속 움직이니, 결정 전에 꼭 다시 확인하세요."
    },
    disclaimer: {
      en: "All figures are estimates compiled from the sources below and community research — this is a personal guide, not professional advice. Items marked ⚠ should be confirmed directly with the provider.",
      ko: "모든 수치는 아래 출처와 커뮤니티 조사를 바탕으로 한 추정치예요 — 개인용 가이드일 뿐 전문적인 조언이 아니에요. ⚠ 표시가 있는 항목은 해당 기관에 직접 확인하세요."
    },
    sourcesTitle: { en: "Official sources", ko: "공식 출처" },
    sources: [
      { label: "MOM (Ministry of Manpower)", url: "https://www.mom.gov.sg" },
      { label: "ICA (Immigration & Checkpoints Authority)", url: "https://www.ica.gov.sg" },
      { label: "MOE (Ministry of Education)", url: "https://www.moe.gov.sg" },
      { label: "ECDA (Early Childhood Development Agency)", url: "https://www.ecda.gov.sg" },
      { label: "LTA / OneMotoring", url: "https://onemotoring.lta.gov.sg" },
      { label: "HDB", url: "https://www.hdb.gov.sg" },
      { label: "Singpass", url: "https://www.singpass.gov.sg" },
      { label: { en: "Korean Embassy in Singapore", ko: "주싱가포르 대한민국대사관" }, url: "https://overseas.mofa.go.kr/sg-ko" }
    ],
    openTitle: { en: "Worth confirming directly", ko: "직접 확인해 둘 것들" },
    openItems: [
      { en: "SKIS school-bus coverage — free shuttles to Newton MRT and Clementi MRT are reported; confirm routes and eligibility at admission@skis.kr.", ko: "SKIS 스쿨버스 — Newton MRT·Clementi MRT 무료 셔틀이 있다고 알려져 있어요. 노선과 이용 자격을 admission@skis.kr로 확인하세요." },
      { en: "Preparatory/bridging programmes at international schools (foundation classes, intensive English, e.g. via SJII) — needs a research round before listing.", ko: "국제학교 준비·브리지 과정(파운데이션, 집중 영어 — 예: SJII 계열) — 목록화 전에 조사가 필요해요." },
      { en: "Rent budget → narrows the sub-area shortlist.", ko: "월세 예산 → 후보 동네를 좁힐 수 있어요." },
      { en: "Church tradition (Protestant denomination vs Catholic) → reorders the church list.", ko: "교회 전통(개신교 교단 또는 천주교) → 교회 목록의 우선순위가 달라져요." },
      { en: "Move date → anchors the waitlist and helper timelines.", ko: "이사 날짜 → 유치원 대기와 헬퍼 채용 일정의 기준이 돼요." },
      { en: "SKIS current fees + Saturday school intake age → email admission@skis.kr.", ko: "SKIS 최신 학비와 토요한글학교 입학 연령 → admission@skis.kr로 문의하세요." },
      { en: "Employer insurance coverage for dependants → changes the budget by up to S$2,100/month.", ko: "회사 보험의 가족 보장 범위 → 월 예산이 최대 S$2,100까지 달라져요." }
    ]
  }
};
