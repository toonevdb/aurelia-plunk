SystemJS.config({
  paths: {
    "npm:": "https://cdn.jsdelivr.net/gh/toonevdb/aurelia-plunk@v0.0.7/jspm_packages/npm/",
    "github:": "https://cdn.rawgit.com/toonevdb/aurelia-plunk/v0.0.7/jspm_packages/github/"
  },
  browserConfig: {
    "bundles": {
      "https://cdn.jsdelivr.net/gh/toonevdb/aurelia-plunk@v0.0.7/aurelia-bundle.js": [
        "npm:aurelia-validation@1.1.2/aurelia-validation.js",
        "npm:aurelia-validation@1.1.2.json",
        "npm:aurelia-pal@1.4.0/aurelia-pal.js",
        "npm:aurelia-pal@1.4.0.json",
        "npm:aurelia-validation@1.1.2/implementation/validation-rules.js",
        "npm:aurelia-validation@1.1.2/util.js",
        "npm:aurelia-validation@1.1.2/implementation/validation-messages.js",
        "npm:aurelia-validation@1.1.2/implementation/validation-message-parser.js",
        "npm:aurelia-validation@1.1.2/implementation/expression-visitor.js",
        "npm:aurelia-logging@1.3.1/aurelia-logging.js",
        "npm:aurelia-logging@1.3.1.json",
        "npm:aurelia-templating@1.6.0/aurelia-templating.js",
        "npm:aurelia-templating@1.6.0.json",
        "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
        "npm:aurelia-task-queue@1.2.1.json",
        "npm:aurelia-binding@1.5.0/aurelia-binding.js",
        "npm:aurelia-binding@1.5.0.json",
        "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
        "npm:aurelia-metadata@1.0.3.json",
        "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
        "npm:aurelia-dependency-injection@1.3.2.json",
        "npm:aurelia-loader@1.0.0/aurelia-loader.js",
        "npm:aurelia-loader@1.0.0.json",
        "npm:aurelia-path@1.1.1/aurelia-path.js",
        "npm:aurelia-path@1.1.1.json",
        "npm:aurelia-validation@1.1.2/implementation/rules.js",
        "npm:aurelia-validation@1.1.2/implementation/standard-validator.js",
        "npm:aurelia-validation@1.1.2/validate-result.js",
        "npm:aurelia-validation@1.1.2/validator.js",
        "npm:aurelia-validation@1.1.2/validation-renderer-custom-attribute.js",
        "npm:aurelia-validation@1.1.2/validation-controller.js",
        "npm:aurelia-validation@1.1.2/validate-event.js",
        "npm:aurelia-validation@1.1.2/property-accessor-parser.js",
        "npm:aurelia-validation@1.1.2/property-info.js",
        "npm:aurelia-validation@1.1.2/validate-trigger.js",
        "npm:aurelia-validation@1.1.2/validation-errors-custom-attribute.js",
        "npm:aurelia-validation@1.1.2/validation-controller-factory.js",
        "npm:aurelia-validation@1.1.2/validate-binding-behavior.js",
        "npm:aurelia-validation@1.1.2/validate-binding-behavior-base.js",
        "npm:aurelia-validation@1.1.2/get-target-dom-element.js",
        "npm:aurelia-testing@1.0.0-beta.4.0.0/aurelia-testing.js",
        "npm:aurelia-testing@1.0.0-beta.4.0.0.json",
        "npm:aurelia-testing@1.0.0-beta.4.0.0/wait.js",
        "npm:aurelia-testing@1.0.0-beta.4.0.0/component-tester.js",
        "npm:aurelia-testing@1.0.0-beta.4.0.0/view-spy.js",
        "npm:aurelia-testing@1.0.0-beta.4.0.0/compile-spy.js",
        "npm:aurelia-templating-router@1.2.0/aurelia-templating-router.js",
        "npm:aurelia-templating-router@1.2.0.json",
        "npm:aurelia-templating-router@1.2.0/route-href.js",
        "npm:aurelia-router@1.4.0/aurelia-router.js",
        "npm:aurelia-router@1.4.0.json",
        "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
        "npm:aurelia-event-aggregator@1.0.1.json",
        "npm:aurelia-history@1.1.0/aurelia-history.js",
        "npm:aurelia-history@1.1.0.json",
        "npm:aurelia-route-recognizer@1.1.1/aurelia-route-recognizer.js",
        "npm:aurelia-route-recognizer@1.1.1.json",
        "npm:aurelia-templating-router@1.2.0/router-view.js",
        "npm:aurelia-templating-router@1.2.0/route-loader.js",
        "npm:aurelia-templating-binding@1.4.0/aurelia-templating-binding.js",
        "npm:aurelia-templating-binding@1.4.0.json",
        "npm:aurelia-notification@1.0.0/aurelia-notification.js",
        "npm:aurelia-notification@1.0.0.json",
        "npm:aurelia-i18n@1.6.2/aurelia-i18n.js",
        "npm:aurelia-i18n@1.6.2.json",
        "npm:aurelia-i18n@1.6.2/aurelia-i18n-loader.js",
        "npm:aurelia-i18n@1.6.2/base-i18n.js",
        "npm:aurelia-i18n@1.6.2/i18n.js",
        "npm:aurelia-templating-resources@1.5.4/aurelia-templating-resources.js",
        "npm:aurelia-templating-resources@1.5.4.json",
        "npm:aurelia-templating-resources@1.5.4/aurelia-hide-style.js",
        "npm:aurelia-templating-resources@1.5.4/analyze-view-factory.js",
        "npm:aurelia-templating-resources@1.5.4/repeat-utilities.js",
        "npm:aurelia-templating-resources@1.5.4/number-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.5.4/set-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.5.4/map-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.5.4/array-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.5.4/null-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.5.4/html-resource-plugin.js",
        "npm:aurelia-templating-resources@1.5.4/dynamic-element.js",
        "npm:aurelia-templating-resources@1.5.4/repeat-strategy-locator.js",
        "npm:aurelia-templating-resources@1.5.4/abstract-repeater.js",
        "npm:aurelia-templating-resources@1.5.4/update-trigger-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/binding-signaler.js",
        "npm:aurelia-templating-resources@1.5.4/signal-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/self-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/debounce-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/throttle-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/binding-mode-behaviors.js",
        "npm:aurelia-templating-resources@1.5.4/attr-binding-behavior.js",
        "npm:aurelia-templating-resources@1.5.4/html-sanitizer.js",
        "npm:aurelia-templating-resources@1.5.4/css-resource.js",
        "npm:aurelia-templating-resources@1.5.4/focus.js",
        "npm:aurelia-templating-resources@1.5.4/replaceable.js",
        "npm:aurelia-templating-resources@1.5.4/sanitize-html.js",
        "npm:aurelia-templating-resources@1.5.4/hide.js",
        "npm:aurelia-templating-resources@1.5.4/show.js",
        "npm:aurelia-templating-resources@1.5.4/repeat.js",
        "npm:aurelia-templating-resources@1.5.4/with.js",
        "npm:aurelia-templating-resources@1.5.4/else.js",
        "npm:aurelia-templating-resources@1.5.4/if-core.js",
        "npm:aurelia-templating-resources@1.5.4/if.js",
        "npm:aurelia-templating-resources@1.5.4/compose.js",
        "npm:i18next@3.5.2/index.js",
        "npm:i18next@3.5.2.json",
        "npm:i18next@3.5.2/dist/commonjs/index.js",
        "npm:i18next@3.5.2/dist/commonjs/i18next.js",
        "npm:i18next@3.5.2/dist/commonjs/compatibility/v1.js",
        "npm:i18next@3.5.2/dist/commonjs/logger.js",
        "npm:i18next@3.5.2/dist/commonjs/postProcessor.js",
        "npm:i18next@3.5.2/dist/commonjs/defaults.js",
        "npm:i18next@3.5.2/dist/commonjs/CacheConnector.js",
        "npm:i18next@3.5.2/dist/commonjs/EventEmitter.js",
        "npm:i18next@3.5.2/dist/commonjs/utils.js",
        "npm:i18next@3.5.2/dist/commonjs/BackendConnector.js",
        "npm:i18next@3.5.2/dist/commonjs/Interpolator.js",
        "npm:i18next@3.5.2/dist/commonjs/PluralResolver.js",
        "npm:i18next@3.5.2/dist/commonjs/LanguageUtils.js",
        "npm:i18next@3.5.2/dist/commonjs/Translator.js",
        "npm:i18next@3.5.2/dist/commonjs/ResourceStore.js",
        "npm:aurelia-i18n@1.6.2/t.js",
        "npm:aurelia-i18n@1.6.2/utils.js",
        "npm:aurelia-i18n@1.6.2/rt.js",
        "npm:aurelia-i18n@1.6.2/relativeTime.js",
        "npm:aurelia-i18n@1.6.2/defaultTranslations/relative.time.js",
        "npm:aurelia-i18n@1.6.2/nf.js",
        "npm:aurelia-i18n@1.6.2/df.js",
        "npm:humane-js@3.2.2/humane.js",
        "npm:humane-js@3.2.2.json",
        "npm:extend@3.0.1/index.js",
        "npm:extend@3.0.1.json",
        "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
        "npm:aurelia-logging-console@1.0.0.json",
        "npm:aurelia-loader-default@1.0.3/aurelia-loader-default.js",
        "npm:aurelia-loader-default@1.0.3.json",
        "npm:aurelia-history-browser@1.1.0/aurelia-history-browser.js",
        "npm:aurelia-history-browser@1.1.0.json",
        "npm:aurelia-framework@1.1.5/aurelia-framework.js",
        "npm:aurelia-framework@1.1.5.json",
        "npm:aurelia-fetch-client@1.1.3/aurelia-fetch-client.js",
        "npm:aurelia-fetch-client@1.1.3.json",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/aurelia-dialog.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0.json",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-controller.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-cancel-error.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-close-error.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/lifecycle.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/renderer.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-service.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-settings.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/attach-focus.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-footer.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-body.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-header.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-configuration.js",
        "npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-renderer.js",
        "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
        "npm:aurelia-bootstrapper@1.0.1.json",
        "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
        "npm:aurelia-polyfills@1.2.2.json",
        "npm:aurelia-pal-browser@1.3.0/aurelia-pal-browser.js",
        "npm:aurelia-pal-browser@1.3.0.json",
        "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
        "npm:aurelia-animator-css@1.0.4.json"
      ],
      "https://cdn.jsdelivr.net/gh/toonevdb/aurelia-plunk@v0.0.7/babel-bundle.js": [
        "npm:systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
        "npm:babel-plugin-transform-decorators-legacy@1.3.4/lib/index.js",
        "npm:babel-plugin-transform-decorators-legacy@1.3.4.json",
        "npm:babel-template@6.26.0/lib/index.js",
        "npm:babel-template@6.26.0.json",
        "npm:babel-types@6.26.0/lib/index.js",
        "npm:babel-types@6.26.0.json",
        "npm:babel-types@6.26.0/lib/react.js",
        "npm:babel-types@6.26.0/lib/definitions/index.js",
        "npm:babel-runtime@6.26.0/helpers/typeof.js",
        "npm:babel-runtime@6.26.0.json",
        "npm:babel-runtime@6.26.0/core-js/symbol.js",
        "npm:core-js@2.5.1/library/fn/symbol/index.js",
        "npm:core-js@2.5.1.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:core-js@2.5.1/library/modules/_core.js",
        "npm:core-js@2.5.1/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.5.1/library/modules/_wks-define.js",
        "npm:core-js@2.5.1/library/modules/_object-dp.js",
        "npm:core-js@2.5.1/library/modules/_descriptors.js",
        "npm:core-js@2.5.1/library/modules/_fails.js",
        "npm:core-js@2.5.1/library/modules/_to-primitive.js",
        "npm:core-js@2.5.1/library/modules/_is-object.js",
        "npm:core-js@2.5.1/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.5.1/library/modules/_dom-create.js",
        "npm:core-js@2.5.1/library/modules/_global.js",
        "npm:core-js@2.5.1/library/modules/_an-object.js",
        "npm:core-js@2.5.1/library/modules/_wks-ext.js",
        "npm:core-js@2.5.1/library/modules/_wks.js",
        "npm:core-js@2.5.1/library/modules/_uid.js",
        "npm:core-js@2.5.1/library/modules/_shared.js",
        "npm:core-js@2.5.1/library/modules/_library.js",
        "npm:core-js@2.5.1/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.5.1/library/modules/es6.object.to-string.js",
        "npm:core-js@2.5.1/library/modules/es6.symbol.js",
        "npm:core-js@2.5.1/library/modules/_hide.js",
        "npm:core-js@2.5.1/library/modules/_property-desc.js",
        "npm:core-js@2.5.1/library/modules/_object-gops.js",
        "npm:core-js@2.5.1/library/modules/_object-pie.js",
        "npm:core-js@2.5.1/library/modules/_object-gopn.js",
        "npm:core-js@2.5.1/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.5.1/library/modules/_object-keys-internal.js",
        "npm:core-js@2.5.1/library/modules/_shared-key.js",
        "npm:core-js@2.5.1/library/modules/_array-includes.js",
        "npm:core-js@2.5.1/library/modules/_to-absolute-index.js",
        "npm:core-js@2.5.1/library/modules/_to-integer.js",
        "npm:core-js@2.5.1/library/modules/_to-length.js",
        "npm:core-js@2.5.1/library/modules/_to-iobject.js",
        "npm:core-js@2.5.1/library/modules/_defined.js",
        "npm:core-js@2.5.1/library/modules/_iobject.js",
        "npm:core-js@2.5.1/library/modules/_cof.js",
        "npm:core-js@2.5.1/library/modules/_has.js",
        "npm:core-js@2.5.1/library/modules/_object-keys.js",
        "npm:core-js@2.5.1/library/modules/_object-gopd.js",
        "npm:core-js@2.5.1/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.5.1/library/modules/_object-create.js",
        "npm:core-js@2.5.1/library/modules/_html.js",
        "npm:core-js@2.5.1/library/modules/_object-dps.js",
        "npm:core-js@2.5.1/library/modules/_is-array.js",
        "npm:core-js@2.5.1/library/modules/_enum-keys.js",
        "npm:core-js@2.5.1/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.5.1/library/modules/_meta.js",
        "npm:core-js@2.5.1/library/modules/_redefine.js",
        "npm:core-js@2.5.1/library/modules/_export.js",
        "npm:core-js@2.5.1/library/modules/_ctx.js",
        "npm:core-js@2.5.1/library/modules/_a-function.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
        "npm:core-js@2.5.1/library/fn/symbol/iterator.js",
        "npm:core-js@2.5.1/library/modules/web.dom.iterable.js",
        "npm:core-js@2.5.1/library/modules/_iterators.js",
        "npm:core-js@2.5.1/library/modules/es6.array.iterator.js",
        "npm:core-js@2.5.1/library/modules/_iter-define.js",
        "npm:core-js@2.5.1/library/modules/_object-gpo.js",
        "npm:core-js@2.5.1/library/modules/_to-object.js",
        "npm:core-js@2.5.1/library/modules/_iter-create.js",
        "npm:core-js@2.5.1/library/modules/_iter-step.js",
        "npm:core-js@2.5.1/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.5.1/library/modules/es6.string.iterator.js",
        "npm:core-js@2.5.1/library/modules/_string-at.js",
        "npm:babel-runtime@6.26.0/core-js/json/stringify.js",
        "npm:core-js@2.5.1/library/fn/json/stringify.js",
        "npm:babel-runtime@6.26.0/core-js/get-iterator.js",
        "npm:core-js@2.5.1/library/fn/get-iterator.js",
        "npm:core-js@2.5.1/library/modules/core.get-iterator.js",
        "npm:core-js@2.5.1/library/modules/core.get-iterator-method.js",
        "npm:core-js@2.5.1/library/modules/_classof.js",
        "npm:babel-types@6.26.0/lib/definitions/init.js",
        "npm:babel-types@6.26.0/lib/definitions/experimental.js",
        "npm:babel-types@6.26.0/lib/definitions/misc.js",
        "npm:babel-types@6.26.0/lib/definitions/jsx.js",
        "npm:babel-types@6.26.0/lib/definitions/flow.js",
        "npm:babel-types@6.26.0/lib/definitions/es2015.js",
        "npm:babel-types@6.26.0/lib/definitions/core.js",
        "npm:babel-types@6.26.0/lib/constants.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/for.js",
        "npm:core-js@2.5.1/library/fn/symbol/for.js",
        "npm:lodash@4.17.4/uniq.js",
        "npm:lodash@4.17.4.json",
        "npm:lodash@4.17.4/_baseUniq.js",
        "npm:lodash@4.17.4/_setToArray.js",
        "npm:lodash@4.17.4/_createSet.js",
        "npm:lodash@4.17.4/noop.js",
        "npm:lodash@4.17.4/_Set.js",
        "npm:lodash@4.17.4/_root.js",
        "npm:lodash@4.17.4/_freeGlobal.js",
        "npm:lodash@4.17.4/_getNative.js",
        "npm:lodash@4.17.4/_getValue.js",
        "npm:lodash@4.17.4/_baseIsNative.js",
        "npm:lodash@4.17.4/_toSource.js",
        "npm:lodash@4.17.4/isObject.js",
        "npm:lodash@4.17.4/_isMasked.js",
        "npm:lodash@4.17.4/_coreJsData.js",
        "npm:lodash@4.17.4/isFunction.js",
        "npm:lodash@4.17.4/_baseGetTag.js",
        "npm:lodash@4.17.4/_objectToString.js",
        "npm:lodash@4.17.4/_getRawTag.js",
        "npm:lodash@4.17.4/_Symbol.js",
        "npm:lodash@4.17.4/_cacheHas.js",
        "npm:lodash@4.17.4/_arrayIncludesWith.js",
        "npm:lodash@4.17.4/_arrayIncludes.js",
        "npm:lodash@4.17.4/_baseIndexOf.js",
        "npm:lodash@4.17.4/_strictIndexOf.js",
        "npm:lodash@4.17.4/_baseIsNaN.js",
        "npm:lodash@4.17.4/_baseFindIndex.js",
        "npm:lodash@4.17.4/_SetCache.js",
        "npm:lodash@4.17.4/_setCacheHas.js",
        "npm:lodash@4.17.4/_setCacheAdd.js",
        "npm:lodash@4.17.4/_MapCache.js",
        "npm:lodash@4.17.4/_mapCacheSet.js",
        "npm:lodash@4.17.4/_getMapData.js",
        "npm:lodash@4.17.4/_isKeyable.js",
        "npm:lodash@4.17.4/_mapCacheHas.js",
        "npm:lodash@4.17.4/_mapCacheGet.js",
        "npm:lodash@4.17.4/_mapCacheDelete.js",
        "npm:lodash@4.17.4/_mapCacheClear.js",
        "npm:lodash@4.17.4/_Map.js",
        "npm:lodash@4.17.4/_ListCache.js",
        "npm:lodash@4.17.4/_listCacheSet.js",
        "npm:lodash@4.17.4/_assocIndexOf.js",
        "npm:lodash@4.17.4/eq.js",
        "npm:lodash@4.17.4/_listCacheHas.js",
        "npm:lodash@4.17.4/_listCacheGet.js",
        "npm:lodash@4.17.4/_listCacheDelete.js",
        "npm:lodash@4.17.4/_listCacheClear.js",
        "npm:lodash@4.17.4/_Hash.js",
        "npm:lodash@4.17.4/_hashSet.js",
        "npm:lodash@4.17.4/_nativeCreate.js",
        "npm:lodash@4.17.4/_hashHas.js",
        "npm:lodash@4.17.4/_hashGet.js",
        "npm:lodash@4.17.4/_hashDelete.js",
        "npm:lodash@4.17.4/_hashClear.js",
        "npm:lodash@4.17.4/clone.js",
        "npm:lodash@4.17.4/_baseClone.js",
        "npm:lodash@4.17.4/keys.js",
        "npm:lodash@4.17.4/isArrayLike.js",
        "npm:lodash@4.17.4/isLength.js",
        "npm:lodash@4.17.4/_baseKeys.js",
        "npm:lodash@4.17.4/_nativeKeys.js",
        "npm:lodash@4.17.4/_overArg.js",
        "npm:lodash@4.17.4/_isPrototype.js",
        "npm:lodash@4.17.4/_arrayLikeKeys.js",
        "npm:lodash@4.17.4/isTypedArray.js",
        "npm:lodash@4.17.4/_nodeUtil.js",
        "npm:lodash@4.17.4/_baseUnary.js",
        "npm:lodash@4.17.4/_baseIsTypedArray.js",
        "npm:lodash@4.17.4/isObjectLike.js",
        "npm:lodash@4.17.4/_isIndex.js",
        "npm:lodash@4.17.4/isBuffer.js",
        "npm:lodash@4.17.4/stubFalse.js",
        "npm:lodash@4.17.4/isArray.js",
        "npm:lodash@4.17.4/isArguments.js",
        "npm:lodash@4.17.4/_baseIsArguments.js",
        "npm:lodash@4.17.4/_baseTimes.js",
        "npm:lodash@4.17.4/_initCloneObject.js",
        "npm:lodash@4.17.4/_getPrototype.js",
        "npm:lodash@4.17.4/_baseCreate.js",
        "npm:lodash@4.17.4/_initCloneByTag.js",
        "npm:lodash@4.17.4/_cloneTypedArray.js",
        "npm:lodash@4.17.4/_cloneArrayBuffer.js",
        "npm:lodash@4.17.4/_Uint8Array.js",
        "npm:lodash@4.17.4/_cloneSymbol.js",
        "npm:lodash@4.17.4/_cloneSet.js",
        "npm:lodash@4.17.4/_arrayReduce.js",
        "npm:lodash@4.17.4/_addSetEntry.js",
        "npm:lodash@4.17.4/_cloneRegExp.js",
        "npm:lodash@4.17.4/_cloneMap.js",
        "npm:lodash@4.17.4/_mapToArray.js",
        "npm:lodash@4.17.4/_addMapEntry.js",
        "npm:lodash@4.17.4/_cloneDataView.js",
        "npm:lodash@4.17.4/_initCloneArray.js",
        "npm:lodash@4.17.4/_getTag.js",
        "npm:lodash@4.17.4/_WeakMap.js",
        "npm:lodash@4.17.4/_Promise.js",
        "npm:lodash@4.17.4/_DataView.js",
        "npm:lodash@4.17.4/_getAllKeysIn.js",
        "npm:lodash@4.17.4/keysIn.js",
        "npm:lodash@4.17.4/_baseKeysIn.js",
        "npm:lodash@4.17.4/_nativeKeysIn.js",
        "npm:lodash@4.17.4/_getSymbolsIn.js",
        "npm:lodash@4.17.4/stubArray.js",
        "npm:lodash@4.17.4/_getSymbols.js",
        "npm:lodash@4.17.4/_arrayFilter.js",
        "npm:lodash@4.17.4/_arrayPush.js",
        "npm:lodash@4.17.4/_baseGetAllKeys.js",
        "npm:lodash@4.17.4/_getAllKeys.js",
        "npm:lodash@4.17.4/_copySymbolsIn.js",
        "npm:lodash@4.17.4/_copyObject.js",
        "npm:lodash@4.17.4/_baseAssignValue.js",
        "npm:lodash@4.17.4/_defineProperty.js",
        "npm:lodash@4.17.4/_assignValue.js",
        "npm:lodash@4.17.4/_copySymbols.js",
        "npm:lodash@4.17.4/_copyArray.js",
        "npm:lodash@4.17.4/_cloneBuffer.js",
        "npm:lodash@4.17.4/_baseAssignIn.js",
        "npm:lodash@4.17.4/_baseAssign.js",
        "npm:lodash@4.17.4/_arrayEach.js",
        "npm:lodash@4.17.4/_Stack.js",
        "npm:lodash@4.17.4/_stackSet.js",
        "npm:lodash@4.17.4/_stackHas.js",
        "npm:lodash@4.17.4/_stackGet.js",
        "npm:lodash@4.17.4/_stackDelete.js",
        "npm:lodash@4.17.4/_stackClear.js",
        "npm:to-fast-properties@1.0.3/index.js",
        "npm:to-fast-properties@1.0.3.json",
        "npm:babel-types@6.26.0/lib/flow.js",
        "npm:babel-types@6.26.0/lib/converters.js",
        "npm:lodash@4.17.4/isRegExp.js",
        "npm:lodash@4.17.4/_baseIsRegExp.js",
        "npm:lodash@4.17.4/isPlainObject.js",
        "npm:babel-runtime@6.26.0/core-js/number/max-safe-integer.js",
        "npm:core-js@2.5.1/library/fn/number/max-safe-integer.js",
        "npm:core-js@2.5.1/library/modules/es6.number.max-safe-integer.js",
        "npm:babel-types@6.26.0/lib/validators.js",
        "npm:esutils@2.0.2/lib/utils.js",
        "npm:esutils@2.0.2.json",
        "npm:esutils@2.0.2/lib/keyword.js",
        "npm:esutils@2.0.2/lib/code.js",
        "npm:esutils@2.0.2/lib/ast.js",
        "npm:babel-types@6.26.0/lib/retrievers.js",
        "npm:babel-runtime@6.26.0/core-js/object/create.js",
        "npm:core-js@2.5.1/library/fn/object/create.js",
        "npm:core-js@2.5.1/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.26.0/core-js/object/keys.js",
        "npm:core-js@2.5.1/library/fn/object/keys.js",
        "npm:core-js@2.5.1/library/modules/es6.object.keys.js",
        "npm:core-js@2.5.1/library/modules/_object-sap.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-own-property-symbols.js",
        "npm:core-js@2.5.1/library/fn/object/get-own-property-symbols.js",
        "npm:babylon@6.18.0/lib/index.js",
        "npm:babylon@6.18.0.json",
        "npm:babel-traverse@6.26.0/lib/index.js",
        "npm:babel-traverse@6.26.0.json",
        "npm:babel-traverse@6.26.0/lib/cache.js",
        "npm:babel-runtime@6.26.0/core-js/weak-map.js",
        "npm:core-js@2.5.1/library/fn/weak-map/index.js",
        "npm:core-js@2.5.1/library/modules/es7.weak-map.from.js",
        "npm:core-js@2.5.1/library/modules/_set-collection-from.js",
        "npm:core-js@2.5.1/library/modules/_for-of.js",
        "npm:core-js@2.5.1/library/modules/_is-array-iter.js",
        "npm:core-js@2.5.1/library/modules/_iter-call.js",
        "npm:core-js@2.5.1/library/modules/es7.weak-map.of.js",
        "npm:core-js@2.5.1/library/modules/_set-collection-of.js",
        "npm:core-js@2.5.1/library/modules/es6.weak-map.js",
        "npm:core-js@2.5.1/library/modules/_collection.js",
        "npm:core-js@2.5.1/library/modules/_array-methods.js",
        "npm:core-js@2.5.1/library/modules/_array-species-create.js",
        "npm:core-js@2.5.1/library/modules/_array-species-constructor.js",
        "npm:core-js@2.5.1/library/modules/_an-instance.js",
        "npm:core-js@2.5.1/library/modules/_redefine-all.js",
        "npm:core-js@2.5.1/library/modules/_validate-collection.js",
        "npm:core-js@2.5.1/library/modules/_collection-weak.js",
        "npm:core-js@2.5.1/library/modules/_object-assign.js",
        "npm:lodash@4.17.4/includes.js",
        "npm:lodash@4.17.4/values.js",
        "npm:lodash@4.17.4/_baseValues.js",
        "npm:lodash@4.17.4/_arrayMap.js",
        "npm:lodash@4.17.4/toInteger.js",
        "npm:lodash@4.17.4/toFinite.js",
        "npm:lodash@4.17.4/toNumber.js",
        "npm:lodash@4.17.4/isSymbol.js",
        "npm:lodash@4.17.4/isString.js",
        "npm:babel-messages@6.23.0/lib/index.js",
        "npm:babel-messages@6.23.0.json",
        "npm:jspm-nodelibs-util@0.2.2/util.js",
        "npm:jspm-nodelibs-util@0.2.2.json",
        "npm:jspm-nodelibs-util@0.2.2/isBufferBrowser.js",
        "npm:babel-traverse@6.26.0/lib/visitors.js",
        "npm:babel-traverse@6.26.0/lib/path/lib/virtual-types.js",
        "npm:babel-traverse@6.26.0/lib/context.js",
        "npm:babel-traverse@6.26.0/lib/path/index.js",
        "npm:babel-traverse@6.26.0/lib/path/comments.js",
        "npm:babel-traverse@6.26.0/lib/path/family.js",
        "npm:babel-traverse@6.26.0/lib/path/modification.js",
        "npm:babel-traverse@6.26.0/lib/path/lib/hoister.js",
        "npm:babel-runtime@6.26.0/helpers/classCallCheck.js",
        "npm:babel-traverse@6.26.0/lib/path/removal.js",
        "npm:babel-traverse@6.26.0/lib/path/lib/removal-hooks.js",
        "npm:babel-traverse@6.26.0/lib/path/context.js",
        "npm:babel-traverse@6.26.0/lib/path/introspection.js",
        "npm:babel-traverse@6.26.0/lib/path/conversion.js",
        "npm:babel-traverse@6.26.0/lib/path/evaluation.js",
        "npm:babel-runtime@6.26.0/core-js/map.js",
        "npm:core-js@2.5.1/library/fn/map/index.js",
        "npm:core-js@2.5.1/library/modules/es7.map.from.js",
        "npm:core-js@2.5.1/library/modules/es7.map.of.js",
        "npm:core-js@2.5.1/library/modules/es7.map.to-json.js",
        "npm:core-js@2.5.1/library/modules/_collection-to-json.js",
        "npm:core-js@2.5.1/library/modules/_array-from-iterable.js",
        "npm:core-js@2.5.1/library/modules/es6.map.js",
        "npm:core-js@2.5.1/library/modules/_collection-strong.js",
        "npm:core-js@2.5.1/library/modules/_set-species.js",
        "npm:babel-traverse@6.26.0/lib/path/replacement.js",
        "npm:babel-code-frame@6.26.0/lib/index.js",
        "npm:babel-code-frame@6.26.0.json",
        "npm:chalk@1.1.3/index.js",
        "npm:chalk@1.1.3.json",
        "npm:supports-color@2.0.0/index.js",
        "npm:supports-color@2.0.0.json",
        "npm:has-ansi@2.0.0/index.js",
        "npm:has-ansi@2.0.0.json",
        "npm:ansi-regex@2.1.1/index.js",
        "npm:ansi-regex@2.1.1.json",
        "npm:strip-ansi@3.0.1/index.js",
        "npm:strip-ansi@3.0.1.json",
        "npm:ansi-styles@2.2.1/index.js",
        "npm:ansi-styles@2.2.1.json",
        "npm:escape-string-regexp@1.0.5/index.js",
        "npm:escape-string-regexp@1.0.5.json",
        "npm:js-tokens@3.0.2/index.js",
        "npm:js-tokens@3.0.2.json",
        "npm:babel-traverse@6.26.0/lib/path/inference/index.js",
        "npm:babel-traverse@6.26.0/lib/path/inference/inferers.js",
        "npm:babel-traverse@6.26.0/lib/path/inference/inferer-reference.js",
        "npm:babel-traverse@6.26.0/lib/path/ancestry.js",
        "npm:babel-traverse@6.26.0/lib/scope/index.js",
        "npm:globals@9.18.0/index.js",
        "npm:globals@9.18.0.json",
        "npm:globals@9.18.0/globals.json",
        "npm:babel-traverse@6.26.0/lib/scope/binding.js",
        "npm:lodash@4.17.4/defaults.js",
        "npm:lodash@4.17.4/_customDefaultsAssignIn.js",
        "npm:lodash@4.17.4/_baseRest.js",
        "npm:lodash@4.17.4/_setToString.js",
        "npm:lodash@4.17.4/_shortOut.js",
        "npm:lodash@4.17.4/_baseSetToString.js",
        "npm:lodash@4.17.4/identity.js",
        "npm:lodash@4.17.4/constant.js",
        "npm:lodash@4.17.4/_overRest.js",
        "npm:lodash@4.17.4/_apply.js",
        "npm:lodash@4.17.4/assignInWith.js",
        "npm:lodash@4.17.4/_createAssigner.js",
        "npm:lodash@4.17.4/_isIterateeCall.js",
        "npm:babel-traverse@6.26.0/lib/scope/lib/renamer.js",
        "npm:lodash@4.17.4/repeat.js",
        "npm:lodash@4.17.4/toString.js",
        "npm:lodash@4.17.4/_baseToString.js",
        "npm:lodash@4.17.4/_baseRepeat.js",
        "npm:lodash@4.17.4/assign.js",
        "npm:invariant@2.2.2/browser.js",
        "npm:invariant@2.2.2.json",
        "npm:debug@2.6.9/src/browser.js",
        "npm:debug@2.6.9.json",
        "npm:debug@2.6.9/src/debug.js",
        "npm:ms@2.0.0/index.js",
        "npm:ms@2.0.0.json",
        "npm:babel-traverse@6.26.0/lib/hub.js",
        "npm:lodash@4.17.4/has.js",
        "npm:lodash@4.17.4/_hasPath.js",
        "npm:lodash@4.17.4/_toKey.js",
        "npm:lodash@4.17.4/_castPath.js",
        "npm:lodash@4.17.4/_stringToPath.js",
        "npm:lodash@4.17.4/_memoizeCapped.js",
        "npm:lodash@4.17.4/memoize.js",
        "npm:lodash@4.17.4/_isKey.js",
        "npm:lodash@4.17.4/_baseHas.js",
        "npm:lodash@4.17.4/cloneDeep.js",
        "npm:babel-plugin-syntax-decorators@6.13.0/lib/index.js",
        "npm:babel-plugin-syntax-decorators@6.13.0.json"
      ]
    }
  },
  transpiler: "plugin-babel",
  meta: {
    "*.js": {
      "babelOptions": {
        "plugins": [
          "babel-plugin-transform-decorators-legacy"
        ]
      }
    }
  },
  packages: {
    "": {
      "defaultExtension": "js"
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
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.5.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.2.0.0",
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
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "i18next": "npm:i18next@3.5.2",
    "intl": "npm:intl@1.2.5",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
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
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-template": "npm:babel-template@6.26.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
      }
    },
    "npm:babel-template@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.0",
        "core-js": "npm:core-js@2.5.1"
      }
    },
    "npm:babel-types@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-traverse@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-code-frame": "npm:babel-code-frame@6.26.0",
        "lodash": "npm:lodash@4.17.4",
        "invariant": "npm:invariant@2.2.2",
        "babylon": "npm:babylon@6.18.0",
        "globals": "npm:globals@9.18.0",
        "debug": "npm:debug@2.6.9"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-code-frame@6.26.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@3.0.2",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:debug@2.6.9": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@1.0.3",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "randomfill": "npm:randomfill@1.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "create-hash": "npm:create-hash@1.1.3",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:randomfill@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "asn1.js": "npm:asn1.js@4.9.2"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    }
  }
});
