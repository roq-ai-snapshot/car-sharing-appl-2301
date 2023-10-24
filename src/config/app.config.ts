interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read car information',
    'Create and manage bookings',
    'Create and edit reviews',
    'Create reports',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage cars',
    'Manage bookings',
    'Manage reviews',
    'Manage reports',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1d4f7fda-efee-4549-88c3-5d2400db0f53',
};
