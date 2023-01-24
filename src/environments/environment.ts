// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  get_accounts: 'get__accounts',
  get_saving_accounts_id: 'get__saving_accounts_id',
  get_current_accounts_id: 'get__current_accounts_id',
  get_accounts_id_transactions:'get__accounts_id_transactions',
  post_transactions: 'post__transactions',

  API_URL: 'http://localhost:8080/bankManagement',
  ACCOUNTS: 'accounts',
  SAVING_ACCOUNTS: 'saving-accounts',
  CURRENT_ACCOUNTS: 'current-accounts',
  TRANSACTIONS:'transactions',
  CLIENTS: 'clients'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
