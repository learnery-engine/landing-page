import type { Translations } from '../types'

export const en: Translations = {
  nav: {
    brand: 'Learneris',
    links: { features: 'Features', howItWorks: 'How it Works', programs: 'Programs', testimonials: 'Testimonials' },
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
      '14+ AI tools for instant content creation, a full LMS for classroom management, and a shared content library — everything educators need in one platform.',
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
}
