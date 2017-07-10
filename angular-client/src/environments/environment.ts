// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDJbL9GVaQPkDEJ01Wg1WDKuCKbt8B39Y8",
      authDomain: "tantrik-search.firebaseapp.com",
      databaseURL: "https://tantrik-search.firebaseio.com",
      projectId: "tantrik-search",
      storageBucket: "tantrik-search.appspot.com",
      messagingSenderId: "514163490542"
    }
};
