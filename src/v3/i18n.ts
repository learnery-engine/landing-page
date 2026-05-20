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
  },
  personas: {
    hs: {
      label: 'Học sinh',
      pronoun: 'em',
      pitch:
        'Em được Lumi đồng hành mỗi ngày, làm app của riêng mình, và có Hồ sơ năng lực để khoe với bố mẹ.',
      cta: 'Bắt đầu hành trình',
      ctaSecondary: 'Xem hồ sơ mẫu',
      surfaces: ['Lumi đồng hành 24/7', 'Xây app AI đầu đời', 'Hồ sơ năng lực số'],
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
        'Anh chị biết con đang học gì, mạnh yếu chỗ nào, và Lumi gửi bản tin tuần qua Zalo — không cần hỏi con.',
      cta: 'Xem bảng theo dõi mẫu',
      ctaSecondary: 'Tải app phụ huynh',
      surfaces: ['Bảng theo dõi con tuần', 'Lumi nhắn qua Zalo', 'Hồ sơ năng lực con'],
    },
    pro: {
      label: 'Người đi làm',
      pronoun: 'bạn',
      pitch:
        'Bạn có lộ trình COMPASS cá nhân hoá cho TOEIC/IELTS/đổi nghề, đo đếm mỗi tuần — bằng dữ liệu, không cảm tính.',
      cta: 'Làm bài COMPASS thử',
      ctaSecondary: 'Xem lộ trình mẫu',
      surfaces: ['COMPASS chẩn đoán', 'Lộ trình thích nghi', 'Lumi coach trực tuyến'],
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
      'COMPASS chẩn đoán → Mini Apps tạo nội dung → Lớp học số chia bài → Hồ sơ ghi nhận → Lumi đồng hành. Mỗi vai trò chạm vào những bề mặt khác nhau.',
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
    eyebrow: 'Bằng chứng thật, không phải mock-up',
    heading: 'Mỗi bề mặt đều đã có sản phẩm thật',
    subhead:
      'Không phải landing-page đẹp — đây là những thứ học sinh, giáo viên, và trường thật đang dùng mỗi tuần.',
    apps: {
      title: 'Học sinh đang xây app thật',
      subtitle:
        'Mỗi tile là một app AI do học sinh K-12 Việt Nam tự nghĩ, tự prompt, tự ship qua creator.learnery.',
      counterLabel: 'Apps đã ship',
      counterValue: '735+',
      cta: 'Xem showcase',
    },
    compass: {
      title: 'COMPASS — em Minh, lớp 12',
      subtitle:
        'Đậu ĐH Toán · Pretest 4.8/10 · Target 6.0 · 30 giờ ôn trong 6 tháng. Mọi con số đều từ spec engine, không phải UI mock.',
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
    badges: ['VNIES chứng nhận', 'Chuẩn UNESCO AI Competency', 'GDPT 2018', 'Đề án 06'],
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
  },
  personas: {
    hs: {
      label: 'Student',
      pronoun: 'you',
      pitch:
        'You get Lumi by your side every day, you build your own apps, and you carry a competency portfolio you actually own.',
      cta: 'Start your journey',
      ctaSecondary: 'See sample portfolio',
      surfaces: ['Lumi 24/7 companion', 'Build your first AI app', 'Digital competency portfolio'],
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
        'See what your child is learning, where they\'re strong/weak, and get a weekly digest from Lumi on Zalo — without having to ask them.',
      cta: 'View sample dashboard',
      ctaSecondary: 'Download parent app',
      surfaces: ['Weekly child dashboard', 'Lumi nudges on Zalo', 'Child\'s portfolio'],
    },
    pro: {
      label: 'Professional',
      pronoun: 'you',
      pitch:
        'A COMPASS-personalised path for TOEIC/IELTS/career switch — measured weekly with data, not gut feel.',
      cta: 'Take COMPASS demo',
      ctaSecondary: 'See sample path',
      surfaces: ['COMPASS diagnostic', 'Adaptive path', 'Lumi coach online'],
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
      'COMPASS diagnoses → Mini Apps create content → Classroom delivers → Portfolio records → Lumi accompanies. Each role touches a different mix of surfaces.',
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
    eyebrow: 'Real evidence, not mockups',
    heading: 'Every surface has a real product behind it',
    subhead:
      'Not a pretty landing page — these are the things real students, teachers, and schools use every week.',
    apps: {
      title: 'Students are building real apps',
      subtitle:
        'Each tile is an AI app a Vietnamese K-12 student thought up, prompted, and shipped through creator.learnery.',
      counterLabel: 'Apps shipped',
      counterValue: '735+',
      cta: 'See the showcase',
    },
    compass: {
      title: 'COMPASS — Minh, grade 12',
      subtitle:
        'University-entrance Math · Pretest 4.8/10 · Target 6.0 · 30 hours over 6 months. Every number comes from the engine spec, not a UI mock.',
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
    badges: ['VNIES certified', 'UNESCO AI Competency aligned', 'GDPT 2018', 'Đề án 06'],
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
}

/**
 * Locale-aware accessor for V3 strings. Mirrors the API of the global
 * `useTranslation()` for ergonomic parity.
 */
export function useV3Translation(): { v3: V3Strings; locale: 'en' | 'vi' } {
  const { locale } = useTranslation()
  return { v3: locale === 'vi' ? V3_VI : V3_EN, locale }
}
