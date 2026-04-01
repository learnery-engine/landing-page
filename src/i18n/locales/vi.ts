import type { Translations } from '../types'

export const vi: Translations = {
  nav: {
    brand: 'Learneris',
    links: { features: 'Nền tảng', howItWorks: 'Cách hoạt động', programs: 'Chương trình', testimonials: 'Đánh giá' },
    auth: { login: 'Đăng nhập', signup: 'Đăng ký' },
  },

  hero: {
    badge: 'Được 10.000+ giáo viên tin dùng',
    heading: {
      before: 'Soạn bài, giảng dạy, học tập — ',
      highlight: 'cùng sức mạnh AI',
      after: '',
    },
    subheading:
      'Dạy theo cách học sinh xứng đáng được học. AI tạo nội dung trong tích tắc, tổ chức lớp học gọn gàng, và giúp bạn tập trung vào điều quan trọng nhất — truyền cảm hứng.',
    ctaPrimary: 'Bắt đầu miễn phí',
    ctaSecondary: 'Khám phá công cụ',
    stats: {
      prepTime: { value: '80%', label: 'giảm thời gian soạn bài' },
      tools: { value: '14+', label: 'ứng dụng AI' },
      free: { value: 'Miễn phí', label: 'để bắt đầu' },
    },
    mockup: {
      quickQuiz: 'Tạo đề nhanh',
      lessonPlan: 'Giáo án',
      lms: 'Lớp học & Khóa học',
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
      lms: { name: 'Lớp học & Khóa học', desc: 'Tạo khóa học, quản lý lớp, giao bài tập, chấm điểm và theo dõi tiến độ học sinh' },
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
      { title: 'Tổ chức & Giảng dạy', description: 'Xây dựng khóa học, quản lý lớp, giao nội dung cho học sinh và cộng tác cùng đồng nghiệp qua thư viện nội dung.' },
      { title: 'Theo dõi & Cải thiện', description: 'Theo dõi tiến độ học sinh, chấm bài, trao huy hiệu và sử dụng dữ liệu để liên tục cải thiện kết quả học tập.' },
    ],
  },

  stats: {
    items: [
      { value: '10.000+', label: 'Giáo viên sử dụng Learneris' },
      { value: '80%', label: 'Giảm thời gian soạn bài' },
      { value: '14+', label: 'Ứng dụng AI' },
    ],
  },

  testimonials: {
    heading: { before: 'Được yêu thích bởi ', highlight: 'giáo viên' },
    subheading: 'Tham gia cùng hàng nghìn giáo viên đang đổi mới lớp học với Learneris.',
    items: [
      { name: 'Cô Thanh Nguyễn', role: 'Giáo viên tiếng Anh THPT', location: 'TP. Hồ Chí Minh', quote: 'Learneris giúp tôi giảm thời gian tạo đề từ 2 tiếng xuống dưới 5 phút. AI hiểu chính xác trình độ học sinh cần.' },
      { name: 'Thầy Đức Trần', role: 'Trưởng bộ môn Toán', location: 'Hà Nội', quote: 'Learneris giúp tôi quản lý 6 lớp thật dễ dàng. Tôi tạo khóa học, giao bài tập và theo dõi điểm số — tất cả từ một bảng điều khiển.' },
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
      description: 'Khung chương trình giáo dục AI giúp học sinh làm chủ AI qua các hoạt động thực hành. Bao gồm hiểu biết, ứng dụng, tư duy phản biện, đạo đức và sáng tạo — phù hợp Khung năng lực AI UNESCO và Chương trình GDPT 2018.',
      certifiedBy: 'Chứng nhận & chuẩn hóa',
      certifier: 'VNIES (Viện KHGD Việt Nam) · Phù hợp Khung năng lực AI UNESCO',
      grades: 'Cấp học',
      gradesValue: 'Tiểu học (1–5) · THCS (6–9) · THPT (10–12)',
      domains: 'Năng lực cốt lõi',
      domainsValue: 'Hiểu biết · Ứng dụng · Tư duy phản biện · Đạo đức · Sáng tạo',
      cta: 'Tìm hiểu chương trình K-12',
    },
    university: {
      badge: 'Hợp tác cùng chúng tôi',
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
        items: { aiTools: 'Công cụ AI', lms: 'Lớp học & Khóa học', contentLibrary: 'Thư viện nội dung', curriculum: 'CT Giáo dục AI', allFeatures: 'Tất cả tính năng' },
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

  auth: {
    signup: {
      heading: 'Tạo tài khoản',
      subheading: 'Bắt đầu tạo nội dung AI trong vài phút',
      nameLabel: 'Họ và tên',
      namePlaceholder: 'Nhập họ và tên',
      emailLabel: 'Email',
      emailPlaceholder: 'ban@truong.edu.vn',
      passwordLabel: 'Mật khẩu',
      passwordPlaceholder: 'Tối thiểu 8 ký tự',
      submit: 'Tạo tài khoản',
      hasAccount: 'Đã có tài khoản?',
      loginLink: 'Đăng nhập',
      orContinueWith: 'hoặc tiếp tục với',
      googleButton: 'Tiếp tục với Google',
    },
    login: {
      heading: 'Chào mừng trở lại',
      subheading: 'Đăng nhập vào tài khoản Learneris',
      emailLabel: 'Email',
      emailPlaceholder: 'ban@truong.edu.vn',
      passwordLabel: 'Mật khẩu',
      passwordPlaceholder: 'Nhập mật khẩu',
      submit: 'Đăng nhập',
      forgotPassword: 'Quên mật khẩu?',
      noAccount: 'Chưa có tài khoản?',
      signupLink: 'Đăng ký',
      orContinueWith: 'hoặc tiếp tục với',
      googleButton: 'Tiếp tục với Google',
      resetSuccess: 'Mật khẩu đã được đặt lại. Vui lòng đăng nhập bằng mật khẩu mới.',
    },
    forgotPassword: {
      heading: 'Đặt lại mật khẩu',
      subheading: 'Nhập email và chúng tôi sẽ gửi link đặt lại mật khẩu',
      emailLabel: 'Email',
      emailPlaceholder: 'ban@truong.edu.vn',
      submit: 'Gửi link đặt lại',
      backToLogin: 'Quay lại đăng nhập',
      successHeading: 'Kiểm tra email',
      successMessage: 'Chúng tôi đã gửi link đặt lại mật khẩu đến email của bạn.',
    },
    errors: {
      required: 'Trường này là bắt buộc',
      invalidEmail: 'Vui lòng nhập email hợp lệ',
      passwordTooShort: 'Mật khẩu phải có ít nhất 8 ký tự',
      emailTaken: 'Email này đã được sử dụng',
      invalidCredentials: 'Email hoặc mật khẩu không đúng',
      genericError: 'Đã xảy ra lỗi. Vui lòng thử lại.',
    },
    socialProof: {
      headline: 'Tham gia 10.000+ giáo viên',
      subheadline: 'Tạo nội dung AI, quản lý lớp học và theo dõi tiến độ học sinh — tất cả trong một nền tảng.',
      stats: [
        { value: '10.000+', label: 'Giáo viên' },
        { value: '14+', label: 'Công cụ AI' },
        { value: '80%', label: 'Giảm thời gian soạn bài' },
      ],
    },
  },

  v2: {
    platform: {
      heading: { before: 'Ba cách chúng tôi hỗ trợ ', highlight: 'giáo viên' },
      subheading: 'Từ tạo nội dung AI đến giảng dạy trên lớp — tất cả kết nối liền mạch để đổi mới cách trường học giảng dạy.',
      pillars: {
        aiSuite: {
          title: 'Công cụ AI & Tạo ứng dụng',
          badge: '14+ công cụ + ứng dụng tùy chỉnh',
          description: '14+ công cụ chuyên biệt cho mọi loại nội dung, cùng khả năng tự tạo và xuất bản ứng dụng AI riêng.',
        },
        production: {
          title: 'Sản xuất & Thư viện',
          badge: 'Tạo, tổ chức, chia sẻ',
          description: 'Sản xuất hàng loạt cả học kỳ, tổ chức vào thư viện và chia sẻ trong toàn tổ chức.',
        },
        lms: {
          title: 'Lớp học thông minh',
          badge: 'Giảng dạy & theo dõi',
          description: 'Xây dựng khóa học trong vài phút với AI, quản lý lớp, chấm điểm tự động và theo dõi tiến độ.',
        },
        aiLiteracy: {
          title: 'Chương trình AI Literacy',
          badge: 'K-12 đã chứng nhận + Đại học',
          description: 'Chương trình K-12 được chứng nhận quốc gia, phù hợp chuẩn UNESCO, cùng khóa học AI đại học — triển khai toàn trường.',
        },
      },
      tools: {
        sectionTitle: '14+ Công cụ AI trong tầm tay',
        sectionSubtitle: 'Mỗi ứng dụng chuyên tạo một loại nội dung — chọn công cụ và tạo ngay trong vài giây.',
        items: {
          quickQuiz: 'Tạo đề nhanh',
          premiumQuizMaker: 'QuizMaker nâng cao',
          studyGuide: 'Tài liệu ôn tập',
          tosAssessment: 'Đánh giá TOS',
          lessonPlan: 'Giáo án',
          interactiveContent: 'Nội dung tương tác',
          smartDiagram: 'Sơ đồ thông minh',
          essayMarker: 'Chấm bài viết',
          speakingEvaluator: 'Đánh giá nói',
          aiImageGenerator: 'Tạo hình AI',
          slidesGenerator: 'Tạo slide',
          fullCoursePlanner: 'Lập kế hoạch khóa học',
          progressReport: 'Báo cáo tiến độ',
        },
        descriptions: {
          quickQuiz: 'Tạo bài kiểm tra trắc nghiệm cho mọi môn K-12 trong vài giây',
          premiumQuizMaker: 'Đánh giá nâng cao với nhiều dạng câu hỏi và căn chỉnh TOS',
          studyGuide: 'Tài liệu ôn tập toàn diện theo chương trình học',
          tosAssessment: 'Bài đánh giá phù hợp với Bảng đặc tả kiểm tra',
          lessonPlan: 'Giáo án có cấu trúc cho mọi môn học và khối lớp',
          interactiveContent: 'Trò chơi nhỏ và hoạt động tương tác cho bài giảng hấp dẫn',
          smartDiagram: 'Biểu đồ, sơ đồ tư duy và sơ đồ khái niệm tạo bởi AI',
          essayMarker: 'Chấm điểm bài viết tiếng Anh với nhiều hệ thống rubric',
          speakingEvaluator: 'Đánh giá kỹ năng nói theo tiêu chuẩn IELTS',
          aiImageGenerator: 'Tạo hình ảnh và minh họa giáo dục bằng AI',
          slidesGenerator: 'Bộ slide bài giảng hoàn chỉnh được tạo trong vài phút',
          fullCoursePlanner: 'Thiết kế toàn bộ khóa học với mục tiêu và chương trình',
          progressReport: 'Tạo hàng loạt báo cáo tiến độ học sinh theo mẫu trường',
        },
        tags: {
          interactiveContent: 'Phổ biến',
          premiumQuizMaker: 'Phổ biến',
          smartDiagram: 'Mới',
          aiImageGenerator: 'Mới',
          speakingEvaluator: 'Mới',
          slidesGenerator: 'Phổ biến',
        },
      },
      appBuilder: {
        headline: 'Tự tạo & xuất bản ứng dụng AI của bạn',
        subtext: 'Trợ lý AI, ứng dụng có biểu mẫu, đa dạng đầu ra — ý tưởng của bạn, triển khai ngay.',
      },
    },
    platformFlow: {
      heading: { before: 'Từ ý tưởng đến lớp học ', highlight: 'trong vài phút' },
      subheading: 'Dù bạn là giáo viên tạo bài kiểm tra, trường học xây dựng khóa học, hay nhà xuất bản sản xuất quy mô lớn — Learneris phù hợp với quy trình của bạn.',
      cta: 'Bắt đầu tạo — miễn phí',
      useCases: [
        {
          icon: 'zap',
          title: 'Tạo Nhanh',
          audience: 'Cho giáo viên',
          description: 'Chọn công cụ AI bất kỳ, chọn chương trình giảng dạy và tạo nội dung ngay lập tức. Không cần thiết lập — chỉ cần dạy.',
          steps: [
            'Chọn từ 14+ công cụ AI cho mọi loại nội dung',
            'Chọn chương trình quốc gia tích hợp sẵn (VN, US...)',
            'Tạo và sử dụng ngay — bài kiểm tra, giáo án, slide',
          ],
        },
        {
          icon: 'school',
          title: 'Xây dựng & Giảng dạy',
          audience: 'Cho trường học & người tạo khóa học',
          description: 'Xây dựng khóa học đầy đủ, thêm nội dung AI vào từng bài và quản lý lớp học toàn diện.',
          steps: [
            'Xây dựng cấu trúc khóa học với chương và bài học',
            'Thêm nội dung AI tự động vào mỗi bài học',
            'Giao bài, chấm điểm và theo dõi kết quả học sinh',
          ],
        },
        {
          icon: 'layers',
          title: 'Xuất bản Quy mô lớn',
          audience: 'Cho trường học & nhà xuất bản số',
          description: 'Tải lên khung chương trình và để AI sản xuất toàn bộ danh mục nội dung — với quy trình làm việc nhóm, duyệt và xuất bản hàng loạt.',
          steps: [
            'Tải lên khung chương trình để tạo nội dung hàng loạt',
            'Quy trình nhóm: phân công, duyệt và phê duyệt',
            'Xuất bản vào Thư viện hoặc triển khai trực tiếp đến lớp học',
          ],
        },
      ],
    },
    programs: {
      heading: { before: 'Triển khai ', highlight: 'chương trình AI đã chứng nhận' },
      subheading: 'Không cần tự xây dựng. Chương trình giáo dục AI đã chứng nhận, sẵn sàng triển khai — được công nhận bởi cơ quan quốc gia.',
      k12: {
        badge: 'Đã chứng nhận quốc gia',
        title: 'Học Cùng AI \u2014 Chương trình Giáo dục AI K-12',
        subtitle: 'Chương trình AI được chứng nhận, phù hợp chuẩn quốc tế',
        description: 'Khung chương trình giáo dục AI toàn diện bao phủ lớp 1\u201312. Học sinh làm chủ AI qua các hoạt động thực hành trên năm lĩnh vực năng lực \u2014 phù hợp Khung năng lực AI của UNESCO và Chương trình GDPT 2018.',
        certifiedBy: 'Chứng nhận & chuẩn hóa',
        certifier: 'VNIES (Viện KHGD Việt Nam) \u00B7 Phù hợp Khung năng lực AI UNESCO',
        grades: 'Cấp học',
        gradesValue: 'Tiểu học (1\u20135) \u00B7 THCS (6\u20139) \u00B7 THPT (10\u201312)',
        domains: 'Năng lực cốt lõi',
        domainsValue: 'Hiểu biết \u00B7 Ứng dụng \u00B7 Tư duy phản biện \u00B7 Đạo đức \u00B7 Sáng tạo',
        cta: 'Triển khai Chương trình K-12',
      },
      university: {
        badge: 'Hợp tác cùng chúng tôi',
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
  },
}
