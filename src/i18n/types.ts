export type Locale = 'en' | 'vi'

export interface Translations {
  nav: {
    brand: string
    links: { features: string; howItWorks: string; programs: string; testimonials: string }
    auth: { login: string; signup: string }
  }
  hero: {
    badge: string
    heading: { before: string; highlight: string; after: string }
    subheading: string
    ctaPrimary: string
    ctaSecondary: string
    stats: {
      prepTime: { value: string; label: string }
      tools: { value: string; label: string }
      free: { value: string; label: string }
    }
    mockup: {
      quickQuiz: string
      lessonPlan: string
      lms: string
      interactiveContent: string
      aiPowered: string
      generating: string
    }
    floatingBadges: {
      speed: { label: string; value: string }
      curriculum: { label: string; value: string }
    }
  }
  partners: { header: string }
  features: {
    heading: { before: string; highlight: string }
    subheading: string
    tags: { new: string; popular: string; preview: string; org: string }
    items: Record<string, { name: string; desc: string }>
  }
  howItWorks: {
    heading: { before: string; highlight: string }
    subheading: string
    stepLabel: string
    steps: { title: string; description: string }[]
  }
  stats: { items: { value: string; label: string }[] }
  testimonials: {
    heading: { before: string; highlight: string }
    subheading: string
    items: {
      name: string
      role: string
      location: string
      quote: string
    }[]
  }
  programs: {
    heading: { before: string; highlight: string }
    subheading: string
    k12: {
      badge: string
      title: string
      subtitle: string
      description: string
      certifiedBy: string
      certifier: string
      grades: string
      gradesValue: string
      domains: string
      domainsValue: string
      cta: string
    }
    university: {
      badge: string
      title: string
      subtitle: string
      description: string
      features: string[]
      cta: string
      emailPlaceholder: string
      subscribed: string
      subscribedMsg: string
    }
  }
  cta: {
    badge: string
    heading: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
  }
  footer: {
    newsletter: {
      heading: string
      subheading: string
      placeholder: string
      button: string
      thanks: string
    }
    tagline: string
    company: string
    address: string[]
    columns: {
      product: { title: string; items: Record<string, string> }
      company: { title: string; items: Record<string, string> }
      legal: { title: string; items: Record<string, string> }
    }
    copyright: string
  }
  legal: {
    backToHome: string
    copyright: string
  }
  auth: {
    signup: {
      heading: string
      subheading: string
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      passwordLabel: string
      passwordPlaceholder: string
      submit: string
      hasAccount: string
      loginLink: string
      orContinueWith: string
      googleButton: string
    }
    login: {
      heading: string
      subheading: string
      emailLabel: string
      emailPlaceholder: string
      passwordLabel: string
      passwordPlaceholder: string
      submit: string
      forgotPassword: string
      noAccount: string
      signupLink: string
      orContinueWith: string
      googleButton: string
    }
    forgotPassword: {
      heading: string
      subheading: string
      emailLabel: string
      emailPlaceholder: string
      submit: string
      backToLogin: string
      successHeading: string
      successMessage: string
    }
    errors: {
      required: string
      invalidEmail: string
      passwordTooShort: string
      emailTaken: string
      invalidCredentials: string
      genericError: string
    }
    socialProof: {
      headline: string
      subheadline: string
      stats: { value: string; label: string }[]
    }
  }
  v2: {
    platform: {
      heading: { before: string; highlight: string }
      subheading: string
      pillars: {
        aiSuite: { title: string; badge: string; description: string }
        production: { title: string; badge: string; description: string }
        lms: { title: string; badge: string; description: string }
        aiLiteracy: { title: string; badge: string; description: string }
      }
      tools: {
        sectionTitle: string
        sectionSubtitle: string
        items: Record<string, string>
        descriptions: Record<string, string>
        tags: Record<string, string>
      }
      appBuilder: { headline: string; subtext: string }
    }
    platformFlow: {
      heading: { before: string; highlight: string }
      subheading: string
      cta: string
      useCases: { icon: string; title: string; audience: string; description: string; steps: string[] }[]
    }
    programs: {
      heading: { before: string; highlight: string }
      subheading: string
      k12: {
        badge: string; title: string; subtitle: string; description: string
        certifiedBy: string; certifier: string
        grades: string; gradesValue: string
        domains: string; domainsValue: string
        cta: string
      }
      university: {
        badge: string; title: string; subtitle: string; description: string
        features: string[]; cta: string
        emailPlaceholder: string; subscribed: string; subscribedMsg: string
      }
    }
  }
}
