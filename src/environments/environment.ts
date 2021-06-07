// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment, TimepadApi} from "./interface";

export const environment: Environment = {
  production: false,
};

export const timepadApi: TimepadApi = {
  apiUrl: 'https://api.timepad.ru/v1',
  apiKey: '3b7a3df04437873355e5a79c63cf9cc0578c34ac',
  organization: {
    id: 262528,
    subdomain: "testorganization-event"
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
