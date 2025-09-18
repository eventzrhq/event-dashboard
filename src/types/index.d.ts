export type AboutPage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    draft?: boolean;
    hero: {
      title: string;
      subtitle: string;
      description: string;
      gallery: {
        enable: boolean;
        leftImage: string;
        leftImageAlt: string;
        rightImage: string;
        rightImageAlt: string;
      };
    };
  };
  content: string;
  slug?: string;
};

export type DemoPage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    page_header: {
      title: string;
      subtitle: string;
    };
  };
  content: string;
  slug?: string;
};

export type ChangelogPage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    page_header: {
      title: string;
      subtitle: string;
    };
    changelogs: {
      title: string;
      version: string;
      image: string;
      imageAlt: string;
      desc: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type ContactPage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    draft: boolean;
    hero: {
      title: string;
      subtitle: string;
      contact: string;
      email: string;
      phone: string;
    };
  };
  content: string;
  slug?: string;
};

export type FeaturePage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    hero: {
      title: string;
      description: string;
      button: Button;
      banner_image: {
        src: string;
        alt: string;
      };
      shape_image: {
        enable: boolean;
        src: string;
      };
    };
  };
  content: string;
  slug?: string;
};

export type PricingPage = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    hero: {
      title: string;
      subtitle: string;
      tablePricing: {
        enable: boolean;
        title: string;
        subtitle: string;
      };
    };
  };
  content: string;
  slug?: string;
};

export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
    page_header?: {
      title: string;
      subtitle: string;
    };
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    date: string;
    image: string;
    categories: string[];
    author: string;
    draft: boolean;
    tags?: string[];
  };
  content: string;
  slug?: string;
};

export type Case = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    logo: string;
    logoAlt: string;
    subtitle: string;
    desc: string;
  };
  content: string;
  slug?: string;
};

export type Integration = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    draft: boolean;
    subtitle: string;
    logo: string;
    shortDesc: string;
    desc: string;
    button: Button;
  };
  content: string;
  slug?: string;
};

export type CallToAction = {
  frontmatter: {
    title: string;
    subtitle: string;
    button: Button;
    dashboard_image: {
      enable: boolean;
      src: string;
      alt: string;
    };
    shape_image: {
      enable: boolean;
      src: string;
    };
  };
  content: string;
  slug?: string;
};

export type Testimonials = {
  frontmatter: {
    title: string;
    subtitle: string;
    testimonials: {
      quote: string;
      name: string;
      position: string;
      image: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type FaqSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    accordions: {
      title: string;
      content: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type HomeBanner = {
  frontmatter: {
    title: string;
    description: string;
    notification: string;
    buttons: {
      enable: boolean;
      label: string;
      link: string;
    }[];
    main_image: {
      src: string;
      alt: string;
    };
    background_image: {
      src: string;
      alt: string;
    };
  };
  content: string;
  slug?: string;
};

export type Commitments = {
  frontmatter: {
    title: string;
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type FeaturesSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    services: {
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      button: Button;
      stats: {
        enable: boolean;
        percentage: string;
        growthRate: string;
        desc: string;
      };
    }[];
  };
  content: string;
  slug?: string;
};

export type JourneySection = {
  frontmatter: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      imageSrc: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type ServicesSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    services: {
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      button: Button;
      stats: {
        enable: boolean;
        percentage: string;
        growthRate: string;
        desc: string;
      };
    }[];
  };
  content: string;
  slug?: string;
};

export type TeamSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    members: {
      full_name: string;
      position: string;
      image: string;
      enable: boolean;
    }[];
  };
  content: string;
  slug?: string;
};

export type ValuesSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    commitmentCards: {
      icon: string;
      title: string;
      description: string;
      aosDelay: string;
    }[];
    ourJourney: {
      enable: boolean;
      title: string;
      description: string;
      sectionSubtitle: string;
      image: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      overlayShape: {
        enable: boolean;
        src: string;
        alt: string;
      };
    };
    milestones: {
      enable: boolean;
      list: {
        year: string;
        value: string;
        description: string;
      }[];
    };
  };
  content: string;
  slug?: string;
};

export type PricingSection = {
  frontmatter: {
    title: string;
    subtitle: string;
    plans: {
      monthly: {
        plan: string;
        audience: string;
        users: string;
        price_prefix: string;
        price: string;
        features: string[];
        button: Button;
      }[];
      yearly: {
        plan: string;
        audience: string;
        users: string;
        price_prefix: string;
        price: string;
        features: string[];
        button: Button;
      }[];
    };
  };
  content: string;
  slug?: string;
};

export type BrandsSection = {
  frontmatter: {
    description: string;
    brands: {
      src: string;
      alt: string;
    }[];
  };
  content: string;
  slug?: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
