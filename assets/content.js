/* Moving to Singapore — A Family Guide
   All visible text lives here. Every leaf is { en, ko }.
   Figures sourced from CONTENT.md (researched August 2026). Do not edit numbers without a source. */

var CONTENT = {

  ui: {
    siteTitle: { en: "Moving to Singapore", ko: "싱가포르 이주 가이드" },
    langToggle: { en: "한국어", ko: "EN" },
    langToggleAria: { en: "Switch language to Korean", ko: "영어로 전환" },
    openInMaps: { en: "Open in Google Maps ↗", ko: "구글 지도에서 열기 ↗" },
    showOnMap: { en: "▲ Show on map", ko: "▲ 지도에서 보기" },
    officialLink: { en: "Official link ↗", ko: "공식 링크 ↗" },
    source: { en: "Source ↗", ko: "출처 ↗" },
    verify: { en: "⚠ verify directly", ko: "⚠ 직접 확인 필요" },
    checklistProgress: { en: "done", ko: "완료" },
    resetChecklist: { en: "Reset checklist", ko: "체크리스트 초기화" },
    mapHint: {
      en: "Tap an area to jump to its guide. Schematic map — not to scale.",
      ko: "지역을 누르면 해당 카드로 이동해요. 축척 없는 개념도예요."
    },
    mapAriaLabel: { en: "Schematic map of Singapore with shortlisted areas", ko: "후보 지역이 표시된 싱가포르 개념 지도" },
    mrtLegend: { en: "MRT lines (simplified)", ko: "MRT 노선 (간략화)" },
    skipToContent: { en: "Skip to content", ko: "본문으로 건너뛰기" },
    homeLabel: { en: "Home", ko: "홈" },
    backToTop: { en: "Back to top", ko: "맨 위로" },
    prevLabel: { en: "Previous", ko: "이전" },
    nextLabel: { en: "Next", ko: "다음" }
  },

  nav: [
    { id: "checklist", label: { en: "First 30 days", ko: "첫 30일" },
      desc: { en: "Arrival admin in order — passes, Singpass, bank, SIM, transport.", ko: "도착 후 처리할 일을 순서대로 — 패스, 싱패스, 은행, 유심, 교통까지." } },
    { id: "education", label: { en: "Education", ko: "교육" },
      desc: { en: "Preschool now, primary-school paths later, and the enrichment scene.", ko: "지금 필요한 유치원부터 초등 로드맵, 사교육까지." } },
    { id: "living", label: { en: "Where to live", ko: "어디에 살까" },
      desc: { en: "Five areas compared — map, prices, and how renting works.", ko: "후보 다섯 지역 비교 — 지도, 가격, 임대 절차까지." } },
    { id: "community", label: { en: "Korean community", ko: "한인 커뮤니티" },
      desc: { en: "한인회, 한국촌, K-town, Korean marts and the Saturday Hangul school.", ko: "한인회, 한국촌, K-타운, 한국 마트, 토요한글학교." } },
    { id: "church", label: { en: "Church", ko: "교회" },
      desc: { en: "Korean congregations — and the fastest way to meet Korean parents.", ko: "한인 교회들 — 한인 부모들을 가장 빨리 만나는 길이기도 해요." } },
    { id: "helper", label: { en: "Helper", ko: "입주 헬퍼" },
      desc: { en: "Costs, process and timeline for hiring live-in help.", ko: "입주 헬퍼 고용의 비용, 절차, 소요 기간." } },
    { id: "car", label: { en: "Car?", ko: "자동차?" },
      desc: { en: "COE reality check and why most MRT-adjacent families skip it.", ko: "COE의 현실, 그리고 역세권 가족 대부분이 차를 안 사는 이유." } },
    { id: "apps", label: { en: "Apps", ko: "앱" },
      desc: { en: "Day-one downloads, one line each.", ko: "첫날 깔아야 할 앱, 한 줄씩." } },
    { id: "costs", label: { en: "Monthly costs", ko: "월 생활비" },
      desc: { en: "A realistic family-of-four budget, low and high.", ko: "4인 가족의 현실적인 월 예산, 최소·최대." } }
  ],

  hero: {
    title: { en: "Moving to Singapore", ko: "싱가포르 이주 가이드" },
    subtitle: { en: "A Family Guide", ko: "우리 가족을 위한 안내서" },
    tagline: {
      en: "A practical, honest guide for a Korean family of four — twin toddlers, an Employment Pass, and a new life on the little red dot.",
      ko: "쌍둥이 아이들과 함께 싱가포르에 정착하는 한국인 네 가족을 위한, 현실적이고 솔직한 안내서예요."
    },
    profile: {
      en: "Husband on Employment Pass · wife & twins (2–4) on Dependant's Passes",
      ko: "남편 EP(취업비자) · 아내와 쌍둥이(2–4세)는 DP(동반비자)"
    }
  },

  checklist: {
    title: { en: "First 30 days checklist", ko: "첫 30일 체크리스트" },
    intro: {
      en: "In rough order. Tap items to check them off — your progress is saved on this device.",
      ko: "대략적인 순서예요. 항목을 누르면 완료 표시가 되고, 이 기기에 자동 저장돼요."
    },
    items: [
      {
        id: "arrival-card",
        title: { en: "SG Arrival Card", ko: "SG 입국 카드 (SG Arrival Card)" },
        body: {
          en: "Every traveller submits this within 3 days before arrival (arrival day included). Free via the official ICA e-service or MyICA app — beware look-alike third-party sites that charge a fee.",
          ko: "모든 입국자가 도착 3일 전부터(도착일 포함) 제출해요. ICA 공식 e-서비스나 MyICA 앱에서 무료예요. 수수료를 받는 유사 사이트에 주의하세요."
        },
        url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card"
      },
      {
        id: "ep-dp-cards",
        title: { en: "EP / DP card appointments", ko: "EP·DP 카드 발급 예약" },
        body: {
          en: "Sequence: employer applies → IPA letter (single-entry visa, valid 6 months) → enter Singapore → medical exam if the IPA requires it (chest X-ray + HIV test, S$30–80 at clinics) → pass issuance → notification letter (1 month validity; you can work and travel) → fingerprints & photo at the Employment Pass Services Centre within 2 weeks of issuance, by appointment → card delivered within 5 working days. Fees per pass: S$105 application + S$225 issuance. DP processing takes about 3 weeks and can be filed together with the EP.",
          ko: "진행 순서: 회사가 신청 → IPA 레터 발급(싱글 엔트리 비자, 6개월 유효) → 싱가포르 입국 → IPA에 명시된 경우 신체검사(흉부 X선 + HIV 검사, 클리닉에서 S$30–80) → 패스 발급 → 노티피케이션 레터(1개월 유효, 근무·출입국 가능) → 발급 후 2주 내 EPSC(Employment Pass Services Centre) 예약 방문해 지문·사진 등록 → 5영업일 내 카드 배송. 패스당 신청비 S$105 + 발급비 S$225. DP 심사는 약 3주 걸리고 EP와 함께 신청할 수 있어요."
        },
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass"
      },
      {
        id: "singpass",
        title: { en: "Singpass registration", ko: "싱패스 (Singpass) 등록" },
        body: {
          en: "Register at singpass.gov.sg once your passes are issued. EP and DP holders aged 15+ are eligible. It is the single digital ID for all government services, tax, clinics and bank verification — the wife should register too (kids are too young).",
          ko: "패스가 발급되면 singpass.gov.sg에서 등록하세요. EP·DP 소지자(만 15세 이상)가 가입할 수 있어요. 정부 서비스, 세금, 병원, 은행 본인인증까지 모두 쓰이는 디지털 신분증이라 아내분도 꼭 등록하는 게 좋아요. (아이들은 아직 나이가 안 돼요.)",
        },
        url: "https://ask.gov.sg/singpass/questions/clul28lp4002t3b8g3hnggivy"
      },
      {
        id: "sim",
        title: { en: "SIM / eSIM", ko: "유심 · eSIM 개통" },
        body: {
          en: "Needs a passport or FIN. 2026 SIM-only prices: Circles.Life S$8/mo (500GB), Maxx S$7.90/mo, Simba from S$10/mo, GOMO S$19.99/mo, Singtel/StarHub S$24.50–38/mo. Budget S$10–25 per adult per month.",
          ko: "여권 또는 FIN이 있으면 개통돼요. 2026년 유심 요금: Circles.Life 월 S$8(500GB), Maxx 월 S$7.90, Simba 월 S$10부터, GOMO 월 S$19.99, Singtel/StarHub 월 S$24.50–38. 성인 1인당 월 S$10–25 정도로 잡으면 돼요."
        },
        url: "https://www.misslobang.com/article/best-telco-mobile-plans-singapore-2026"
      },
      {
        id: "bank",
        title: { en: "Bank account", ko: "은행 계좌 개설" },
        body: {
          en: "DBS explicitly opens accounts with just the IPA letter (before the EP card arrives); OCBC/UOB vary by branch and often want the EP card + Singpass. Documents: passport, EP card or IPA, proof of Singapore address, Korean TIN. Salary accounts — DBS Multiplier, OCBC 360, UOB One — pay bonus interest for salary crediting plus card spend.",
          ko: "DBS는 IPA 레터만으로도 계좌를 열어줘요(EP 카드 나오기 전에도 가능). OCBC·UOB는 지점마다 달라서 EP 카드와 싱패스를 요구하는 경우가 많아요. 준비물: 여권, EP 카드 또는 IPA, 싱가포르 주소 증빙, 한국 납세자번호(TIN). 급여 계좌는 DBS Multiplier, OCBC 360, UOB One이 급여이체+카드 사용 조건으로 우대금리를 줘요."
        },
        url: "https://expatmovingtosingapore.com/expat-friendly-bank-accounts-in-singapore/"
      },
      {
        id: "paynow",
        title: { en: "PayNow setup", ko: "PayNow 설정" },
        body: {
          en: "Link your mobile number and/or FIN in the bank app. Free instant transfers — it is how everyone pays rent deposits, school fees, and hawker-stall QR codes.",
          ko: "은행 앱에서 휴대폰 번호나 FIN을 연결하면 끝이에요. 무료 즉시 이체 서비스로, 임대 보증금·학비·호커센터 QR 결제까지 모두 PayNow로 해요. 한국의 계좌이체+토스 같은 존재예요."
        },
        url: "https://www.abs.org.sg/consumer-banking/pay-now"
      },
      {
        id: "simplygo",
        title: { en: "Transport — SimplyGo", ko: "교통 — SimplyGo" },
        body: {
          en: "Contactless Visa/Mastercard works directly on MRT and buses; fares S$1.20–2.80 per ride. Kids: under 7 and up to 0.9m ride free; under 7 but taller than 0.9m still ride free with a free Child Concession Card (any SimplyGo Ticket Office, passport accepted, foreign kids eligible). Both twins ride free — get 2 cards once they pass 0.9m.",
          ko: "컨택리스 Visa/Mastercard를 그대로 MRT·버스 단말기에 찍으면 돼요. 요금은 회당 S$1.20–2.80. 아이들은 만 7세 미만·키 0.9m 이하면 무료, 0.9m를 넘어도 무료 아동 카드(Child Concession Card)를 만들면 계속 무료예요(SimplyGo 매표소에서 여권으로 발급, 외국인 아동도 가능). 쌍둥이 둘 다 무료 — 키가 0.9m를 넘으면 카드 2장을 만들어 두세요."
        },
        url: "https://simplygo.com.sg/travel-fares/child-concessionary-fares/"
      },
      {
        id: "rental",
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
        title: { en: "Preschool visits & waitlists", ko: "유치원 투어 · 대기 등록" },
        body: {
          en: "Start immediately — popular centres have 12–18 month waitlists, and you need two places at once. Details in the Education section.",
          ko: "도착하자마자 시작하세요. 인기 있는 곳은 대기가 12–18개월이고, 쌍둥이라 자리가 두 개 필요해요. 자세한 내용은 교육 섹션에 있어요."
        },
        anchor: "education"
      },
      {
        id: "licence",
        title: { en: "Korean driving licence conversion", ko: "한국 운전면허 전환" },
        body: {
          en: "You can drive on your Korean licence + IDP/official translation for the first 12 months of residence; convert before that ends. Pass the Basic Theory Test (50 MCQs, 45 to pass, S$10.14 per attempt at BBDC/CDC/SSDC), then convert at Traffic Police HQ (10 Ubi Ave 3), S$50 fee. The Korean licence needs an official English translation from a Singapore-registered translation company (or embassy certification). Total ~S$70–80; card in ~2 weeks.",
          ko: "거주 시작 후 12개월까지는 한국 면허 + 국제면허증(또는 공식 번역본)으로 운전할 수 있고, 그 안에 전환해야 해요. 기초 이론 시험(BTT: 객관식 50문항 중 45개 정답, 응시료 S$10.14, BBDC/CDC/SSDC에서 응시) 합격 후 교통경찰청(10 Ubi Ave 3)에서 전환 신청, 수수료 S$50. 한국 면허증은 싱가포르 등록 번역업체의 공식 영문 번역(또는 대사관 공증)이 필요해요. 총 S$70–80 정도, 카드는 약 2주 뒤에 나와요."
        },
        url: "https://www.btt.sg/en/blog/how-to-convert-foreign-driving-licence-singapore"
      },
      {
        id: "overseas-registration",
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
      title: { en: "DP & visa facts worth knowing", ko: "DP·비자 핵심 정보" },
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

    preschool: {
      title: { en: "Preschool now (ages 2–4)", ko: "지금 당장: 유치원 (2–4세)" },
      intro: {
        en: "Levels are named by the calendar year your child turns that age — not by a birthday cut-off. Preschool is not compulsory. Twins born around 2022–2024 land in N1/N2 now.",
        ko: "반 배정은 '그 해에 몇 살이 되는지' 기준이에요(생일 기준 아님). 유치원은 의무교육이 아니에요. 2022–2024년생 쌍둥이라면 지금 N1/N2에 해당해요."
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
        ko: "DP 자녀는 ECDA 인가 유치원 어디든 등록할 수 있어요 — DP가 있으면 학생비자(Student's Pass)가 따로 필요 없어요. 다만 정부 보조금은 시민권자 전용이라 외국인은 최고 요율을 내요. 그래서 '보조금 받는 로컬'과 '사립' 체인의 가격 차이가 우리 가족 기준으로는 크게 줄어들어요."
      },
      dpNoteUrl: "https://www.ica.gov.sg/reside/STP/apply/msf",
      fees: {
        title: { en: "Monthly full-day fees for foreigners (per child)", ko: "외국인 종일반 월 학비 (아이 1명 기준)" },
        cols: {
          tier: { en: "Tier", ko: "구분" },
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
          { tier: { en: "Premium", ko: "프리미엄" }, example: "EtonHouse (Newton)", fee: { en: "~S$2,800–3,000/mo equivalent (S$8,392–9,007 per term, 4 terms). 10% sibling discount — applies to twins", ko: "월 환산 약 S$2,800–3,000 (학기당 S$8,392–9,007, 연 4학기). 형제 할인 10% — 쌍둥이에게 적용" }, url: "https://www.etonhouse.edu.sg/school/newton/fees/" },
          { tier: { en: "", ko: "" }, example: "Odyssey", fee: { en: "~S$2,650–3,900", ko: "약 S$2,650–3,900" }, url: "https://skoolopedia.com/blog/top-30-preschools-in-singapore-complete-fee-comparison-and-parent-reviews/" },
          { tier: { en: "International school early years", ko: "국제학교 유아부" }, example: "SAIS Early Learning Village", fee: { en: "S$30,820/yr (pre-N/N full day, 2026/27)", ko: "연 S$30,820 (pre-N/N 종일반, 2026/27)" }, url: "https://www.sais.edu.sg/admissions/fees/early-year-fees-schedule/" },
          { tier: { en: "", ko: "" }, example: "Tanglin Trust", fee: { en: "Nursery S$36,300/yr", ko: "Nursery 연 S$36,300" }, url: "https://www.tts.edu.sg/admissions/fees" },
          { tier: { en: "Korean option", ko: "한국 학교 옵션" }, example: { en: "Singapore Korean International School kindergarten (from age 3)", ko: "싱가포르한국국제학교 유치부 (3세부터)" }, fee: { en: "~S$13,425/yr ≈ S$1,120/mo + S$3,270 one-time (verify with admission@skis.kr)", ko: "연 약 S$13,425 ≈ 월 S$1,120 + 입학금 등 1회성 S$3,270 (admission@skis.kr로 확인)" }, verify: true, url: "https://www.msmc.global/singapore-korean-international-school/" }
        ]
      },
      twins: {
        title: { en: "Twins math", ko: "쌍둥이 계산법" },
        body: {
          en: "Everything ×2. Anchor operator ≈ S$2,400–2,600/month total; mid-tier ≈ S$3,400–5,200/month total. Sibling discounts of 5–10% exist at some chains (EtonHouse gives 10%); twin-specific discounts are rare.",
          ko: "모든 비용이 ×2예요. 앵커 오퍼레이터 기준 월 합계 약 S$2,400–2,600, 중가 사립은 월 S$3,400–5,200. 일부 체인에 형제 할인 5–10%가 있고(EtonHouse는 10%), 쌍둥이 전용 할인은 드물어요."
        }
      },
      waitlist: {
        title: { en: "Waitlists", ko: "대기 리스트" },
        body: {
          en: "Popular centres fill 12–18 months ahead. January (start-of-year) intakes are the easiest point to get two places together — start touring the moment you land.",
          ko: "인기 센터는 12–18개월 전에 마감돼요. 두 자리를 한 번에 잡기엔 1월(학년 시작) 입학이 가장 수월해요. 도착하자마자 투어를 시작하세요."
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
      title: { en: "Primary school paths (planning ahead)", ko: "초등학교 로드맵 (미리 보기)" },
      framing: {
        en: "P1 starts the year a child turns 7 — for twins born around 2022–2024 that means P1 around 2029–2031, so this is planning, not action. One honest note up front: Singapore has no official school tiers. Every \"tier\" below is informal expat/parent convention.",
        ko: "P1(초1)은 그 해 7세가 되는 해에 시작해요 — 2022–2024년생 쌍둥이라면 대략 2029–2031년이라 지금은 '준비' 단계예요. 미리 솔직하게 말씀드리면, 싱가포르에 공식적인 학교 등급은 없어요. 아래의 '티어'는 모두 학부모들 사이의 비공식 관행이에요."
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
            en: "Twins are separate applicants — there is no same-school guarantee in Phase 3. Verify with MOE.",
            ko: "쌍둥이는 각각 별도 지원자예요 — Phase 3에서는 같은 학교 배정이 보장되지 않아요. MOE에 직접 확인하세요.",
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
          tier: { en: "Tier", ko: "티어" },
          schools: { en: "Schools", ko: "학교" },
          fees: { en: "Fees / year", ko: "연간 학비" },
          waitlist: { en: "Waitlist reality", ko: "대기 현실" },
          eal: { en: "EAL (English support)", ko: "EAL (영어 지원)" }
        },
        rows: [
          {
            tier: "Tier 1",
            schools: { en: "Legacy non-profit flagships: Singapore American School (Woodlands, US/AP) · Tanglin Trust (One-North, British → A-Level/IB; Y1 S$45,375) · UWCSEA Dover & Tampines (IB; K1–G1 first year S$48,606 incl. levy) · Dulwich College (Bukit Batok, British → IB, ~S$35–38k early years)", ko: "전통 비영리 명문: Singapore American School (우드랜즈, 미국/AP) · Tanglin Trust (원노스, 영국식 → A-Level/IB; Y1 S$45,375) · UWCSEA Dover & Tampines (IB; K1–G1 첫해 S$48,606, 부담금 포함) · Dulwich College (부킷 바톡, 영국식 → IB, 유아부 약 S$35–38k)" },
            fees: "S$38–60k",
            waitlist: { en: "Multi-year waitlists, selective. UWCSEA applications open 1 Sep for the following year", ko: "수년 대기, 선발형. UWCSEA는 매년 9월 1일에 이듬해 지원 오픈" },
            eal: { en: "Selective entry — not the EAL-friendly route", ko: "선발형 입학 — 영어 지원 중심 경로는 아니에요" }
          },
          {
            tier: "Tier 1.5",
            schools: { en: "Premium / local-international flagships: SJII (Thomson; 50% local cohort, strong IB) · NLCS Singapore (Depot Rd, selective) · Canadian International School (Lakeside; Chinese/English dual-language) · SAIS (Woodleigh; IB+AP, rolling admissions, Early Learning Village ages 2–6) · Australian International School (Serangoon)", ko: "프리미엄 · 로컬-국제 혼합 명문: SJII (톰슨; 학생 50%가 로컬, IB 강세) · NLCS Singapore (Depot Rd, 선발형) · Canadian International School (레이크사이드; 중국어/영어 이중언어) · SAIS (우드리; IB+AP, 수시 입학, 2–6세 Early Learning Village 운영) · Australian International School (세랑군)" },
            fees: "S$35–56k",
            waitlist: { en: "SAIS rolling admissions; others vary", ko: "SAIS는 수시 입학, 나머지는 학교별 상이" },
            eal: { en: "CIS — strong EAL", ko: "CIS — EAL 지원 강함" }
          },
          {
            tier: "Tier 2",
            schools: { en: "Established mid-tier: Dover Court (Nord Anglia; inclusive) · GESS (Bukit Timah; German/European + IB) · Nexus (Aljunied) · Overseas Family School (Pasir Ris) · Chatsworth (Bukit Timah)", ko: "안정적인 중상위권: Dover Court (Nord Anglia; 포용적 학풍) · GESS (부킷 티마; 독일/유럽계 + IB) · Nexus (알주니드) · Overseas Family School (파시르 리스) · Chatsworth (부킷 티마)" },
            fees: "S$28–45k",
            waitlist: { en: "Moderate waitlists", ko: "대기 보통" },
            eal: { en: "Strong EAL support (Dover Court, Nexus) — the practical route for Korean-speaking kids", ko: "EAL 지원 강함 (Dover Court, Nexus) — 한국어가 모어인 아이에게 현실적인 경로" }
          },
          {
            tier: "Tier 3",
            schools: { en: "Value international: One World International (Jurong/Mountbatten; nationality caps) · Invictus · Middleton by EtonHouse (Tampines/Upper Bukit Timah)", ko: "실속형 국제학교: One World International (주롱/마운트배튼; 국적별 정원 제한) · Invictus · Middleton by EtonHouse (탐피니스/어퍼 부킷 티마)" },
            fees: "S$15–28k",
            waitlist: { en: "Direct entry", ko: "바로 입학 가능" },
            eal: { en: "—", ko: "—" }
          }
        ],
        extras: {
          en: "Extras at every tier: application S$290–3,500, enrolment S$2,900–5,780, first-year development levy S$3,000–10,000. Sector guidance: apply ~12 months ahead; Tier 1 waitlists are multi-year.",
          ko: "모든 티어 공통 추가 비용: 지원비 S$290–3,500, 등록비 S$2,900–5,780, 첫해 발전기금 S$3,000–10,000. 업계 통념상 약 12개월 전에 지원하고, Tier 1은 대기가 수년이에요."
        },
        extrasUrl: "https://www.tutopiya.com/blog/parents-blog/international-school-fees-structure-singapore/",
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
              en: "Kids with developing English → Tier 1.5/2 with strong EAL (CIS, Nexus, Dover Court).",
              ko: "영어가 아직 자라는 아이라면 → EAL이 강한 Tier 1.5/2 (CIS, Nexus, Dover Court)를 보세요."
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
    market: {
      title: { en: "Market context (2026)", ko: "시장 분위기 (2026)" },
      paras: [
        {
          en: "The rental market is roughly flat: the 2025 index rose 1.9%, and 2026 quarterly moves are small and mixed (Q2 2026: prime central +1.2%, city fringe 0.0%, suburbs −0.3%; vacancy 6.4%; ~61k units in the pipeline). The practical line: tenant-friendly in supply-heavy suburbs, firm in prime central — and transacted rents typically land 3–5% below asking.",
          ko: "임대 시장은 대체로 보합세예요. 2025년 지수는 +1.9%였고, 2026년 분기 변동은 작고 엇갈려요(2026년 2분기: 핵심 중심부 +1.2%, 시티 프린지 0.0%, 외곽 −0.3%; 공실률 6.4%, 공급 대기 약 6만 1천 세대). 실전 감각으로는: 공급 많은 외곽은 세입자 우위, 핵심 중심부는 집주인 우위 — 실제 계약 임대료는 보통 호가보다 3–5% 낮게 성사돼요."
        },
        {
          en: "EP holders CAN rent whole HDB flats (pass valid ≥6 months; 6-month minimum tenancy; non-citizen quota per block — check the HDB quota tool). The condo trade-off: pool, playground, security and helper-room layouts vs HDB's 30–50% lower rent and bigger floorplates.",
          ko: "EP 소지자도 HDB(공공주택) 전체를 임대할 수 있어요(패스 잔여기간 6개월 이상, 최소 6개월 계약, 동별 외국인 쿼터 있음 — HDB 쿼터 조회 도구로 확인). 콘도와의 트레이드오프는: 수영장·놀이터·보안·헬퍼룸 구조 vs HDB의 30–50% 저렴한 임대료와 더 넓은 실평수예요."
        }
      ],
      srcUrl: "https://propertynet.sg/private-rents-rise-suburban-condo-prices-dip-q2-2026-landlords-tenants/",
      hdbUrl: "https://services2.hdb.gov.sg/webapp/BR12AWNCQuota/BR12PEnquire.jsp"
    },
    criteria: {
      title: { en: "What this family is optimising for", ko: "우리 가족의 우선순위" },
      items: [
        { label: { en: "Walk to MRT, supermarket, restaurants", ko: "MRT·마트·식당 도보 거리" }, weight: "high" },
        { label: { en: "Schools & enrichment nearby", ko: "유치원·학원 근접성" }, weight: "high" },
        { label: { en: "Families with young kids around", ko: "또래 아이 있는 가족 밀집도" }, weight: "med" },
        { label: { en: "Condo amenities (pool, playground)", ko: "콘도 편의시설 (수영장·놀이터)" }, weight: "med" },
        { label: { en: "3BR + helper room layout", ko: "방 3개 + 헬퍼룸 구조" }, weight: "med" },
        { label: { en: "Commute to work", ko: "직장 통근 거리" }, weight: "low" }
      ],
      weightLabels: {
        high: { en: "top priority", ko: "최우선" },
        med: { en: "important", ko: "중요" },
        low: { en: "lower priority", ko: "후순위" }
      },
      commuteTodo: {
        en: "TODO: add a commute column once the office location is confirmed.",
        ko: "TODO: 사무실 위치가 확정되면 통근 시간 정보를 추가하세요."
      }
    },
    comparison: {
      title: { en: "The five areas at a glance", ko: "후보 다섯 지역 한눈에 보기" },
      note: { en: "3BR condo asking rents, Aug 2026 listing snapshots.", ko: "3BR 콘도 호가 기준, 2026년 8월 매물 스냅샷이에요." },
      cols: {
        area: { en: "Area", ko: "지역" },
        mrt: { en: "MRT walkability", ko: "MRT 접근성" },
        community: { en: "Community", ko: "커뮤니티" },
        kids: { en: "Preschool / enrichment", ko: "유치원·학원 밀도" },
        rent: { en: "3BR condo rent", ko: "3BR 콘도 임대료" },
        vibe: { en: "Vibe", ko: "분위기" }
      }
    },
    map: {
      title: { en: "Map — a visual table of contents", ko: "지도 — 한눈에 보는 목차" },
      landmarks: {
        skis: { en: "Korean School (SKIS)", ko: "한국국제학교 (SKIS)" },
        ktown: { en: "K-town · Tanjong Pagar", ko: "K-타운 · 탄종 파가" },
        cbd: { en: "CBD", ko: "CBD (도심)" },
        changi: { en: "Changi Airport", ko: "창이공항" }
      },
      lines: {
        ewl: { en: "East–West Line", ko: "동서선 (EWL)" },
        nsl: { en: "North–South Line", ko: "남북선 (NSL)" },
        ccl: { en: "Circle Line", ko: "서클선 (CCL)" },
        dtl: { en: "Downtown Line", ko: "다운타운선 (DTL)" },
        tel: { en: "Thomson–East Coast Line", ko: "톰슨-이스트코스트선 (TEL)" }
      }
    },
    areas: [
      {
        id: "bukit-timah",
        name: { en: "Bukit Timah / Upper Bukit Timah", ko: "Bukit Timah · Upper Bukit Timah (부킷 티마)" },
        short: { en: "Bukit Timah", ko: "부킷 티마" },
        vibe: { en: "Leafy", ko: "숲세권" },
        gmapsQuery: "Bukit Timah, Singapore",
        cmp: {
          mrt: { en: "Downtown Line: Beauty World, KAP, Sixth Ave, Tan Kah Kee; Hillview/Cashew for Upper BT", ko: "다운타운선: Beauty World, KAP, Sixth Ave, Tan Kah Kee; 어퍼 부킷 티마는 Hillview/Cashew" },
          community: { en: "Expats + well-heeled locals; the main Korean cluster", ko: "외국인 + 여유 있는 로컬; 한인 가족 최대 밀집지" },
          kids: { en: "Very high — preschools + the elite school belt", ko: "매우 높음 — 유치원 + 명문 학군 벨트" },
          rent: { en: "S$4,800–6,500 (prime D10 S$7k+)", ko: "S$4,800–6,500 (D10 핵심부는 S$7k+)" }
        },
        pitch: {
          en: "Green, quiet and school-obsessed — and the doorstep of the Korean school. Upper Bukit Timah (Beauty World–Hillview) is the value end of the prestige belt: the same leafy calm at a friendlier rent.",
          ko: "푸르고 조용하고, 온 동네가 교육에 진심이에요 — 그리고 한국학교가 바로 문앞이에요. 어퍼 부킷 티마(Beauty World–Hillview)는 명문 벨트의 '가성비 구간'으로, 같은 숲세권 분위기를 더 합리적인 임대료로 누릴 수 있어요."
        },
        walk: {
          en: "Downtown Line stations: Beauty World, King Albert Park, Sixth Avenue, Tan Kah Kee (Hillview/Cashew for Upper BT). Beauty World Centre + Bukit Timah Food Centre for hawker food; Cold Storage/FairPrice at Beauty World and KAP; The Grandstand for family dining and toddler soft-play. Korean food & groceries: Koryo Mart (Beauty World), Sol Mart (Bukit Timah Plaza), Seoul Butchery, Mom's Table.",
          ko: "다운타운선 역: Beauty World, King Albert Park, Sixth Avenue, Tan Kah Kee (어퍼 부킷 티마는 Hillview/Cashew). 호커 음식은 Beauty World Centre + Bukit Timah Food Centre, 장보기는 Beauty World와 KAP의 Cold Storage/FairPrice, 가족 외식과 유아 실내놀이터는 The Grandstand. 한국 음식·식료품: Koryo Mart(Beauty World), Sol Mart(Bukit Timah Plaza), Seoul Butchery, Mom's Table."
        },
        kids: {
          en: "EtonHouse Upper Bukit Timah + Vanda + Zhong Hua campuses; White Lodge Upper Bukit Timah; Blue House at The Grandstand. Long term, this is the elite local school belt (Nanyang, Hwa Chong, MGS, Pei Hwa Presbyterian) — mostly relevant if PR happens.",
          ko: "EtonHouse 어퍼 부킷 티마·Vanda·Zhong Hua 캠퍼스, White Lodge 어퍼 부킷 티마, The Grandstand의 Blue House가 있어요. 장기적으로는 명문 로컬 학군 벨트(Nanyang, Hwa Chong, MGS, Pei Hwa Presbyterian)인데, 이건 영주권을 받으면 의미가 생기는 이야기예요."
        },
        community: {
          en: "Expats and well-heeled Singaporeans side by side. German/Swiss/Dutch school families (GESS legacy, Swiss School, Hollandse School) — and the main Korean family cluster, anchored by SKIS at 71 Bukit Tinggi Road. High family density.",
          ko: "외국인과 여유 있는 싱가포르 가정이 섞여 살아요. 독일·스위스·네덜란드 학교 가족들(GESS, Swiss School, Hollandse School)이 있고 — 무엇보다 71 Bukit Tinggi Road의 SKIS를 중심으로 한 싱가포르 최대 한인 가족 클러스터예요. 아이 있는 가정 밀도가 높아요."
        },
        property: {
          en: "Condo and landed territory — almost no HDB. 3BR S$4,800–6,500: The Cascadia (3BR S$4,800–6,500), plus Maplewoods and Signature Park — the older, larger stock tends to have helper rooms. The prime D10 stretch runs S$7k+.",
          ko: "콘도와 단독주택 지역이라 HDB는 거의 없어요. 3BR S$4,800–6,500: The Cascadia(3BR S$4,800–6,500), 그리고 Maplewoods, Signature Park — 오래되고 넓은 단지일수록 헬퍼룸이 있는 편이에요. D10 핵심 구간은 S$7k 이상이에요."
        },
        srcUrl: "https://www.99.co/singapore/rent/condos-apartments/the-cascadia"
      },
      {
        id: "clementi",
        name: { en: "Buona Vista – Clementi – West Coast", ko: "Buona Vista · Clementi · West Coast (부오나 비스타 · 클레멘티)" },
        short: { en: "Clementi", ko: "클레멘티" },
        vibe: { en: "Practical", ko: "실속" },
        gmapsQuery: "Clementi, Singapore",
        cmp: {
          mrt: { en: "Buona Vista (EWL+CCL interchange), Clementi, Dover; one-north/Kent Ridge on CCL", ko: "Buona Vista(동서선+서클선 환승), Clementi, Dover; 서클선 one-north/Kent Ridge" },
          community: { en: "Most local of the five; quiet Japanese undercurrent", ko: "다섯 곳 중 가장 로컬; 일본인 가족이 조용히 많아요" },
          kids: { en: "Dense anchor-operator coverage; fewer boutique preschools", ko: "앵커 오퍼레이터 촘촘; 부티크 유치원은 적음" },
          rent: { en: "S$5,000–6,500", ko: "S$5,000–6,500" }
        },
        pitch: {
          en: "The best value-for-commute if work is at one-north, NUS, or the CBD via the East–West Line. Authentically local — hawker food and heartland malls — trading expat polish for space and savings.",
          ko: "직장이 one-north, NUS이거나 동서선으로 CBD에 다닌다면 통근 대비 가성비가 가장 좋아요. 호커 음식과 동네 몰이 있는 진짜 로컬 동네 — 외국인 동네의 세련됨 대신 넓은 공간과 절약을 얻는 선택이에요."
        },
        walk: {
          en: "Buona Vista (EWL+CCL interchange), Clementi and Dover on the East–West Line; one-north/Kent Ridge on the Circle Line. Clementi Mall + the Clementi 448 hawker centre; The Star Vista; West Coast Park has some of the island's best playgrounds.",
          ko: "동서선의 Buona Vista(서클선 환승), Clementi, Dover역과 서클선의 one-north/Kent Ridge역이 있어요. Clementi Mall과 Clementi 448 호커센터, The Star Vista가 가깝고, West Coast Park에는 싱가포르에서 손꼽히는 놀이터가 있어요."
        },
        kids: {
          en: "Dense anchor-operator coverage (My First Skool, PCF) — plenty of affordable places; weaker on boutique international preschools.",
          ko: "앵커 오퍼레이터(My First Skool, PCF)가 촘촘해서 합리적인 선택지가 많아요. 대신 부티크·국제 유치원은 적은 편이에요."
        },
        community: {
          en: "The most local-majority of the five. A quiet Japanese family undercurrent (the Japanese School has Clementi and West Coast campuses) and an academic/tech expat crowd around NUS and one-north. Korean presence: modest.",
          ko: "다섯 곳 중 로컬 비중이 가장 높아요. 일본인 학교(클레멘티·웨스트코스트 캠퍼스) 덕에 일본 가족이 조용히 많고, NUS·one-north 주변에는 학계·테크 외국인들이 살아요. 한인은 많지 않은 편이에요."
        },
        property: {
          en: "3BR S$5,000–6,500: Clement Canopy (~S$6,200), Normanton Park (S$6,000–6,500); older Trilinq and Parc Clematis run cheaper. Best HDB play of the five: Clementi 4-room median S$3,900, Queenstown S$4,000 — saving S$2,000+/month.",
          ko: "3BR S$5,000–6,500: Clement Canopy(약 S$6,200), Normanton Park(S$6,000–6,500), 조금 오래된 Trilinq·Parc Clematis는 더 저렴해요. 다섯 지역 중 HDB 활용도가 최고: Clementi 방4개 중위 임대료 S$3,900, Queenstown S$4,000 — 콘도 대비 월 S$2,000 이상 아껴요."
        },
        srcUrl: "https://www.propertyguru.com.sg/property-for-rent/at-the-clement-canopy-22866"
      },
      {
        id: "east-coast",
        name: { en: "East Coast / Katong", ko: "East Coast · Katong (이스트코스트 · 카통)" },
        short: { en: "East Coast", ko: "이스트코스트" },
        vibe: { en: "Breezy", ko: "여유" },
        gmapsQuery: "Katong, Singapore",
        cmp: {
          mrt: { en: "Thomson–East Coast Line: Katong Park, Tanjong Katong, Marine Parade, Marine Terrace", ko: "톰슨-이스트코스트선: Katong Park, Tanjong Katong, Marine Parade, Marine Terrace" },
          community: { en: "Established Western expat pocket in a heritage-local area", ko: "전통 로컬 지역 속 오래된 서양 외국인 커뮤니티" },
          kids: { en: "Strong boutique preschool scene", ko: "부티크 유치원이 강세" },
          rent: { en: "S$6,000–7,800", ko: "S$6,000–7,800" }
        },
        pitch: {
          en: "Beach-park weekends, stroller-flat terrain, and Singapore's best casual food. Freehold 3BRs here buy noticeably more square footage per dollar than District 10, and the TEL finally connects it properly to town.",
          ko: "주말마다 바닷가 공원, 유모차 끌기 좋은 평지, 그리고 싱가포르 최고의 캐주얼 맛집 동네예요. 같은 돈으로 D10보다 눈에 띄게 넓은 프리홀드 3BR을 구할 수 있고, TEL 개통으로 도심 연결도 좋아졌어요."
        },
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
          en: "3BR S$6,000–7,800: The Esta (1,300–1,700 sqft, many units with helper rooms, S$6,000–7,800); One Amber and Amber Park sit above the band. HDB: Marine Parade 4-room median S$3,500, right by the TEL and Parkway Parade.",
          ko: "3BR S$6,000–7,800: The Esta(1,300–1,700sqft, 헬퍼룸 있는 유닛 다수, S$6,000–7,800), One Amber와 Amber Park는 이 범위보다 위예요. HDB는 Marine Parade 방4개 중위 S$3,500 — TEL역과 Parkway Parade 바로 옆이에요."
        },
        srcUrl: "https://www.99.co/singapore/condos-apartments/the-esta"
      },
      {
        id: "holland-village",
        name: { en: "Holland Village / Farrer Road", ko: "Holland Village · Farrer Road (홀랜드 빌리지)" },
        short: { en: "Holland V", ko: "홀랜드 빌리지" },
        vibe: { en: "Sociable", ko: "사교" },
        gmapsQuery: "Holland Village, Singapore",
        cmp: {
          mrt: { en: "Holland Village + Farrer Road (CCL); Buona Vista interchange one stop away", ko: "서클선 Holland Village + Farrer Road; 환승역 Buona Vista가 한 정거장" },
          community: { en: "The traditional Western-expat heartland", ko: "전통적인 서양 외국인 중심지" },
          kids: { en: "High — Odyssey, EtonHouse Vanda within reach", ko: "높음 — Odyssey, EtonHouse Vanda 근접" },
          rent: { en: "S$7,000–10,000+", ko: "S$7,000–10,000+" }
        },
        pitch: {
          en: "The default answer when expats ask \"where does everyone live\" — unmatched brunch-and-playdate density with the Botanic Gardens on the doorstep. You pay a S$1,500–3,000/month premium for the network effect.",
          ko: "외국인들이 '다들 어디 살아요?'라고 물으면 나오는 기본 답이에요 — 브런치와 플레이데이트 밀도가 압도적이고 보타닉 가든이 문앞이에요. 이 네트워크 효과에 월 S$1,500–3,000의 프리미엄을 내는 셈이에요."
        },
        walk: {
          en: "Holland Village and Farrer Road on the Circle Line; the Buona Vista interchange is one stop away. The Holland V enclave (Cold Storage, wet market, restaurants), One Holland Village mall, Empress Market.",
          ko: "서클선 Holland Village역과 Farrer Road역이 있고, 환승역 Buona Vista가 한 정거장이에요. Holland V 중심가(Cold Storage, 재래시장, 레스토랑), One Holland Village 몰, Empress Market이 걸어서 닿아요."
        },
        kids: {
          en: "Odyssey (Kay Siang Road), EtonHouse Vanda nearby, Blue House at The Grandstand — and SKIS is within reach.",
          ko: "Odyssey(Kay Siang Road), EtonHouse Vanda가 가깝고, The Grandstand의 Blue House도 있어요. SKIS도 다닐 만한 거리예요."
        },
        community: {
          en: "The traditional Western-expat heartland: high expat and family density, and hiring a helper is the near-universal norm. Korean families are present at the fringe of the Bukit Timah cluster.",
          ko: "전통적인 서양 외국인 중심지예요. 외국인·가족 밀도가 높고, 입주 헬퍼 고용이 거의 기본값인 동네예요. 부킷 티마 한인 클러스터의 가장자리라 한인 가족도 어느 정도 있어요."
        },
        property: {
          en: "The priciest of the five — 3BR S$7,000–10,000+: d'Leedon (S$7,000–8,500, at Farrer Road MRT), One Holland Village Residences (~S$10,000); older Sommerville Park and Spanish Village have utility rooms (verify at listing level). Prime central = the least negotiating room. The HDB hack: Holland Close/Ghim Moh blocks (Queenstown 4-room median S$4,000) give the Holland Village lifestyle at half price, quota permitting. If you'd trade space for location: One Holland Village 2BR runs S$6,200–7,000.",
          ko: "다섯 곳 중 가장 비싸요 — 3BR S$7,000–10,000+: d'Leedon(S$7,000–8,500, Farrer Road역 바로 앞), One Holland Village Residences(약 S$10,000). 오래된 Sommerville Park·Spanish Village에는 유틸리티룸이 있어요(매물별 확인 필요). 핵심 중심부라 협상 여지가 가장 적어요. HDB 꿀팁: Holland Close/Ghim Moh 단지(Queenstown 방4개 중위 S$4,000)는 '홀랜드 빌리지 라이프를 반값에' — 외국인 쿼터가 허용된다면요. 공간을 줄이고 위치를 택한다면 One Holland Village 2BR이 S$6,200–7,000이에요."
        },
        verify: true,
        srcUrl: "https://www.propertyguru.com.sg/condo-for-rent/at-d-leedon-former-farrer-court-20575"
      },
      {
        id: "newton",
        name: { en: "Newton / Novena", ko: "Newton · Novena (뉴턴 · 노베나)" },
        short: { en: "Newton", ko: "뉴턴" },
        vibe: { en: "Central", ko: "도심" },
        gmapsQuery: "Novena, Singapore",
        cmp: {
          mrt: { en: "Newton (NSL+DTL interchange), Novena (NSL)", ko: "Newton(남북선+다운타운선 환승), Novena(남북선)" },
          community: { en: "Young professionals, mixed nationalities; local affluent families", ko: "젊은 직장인 + 다국적; 로컬 부유층 가족" },
          kids: { en: "United Square — an entire mall of toddler enrichment", ko: "United Square — 몰 전체가 유아 학원가" },
          rent: { en: "S$6,500–12,000 (wide band)", ko: "S$6,500–12,000 (범위 넓음)" }
        },
        pitch: {
          en: "Maximum convenience: two MRT lines, Orchard next door, Singapore's biggest medical hub, and an entire mall of toddler enrichment at United Square. City-condo living rather than village feel — ideal if one parent commutes hard.",
          ko: "편의성의 끝판왕이에요. MRT 두 개 노선, 옆동네가 오차드, 싱가포르 최대 의료 허브, 그리고 몰 전체가 유아 학원가인 United Square까지. 동네 감성보다는 도심 콘도 라이프에 가까워서, 한 명이 통근을 많이 해야 한다면 최적이에요."
        },
        walk: {
          en: "Newton (North–South + Downtown Line interchange) and Novena (North–South Line). Newton Food Centre; United Square, Velocity and Square 2 malls; Cold Storage and FairPrice Finest; Sol Mart Korean grocery at Square 2.",
          ko: "Newton역(남북선+다운타운선 환승)과 Novena역(남북선)이 있어요. Newton Food Centre, 몰은 United Square·Velocity·Square 2, 마트는 Cold Storage와 FairPrice Finest. Square 2에는 한국 마트 Sol Mart가 있어요."
        },
        kids: {
          en: "EtonHouse Newton (39 Newton Road); the United Square enrichment cluster (Julia Gabriel and others — verify current tenants); paediatric-medical convenience with Mount Elizabeth Novena and Thomson Medical nearby.",
          ko: "EtonHouse Newton(39 Newton Road), United Square 학원 클러스터(Julia Gabriel 등 — 현재 입점은 확인 필요), 그리고 Mount Elizabeth Novena·Thomson Medical이 가까워 소아과 접근성이 뛰어나요."
        },
        kidsVerify: true,
        community: {
          en: "Younger expats and professional couples; mixed-nationality with no single cluster; strong local affluent families (the ACS/SJI/CHIJ school belt). Lower expat-family density than Bukit Timah or Holland V.",
          ko: "젊은 외국인 직장인과 전문직 커플이 많고, 특정 국적 클러스터 없이 다국적이에요. 로컬 부유층 가족도 많아요(ACS/SJI/CHIJ 학군 벨트). 외국인 가족 밀도는 부킷 티마나 홀랜드 빌리지보다 낮아요."
        },
        property: {
          en: "A wide band. Mainstream 3BR S$6,500–9,000 (Amaryllis Ville ~S$7–8k); newer/larger stock S$9,000–12,000 (Soleil @ Sinaran S$11,800; enchanté S$8,800). HDB: basically none in-district — Whampoa/Toa Payoh nearby at S$3,600.",
          ko: "가격 범위가 넓어요. 일반적인 3BR은 S$6,500–9,000(Amaryllis Ville 약 S$7–8k), 신축·대형은 S$9,000–12,000(Soleil @ Sinaran S$11,800, enchanté S$8,800). HDB는 이 지역 안에는 거의 없고, 인근 Whampoa/Toa Payoh가 S$3,600이에요."
        },
        srcUrl: "https://www.edgeprop.sg/condo-apartment/amaryllis-ville"
      }
    ],
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
      en: "With twin toddlers, a live-in helper (MDW — migrant domestic worker) is one of the most common quality-of-life decisions expat families make here. EP families are eligible; first-time employers complete MOM's Employers' Orientation Programme at least 2 working days before the Work Permit application.",
      ko: "쌍둥이 유아를 키우는 집이라면, 입주 헬퍼(MDW) 고용은 이곳 외국인 가정이 가장 흔하게 선택하는 삶의 질 투자예요. EP 가정은 고용 자격이 있고, 첫 고용주는 Work Permit 신청 최소 2영업일 전에 MOM의 고용주 오리엔테이션(EOP)을 이수해야 해요."
    },
    items: [
      {
        title: { en: "Levy", ko: "고용부담금 (Levy)" },
        body: {
          en: "S$300/month at the standard rate. The S$60 concessionary rate does NOT apply to this family — it requires a Singapore-citizen child, a detail agency websites often gloss over.",
          ko: "표준 요율 월 S$300이에요. S$60 할인 요율은 우리 가족에게는 해당되지 않아요 — 싱가포르 시민권 자녀가 있어야 하는 조건인데, 에이전시 사이트들이 이 부분을 얼버무리는 경우가 많아요."
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
          en: "Transfer helper (already in Singapore): ~2 weeks. Fresh overseas hire: 6–8+ weeks. With twins, start the search before or immediately on arrival.",
          ko: "트랜스퍼 헬퍼(이미 싱가포르 체류 중)는 약 2주, 해외 신규 채용은 6–8주 이상 걸려요. 쌍둥이 육아라면 도착 전이나 도착 즉시 알아보기 시작하세요."
        },
        url: "https://www.jazhelpers.com.sg/guides/how-long-hiring-a-helper-takes"
      }
    ]
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
    childSeats: {
      title: { en: "Child seats — twins under 1.35m", ko: "카시트 — 키 1.35m 미만 쌍둥이" },
      body: {
        en: "Child restraints are mandatory in private cars AND in Grab/private-hire (not exempt — S$150 fine + 3 demerit points for the driver). Taxis ARE exempt (kids ride in the rear seat). Options: GrabFamily (car-seat-equipped, ~S$2–5 extra, limited availability), carry portable seats, or simply use taxis (the CDG Zig app).",
        ko: "자가용과 Grab 같은 승차공유 차량에서는 카시트가 의무예요(면제 아님 — 위반 시 벌금 S$150 + 벌점 3점). 택시는 면제예요(아이는 뒷좌석 탑승). 선택지: GrabFamily(카시트 장착 차량, 추가 요금 약 S$2–5, 배차 제한적), 휴대용 카시트 지참, 아니면 그냥 택시 이용(CDG Zig 앱)이에요."
      },
      url: "https://singaporelegaladvice.com/car-seat-rules-singapore/"
    }
  },

  apps: {
    title: { en: "Apps to install", ko: "설치할 앱" },
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
      { name: "CDG Zig", why: { en: "Taxis — child-seat-exempt, so the easiest twin transport.", ko: "택시 호출 — 카시트 면제라 쌍둥이 이동에 가장 간편해요." } },
      { name: "myENV", why: { en: "Rain radar — trust it, this is the tropics.", ko: "비 레이더예요 — 열대지방이니 믿고 쓰세요." } },
      { name: { en: "한국촌 app", ko: "한국촌 앱" }, why: { en: "The Korean community hub in your pocket.", ko: "한인 커뮤니티 허브를 주머니에 넣는 셈이에요." } }
    ],
    srcUrl: "https://www.expatica.com/sg/about/basics/singapore-apps-2172803/"
  },

  costs: {
    title: { en: "Monthly cost snapshot", ko: "월 생활비 한눈에" },
    intro: {
      en: "A realistic family-of-four monthly budget. Low = anchor preschool + value area; High = mid-tier preschool + pricier area.",
      ko: "4인 가족의 현실적인 월 예산이에요. Low는 앵커 유치원 + 실속 지역, High는 중가 사립 유치원 + 비싼 지역 기준이에요."
    },
    cols: {
      item: { en: "Item", ko: "항목" },
      low: { en: "Low", ko: "낮게" },
      high: { en: "High", ko: "높게" },
      note: { en: "Note", ko: "메모" }
    },
    rows: [
      { item: { en: "Rent (3BR)", ko: "월세 (3BR)" }, low: "S$5,000", high: "S$8,000+", note: { en: "By area choice; the HDB route is S$3,300–4,400", ko: "지역에 따라 달라요; HDB 노선이면 S$3,300–4,400" } },
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
      item: { en: "Total excluding rent", ko: "월세 제외 합계" },
      low: "~S$5,000",
      high: "~S$12,000",
      note: { en: "Typical mid case with employer insurance ≈ S$6,500–8,000", ko: "회사 보험이 있는 일반적인 중간 케이스는 약 S$6,500–8,000이에요" }
    },
    insuranceUrl: "https://www.pacificprime.com/blog/health-insurance-cost-in-singapore.html"
  },

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
    openTitle: { en: "Open questions for the family", ko: "가족이 확인할 것들" },
    openItems: [
      { en: "Office location → adds a commute column to the area comparison.", ko: "사무실 위치 → 지역 비교에 통근 시간을 더할 수 있어요." },
      { en: "Rent budget → narrows the area shortlist.", ko: "월세 예산 → 후보 지역을 좁힐 수 있어요." },
      { en: "Church tradition (Protestant denomination vs Catholic) → reorders the church list.", ko: "교회 전통(개신교 교단 또는 천주교) → 교회 목록의 우선순위가 달라져요." },
      { en: "Move date → anchors the waitlist and helper timelines.", ko: "이사 날짜 → 유치원 대기와 헬퍼 채용 일정의 기준이 돼요." },
      { en: "SKIS current fees + Saturday school intake age → email admission@skis.kr.", ko: "SKIS 최신 학비와 토요한글학교 입학 연령 → admission@skis.kr로 문의하세요." },
      { en: "Employer insurance coverage for dependants → changes the budget by up to S$2,100/month.", ko: "회사 보험의 가족 보장 범위 → 월 예산이 최대 S$2,100까지 달라져요." }
    ]
  }
};
