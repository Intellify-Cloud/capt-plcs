// src/data/site.ts
// Single source of truth for all site content.
// This is the only file a non-developer needs to touch to update copy.

export const site = {
  meta: {
    title: "Captivating Places",
    description:
      "Curated interior design by Sam Place. Bespoke high-end residential and commercial spaces centered around minimalism and human behavior.",
    url: "https://captivatingplaces.co.za",
    keywords:
      "interior design, durban interior designer, bespoke interiors, curated minimalism, Sam Place, Morningside design, architecture Durban",
  },

  business: {
    owner: "Sam Place",
    address: "515 Currie Road, Morningside, Durban",
    email: "captivatingplaces@gmail.com",
    phone: "+27 72 989 3046",
  },

  nav: {
    logo: {
      name: "Captivating Places",
      tagline: "Curated Minimalism",
      image: "/assets/brand/captivating-places-logo_.png",
    },
    links: [
      { label: "HOME",      href: "/"          },
      { label: "ABOUT",     href: "/about"     },
      { label: "SERVICES",  href: "/#services" },
      // { label: "PORTFOLIO", href: "#work"      },
      { label: "CONTACT",   href: "/contact"   },
    ],
  },

  hero: {
    show: true,
    eyebrow: "Bespoke Interior Studio",
    heading: "Elevating the essence of",
    headingItalic: "Modern Spaces",
    images: [
      "/assets/hero/hero.png",
      "/assets/hero/hero_2.png",
    ],
    ctas: [
      { label: "Start a Project", href: "#contact" },
    ],
  },

  services: {
    show: true,
    eyebrow: "What We Do",
    heading: "Our Specialities",
    categories: [
      {
        title: "Space & Architecture",
        items: [
          {
            title: "New Builds",
            description:
              "Partnering with architects from the outset to realise a considered, cohesive vision — inside and out.",
          },
          {
            title: "Renovations",
            description:
              "Reimagining existing spaces, whether working directly with you or alongside your architect, to create interiors that reflect how you truly live.",
          },
          {
            title: "Material Specification",
            description:
              "Curating every hard and soft finish — flooring, stone, sanitaryware, wall coverings — so each surface works in harmony.",
          },
          {
            title: "Bespoke Joinery",
            description:
              "Designing custom kitchens, bathrooms, built-in cabinetry, and millwork tailored precisely to your space and lifestyle.",
          },
          {
            title: "Lighting & Electrical",
            description:
              "Planning light layouts and electrical specifications that shape mood, function, and the way a room feels at every hour.",
          },
        ],
      },
      {
        title: "Interior Design",
        items: [
          {
            title: "Furniture & Object Curation",
            description:
              "Selecting furniture, lighting, rugs, and objects that balance aesthetic intent with practical budget considerations.",
          },
          {
            title: "Window Treatments",
            description:
              "Designing drapery, blinds, and shutters that respond to each room's light quality, privacy needs, and character.",
          },
          {
            title: "Soft Furnishings",
            description:
              "Conceiving and managing bespoke upholstery — from initial design through to final production and installation.",
          },
          {
            title: "Art & Picture Walls",
            description:
              "Curating and hanging artworks, collections, and family picture walls that give a room its soul.",
          },
          {
            title: "Space Refreshes",
            description:
              "Rethinking and breathing new life into rooms that simply need a considered edit rather than a full overhaul.",
          },
        ],
      },
    ],
  },

  work: {
    show: false,
    heading: "Featured Projects",
    items: [
      {
        title: "House Murray",
        category: "RESIDENTIAL",
        year: "2024",
        cover: "/assets/projects/house-murray/cover.jpg",
      },
      {
        title: "Office Collective",
        category: "COMMERCIAL",
        year: "2023",
        cover: "/assets/projects/office-collective/cover.jpg",
      },
      {
        title: "Urban Escape",
        category: "INTERIOR",
        year: "2024",
        cover: "/assets/projects/urban-escape/cover.jpg",
      },
    ],
  },

  about: {
    show: true,
    title: "Sam Place",
    role: "INTERIOR DESIGNER",
    image: "/assets/team/Sam-Place.png",
    bio: [
      "Just a person who has a degree in:",
      "Space planning. Colour theory. Human behaviour. Biophilia. The sky falling. Customer service. Stress, tears and creativity. And making your dreams come true.",
      "Nothing major."
    ],
    quote:
      "Creativity is the ability to see things that don't exist yet and make them real."
  },

  quotes: {
    show: true,
    items: [
      {
        text: "Have nothing in your house that you do not know to be useful, or believe to be beautiful.",
        author: "William Morris",
      },
      {
        text: "The details are not the details. They make the design.",
        author: "Charles Eames",
      },
      {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
      },
      {
        text: "The best rooms have something to say about the people who live in them.",
        author: "David Hicks",
      },
      {
        text: "I want to make beautiful things, even if nobody cares.",
        author: "Saul Bass",
      },
      {
        text: "In order to be irreplaceable, one must always be different.",
        author: "Coco Chanel",
      },
      {
        text: "Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep.",
        author: "Le Corbusier",
      },
      {
        text: "The job of the artist is always to deepen the mystery.",
        author: "Francis Bacon",
      },
      {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
      },
      {
        text: "stop. stand here. and breathe in all the things that make you grateful for this life.",
        author: "x",
      },
    ],
  },

  contact: {
    show: true,
    heading: "Get In Touch",
    subheading: "Have a project in mind? Reach out and let's create something beautiful together.",
    email: "captivatingplaces@gmail.com",
    phone: "+27 72 989 3046",
    whatsapp: "https://wa.me/27729893046",
    instagram: "https://www.instagram.com/captivatingplaces_za/",
    address: "515 Currie Road, Morningside, Durban",
    showForm: true,
  },

  footer: {
    copy: "© 2026 Captivating Places. All rights reserved.",
    socials: [
      { platform: "INSTAGRAM", href: "https://www.instagram.com/captivatingplaces_za/" },
      { platform: "EMAIL",     href: "mailto:captivatingplaces@gmail.com" },
    ],
  },
};
