/**
 * SITE CONFIGURATION
 * ------------------
 * Update these values to personalise the site.
 * Changes here are reflected site-wide automatically.
 */
export const site = {
  name: 'Craig Law',
  title: 'CRM Developer & IT Professional',
  description:
    'Brisbane-based CRM Developer specialising in Microsoft Dynamics 365, Power Platform, and Azure DevOps. Open to new opportunities.',

  // Contact details
  email: 'craiglaw1976@gmail.com',
  phone: '0429 238 699',
  location: 'Brisbane, QLD, Australia',

  // Social / professional links
  linkedin: 'https://au.linkedin.com/pub/craig-law/87/523/919/',
  github: 'https://github.com/lawless76',

  // Umami analytics – set your website ID after you install Umami.
  // Leave blank to disable analytics.
  // See README.md § Analytics for setup instructions.
  umamiWebsiteId: '',
  umamiSrc: '',          // e.g. 'https://analytics.yourdomain.com/script.js'

  // Contact form – powered by Formspree (https://formspree.io)
  // Replace with your own Formspree endpoint after creating a free account.
  formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME',

  // Navigation links (id = section anchor on the home page)
  nav: [
    { label: 'About',      href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Education',  href: '#education' },
    { label: 'Contact',    href: '#contact' },
  ],
};
