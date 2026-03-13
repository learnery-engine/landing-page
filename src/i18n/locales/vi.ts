import type { Translations } from '../types'

export const vi: Translations = {
  nav: {
    brand: 'Learneris',
    links: { features: 'Tính năng', howItWorks: 'Cách hoạt động', programs: 'Chương trình', testimonials: 'Đánh giá' },
    auth: { login: 'Đăng nhập', signup: 'Đăng ký' },
  },

  hero: {
    badge: 'Được 10.000+ giáo viên tin dùng',
    heading: {
      before: 'Soạn bài, giảng dạy, theo dõi — ',
      highlight: 'cùng sức mạnh AI',
      after: '',
    },
    subheading:
      '14+ công cụ AI tạo nội dung tức thì, hệ thống LMS quản lý lớp học, và thư viện nội dung dùng chung — tất cả trong một nền tảng dành cho giáo viên.',
    ctaPrimary: 'Bắt đầu miễn phí',
    ctaSecondary: 'Khám phá nền tảng',
    stats: {
      prepTime: { value: '80%', label: 'giảm thời gian soạn bài' },
      tools: { value: '14+', label: 'ứng dụng AI' },
      free: { value: 'Miễn phí', label: 'để bắt đầu' },
    },
    mockup: {
      quickQuiz: 'Tạo đề nhanh',
      lessonPlan: 'Giáo án',
      lms: 'LMS & Lớp học',
      interactiveContent: 'Nội dung tương tác',
      aiPowered: 'Hỗ trợ AI',
      generating: 'Đang tạo nội dung...',
    },
    floatingBadges: {
      speed: { label: 'Tạo trong', value: '30 giây' },
      curriculum: { label: 'Chương trình', value: 'Phù hợp' },
    },
  },

  partners: {
    header: 'Được hỗ trợ bởi các đối tác hàng đầu trong giáo dục',
  },

  features: {
    heading: { before: 'Nền tảng toàn diện để ', highlight: 'đổi mới giáo dục' },
    subheading:
      '14+ công cụ tạo nội dung AI, hệ thống quản lý học tập, và thư viện nội dung cộng tác — tất cả dành cho giáo viên K-12.',
    tags: { new: 'Mới', popular: 'Phổ biến', preview: 'Thử nghiệm', org: 'Tổ chức' },
    items: {
      lms: { name: 'LMS & Lớp học', desc: 'Tạo khóa học, quản lý lớp, giao bài tập, chấm điểm và theo dõi tiến độ học sinh' },
      contentLibrary: { name: 'Thư viện nội dung', desc: 'Tổ chức, cộng tác và sản xuất hàng loạt nội dung giáo dục cùng đội ngũ' },
      k12Curriculum: { name: 'CT Giáo dục AI K-12', desc: 'Chương trình "Học Cùng AI" được chứng nhận cho giáo dục AI từ lớp 1 đến lớp 12' },
      quickQuiz: { name: 'Tạo đề nhanh', desc: 'Tạo bài kiểm tra trắc nghiệm cho mọi môn K-12 trong vài giây' },
      premiumQuizMaker: { name: 'QuizMaker nâng cao', desc: 'Đánh giá nâng cao với nhiều dạng câu hỏi và căn chỉnh theo bảng đặc tả' },
      studyGuide: { name: 'Tài liệu ôn tập', desc: 'Tạo tài liệu ôn tập toàn diện theo chương trình học' },
      tosAssessment: { name: 'Đánh giá theo TOS', desc: 'Tạo bài đánh giá phù hợp với Bảng đặc tả kiểm tra' },
      lessonPlan: { name: 'Giáo án', desc: 'Giáo án có cấu trúc, linh hoạt cho mọi môn học và khối lớp' },
      interactiveContent: { name: 'Nội dung tương tác', desc: 'Trò chơi nhỏ và hoạt động tương tác cho bài giảng hấp dẫn' },
      smartDiagram: { name: 'Sơ đồ thông minh', desc: 'Trực quan hóa khái niệm bằng biểu đồ và sơ đồ AI' },
      essayMarker: { name: 'Chấm bài viết', desc: 'Đánh giá và chấm điểm bài viết tiếng Anh với nhiều hệ thống rubric' },
      speakingEvaluator: { name: 'Đánh giá nói', desc: 'Đánh giá kỹ năng nói tiếng Anh theo tiêu chuẩn IELTS' },
      aiImageGenerator: { name: 'Tạo hình AI', desc: 'Tạo hình ảnh và minh họa giáo dục bằng AI' },
      slidesGenerator: { name: 'Tạo slide', desc: 'Bộ slide bài giảng hoàn chỉnh được tạo trong vài phút' },
      fullCoursePlanner: { name: 'Lập kế hoạch khóa học', desc: 'Thiết kế toàn bộ khóa học bao gồm mục tiêu và chương trình' },
      progressReport: { name: 'Báo cáo tiến độ', desc: 'Tạo hàng loạt báo cáo tiến độ học sinh theo mẫu trường' },
      aiAppBuilder: { name: 'Tạo ứng dụng AI', desc: 'Tạo và xuất bản trợ giảng AI tùy chỉnh của riêng bạn' },
    },
  },

  howItWorks: {
    heading: { before: 'Sẵn sàng trong ', highlight: '3 bước đơn giản' },
    subheading: 'Không cần đào tạo. Từ tạo nội dung đến giảng dạy trên lớp chỉ trong vài phút.',
    stepLabel: 'Bước',
    steps: [
      { title: 'Tạo nội dung với AI', description: 'Sử dụng 14+ công cụ AI để tạo bài kiểm tra, bài giảng, slide, trò chơi tương tác và nhiều hơn — tất cả phù hợp chương trình.' },
      { title: 'Tổ chức & Giảng dạy', description: 'Xây dựng khóa học trên LMS, quản lý lớp, giao nội dung cho học sinh và cộng tác cùng đồng nghiệp qua thư viện nội dung.' },
      { title: 'Theo dõi & Cải thiện', description: 'Theo dõi tiến độ học sinh, chấm bài, trao huy hiệu và sử dụng dữ liệu để liên tục cải thiện kết quả học tập.' },
    ],
  },

  stats: {
    items: [
      { value: '10.000+', label: 'Giáo viên sử dụng Learneris' },
      { value: '80%', label: 'Giảm thời gian soạn bài' },
      { value: '14+', label: 'Ứng dụng AI' },
      { value: 'Toàn diện', label: 'Soạn · Dạy · Theo dõi' },
    ],
  },

  testimonials: {
    heading: { before: 'Được yêu thích bởi ', highlight: 'giáo viên' },
    subheading: 'Tham gia cùng hàng nghìn giáo viên đang đổi mới lớp học với Learneris.',
    items: [
      { name: 'Cô Thanh Nguyễn', role: 'Giáo viên tiếng Anh THPT', location: 'TP. Hồ Chí Minh', quote: 'Learneris giúp tôi giảm thời gian tạo đề từ 2 tiếng xuống dưới 5 phút. AI hiểu chính xác trình độ học sinh cần.' },
      { name: 'Thầy Đức Trần', role: 'Trưởng bộ môn Toán', location: 'Hà Nội', quote: 'LMS giúp tôi quản lý 6 lớp thật dễ dàng. Tôi tạo khóa học, giao bài tập và theo dõi điểm số — tất cả từ một bảng điều khiển.' },
      { name: 'Cô Linh Phạm', role: 'Giáo viên Tiểu học', location: 'Đà Nẵng', quote: 'Học sinh rất thích nội dung tương tác, còn tôi thì yêu Thư viện nội dung. Tổ bộ môn cộng tác và chia sẻ tài nguyên hiệu quả hơn bao giờ hết.' },
      { name: 'Thầy Minh Lê', role: 'Phụ trách STEM', location: 'Cần Thơ', quote: 'Chương trình Giáo dục AI K-12 giúp trường chúng tôi có lộ trình rõ ràng để dạy AI. Học sinh hiểu AI qua các hoạt động thực hành thú vị.' },
    ],
  },

  programs: {
    heading: { before: 'Chương trình ', highlight: 'giáo dục AI có hệ thống' },
    subheading: 'Từ AI K-12 đến đại học — chương trình giảng dạy toàn diện cho mọi cấp học.',
    k12: {
      badge: 'Đã chứng nhận',
      title: 'Học Cùng AI — Chương trình Giáo dục AI K-12',
      subtitle: 'Giáo dục AI từ lớp 1 đến lớp 12',
      description: 'Khung chương trình giáo dục AI được chứng nhận, giúp học sinh làm chủ AI qua các hoạt động thực hành. Bao gồm hiểu biết, ứng dụng, tư duy phản biện, đạo đức và sáng tạo — phù hợp Chương trình GDPT 2018.',
      certifiedBy: 'Chứng nhận bởi',
      certifier: 'Viện Khoa Học Giáo Dục Việt Nam',
      grades: 'Cấp học',
      gradesValue: 'Tiểu học (1–5) · THCS (6–9) · THPT (10–12)',
      domains: 'Năng lực cốt lõi',
      domainsValue: 'Hiểu biết · Ứng dụng · Tư duy phản biện · Đạo đức · Sáng tạo',
      cta: 'Tìm hiểu chương trình K-12',
    },
    university: {
      badge: 'Sắp ra mắt',
      title: 'Khóa học AI Đại học',
      subtitle: 'Chương trình AI nâng cao cho giáo dục đại học',
      description: 'Các khóa học AI cấp đại học dành cho sinh viên và học viên sau đại học. Trang bị cho thế hệ chuyên gia tương lai kỹ năng AI thực tế và kiến thức chuyên sâu.',
      features: [
        'AI ứng dụng cho các ngành nghề cụ thể',
        'Đạo đức AI, quản trị & đổi mới có trách nhiệm',
        'Dự án thực hành với dữ liệu thực tế',
        'Lộ trình chứng nhận cho sự nghiệp',
      ],
      cta: 'Nhận thông báo khi ra mắt',
      emailPlaceholder: 'Nhập email của bạn',
      subscribed: 'Đã đăng ký thành công!',
      subscribedMsg: 'Chúng tôi sẽ thông báo khi Khóa học AI Đại học ra mắt.',
    },
  },

  cta: {
    badge: 'Miễn phí để bắt đầu',
    heading: 'Sẵn sàng đổi mới lớp học của bạn?',
    body: 'Tham gia cùng 10.000+ giáo viên đang dùng Learneris để tạo nội dung AI, quản lý lớp học và theo dõi tiến độ học sinh. Không cần thẻ tín dụng.',
    ctaPrimary: 'Bắt đầu miễn phí',
    ctaSecondary: 'Liên hệ tư vấn',
  },

  footer: {
    newsletter: {
      heading: 'Cập nhật cùng Learneris',
      subheading: 'Nhận các công cụ AI, mẹo giảng dạy và cập nhật mới nhất qua email.',
      placeholder: 'Nhập email của bạn',
      button: 'Đăng ký',
      thanks: 'Cảm ơn bạn đã đăng ký!',
    },
    tagline: 'Nền tảng giáo dục AI toàn diện. Tạo nội dung, quản lý lớp học và theo dõi học tập — tất cả trong một.',
    company: 'Learneris Pte. Ltd.',
    address: ['68 Circular Road #02-01', 'Singapore 049422'],
    columns: {
      product: {
        title: 'Sản phẩm',
        items: { aiTools: 'Công cụ AI', lms: 'LMS & Lớp học', contentLibrary: 'Thư viện nội dung', curriculum: 'CT Giáo dục AI', allFeatures: 'Tất cả tính năng' },
      },
      company: {
        title: 'Công ty',
        items: { aboutUs: 'Về chúng tôi', partners: 'Đối tác', contact: 'Liên hệ' },
      },
      legal: {
        title: 'Pháp lý',
        items: { terms: 'Điều khoản sử dụng', privacy: 'Chính sách bảo mật' },
      },
    },
    copyright: 'Bảo lưu mọi quyền.',
  },

  legal: {
    backToHome: 'Về trang chủ',
    copyright: 'Learneris Pte. Ltd.',
  },
}
