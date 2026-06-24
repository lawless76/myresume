/**
 * EDUCATION & CERTIFICATIONS
 * --------------------------
 * Add degrees, certs, and courses here.
 */
export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  location?: string;
  note?: string;
}

export interface CertItem {
  year: string;
  title: string;
  issuer: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Queensland University of Technology',
    qualification: 'Bachelor of Information Technology',
    period: '2012 – 2014',
    location: 'Brisbane, QLD',
    note: 'GPA 6 / 7',
  },
  {
    institution: 'Central Queensland University',
    qualification: 'Bachelor of Multimedia Studies (partial)',
    period: '2003 – 2004',
    location: 'Rockhampton, QLD',
    note: 'Studies not completed',
  },
];

export const certifications: CertItem[] = [
  {
    year: '2025',
    title: 'BCS Foundation Certificate in Business Analysis v4.1',
    issuer: 'BCS, The Chartered Institute for IT',
  },
  {
    year: '2013',
    title: 'Academic Certificate in Business Analysis',
    issuer: 'International Institute of Business Analysis (IIBA)',
  },
  {
    year: '2013',
    title: 'Statement of Participation – Stimulate Peer Learning Facilitator',
    issuer: 'Queensland University of Technology',
  },
];

export const courses: CertItem[] = [
  {
    year: '2024',
    title: 'Microsoft Dynamics 365 Administration: Customer Engagement Apps',
    issuer: 'LinkedIn Learning',
  },
  {
    year: '2024',
    title: 'Learning Microsoft Dynamics for Customer Service',
    issuer: 'LinkedIn Learning',
  },
  {
    year: '2024',
    title: 'Microsoft Dynamics 365 Sales Essential Training',
    issuer: 'LinkedIn Learning',
  },
];
