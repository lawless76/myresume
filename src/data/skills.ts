/**
 * SKILLS
 * ------
 * Grouped by category. Add, remove or rename as needed.
 * These render as tag clouds in the Skills section.
 */
export interface SkillGroup {
  category: string;
  icon: string;   // Emoji or SVG path string – keep short
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Microsoft Dynamics 365 / CRM',
    icon: '🔷',
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
    items: [
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
    items: [
      'Visual Studio',
      'Azure DevOps',
      'SQL',
      'Crystal Reports',
      'Microsoft Teams Admin',
      'Mimecast',
      'PaperCut',
    ],
  },
];
