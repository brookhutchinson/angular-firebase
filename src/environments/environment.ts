// the file contents for the current environment will overwrite these during build
// the build system defaults to the dev environment which uses `environment.ts`, but if you do `ng build --env=prod` then `environment.prod.ts` will be used instead
// the list of which env maps to which file can be found in `.angular-cli.json`

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABCWXo4z7fO16rc-jqmnYcxZVfTXfBAEA",
    authDomain: "angular-firebase-f9b91.firebaseapp.com",
    databaseURL: "https://angular-firebase-f9b91.firebaseio.com",
    projectId: "angular-firebase-f9b91",
    storageBucket: "angular-firebase-f9b91.appspot.com",
    messagingSenderId: "630517786592"
  }
};