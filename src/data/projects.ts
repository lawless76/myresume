/**
 * PROJECTS
 * --------
 * Showcase work or personal projects here.
 * Add a `url` and/or `repo` to link out.
 * Set `featured: true` to highlight a project at the top.
 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'RSL Queensland Member Portal',
    description:
      'Developed and customised a Power Pages member portal for RSL Queensland, enabling sub-branch volunteers to manage member data, run event registrations, and access organisational resources.',
    tags: ['Power Pages', 'Dynamics 365', 'Dataverse', 'JavaScript'],
    featured: true,
  },
  {
    title: 'Email & SMS Journey Automation',
    description:
      'Designed and deployed automated communication journeys in Dynamics 365 Customer Insights, improving member engagement across RSL Queensland\'s network of 400+ sub-branches.',
    tags: ['D365 Customer Insights', 'Email Journeys', 'SMS', 'Marketing Automation'],
    featured: true,
  },
  {
    title: 'Azure DevOps Release Pipeline',
    description:
      'Built and maintained Azure DevOps release pipelines for deploying CRM customisations across Development, UAT, and Production environments with automated rollback capability.',
    tags: ['Azure DevOps', 'CI/CD', 'Dynamics 365', 'Release Management'],
  },
  {
    title: 'Personal Resume Site (This Site)',
    description:
      'Built with Astro + Tailwind CSS, containerised with Docker, and deployed via GitHub Actions to a self-hosted TrueNAS server. Content is managed through TypeScript data files.',
    tags: ['Astro', 'Tailwind CSS', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/lawless76/myresume',
  },
  // Add more projects here — copy the block above and fill in your details
];
