/**
 * SKILLS
 * ------
 * Grouped by category. Add, remove or rename as needed.
 * These render as tag clouds in the Skills section.
 *
 * iconUrl – optional CDN URL for a proper brand icon image.
 *           When set it overrides the emoji `icon`.
 *           Leave blank (or omit) to use the emoji fallback.
 */
export interface SkillGroup {
  category: string;
  icon: string;      // Emoji fallback
  iconUrl?: string;  // Optional brand icon image URL
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Microsoft Dynamics 365 / CRM',
    icon: '🔷',
    iconUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft-dataverse.svg',
    items: [
      'Dynamics 365 CRM',
      'Customer Engagement',
      'Customer Insights',
      'Dataverse',
      'D365 Customisation',
      'JavaScript (CRM)',
      'Email & SMS Journeys',
    ],
  },
  {
    category: 'Power Platform',
    icon: '⚡',
    iconUrl: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/microsoft-power-automate.svg',
    items: [
      'Power Platform',
      'Power Apps',
      'Power Automate',
      'Power Pages',
      'Power BI',
    ],
  },
  {
    category: 'Azure & DevOps',
    icon: '☁️',
    iconUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure-devops.svg',
    items: [
      'Azure',
      'Azure DevOps',
      'Build & Release Pipelines',
      'Sprint / Agile',
      'AI Prompting',
    ],
  },
  {
    category: 'IT Infrastructure & Support',
    icon: '🖥️',
    items: [
      'Windows 10/11',
      'SCCM',
      'ServiceNow',
      'Fortinet Networking',
      'Cisco Meraki',
      'VPN',
      'Citrix',
      'Server Administration',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    iconUrl: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/visual-studio-code.svg',
    items: [
      'Visual Studio',
      'SQL',
      'Crystal Reports',
      'Microsoft Teams Admin',
      'Mimecast',
      'PaperCut',
    ],
  },
];
