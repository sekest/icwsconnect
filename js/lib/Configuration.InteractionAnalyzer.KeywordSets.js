/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Configuration.InteractionAnalyzer', './Common'], function(_util, _typemap, Configuration_InteractionAnalyzer, Common){
    'use strict';

    var $keywords = (function(){
        return Object.create(null, {
        });
    })();

    var $previewKeywordRuntime = (function(){
        function previewKeywordRuntime(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof previewKeywordRuntime.params)) {
                try {
                    params = new previewKeywordRuntime.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: previewKeywordRuntime.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration_InteractionAnalyzer.PreviewKeywordRuntimeResult) ? o : new Configuration_InteractionAnalyzer.PreviewKeywordRuntimeResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(previewKeywordRuntime.method, previewKeywordRuntime.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(previewKeywordRuntime, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/keyword-sets/preview-keyword-runtime', enumerable: true }
        });

        previewKeywordRuntime.params = (function(){
            _util.inherits(previewKeywordRuntime_params, _util.RequestParams);

            function previewKeywordRuntime_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (properties.query === void 0) {
                    throw new Error('`properties.query` is undefined, which means the following required Query param(s) will be missing: keywordName, language, userPronunciations, antiPronunciations, userWords, userAntiWords');
                }
                if (!_util.hasProp(properties.query, 'keywordName')) {
                    throw new Error('`properties.query` is missing required property: `keywordName`');
                }
                if (!_util.hasProp(properties.query, 'language')) {
                    throw new Error('`properties.query` is missing required property: `language`');
                }
                if (!_util.hasProp(properties.query, 'userPronunciations')) {
                    throw new Error('`properties.query` is missing required property: `userPronunciations`');
                }
                if (!_util.hasProp(properties.query, 'antiPronunciations')) {
                    throw new Error('`properties.query` is missing required property: `antiPronunciations`');
                }
                if (!_util.hasProp(properties.query, 'userWords')) {
                    throw new Error('`properties.query` is missing required property: `userWords`');
                }
                if (!_util.hasProp(properties.query, 'userAntiWords')) {
                    throw new Error('`properties.query` is missing required property: `userAntiWords`');
                }

                previewKeywordRuntime_params._super.constructor.apply(this, arguments);
            }

            return previewKeywordRuntime_params;
        })();

        return Object.create(null, {
            previewKeywordRuntime: { value: previewKeywordRuntime, enumerable: true }
        });
    })();

    return {
        $keywords: $keywords,
        $previewKeywordRuntime: $previewKeywordRuntime
    };
});
