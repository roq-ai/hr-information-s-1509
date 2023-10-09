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
  tenantRoles: ['Business Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit personal info.', 'View company info.', 'View employee info.', 'View vacation status.'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage employee information',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f8227c8a-07bc-46cb-878f-cbd2ce31bbab',
};
