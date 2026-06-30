/**
 * V3-scoped i18n. Kept separate from the global `/src/i18n` to avoid bloating
 * the existing `Translations` type and to keep V3 mergeable / removable.
 * When V3 becomes the default, these strings collapse into the global tree.
 */
import { useTranslation } from '../i18n'
import type { Persona } from './PersonaContext'

interface PersonaCopy {
  /** Card label shown in the Hero picker, e.g. "Học sinh". */
  label: string
  /** Pronoun used in copy, e.g. "em", "thầy/cô". */
  pronoun: string
  /** One-sentence "for X, we …" pitch shown under the picker. */
  pitch: string
  /** Verb-led primary CTA — what they do next. */
  cta: string
  /** Verb-led secondary action. */
  ctaSecondary: string
  /** 3 surface highlights surfaced when this persona is active. */
  surfaces: string[]
}

interface V3Strings {
  nav: {
    badge: string
    backToV2: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineHighlight: string
    headlineLine2: string
    subhead: string
    pickerLabel: string
    rotatingProofLabel: string
    rotatingProofSuffix: string
    explore: string
    reset: string
    /** Strings baked into the animated browser-chrome product mockup. */
    mockup: {
      appPowered: string
      generating: string
      quizLabel: string
      lessonLabel: string
      slidesLabel: string
      interactiveLabel: string
      speedLabel: string
      speedValue: string
      standardLabel: string
      standardValue: string
    }
  }
  personas: Record<Persona, PersonaCopy>
  surfaces: {
    eyebrow: string
    heading: string
    subhead: string
    items: Record<
      'compass' | 'miniApps' | 'class' | 'profile' | 'lumi',
      { name: string; tagline: string; description: string; status?: string }
    >
    legendLive: string
    legendBeta: string
    legendVision: string
  }
  proof: {
    eyebrow: string
    heading: string
    subhead: string
    apps: {
      title: string
      subtitle: string
      counterLabel: string
      counterValue: string
      cta: string
      /** Amber pill above the headline. */
      badge: string
      /** Two-line gradient headline. */
      headlineLine1: string
      headlineLine2: string
      /** Label above the featured-student trio. */
      featuredLabel: string
      /** Caption under the big animated counter. */
      counterCaption: string
      /** Per-tile sublabel on each marquee card. */
      tileBuiltBy: string
      /** "Today" label inside the decorative counter app-thumbnail. */
      thumbToday: string
      /** Four stat pills (value + label) under the marquee. */
      stats: { value: string; label: string }[]
      /** Closing differentiation line next to the CTA. */
      closing: string
      /** Primary CTA button text. */
      ctaButton: string
    }
    compass: {
      title: string
      subtitle: string
      pretestLabel: string
      pretestValue: string
      targetLabel: string
      targetValue: string
      bandLabel: string
      bandValue: string
      formulaLabel: string
      formulaValue: string
      cta: string
    }
    lumi: {
      title: string
      subtitle: string
      messages: { role: 'lumi' | 'user'; text: string }[]
      channelLabel: string
    }
  }
  trust: {
    eyebrow: string
    items: { value: string; label: string }[]
    badges: string[]
  }
  programs: {
    eyebrow: string
    heading: string
    subhead: string
    k12: { title: string; description: string; bullets: string[]; cta: string; meta: string }
    university: { title: string; description: string; bullets: string[]; cta: string; meta: string }
  }
  cta: {
    eyebrow: string
    headlineDefault: string
    subheadDefault: string
    primary: string
    secondary: string
  }
  testimonials: {
    eyebrow: string
    headingNeutral: string
    headingPersona: string
    /** Per-locale role/location/quote; name + persona stay shared (data lives in component). */
    items: Record<string, { role: string; location: string; quote: string }>
  }
  hub: {
    eyebrow: string
    headingBefore: string
    headingHighlight: string
    subhead: string
    previewBadge: string
    greeting: string
    greetingNeutralPitch: string
    /** Per-persona greeting name shown after "Xin chào,". */
    greetingNames: Record<Persona, string>
    soon: string
    sidebar: { home: string; docs: string; classes: string; profile: string; lumi: string }
    chips: { gen: string; grading: string; shipped: string }
    surfaces: { compass: string; miniApps: string; class: string; profile: string; lumi: string }
    quickStartLabel: string
    actions: { quiz: string; studyGuide: string; interactive: string }
    continueLabel: string
    continueAll: string
    /** Four "continue" cards — name + relative date. */
    continueItems: { name: string; date: string }[]
    lumiTeaser: string
    captionPersonaBefore: string
    captionPersonaAfter: string
    captionNeutral: string
    ctaButton: string
  }
  faq: {
    eyebrow: string
    heading: string
    items: { q: string; a: string }[]
  }
  tryIt: {
    eyebrow: string
    heading: string
    subhead: string
    tabs: { compass: string; miniApp: string }
  }
}

export const V3_VI: V3Strings = {
  nav: {
    badge: 'Bản xem trước · v3',
    backToV2: 'Quay về bản hiện tại',
  },
  hero: {
    eyebrow: '🇻🇳 Nền tảng AI Literacy đầu tiên tại Việt Nam',
    headlineLine1: 'Học cùng AI.',
    headlineHighlight: 'Xây cùng AI.',
    headlineLine2: 'Lớn cùng AI.',
    subhead:
      'Một hệ sinh thái — 5 bề mặt, 5 vai trò. Từ học sinh tiểu học làm app đầu đời, đến giáo viên ra giáo án, đến trường học triển khai năng lực số.',
    pickerLabel: 'Bạn là ai?',
    rotatingProofLabel: 'Học sinh đang xây',
    rotatingProofSuffix: '+ ứng dụng AI thật do học sinh tự tạo',
    explore: 'Khám phá bề mặt của bạn',
    reset: 'Xem tổng quan',
    mockup: {
      appPowered: 'Dùng AI',
      generating: 'AI đang soạn quiz về hàm số…',
      quizLabel: 'Bài kiểm tra',
      lessonLabel: 'Giáo án',
      slidesLabel: 'Slides',
      interactiveLabel: 'Tương tác',
      speedLabel: 'Tốc độ',
      speedValue: '30 giây',
      standardLabel: 'Chuẩn',
      standardValue: 'GDPT 2018',
    },
  },
  personas: {
    hs: {
      label: 'Học sinh',
      pronoun: 'em',
      pitch:
        'Em tự làm app AI của riêng mình, học qua mini app tương tác, và có Hồ sơ năng lực để khoe với bố mẹ.',
      cta: 'Bắt đầu hành trình',
      ctaSecondary: 'Xem hồ sơ mẫu',
      surfaces: ['Xây app AI đầu đời', 'Mini app tương tác', 'Hồ sơ năng lực số'],
    },
    gv: {
      label: 'Giáo viên',
      pronoun: 'thầy/cô',
      pitch:
        'Thầy cô có 13+ công cụ AI ra đề/giáo án trong 30 giây, lớp học số tự chấm, và bản đồ năng lực cả lớp.',
      cta: 'Tạo bài học miễn phí',
      ctaSecondary: 'Xem lớp học mẫu',
      surfaces: ['Mini Apps ra đề/giáo án', 'Lớp học AI tự chấm', 'Bản đồ năng lực lớp'],
    },
    ph: {
      label: 'Phụ huynh',
      pronoun: 'anh/chị',
      pitch:
        'Anh chị biết con đang học gì, mạnh yếu chỗ nào, qua bảng theo dõi tuần — không cần hỏi con, không phải đoán.',
      cta: 'Xem bảng theo dõi mẫu',
      ctaSecondary: 'Tải app phụ huynh',
      surfaces: ['Bảng theo dõi con tuần', 'Hồ sơ năng lực con', 'Lumi nhắn qua Zalo (sắp ra mắt)'],
    },
    pro: {
      label: 'Người đi làm',
      pronoun: 'bạn',
      pitch:
        'Bạn có lộ trình COMPASS cá nhân hoá cho TOEIC/IELTS/đổi nghề, đo đếm mỗi tuần — bằng dữ liệu, không cảm tính.',
      cta: 'Làm bài COMPASS thử',
      ctaSecondary: 'Xem lộ trình mẫu',
      surfaces: ['COMPASS chẩn đoán', 'Lộ trình thích nghi', 'Lumi coach (sắp ra mắt)'],
    },
    b2b: {
      label: 'Trường / Doanh nghiệp',
      pronoun: 'anh/chị',
      pitch:
        'Trường có dashboard hiệu trưởng → Sở GD → Bộ GD, triển khai chương trình AI Literacy đạt chuẩn UNESCO + VNIES.',
      cta: 'Đặt lịch demo',
      ctaSecondary: 'Tải brochure',
      surfaces: ['Dashboard hiệu trưởng', 'Triển khai cả trường', 'Chuẩn VNIES + UNESCO'],
    },
  },
  surfaces: {
    eyebrow: '5 bề mặt — 1 nền tảng',
    heading: 'Tất cả nằm trong một hệ sinh thái',
    subhead:
      'COMPASS chẩn đoán → Mini Apps tạo nội dung → Lớp học số chia bài → Hồ sơ ghi nhận → Lumi sẽ đồng hành. Mỗi vai trò chạm vào những bề mặt khác nhau.',
    items: {
      compass: {
        name: 'COMPASS',
        tagline: 'Chẩn đoán + lộ trình thích nghi',
        description:
          'Bài test đầu vào 50 câu → 7-band lookup → lộ trình A/B/C → ưu tiên "mất điểm ở đâu, ôn ở đó". Math · TOEIC · IELTS · EMI.',
        status: 'live',
      },
      miniApps: {
        name: 'Mini Apps',
        tagline: '13+ công cụ AI sản xuất nội dung',
        description:
          'Quiz · Slide · Giáo án · Đánh giá speaking · Tạo hình ảnh · App Builder — mỗi mini app chuyên một định dạng, sinh trong vài giây.',
        status: 'live',
      },
      class: {
        name: 'Lớp học số',
        tagline: 'Giao bài · tự chấm · theo dõi',
        description:
          'Giáo viên giao mini app cho lớp, học sinh nộp bài, hệ thống tự chấm. Bản đồ năng lực lớp cập nhật theo thời gian thực.',
        status: 'live',
      },
      profile: {
        name: 'Hồ sơ năng lực',
        tagline: 'Portfolio học sinh xuyên năm',
        description:
          'Mỗi app đã xây, mỗi competency đã đạt, mỗi badge đã thắng — gom vào hồ sơ cá nhân chia sẻ với phụ huynh, trường, nhà tuyển dụng.',
        status: 'beta',
      },
      lumi: {
        name: 'Lumi',
        tagline: 'Trợ lý AI xuyên bề mặt',
        description:
          'Lumi đi cùng học sinh qua chat in-app, push, Zalo, voice — nhắc lịch học, gợi ý câu hỏi, trả lời 1-1, gửi báo cáo tuần cho phụ huynh.',
        status: 'vision',
      },
    },
    legendLive: 'Đang chạy',
    legendBeta: 'Beta',
    legendVision: 'Tầm nhìn 2026',
  },
  proof: {
    eyebrow: 'Sản phẩm đang chạy',
    heading: 'Đây là Learneris thật.',
    subhead:
      'Học sinh tự xây app · Giáo viên ra đề trong 30 giây · COMPASS chấm chuẩn từng câu. Mỗi tuần, hàng nghìn lần.',
    apps: {
      title: 'Học sinh ship app',
      subtitle:
        'Mỗi card là một app AI học sinh K-12 Việt Nam tự nghĩ, prompt, debug, và ship qua creator.learnery.',
      counterLabel: 'Apps đã ship',
      counterValue: '735+',
      cta: 'Xem showcase',
      badge: 'Đầu tiên ở Việt Nam · Học sinh tự ship app AI',
      headlineLine1: 'Học sinh xây app AI.',
      headlineLine2: 'Trong giờ ra chơi.',
      featuredLabel: 'Học sinh cụ thể · ví dụ minh hoạ',
      counterCaption: 'Apps học sinh đã ship',
      tileBuiltBy: 'Học sinh tự xây',
      thumbToday: 'Hôm nay',
      stats: [
        { value: '735+', label: 'Apps đã ship' },
        { value: 'K-12', label: 'Phủ cả 12 lớp' },
        { value: '100%', label: 'Học sinh tự xây' },
        { value: 'Real', label: 'App thật · chạy được' },
      ],
      closing:
        'Đây là sự khác biệt thật. Không ai khác đang để học sinh tiểu học VN ship app AI thật mỗi tuần.',
      ctaButton: 'Để con tôi xây',
    },
    compass: {
      title: 'COMPASS — em Minh, lớp 12',
      subtitle:
        'Đậu ĐH Toán · Pretest 4.8/10 · Target 6.0 · 30 giờ ôn trong 6 tháng. Số liệu từ engine spec — không phải UI mock.',
      pretestLabel: 'Pretest',
      pretestValue: '4.8 / 10',
      targetLabel: 'Target',
      targetValue: '6.0',
      bandLabel: 'Band',
      bandValue: 'Trung bình → Track A',
      formulaLabel: 'Ưu tiên',
      formulaValue: 'Mũ-Log lost 8 → ôn đầu tiên',
      cta: 'Mở COMPASS demo',
    },
    lumi: {
      title: 'Lumi nhắn qua Zalo',
      subtitle:
        'Không phải chatbot — Lumi chủ động nhắc, khen, hỏi thăm. Học sinh, phụ huynh, giáo viên — mỗi vai trò có một Lumi riêng.',
      messages: [
        { role: 'lumi', text: 'Chào em, hôm nay em đã hoàn thành 3/5 bài. Cố lên nhé! 💪' },
        { role: 'user', text: 'Em đang kẹt câu Mũ-Log 😭' },
        { role: 'lumi', text: 'Em xem lại Step #1 Định nghĩa nha — Lumi gửi link đây 👇' },
      ],
      channelLabel: 'Zalo · Push · Voice · SMS',
    },
  },
  trust: {
    eyebrow: 'Đã được chứng nhận và đo đếm',
    items: [
      { value: '735+', label: 'App học sinh tự xây' },
      { value: '13+', label: 'Mini apps AI' },
      { value: '5', label: 'Bề mặt sản phẩm' },
      { value: 'K-12', label: 'Phủ toàn cấp học' },
    ],
    badges: ['VNIES chứng nhận', 'Sở GDĐT TP.HCM Đạt chất lượng (Tiểu học + THCS)', 'Chuẩn UNESCO AI Competency', 'GDPT 2018', 'Đề án 06'],
  },
  programs: {
    eyebrow: 'Chương trình AI Literacy đóng gói sẵn',
    heading: 'Không cần xây từ đầu — triển khai trong tuần',
    subhead:
      'Hai chương trình quốc gia hoá: K-12 (lớp 1-12) và Đại học. Đầy đủ giáo án, slide, đánh giá, và hệ thống.',
    k12: {
      title: 'Học Cùng AI — K-12',
      description:
        'Lớp 1 đến 12. 5 năng lực · 32 chuẩn đầu ra · 240+ bài học. Đã chạy thực tế tại 3 trường, được VNIES thẩm định.',
      bullets: [
        'Tiểu học (Lớp 1-5) — 4 chủ điểm theo độ tuổi',
        'THCS (Lớp 6-9) — module hệ thống AI',
        'THPT (Lớp 10-12) — chuyên sâu + dự án',
      ],
      cta: 'Xem giáo án mẫu',
      meta: 'VNIES · UNESCO · GDPT 2018',
    },
    university: {
      title: 'Đại học · EMI · Soft skills',
      description:
        'Khóa AI cho sinh viên đại học, giáo viên EMI (English Medium Instruction), và người đi làm. Cá nhân hoá theo ngành.',
      bullets: [
        'AI for Engineers · AI for Educators · AI for Business',
        'EMI placement (B1→B2+) cho giáo viên',
        'Chuyển nghề · TOEIC · IELTS · VSTEP',
      ],
      cta: 'Đăng ký quan tâm',
      meta: 'Hợp tác đại học · 16 tuần',
    },
  },
  cta: {
    eyebrow: 'Sẵn sàng?',
    headlineDefault: 'Một tài khoản. Năm bề mặt. Cả hệ sinh thái.',
    subheadDefault:
      'Đăng ký miễn phí trong 30 giây. Không cần thẻ tín dụng. Học sinh, giáo viên, phụ huynh — tất cả dùng chung một tài khoản.',
    primary: 'Bắt đầu miễn phí',
    secondary: 'Đặt lịch demo',
  },
  testimonials: {
    eyebrow: 'Người dùng thật, không cherry-picked',
    headingNeutral: 'Họ đang nói gì',
    headingPersona: 'Người như bạn đang nói gì',
    items: {
      'Cô Thanh Nguyễn': {
        role: 'Giáo viên tiếng Anh THPT',
        location: 'TP. Hồ Chí Minh',
        quote:
          'Learneris giúp tôi giảm thời gian tạo đề từ 2 tiếng xuống dưới 5 phút. AI hiểu chính xác trình độ học sinh cần.',
      },
      'Thầy Đức Trần': {
        role: 'Trưởng bộ môn Toán',
        location: 'Hà Nội',
        quote:
          'Tôi quản lý 6 lớp dễ dàng. Tạo khóa học, giao bài tập, theo dõi điểm — tất cả từ một bảng điều khiển.',
      },
      'Cô Linh Phạm': {
        role: 'Giáo viên Tiểu học',
        location: 'Đà Nẵng',
        quote: 'Học sinh thích nội dung tương tác, tổ bộ môn chia sẻ tài nguyên dễ hơn bao giờ hết.',
      },
      'Em Minh': {
        role: 'Học sinh lớp 11',
        location: 'Cần Thơ',
        quote:
          'Em làm COMPASS xong là biết phải ôn Mũ-Log trước. Trước đây em hay ôn dàn trải, mất thời gian không đúng chỗ.',
      },
      'Chị Hương': {
        role: 'Phụ huynh học sinh lớp 9',
        location: 'Hà Nội',
        quote:
          'Mỗi tuần tôi mở bảng theo dõi là biết con học gì, mạnh yếu chỗ nào. Không phải hỏi con, không phải đoán.',
      },
      'Anh Tuấn': {
        role: 'Kỹ sư phần mềm, đang ôn IELTS',
        location: 'TP. Hồ Chí Minh',
        quote:
          'COMPASS chấm trình độ rồi đề xuất lộ trình 12 tuần. Mỗi tuần đo tiến độ thật, không phải cảm tính.',
      },
    },
  },
  hub: {
    eyebrow: 'Sau khi đăng nhập',
    headingBefore: 'Đăng nhập là vào',
    headingHighlight: 'ngay đây',
    subhead:
      'Không phải tool catalog. Là một bảng điều khiển nhận ra bạn — bạn đang là ai, đang quan tâm việc gì, và bề mặt nào liên quan đến bạn.',
    previewBadge: 'Bản xem trước · v3',
    greeting: 'Xin chào',
    greetingNeutralPitch: 'Một tài khoản · Năm bề mặt · Cả hệ sinh thái.',
    greetingNames: {
      hs: 'em',
      gv: 'cô Lan',
      ph: 'anh Hùng',
      pro: 'bạn',
      b2b: 'bạn',
    },
    soon: 'Sắp ra mắt',
    sidebar: {
      home: 'Trang chủ',
      docs: 'Tài liệu',
      classes: 'Lớp học',
      profile: 'Hồ sơ',
      lumi: 'Lumi',
    },
    chips: {
      gen: 'Gen tuần này',
      grading: 'Lớp đang chấm',
      shipped: 'App đã ship',
    },
    surfaces: {
      compass: 'COMPASS',
      miniApps: 'Mini Apps',
      class: 'Lớp học',
      profile: 'Hồ sơ',
      lumi: 'Lumi',
    },
    quickStartLabel: 'Bắt đầu nhanh',
    actions: {
      quiz: 'Tạo bài kiểm tra',
      studyGuide: 'Hướng dẫn học tập',
      interactive: 'Nội dung tương tác',
    },
    continueLabel: 'Tiếp tục',
    continueAll: '↗ Tất cả',
    continueItems: [
      { name: 'Quiz Hàm số · 20 câu', date: '2 giờ trước' },
      { name: 'KHBD Tuần 12 — Toán 12', date: 'Hôm qua' },
      { name: 'Bài luyện hình học', date: '3 ngày trước' },
      { name: 'Slide ôn tập THPT', date: 'Tuần trước' },
    ],
    lumiTeaser: 'Lumi sẽ chủ động nhắc lịch ôn cho từng học sinh',
    captionPersonaBefore: 'Đây là cách hub hiển thị cho',
    captionPersonaAfter: '. Mỗi vai trò thấy bề mặt + nội dung khác nhau.',
    captionNeutral: 'Chọn vai trò ở phần đầu trang để xem hub hiển thị thế nào cho bạn.',
    ctaButton: 'Đăng nhập là thấy ngay',
  },
  faq: {
    eyebrow: 'Câu hỏi thường gặp',
    heading: 'Câu hỏi bạn có thể đang nghĩ',
    items: [
      {
        q: 'Tại sao không dùng thẳng ChatGPT cho rẻ?',
        a: 'ChatGPT trả lời câu hỏi. Learneris ra sản phẩm hoàn chỉnh: bài kiểm tra với cấu trúc theo Bloom + chuẩn đầu ra của VN, slide có template, lớp học có tự chấm + theo dõi tiến độ, hồ sơ năng lực gắn liền học sinh xuyên năm. ChatGPT là công cụ; Learneris là hệ thống có hành trình.',
      },
      {
        q: 'Có chuẩn không? Trường có dùng được chính thức không?',
        a: 'Chương trình K-12 đã được VNIES (Viện Khoa học Giáo dục Việt Nam) thẩm định và được Sở GDĐT TP.HCM kết luận Đạt chất lượng sử dụng trong nhà trường phổ thông cho cả cấp Tiểu học (CV 4847/SGDĐT-GDPT, 22/5/2026) và THCS (CV 1388/SGDĐT-GDPT, 11/2/2026). Phù hợp Khung năng lực AI của UNESCO và Chương trình GDPT 2018. Nhiều trường dùng Learneris làm phần chính thức của môn Tin học hoặc hoạt động trải nghiệm.',
      },
      {
        q: 'Bảo mật dữ liệu học sinh thế nào?',
        a: 'Dữ liệu cá nhân của người dùng Việt Nam được lưu trữ tại Việt Nam, tuân thủ Nghị định 13/2023 về bảo vệ dữ liệu cá nhân. Với học sinh dưới 16 tuổi, việc đồng ý của phụ huynh do nhà trường quản lý trong quá trình triển khai. Output AI không huấn luyện model, chỉ dùng trong phiên. Trường có thể yêu cầu xoá hoặc xuất dữ liệu bất cứ lúc nào.',
      },
      {
        q: 'Trường tôi triển khai như thế nào?',
        a: 'Có 3 hình thức: (1) Tự đăng ký free cho cá nhân giáo viên — dùng ngay; (2) Pilot 1 lớp/1 khối — Learneris hỗ trợ setup + training trong 1 tuần; (3) Cả trường — có manager riêng + dashboard hiệu trưởng + tích hợp SSO/LMS hiện hữu. Liên hệ để được tư vấn.',
      },
      {
        q: 'Có miễn phí không?',
        a: 'Giáo viên cá nhân: free hoàn toàn cho các Mini App cơ bản (Quiz, Study Guide, vài chục lần gen/tháng). Premium cho người cần volume cao hơn. Học sinh: free khi trường đăng ký pilot. Phụ huynh: dashboard theo dõi con — free khi con đã ở trong trường có đăng ký.',
      },
      {
        q: 'Khác gì so với các nền tảng AI giáo dục khác?',
        a: 'Khác về chiều rộng (5 bề mặt thay vì 1 tool catalog) và chiều sâu Việt Nam (curriculum mapping theo GDPT 2018, voice + UI tiếng Việt, hỗ trợ qua Zalo, hợp tác với VNIES). Học sinh không chỉ học AI — học sinh ship app AI thật, có 735+ app do học sinh K-12 Việt Nam tự xây.',
      },
    ],
  },
  tryIt: {
    eyebrow: 'Thử trực tiếp · không cần đăng ký',
    heading: 'Bấm thử ngay.',
    subhead: 'Demo chạy thật trong trình duyệt. Mỗi cái dưới 30 giây — nhanh hơn đọc tiếp.',
    tabs: {
      compass: 'COMPASS · 3 câu',
      miniApp: 'Mini App · Tạo quiz',
    },
  },
}

export const V3_EN: V3Strings = {
  nav: {
    badge: 'Preview · v3',
    backToV2: 'Back to current',
  },
  hero: {
    eyebrow: '🇻🇳 Vietnam\'s first AI Literacy platform',
    headlineLine1: 'Learn with AI.',
    headlineHighlight: 'Build with AI.',
    headlineLine2: 'Grow with AI.',
    subhead:
      'One ecosystem — 5 surfaces, 5 roles. From primary kids shipping their first app, to teachers generating lessons, to schools deploying digital competency.',
    pickerLabel: 'Who are you?',
    rotatingProofLabel: 'Students are shipping',
    rotatingProofSuffix: '+ real AI apps built by students themselves',
    explore: 'Explore your surface',
    reset: 'See the whole picture',
    mockup: {
      appPowered: 'AI-powered',
      generating: 'AI is writing a quiz on functions…',
      quizLabel: 'Quiz',
      lessonLabel: 'Lesson plan',
      slidesLabel: 'Slides',
      interactiveLabel: 'Interactive',
      speedLabel: 'Speed',
      speedValue: '30 seconds',
      standardLabel: 'Standard',
      standardValue: 'GDPT 2018',
    },
  },
  personas: {
    hs: {
      label: 'Student',
      pronoun: 'you',
      pitch:
        'You build your own AI apps, learn through interactive mini-apps, and carry a competency portfolio you actually own.',
      cta: 'Start your journey',
      ctaSecondary: 'See sample portfolio',
      surfaces: ['Build your first AI app', 'Interactive mini-apps', 'Digital competency portfolio'],
    },
    gv: {
      label: 'Teacher',
      pronoun: 'you',
      pitch:
        '13+ AI tools that generate quizzes/lessons in 30 seconds, a digital classroom that auto-grades, and a competency map for the whole class.',
      cta: 'Create a lesson — free',
      ctaSecondary: 'See sample classroom',
      surfaces: ['Mini Apps for content', 'AI classroom + auto-grade', 'Class competency map'],
    },
    ph: {
      label: 'Parent',
      pronoun: 'you',
      pitch:
        'See what your child is learning and where they\'re strong/weak through a weekly dashboard — without having to ask them.',
      cta: 'View sample dashboard',
      ctaSecondary: 'Download parent app',
      surfaces: ['Weekly child dashboard', 'Child\'s portfolio', 'Lumi nudges on Zalo (coming soon)'],
    },
    pro: {
      label: 'Professional',
      pronoun: 'you',
      pitch:
        'A COMPASS-personalised path for TOEIC/IELTS/career switch — measured weekly with data, not gut feel.',
      cta: 'Take COMPASS demo',
      ctaSecondary: 'See sample path',
      surfaces: ['COMPASS diagnostic', 'Adaptive path', 'Lumi coach (coming soon)'],
    },
    b2b: {
      label: 'School / Org',
      pronoun: 'you',
      pitch:
        'Principal → DOE → MOE dashboards, deploy a UNESCO + VNIES-certified AI Literacy program across the whole school.',
      cta: 'Book a demo',
      ctaSecondary: 'Download brochure',
      surfaces: ['Principal dashboard', 'School-wide rollout', 'VNIES + UNESCO certified'],
    },
  },
  surfaces: {
    eyebrow: '5 surfaces — 1 platform',
    heading: 'Everything lives in one ecosystem',
    subhead:
      'COMPASS diagnoses → Mini Apps create content → Classroom delivers → Portfolio records → Lumi will accompany. Each role touches a different mix of surfaces.',
    items: {
      compass: {
        name: 'COMPASS',
        tagline: 'Diagnostic + adaptive path',
        description:
          'A 50-question pretest → 7-band lookup → A/B/C track → priority by "where you lost points, study there". Math · TOEIC · IELTS · EMI.',
        status: 'live',
      },
      miniApps: {
        name: 'Mini Apps',
        tagline: '13+ AI content tools',
        description:
          'Quiz · Slides · Lesson · Speaking · Image gen · App Builder — each mini-app specialises in one format, generates in seconds.',
        status: 'live',
      },
      class: {
        name: 'Classroom',
        tagline: 'Assign · auto-grade · track',
        description:
          'Teachers assign mini-apps to a class, students submit, the system auto-grades. Class competency map updates in real time.',
        status: 'live',
      },
      profile: {
        name: 'Portfolio',
        tagline: 'Student portfolio across years',
        description:
          'Every app built, every competency earned, every badge won — collected in one portfolio shareable with parents, schools, employers.',
        status: 'beta',
      },
      lumi: {
        name: 'Lumi',
        tagline: 'AI assistant across surfaces',
        description:
          'Lumi follows the student via in-app chat, push, Zalo, voice — schedule reminders, hint at hard questions, weekly digest to parents.',
        status: 'vision',
      },
    },
    legendLive: 'Live',
    legendBeta: 'Beta',
    legendVision: '2026 vision',
  },
  proof: {
    eyebrow: 'What\'s shipping',
    heading: 'This is Learneris, in production.',
    subhead:
      'Students ship apps · Teachers generate in 30 seconds · COMPASS scores every step. Every week, thousands of times.',
    apps: {
      title: 'Students ship apps',
      subtitle:
        'Each card is an AI app a Vietnamese K-12 student thought up, prompted, debugged, and shipped through creator.learnery.',
      counterLabel: 'Apps shipped',
      counterValue: '735+',
      cta: 'See the showcase',
      badge: 'A Vietnam first · Students ship their own AI apps',
      headlineLine1: 'Students build AI apps.',
      headlineLine2: 'During recess.',
      featuredLabel: 'Real students · illustrative examples',
      counterCaption: 'Apps shipped by students',
      tileBuiltBy: 'Student-built',
      thumbToday: 'Today',
      stats: [
        { value: '735+', label: 'Apps shipped' },
        { value: 'K-12', label: 'All 12 grades' },
        { value: '100%', label: 'Built by students' },
        { value: 'Real', label: 'Real apps · they run' },
      ],
      closing:
        'This is a real difference. No one else has Vietnamese primary students shipping real AI apps every week.',
      ctaButton: 'Let my child build',
    },
    compass: {
      title: 'COMPASS — Minh, grade 12',
      subtitle:
        'University-entrance Math · Pretest 4.8/10 · Target 6.0 · 30 hours over 6 months. Numbers come from the engine spec — not a UI mock.',
      pretestLabel: 'Pretest',
      pretestValue: '4.8 / 10',
      targetLabel: 'Target',
      targetValue: '6.0',
      bandLabel: 'Band',
      bandValue: 'Middle → Track A',
      formulaLabel: 'Priority',
      formulaValue: 'Mũ-Log lost 8 → study first',
      cta: 'Open COMPASS demo',
    },
    lumi: {
      title: 'Lumi pings via Zalo',
      subtitle:
        'Not a chatbot — Lumi proactively reminds, congratulates, checks in. Student, parent, teacher — each role gets its own Lumi.',
      messages: [
        { role: 'lumi', text: 'Hey, you\'ve done 3/5 today. Keep going! 💪' },
        { role: 'user', text: 'I\'m stuck on the Mũ-Log question 😭' },
        { role: 'lumi', text: 'Try Step #1 again — sending you the link 👇' },
      ],
      channelLabel: 'Zalo · Push · Voice · SMS',
    },
  },
  trust: {
    eyebrow: 'Certified and measured',
    items: [
      { value: '735+', label: 'Student-built apps' },
      { value: '13+', label: 'AI mini apps' },
      { value: '5', label: 'Product surfaces' },
      { value: 'K-12', label: 'Full grade coverage' },
    ],
    badges: ['VNIES certified', 'HCMC DOET quality-approved (Primary + Lower-Sec)', 'UNESCO AI Competency aligned', 'GDPT 2018', 'Đề án 06'],
  },
  programs: {
    eyebrow: 'Pre-packaged AI Literacy programs',
    heading: 'Don\'t build from scratch — deploy in a week',
    subhead:
      'Two nationally-standardised programs: K-12 (grades 1-12) and University. Full lesson plans, slides, assessments, and platform.',
    k12: {
      title: 'Học Cùng AI — K-12',
      description:
        'Grades 1 to 12. 5 competencies · 32 standards · 240+ lessons. Already deployed in 3 schools, VNIES-reviewed.',
      bullets: [
        'Primary (G1-5) — 4 age-appropriate topic blocks',
        'Lower-Secondary (G6-9) — systematic AI module',
        'Upper-Secondary (G10-12) — depth + capstone',
      ],
      cta: 'See sample lessons',
      meta: 'VNIES · UNESCO · GDPT 2018',
    },
    university: {
      title: 'University · EMI · Soft skills',
      description:
        'AI courses for university students, EMI teachers, and working professionals. Personalised per industry.',
      bullets: [
        'AI for Engineers · for Educators · for Business',
        'EMI placement (B1→B2+) for teachers',
        'Career switch · TOEIC · IELTS · VSTEP',
      ],
      cta: 'Register interest',
      meta: 'University partnerships · 16 weeks',
    },
  },
  cta: {
    eyebrow: 'Ready?',
    headlineDefault: 'One account. Five surfaces. The whole ecosystem.',
    subheadDefault:
      'Free signup in 30 seconds. No credit card. Student, teacher, parent — one account for all.',
    primary: 'Start free',
    secondary: 'Book a demo',
  },
  testimonials: {
    eyebrow: 'Real users, not cherry-picked',
    headingNeutral: 'What they\'re saying',
    headingPersona: 'What people like you are saying',
    items: {
      'Cô Thanh Nguyễn': {
        role: 'High-school English teacher',
        location: 'Ho Chi Minh City',
        quote:
          'Learneris cut my test-creation time from 2 hours to under 5 minutes. The AI reads exactly the level my students need.',
      },
      'Thầy Đức Trần': {
        role: 'Head of Math department',
        location: 'Hanoi',
        quote:
          'I run 6 classes with ease. Create courses, assign work, track scores — all from one dashboard.',
      },
      'Cô Linh Phạm': {
        role: 'Primary-school teacher',
        location: 'Da Nang',
        quote: 'Students love the interactive content, and our department shares resources more easily than ever.',
      },
      'Em Minh': {
        role: 'Grade 11 student',
        location: 'Can Tho',
        quote:
          'Once I finished COMPASS I knew to study Mũ-Log first. I used to study everything thinly and waste time in the wrong places.',
      },
      'Chị Hương': {
        role: 'Parent of a grade 9 student',
        location: 'Hanoi',
        quote:
          'Every week I open the dashboard and see what my child is learning and where they\'re strong or weak. No asking, no guessing.',
      },
      'Anh Tuấn': {
        role: 'Software engineer, studying for IELTS',
        location: 'Ho Chi Minh City',
        quote:
          'COMPASS scored my level then proposed a 12-week path. Every week I measure real progress, not gut feel.',
      },
    },
  },
  hub: {
    eyebrow: 'After you log in',
    headingBefore: 'Log in and you\'re',
    headingHighlight: 'right here',
    subhead:
      'Not a tool catalog. A dashboard that recognises you — who you are, what you care about, and which surfaces are relevant to you.',
    previewBadge: 'Preview · v3',
    greeting: 'Hi',
    greetingNeutralPitch: 'One account · Five surfaces · The whole ecosystem.',
    greetingNames: {
      hs: 'there',
      gv: 'Ms. Lan',
      ph: 'Hùng',
      pro: 'there',
      b2b: 'there',
    },
    soon: 'Coming soon',
    sidebar: {
      home: 'Home',
      docs: 'Materials',
      classes: 'Classes',
      profile: 'Portfolio',
      lumi: 'Lumi',
    },
    chips: {
      gen: 'Generated this week',
      grading: 'Classes grading',
      shipped: 'Apps shipped',
    },
    surfaces: {
      compass: 'COMPASS',
      miniApps: 'Mini Apps',
      class: 'Classroom',
      profile: 'Portfolio',
      lumi: 'Lumi',
    },
    quickStartLabel: 'Quick start',
    actions: {
      quiz: 'Create a quiz',
      studyGuide: 'Study guide',
      interactive: 'Interactive content',
    },
    continueLabel: 'Continue',
    continueAll: '↗ See all',
    continueItems: [
      { name: 'Functions quiz · 20 questions', date: '2 hours ago' },
      { name: 'Lesson plan Week 12 — Math 12', date: 'Yesterday' },
      { name: 'Geometry practice set', date: '3 days ago' },
      { name: 'Grade-12 revision slides', date: 'Last week' },
    ],
    lumiTeaser: 'Lumi will proactively remind each student of their study schedule',
    captionPersonaBefore: 'This is how the hub shows up for',
    captionPersonaAfter: '. Each role sees a different mix of surfaces and content.',
    captionNeutral: 'Pick a role at the top of the page to see how the hub looks for you.',
    ctaButton: 'Log in and see it',
  },
  faq: {
    eyebrow: 'Frequently asked',
    heading: 'Questions you might be thinking',
    items: [
      {
        q: 'Why not just use ChatGPT — it\'s cheaper?',
        a: 'ChatGPT answers questions. Learneris ships finished products: tests structured to Bloom\'s taxonomy + Vietnam\'s learning standards, slides with templates, classes with auto-grading + progress tracking, a competency portfolio that follows a student across years. ChatGPT is a tool; Learneris is a system with a journey.',
      },
      {
        q: 'Is it standards-aligned? Can schools use it officially?',
        a: 'The K-12 program has been reviewed by VNIES (the Vietnam National Institute of Educational Sciences) and rated "quality-approved for use in general schools" by the HCMC Department of Education for both Primary (Doc 4847/SGDĐT-GDPT, 22 May 2026) and Lower-Secondary (Doc 1388/SGDĐT-GDPT, 11 Feb 2026). It aligns with UNESCO\'s AI Competency Framework and the GDPT 2018 national curriculum. Many schools use Learneris as an official part of their Informatics subject or experiential activities.',
      },
      {
        q: 'How is student data protected?',
        a: 'Vietnamese users\' personal data is hosted in Vietnam, per Decree 13/2023 on personal data protection. For students under 16, parental consent is managed by the school during rollout. AI output is never used to train models — it stays within the session. Schools can request data deletion or export at any time.',
      },
      {
        q: 'How does my school roll it out?',
        a: 'Three ways: (1) Individual teachers sign up free — start right away; (2) Pilot one class or grade — Learneris helps with setup + training in a week; (3) Whole school — a dedicated manager + principal dashboard + integration with your existing SSO/LMS. Get in touch for guidance.',
      },
      {
        q: 'Is it free?',
        a: 'Individual teachers: completely free for the core Mini Apps (Quiz, Study Guide, a few dozen generations a month). Premium for those who need higher volume. Students: free when their school runs a pilot. Parents: the child-tracking dashboard is free once their child is in an enrolled school.',
      },
      {
        q: 'How is it different from other AI education platforms?',
        a: 'It differs in breadth (5 surfaces, not one tool catalog) and Vietnam depth (curriculum mapping to GDPT 2018, Vietnamese voice + UI, support over Zalo, a partnership with VNIES). Students don\'t just learn about AI — they ship real AI apps, with 735+ built by Vietnamese K-12 students themselves.',
      },
    ],
  },
  tryIt: {
    eyebrow: 'Try it live · no signup',
    heading: 'Just try it.',
    subhead: 'The demos run for real in your browser. Each takes under 30 seconds — faster than reading on.',
    tabs: {
      compass: 'COMPASS · 3 questions',
      miniApp: 'Mini App · Build a quiz',
    },
  },
}

/**
 * Locale-aware accessor for V3 strings. Mirrors the API of the global
 * `useTranslation()` for ergonomic parity.
 */
export function useV3Translation(): { v3: V3Strings; locale: 'en' | 'vi' } {
  const { locale } = useTranslation()
  return { v3: locale === 'vi' ? V3_VI : V3_EN, locale }
}
