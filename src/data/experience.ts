/**
 * WORK EXPERIENCE
 * ---------------
 * Add, remove, or reorder roles here.
 * Each entry renders as a card in the Experience section.
 */
export interface Role {
  company: string;
  title: string;
  period: string;
  current?: boolean;
  description: string;
  skills: string[];
}

export const experience: Role[] = [
  {
    company: 'RSL Queensland',
    title: 'CRM Developer',
    period: '2023 – Present',
    current: true,
    description:
      'Lead CRM development and customisation across RSL Queensland, building automated journeys, custom JavaScript solutions, and Power Platform integrations to improve member engagement and internal operations.',
    skills: [
      'Dynamics 365 CRM',
      'Customer Engagement',
      'Customer Insights',
      'Email & SMS Journeys',
      'Dataverse',
      'Power Platform',
      'Power Pages',
      'Azure DevOps',
      'JavaScript',
      'AI Prompting',
      'Sprint Cycles',
    ],
  },
  {
    company: 'RSL Queensland',
    title: 'Systems Administrator',
    period: '2022 – 2023',
    description:
      'Managed sub-branch site infrastructure across Queensland, overseeing networking equipment, video conferencing, printing, and Microsoft Teams administration. Served as the escalation point for helpdesk incidents.',
    skills: [
      'Fortinet Networking',
      'Yealink Video Conferencing',
      'Microsoft Teams Admin',
      'Canon / Toshiba Printers',
      'PaperCut',
      'Incident Escalation',
    ],
  },
  {
    company: 'RSL Queensland',
    title: 'IT Support Officer',
    period: '2019 – 2022',
    description:
      'Provided end-user support across the organisation, managing software deployments via SCCM, supporting Dynamics CRM, and maintaining DVA ESO and PRODA portals. Key liaison for sub-branch volunteers and major business stakeholders.',
    skills: [
      'Windows 10',
      'ServiceNow',
      'SCCM',
      'Mimecast',
      'Dynamics 365 CRM',
      'Skype for Business',
      'Video Conferencing',
      'DVA ESO Portal',
      'PRODA',
      'Customer Service',
    ],
  },
  {
    company: 'Downer / MHPS Plant Services',
    title: 'IT Support Officer',
    period: '2014 – 2019',
    description:
      'Delivered IT support across Windows environments, managing SCCM deployments, server setups, Crystal Reports, VPNs, and Cisco Meraki infrastructure. Supported a broad range of hardware, software, and connectivity needs for a large engineering organisation.',
    skills: [
      'Windows 7/8/10',
      'SCCM',
      'SQL Queries',
      'Crystal Reports',
      'Cisco Meraki',
      'Citrix',
      'VPN',
      'Server Setup',
      'Software Deployment',
    ],
  },
];
