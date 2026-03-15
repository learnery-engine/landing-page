import type { Translations } from '../types'

export const en: Translations = {
  nav: {
    brand: 'Learneris',
    links: { features: 'Platform', howItWorks: 'How it Works', programs: 'Programs', testimonials: 'Testimonials' },
    auth: { login: 'Log In', signup: 'Sign Up' },
  },

  hero: {
    badge: 'Trusted by 10,000+ educators',
    heading: {
      before: 'Create, teach, and track — ',
      highlight: 'powered by AI',
      after: '',
    },
    subheading:
      '14+ AI tools for instant content, a production pipeline for scale, a shared content library, and a full LMS — everything educators need in one platform.',
    ctaPrimary: 'Get Started Free',
    ctaSecondary: 'Explore the Platform',
    stats: {
      prepTime: { value: '80%', label: 'less prep time' },
      tools: { value: '14+', label: 'AI mini apps' },
      free: { value: 'Free', label: 'to get started' },
    },
    mockup: {
      quickQuiz: 'Quick Quiz',
      lessonPlan: 'Lesson Plan',
      lms: 'LMS & Classroom',
      interactiveContent: 'Interactive Content',
      aiPowered: 'AI-powered',
      generating: 'Generating your content...',
    },
    floatingBadges: {
      speed: { label: 'Generated in', value: '30 seconds' },
      curriculum: { label: 'Curriculum', value: 'Aligned' },
    },
  },

  partners: {
    header: 'Backed by industry leaders in education technology',
  },

  features: {
    heading: { before: 'The complete platform to ', highlight: 'transform education' },
    subheading:
      '14+ AI content tools, a full learning management system, and a collaborative content library — all designed for K-12 educators.',
    tags: { new: 'New', popular: 'Popular', preview: 'Preview', org: 'Org' },
    items: {
      lms: { name: 'LMS & Classroom', desc: 'Create courses, manage classes, assign homework, grade work, and track student progress' },
      contentLibrary: { name: 'Content Library', desc: 'Organize, collaborate, and batch-produce educational content with your team' },
      k12Curriculum: { name: 'K-12 AI Curriculum', desc: 'Certified "Học Cùng AI" framework for AI literacy education across all grade levels' },
      quickQuiz: { name: 'Quick Quiz', desc: 'Generate MCQ quizzes for any K-12 subject in seconds' },
      premiumQuizMaker: { name: 'Premium QuizMaker', desc: 'Advanced assessments with multiple question types and TOS alignment' },
      studyGuide: { name: 'Study Guide', desc: 'Create comprehensive study guides tailored to any curriculum' },
      tosAssessment: { name: 'TOS Assessment', desc: 'Generate assessments aligned with Table of Specifications' },
      lessonPlan: { name: 'Lesson Plan', desc: 'Structured, flexible lesson plans for any subject and grade' },
      interactiveContent: { name: 'Interactive Content', desc: 'Mini games and interactive activities for engaging lessons' },
      smartDiagram: { name: 'Smart Diagram', desc: 'Visualize concepts with AI-generated charts and diagrams' },
      essayMarker: { name: 'Essay Marker', desc: 'Assess and grade English writing with multiple rubric systems' },
      speakingEvaluator: { name: 'Speaking Evaluator', desc: 'Evaluate English speaking with IELTS-standard criteria' },
      aiImageGenerator: { name: 'AI Image Generator', desc: 'Create educational images and illustrations with AI' },
      slidesGenerator: { name: 'Slides Generator', desc: 'Complete lecture slide decks generated in minutes' },
      fullCoursePlanner: { name: 'Full Course Planner', desc: 'Design entire courses including objectives and curriculum' },
      progressReport: { name: 'Progress Report', desc: 'Batch student progress reports using your school template' },
      aiAppBuilder: { name: 'AI App Builder', desc: 'Create and publish your own custom AI teaching assistant' },
    },
  },

  howItWorks: {
    heading: { before: 'Ready in ', highlight: '3 simple steps' },
    subheading: 'No training required. Go from content creation to classroom delivery in minutes.',
    stepLabel: 'Step',
    steps: [
      { title: 'Create with AI', description: 'Use 14+ AI tools to generate quizzes, lessons, slides, interactive games, and more — all aligned to your curriculum.' },
      { title: 'Organize & Deliver', description: 'Build courses on the LMS, manage your classes, assign content to students, and collaborate with your team via the content library.' },
      { title: 'Track & Improve', description: 'Monitor student progress, grade assignments, award badges, and use insights to continuously improve learning outcomes.' },
    ],
  },

  stats: {
    items: [
      { value: '10,000+', label: 'Educators using Learneris' },
      { value: '80%', label: 'Less time on lesson prep' },
      { value: '14+', label: 'AI-powered mini apps' },
      { value: 'All-in-one', label: 'Create · Teach · Track' },
    ],
  },

  testimonials: {
    heading: { before: 'Loved by ', highlight: 'educators' },
    subheading: 'Join thousands of teachers who are transforming their classrooms with Learneris.',
    items: [
      { name: 'Ms. Thanh Nguyen', role: 'High School English Teacher', location: 'Ho Chi Minh City', quote: 'Learneris cut my quiz creation time from 2 hours to under 5 minutes. The AI understands exactly what level my students need.' },
      { name: 'Mr. Duc Tran', role: 'Math Department Head', location: 'Hanoi', quote: 'The LMS makes managing my 6 classes effortless. I create courses, assign homework, and track grades — all from one dashboard.' },
      { name: 'Ms. Linh Pham', role: 'Primary School Teacher', location: 'Da Nang', quote: 'My students love the interactive content, and I love the Content Library. Our department collaborates and shares resources like never before.' },
      { name: 'Mr. Minh Le', role: 'STEM Coordinator', location: 'Can Tho', quote: 'The K-12 AI Curriculum gave our school a structured path to teach AI literacy. Students finally understand AI through hands-on activities.' },
    ],
  },

  programs: {
    heading: { before: 'Structured ', highlight: 'AI education programs' },
    subheading: 'From K-12 AI literacy to university-level courses — comprehensive curricula designed for every stage of learning.',
    k12: {
      badge: 'Certified',
      title: 'Học Cùng AI — K-12 AI Curriculum',
      subtitle: 'AI literacy education from Grade 1 to Grade 12',
      description: 'A certified AI literacy framework helping students master AI through hands-on activities. Covers understanding, applying, critical thinking, ethics, and creativity — aligned with Vietnam\'s national curriculum (GDPT 2018).',
      certifiedBy: 'Certified by',
      certifier: 'Vietnam Institute of Educational Sciences (VNIES)',
      grades: 'Grade levels',
      gradesValue: 'Elementary (1–5) · Middle (6–9) · High (10–12)',
      domains: 'Competency domains',
      domainsValue: 'Understanding · Applying · Critical Thinking · Ethics · Creativity',
      cta: 'Learn about the K-12 Curriculum',
    },
    university: {
      badge: 'Coming Soon',
      title: 'AI University Courses',
      subtitle: 'Advanced AI programs for higher education',
      description: 'University-level AI courses designed for undergraduate and graduate students. Equipping the next generation of professionals with practical AI skills and deep technical knowledge.',
      features: [
        'Applied AI for industry-specific fields',
        'AI ethics, governance & responsible innovation',
        'Hands-on projects with real-world datasets',
        'Certification pathways for career readiness',
      ],
      cta: 'Get notified when available',
      emailPlaceholder: 'Enter your email',
      subscribed: 'You\'re on the list!',
      subscribedMsg: 'We\'ll notify you when AI University Courses launch.',
    },
  },

  cta: {
    badge: 'Free to get started',
    heading: 'Ready to transform your classroom?',
    body: 'Join 10,000+ educators using Learneris to create AI-powered content, manage classrooms, and track student progress. No credit card required.',
    ctaPrimary: 'Get Started Free',
    ctaSecondary: 'Contact Sales',
  },

  footer: {
    newsletter: {
      heading: 'Stay updated with Learneris',
      subheading: 'Get the latest AI teaching tools, tips, and updates delivered to your inbox.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      thanks: 'Thanks for subscribing!',
    },
    tagline: 'The AI-powered education platform. Create content, manage classes, and track learning — all in one place.',
    company: 'Learneris Pte. Ltd.',
    address: ['68 Circular Road #02-01', 'Singapore 049422'],
    columns: {
      product: {
        title: 'Product',
        items: { aiTools: 'AI Tools', lms: 'LMS & Classroom', contentLibrary: 'Content Library', curriculum: 'AI Curriculum', allFeatures: 'All Features' },
      },
      company: {
        title: 'Company',
        items: { aboutUs: 'About Us', partners: 'Partners', contact: 'Contact' },
      },
      legal: {
        title: 'Legal',
        items: { terms: 'Terms & Conditions', privacy: 'Privacy Policy' },
      },
    },
    copyright: 'All rights reserved.',
  },

  legal: {
    backToHome: 'Back to home',
    copyright: 'Learneris Pte. Ltd.',
  },

  auth: {
    signup: {
      heading: 'Create your account',
      subheading: 'Start creating AI-powered content in minutes',
      nameLabel: 'Full name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@school.edu',
      passwordLabel: 'Password',
      passwordPlaceholder: 'At least 8 characters',
      submit: 'Create Account',
      hasAccount: 'Already have an account?',
      loginLink: 'Log in',
      orContinueWith: 'or continue with',
      googleButton: 'Continue with Google',
    },
    login: {
      heading: 'Welcome back',
      subheading: 'Log in to your Learneris account',
      emailLabel: 'Email',
      emailPlaceholder: 'you@school.edu',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      submit: 'Log In',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account?",
      signupLink: 'Sign up',
      orContinueWith: 'or continue with',
      googleButton: 'Continue with Google',
    },
    forgotPassword: {
      heading: 'Reset your password',
      subheading: "Enter your email and we'll send you a reset link",
      emailLabel: 'Email',
      emailPlaceholder: 'you@school.edu',
      submit: 'Send Reset Link',
      backToLogin: 'Back to login',
      successHeading: 'Check your email',
      successMessage: "We've sent a password reset link to your email address.",
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      passwordTooShort: 'Password must be at least 8 characters',
      emailTaken: 'An account with this email already exists',
      invalidCredentials: 'Invalid email or password',
      genericError: 'Something went wrong. Please try again.',
    },
    socialProof: {
      headline: 'Join 10,000+ educators',
      subheadline: 'Create AI-powered content, manage classrooms, and track student progress — all in one platform.',
      stats: [
        { value: '10,000+', label: 'Educators' },
        { value: '14+', label: 'AI tools' },
        { value: '80%', label: 'Less prep time' },
      ],
    },
  },

  v2: {
    platform: {
      heading: { before: 'One platform, ', highlight: 'four pillars' },
      subheading: 'From AI content creation to classroom delivery — an integrated ecosystem that works together to transform how schools teach.',
      pillars: {
        aiSuite: {
          title: 'AI Tools & App Builder',
          badge: '14+ tools + custom apps',
          description: '14+ specialized tools for every content type, plus build and publish your own custom AI apps.',
        },
        production: {
          title: 'Production & Library',
          badge: 'Create, organize, share',
          description: 'Batch-create entire semesters, organize into libraries, and share across your organization.',
        },
        lms: {
          title: 'AI-Powered LMS',
          badge: 'Deliver & track',
          description: 'Build courses in minutes with AI, manage classes, auto-grade, and track student progress.',
        },
        aiLiteracy: {
          title: 'AI Literacy Programs',
          badge: 'K-12 certified + University',
          description: 'VNIES-certified K-12 curriculum plus university AI courses — deploy schoolwide.',
        },
      },
      tools: {
        sectionTitle: '14+ AI Tools at Your Fingertips',
        sectionSubtitle: 'Each mini app specializes in one content type — pick a tool and generate in seconds.',
        items: {
          quickQuiz: 'Quick Quiz',
          premiumQuizMaker: 'Premium QuizMaker',
          studyGuide: 'Study Guide',
          tosAssessment: 'TOS Assessment',
          lessonPlan: 'Lesson Plan',
          interactiveContent: 'Interactive Content',
          smartDiagram: 'Smart Diagram',
          essayMarker: 'Essay Marker',
          speakingEvaluator: 'Speaking Evaluator',
          aiImageGenerator: 'AI Image Generator',
          slidesGenerator: 'Slides Generator',
          fullCoursePlanner: 'Full Course Planner',
          progressReport: 'Progress Report',
        },
        descriptions: {
          quickQuiz: 'Generate MCQ quizzes for any K-12 subject in seconds',
          premiumQuizMaker: 'Advanced assessments with multiple question types and TOS alignment',
          studyGuide: 'Comprehensive study guides tailored to any curriculum',
          tosAssessment: 'Assessments aligned with Table of Specifications',
          lessonPlan: 'Structured lesson plans for any subject and grade level',
          interactiveContent: 'Mini games and interactive activities for engaging lessons',
          smartDiagram: 'AI-generated charts, mind maps, and concept diagrams',
          essayMarker: 'Grade English writing with multiple rubric systems',
          speakingEvaluator: 'Evaluate speaking skills with IELTS-standard criteria',
          aiImageGenerator: 'Create educational images and illustrations with AI',
          slidesGenerator: 'Complete lecture slide decks generated in minutes',
          fullCoursePlanner: 'Design entire courses with objectives and curriculum',
          progressReport: 'Batch student progress reports using your school template',
        },
        tags: {
          interactiveContent: 'Popular',
          premiumQuizMaker: 'Popular',
          smartDiagram: 'New',
          aiImageGenerator: 'New',
          speakingEvaluator: 'New',
          slidesGenerator: 'Popular',
        },
      },
      appBuilder: {
        headline: 'Build & publish your own AI tools',
        subtext: 'Custom assistants, structured apps, multiple output formats — your ideas, instantly deployable.',
      },
    },
    platformFlow: {
      heading: { before: 'From idea to classroom ', highlight: 'in minutes' },
      subheading: 'Whether you\'re a teacher creating a quiz, a school building courses, or a publisher producing at scale — Learneris fits your workflow.',
      cta: 'Start creating — free',
      useCases: [
        {
          icon: 'zap',
          title: 'Quick Create',
          audience: 'For individual teachers',
          description: 'Pick any AI tool, select your curriculum, and generate content instantly. No setup needed — just teach.',
          steps: [
            'Choose from 14+ AI tools for any content type',
            'Select integrated national curriculum (VN, US, etc.)',
            'Generate and use immediately — quizzes, lessons, slides',
          ],
        },
        {
          icon: 'school',
          title: 'Build & Teach',
          audience: 'For schools & course creators',
          description: 'Build full courses in the LMS, fill them with AI-generated content, and manage your classes end-to-end.',
          steps: [
            'Build course structure with chapters and lessons',
            'Add AI-generated content to every lesson',
            'Assign to classes, grade, and track student progress',
          ],
        },
        {
          icon: 'layers',
          title: 'Publish at Scale',
          audience: 'For schools & digital publishers',
          description: 'Upload curriculum maps and let AI produce an entire catalog of content — with team workflows, review, and batch publishing.',
          steps: [
            'Upload curriculum maps for bulk content generation',
            'Team workflows: assign, review, and approve',
            'Publish to Library or deploy directly via LMS',
          ],
        },
      ],
    },
    programs: {
      heading: { before: 'Deploy ', highlight: 'certified AI education' },
      subheading: 'Don\'t build from scratch. Our pre-built, certified AI literacy programs are ready to deploy — backed by national accreditation.',
      k12: {
        badge: 'VNIES Certified',
        title: 'H\u1ECDc C\u00F9ng AI \u2014 K-12 AI Curriculum',
        subtitle: 'One of the earliest certified AI literacy programs in Vietnam',
        description: 'A complete, certified AI literacy framework covering Grades 1\u201312. Students master AI through hands-on activities across five competency domains \u2014 aligned with Vietnam\'s national curriculum (GDPT 2018).',
        certifiedBy: 'Certified by',
        certifier: 'Vietnam Institute of Educational Sciences (VNIES)',
        grades: 'Grade levels',
        gradesValue: 'Elementary (1\u20135) \u00B7 Middle (6\u20139) \u00B7 High (10\u201312)',
        domains: 'Competency domains',
        domainsValue: 'Understanding \u00B7 Applying \u00B7 Critical Thinking \u00B7 Ethics \u00B7 Creativity',
        cta: 'Deploy the K-12 Curriculum',
      },
      university: {
        badge: 'Coming Soon',
        title: 'AI University Courses',
        subtitle: 'Advanced AI programs for higher education',
        description: 'University-level AI courses designed for undergraduate and graduate students. Equipping the next generation of professionals with practical AI skills and deep technical knowledge.',
        features: [
          'Applied AI for industry-specific fields',
          'AI ethics, governance & responsible innovation',
          'Hands-on projects with real-world datasets',
          'Certification pathways for career readiness',
        ],
        cta: 'Get notified when available',
        emailPlaceholder: 'Enter your email',
        subscribed: 'You\'re on the list!',
        subscribedMsg: 'We\'ll notify you when AI University Courses launch.',
      },
    },
  },
}
