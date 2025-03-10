﻿/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Configuration.Hardware', './Common'], function(_util, _typemap, Configuration_Hardware, Common){
    'use strict';

    var $line = (function(){
        function getDefaults(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getDefaults.params)) {
                try {
                    params = new getDefaults.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration_Hardware.Line) ? o : new Configuration_Hardware.Line(o); };
            dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getDefaults, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/line', enumerable: true }
        });

        getDefaults.params = (function(){
            _util.inherits(getDefaults_params, _util.RequestParams);

            function getDefaults_params(properties) {
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

                getDefaults_params._super.constructor.apply(this, arguments);
            }

            return getDefaults_params;
        })();

        return Object.create(null, {
            getDefaults: { value: getDefaults, enumerable: true }
        });
    })();

    var $recordingBeepTone = (function(){
        function getDefaults(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getDefaults.params)) {
                try {
                    params = new getDefaults.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaults.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration_Hardware.RecordingBeepTone) ? o : new Configuration_Hardware.RecordingBeepTone(o); };
            dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getDefaults.method, getDefaults.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getDefaults, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/defaults/recording-beep-tone', enumerable: true }
        });

        getDefaults.params = (function(){
            _util.inherits(getDefaults_params, _util.RequestParams);

            function getDefaults_params(properties) {
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

                getDefaults_params._super.constructor.apply(this, arguments);
            }

            return getDefaults_params;
        })();

        return Object.create(null, {
            getDefaults: { value: getDefaults, enumerable: true }
        });
    })();

    var $station = (function(){
        return Object.create(null, {
        });
    })();

    return {
        $line: $line,
        $recordingBeepTone: $recordingBeepTone,
        $station: $station
    };
});
