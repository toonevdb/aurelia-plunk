SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.5.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.2.0.0",
    "aurelia-environment": "github:toonevdb/aurelia-environment@0.1.7",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.3",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.1.0",
    "aurelia-i18n": "npm:aurelia-i18n@1.6.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.3.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-notification": "npm:aurelia-notification@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.4.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.4.0",
    "aurelia-tabbed": "npm:aurelia-tabbed@0.1.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
    "aurelia-templating": "npm:aurelia-templating@1.6.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.2.0",
    "aurelia-testing": "npm:aurelia-testing@1.0.0-beta.4.0.0",
    "aurelia-validation": "npm:aurelia-validation@1.1.2",
    "i18next": "npm:i18next@3.5.2",
    "intl": "npm:intl@1.2.5"
  },
  packages: {
    "npm:aurelia-notification@1.0.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
        "aurelia-i18n": "npm:aurelia-i18n@1.6.2",
        "aurelia-pal": "npm:aurelia-pal@1.4.0",
        "humane-js": "npm:humane-js@3.2.2",
        "extend": "npm:extend@3.0.1"
      }
    }
  }
});
