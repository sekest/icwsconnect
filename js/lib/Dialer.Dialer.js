/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Dialer', './Common'], function(_util, _typemap, Dialer, Common){
    'use strict';

    var $logIn = (function(){
        function logIn(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof logIn.params)) {
                try {
                    params = new logIn.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: logIn.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(logIn.method, logIn.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(logIn, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/log-in', enumerable: true }
        });

        logIn.params = (function(){
            _util.inherits(logIn_params, _util.RequestParams);

            function logIn_params(properties) {
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
                if (!(properties.content instanceof Dialer.LogInParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.LogInParameters');
                }

                logIn_params._super.constructor.apply(this, arguments);
            }

            return logIn_params;
        })();

        return Object.create(null, {
            logIn: { value: logIn, enumerable: true }
        });
    })();

    var $logOff = (function(){
        function logOff(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof logOff.params)) {
                try {
                    params = new logOff.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: logOff.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(logOff.method, logOff.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(logOff, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/log-off', enumerable: true }
        });

        logOff.params = (function(){
            _util.inherits(logOff_params, _util.RequestParams);

            function logOff_params(properties) {
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
                if (!(properties.content instanceof Dialer.LogOffParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.LogOffParameters');
                }

                logOff_params._super.constructor.apply(this, arguments);
            }

            return logOff_params;
        })();

        return Object.create(null, {
            logOff: { value: logOff, enumerable: true }
        });
    })();

    var $readyForCalls = (function(){
        function readyForCalls(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof readyForCalls.params)) {
                try {
                    params = new readyForCalls.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: readyForCalls.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(readyForCalls.method, readyForCalls.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(readyForCalls, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/ready-for-calls', enumerable: true }
        });

        readyForCalls.params = (function(){
            _util.inherits(readyForCalls_params, _util.RequestParams);

            function readyForCalls_params(properties) {
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
                if (!(properties.content instanceof Dialer.StartReceivingParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.StartReceivingParameters');
                }

                readyForCalls_params._super.constructor.apply(this, arguments);
            }

            return readyForCalls_params;
        })();

        return Object.create(null, {
            readyForCalls: { value: readyForCalls, enumerable: true }
        });
    })();

    var $disposition = (function(){
        function disposition(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof disposition.params)) {
                try {
                    params = new disposition.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: disposition.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(disposition.method, disposition.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(disposition, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/disposition', enumerable: true }
        });

        disposition.params = (function(){
            _util.inherits(disposition_params, _util.RequestParams);

            function disposition_params(properties) {
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
                if (!(properties.content instanceof Dialer.DispositionParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.DispositionParameters');
                }

                disposition_params._super.constructor.apply(this, arguments);
            }

            return disposition_params;
        })();

        return Object.create(null, {
            disposition: { value: disposition, enumerable: true }
        });
    })();

    var $requestBreak = (function(){
        function requestBreak(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof requestBreak.params)) {
                try {
                    params = new requestBreak.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestBreak.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(requestBreak.method, requestBreak.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(requestBreak, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/request-break', enumerable: true }
        });

        requestBreak.params = (function(){
            _util.inherits(requestBreak_params, _util.RequestParams);

            function requestBreak_params(properties) {
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

                requestBreak_params._super.constructor.apply(this, arguments);
            }

            return requestBreak_params;
        })();

        return Object.create(null, {
            requestBreak: { value: requestBreak, enumerable: true }
        });
    })();

    var $endBreak = (function(){
        function endBreak(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof endBreak.params)) {
                try {
                    params = new endBreak.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: endBreak.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(endBreak.method, endBreak.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(endBreak, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/end-break', enumerable: true }
        });

        endBreak.params = (function(){
            _util.inherits(endBreak_params, _util.RequestParams);

            function endBreak_params(properties) {
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

                endBreak_params._super.constructor.apply(this, arguments);
            }

            return endBreak_params;
        })();

        return Object.create(null, {
            endBreak: { value: endBreak, enumerable: true }
        });
    })();

    var $placePreviewCall = (function(){
        function placePreviewCall(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof placePreviewCall.params)) {
                try {
                    params = new placePreviewCall.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: placePreviewCall.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(placePreviewCall.method, placePreviewCall.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(placePreviewCall, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/place-preview-call', enumerable: true }
        });

        placePreviewCall.params = (function(){
            _util.inherits(placePreviewCall_params, _util.RequestParams);

            function placePreviewCall_params(properties) {
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
                if (!(properties.content instanceof Dialer.PlacePreviewCallParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.PlacePreviewCallParameters');
                }

                placePreviewCall_params._super.constructor.apply(this, arguments);
            }

            return placePreviewCall_params;
        })();

        return Object.create(null, {
            placePreviewCall: { value: placePreviewCall, enumerable: true }
        });
    })();

    var $establishPersistentConnection = (function(){
        function establishPersistentConnection(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof establishPersistentConnection.params)) {
                try {
                    params = new establishPersistentConnection.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: establishPersistentConnection.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(establishPersistentConnection.method, establishPersistentConnection.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(establishPersistentConnection, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/establish-persistent-connection', enumerable: true }
        });

        establishPersistentConnection.params = (function(){
            _util.inherits(establishPersistentConnection_params, _util.RequestParams);

            function establishPersistentConnection_params(properties) {
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

                establishPersistentConnection_params._super.constructor.apply(this, arguments);
            }

            return establishPersistentConnection_params;
        })();

        return Object.create(null, {
            establishPersistentConnection: { value: establishPersistentConnection, enumerable: true }
        });
    })();

    var $requestFormDefinition = (function(){
        function requestFormDefinition(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof requestFormDefinition.params)) {
                try {
                    params = new requestFormDefinition.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestFormDefinition.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Dialer.FormDefinition) ? o : new Dialer.FormDefinition(o); };
            dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(requestFormDefinition.method, requestFormDefinition.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(requestFormDefinition, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/request-form-definition', enumerable: true }
        });

        requestFormDefinition.params = (function(){
            _util.inherits(requestFormDefinition_params, _util.RequestParams);

            function requestFormDefinition_params(properties) {
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
                if (!(properties.content instanceof Dialer.FormDefinitionParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.FormDefinitionParameters');
                }

                requestFormDefinition_params._super.constructor.apply(this, arguments);
            }

            return requestFormDefinition_params;
        })();

        return Object.create(null, {
            requestFormDefinition: { value: requestFormDefinition, enumerable: true }
        });
    })();

    var $updateCallData = (function(){
        function updateCallData(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateCallData.params)) {
                try {
                    params = new updateCallData.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateCallData.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateCallData.method, updateCallData.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateCallData, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/update-call-data', enumerable: true }
        });

        updateCallData.params = (function(){
            _util.inherits(updateCallData_params, _util.RequestParams);

            function updateCallData_params(properties) {
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
                if (!(properties.content instanceof Dialer.UpdateCallDataParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.UpdateCallDataParameters');
                }

                updateCallData_params._super.constructor.apply(this, arguments);
            }

            return updateCallData_params;
        })();

        return Object.create(null, {
            updateCallData: { value: updateCallData, enumerable: true }
        });
    })();

    var $resetCampaign = (function(){
        function resetCampaign(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof resetCampaign.params)) {
                try {
                    params = new resetCampaign.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: resetCampaign.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(resetCampaign.method, resetCampaign.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(resetCampaign, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/reset-campaign', enumerable: true }
        });

        resetCampaign.params = (function(){
            _util.inherits(resetCampaign_params, _util.RequestParams);

            function resetCampaign_params(properties) {
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
                if (!(properties.content instanceof Dialer.ResetCampaignParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.ResetCampaignParameters');
                }

                resetCampaign_params._super.constructor.apply(this, arguments);
            }

            return resetCampaign_params;
        })();

        return Object.create(null, {
            resetCampaign: { value: resetCampaign, enumerable: true }
        });
    })();

    var $recycleCampaign = (function(){
        function recycleCampaign(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof recycleCampaign.params)) {
                try {
                    params = new recycleCampaign.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: recycleCampaign.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(recycleCampaign.method, recycleCampaign.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(recycleCampaign, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/recycle-campaign', enumerable: true }
        });

        recycleCampaign.params = (function(){
            _util.inherits(recycleCampaign_params, _util.RequestParams);

            function recycleCampaign_params(properties) {
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
                if (!(properties.content instanceof Dialer.RecycleCampaignParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.RecycleCampaignParameters');
                }

                recycleCampaign_params._super.constructor.apply(this, arguments);
            }

            return recycleCampaign_params;
        })();

        return Object.create(null, {
            recycleCampaign: { value: recycleCampaign, enumerable: true }
        });
    })();

    var $transitionCampaign = (function(){
        function transitionCampaign(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof transitionCampaign.params)) {
                try {
                    params = new transitionCampaign.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: transitionCampaign.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(transitionCampaign.method, transitionCampaign.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(transitionCampaign, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/transition-campaign', enumerable: true }
        });

        transitionCampaign.params = (function(){
            _util.inherits(transitionCampaign_params, _util.RequestParams);

            function transitionCampaign_params(properties) {
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
                if (!(properties.content instanceof Dialer.TransitionCampaignParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.TransitionCampaignParameters');
                }

                transitionCampaign_params._super.constructor.apply(this, arguments);
            }

            return transitionCampaign_params;
        })();

        return Object.create(null, {
            transitionCampaign: { value: transitionCampaign, enumerable: true }
        });
    })();

    var $initiateManualOutboundCall = (function(){
        function initiateManualOutboundCall(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof initiateManualOutboundCall.params)) {
                try {
                    params = new initiateManualOutboundCall.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: initiateManualOutboundCall.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Dialer.InitiateManualOutboundCallResponse) ? o : new Dialer.InitiateManualOutboundCallResponse(o); };
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(initiateManualOutboundCall.method, initiateManualOutboundCall.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(initiateManualOutboundCall, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/initiate-manual-outbound-call', enumerable: true }
        });

        initiateManualOutboundCall.params = (function(){
            _util.inherits(initiateManualOutboundCall_params, _util.RequestParams);

            function initiateManualOutboundCall_params(properties) {
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
                if (!(properties.content instanceof Dialer.InitiateManualOutboundCallParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.InitiateManualOutboundCallParameters');
                }

                initiateManualOutboundCall_params._super.constructor.apply(this, arguments);
            }

            return initiateManualOutboundCall_params;
        })();

        return Object.create(null, {
            initiateManualOutboundCall: { value: initiateManualOutboundCall, enumerable: true }
        });
    })();

    var $requestPhoneNumberDetails = (function(){
        function requestPhoneNumberDetails(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof requestPhoneNumberDetails.params)) {
                try {
                    params = new requestPhoneNumberDetails.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestPhoneNumberDetails.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Dialer.PhoneNumberDetails) ? o : new Dialer.PhoneNumberDetails(o); };
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(requestPhoneNumberDetails.method, requestPhoneNumberDetails.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(requestPhoneNumberDetails, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/request-phone-number-details', enumerable: true }
        });

        requestPhoneNumberDetails.params = (function(){
            _util.inherits(requestPhoneNumberDetails_params, _util.RequestParams);

            function requestPhoneNumberDetails_params(properties) {
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
                if (!(properties.content instanceof Dialer.PhoneNumberDetailParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.PhoneNumberDetailParameters');
                }

                requestPhoneNumberDetails_params._super.constructor.apply(this, arguments);
            }

            return requestPhoneNumberDetails_params;
        })();

        return Object.create(null, {
            requestPhoneNumberDetails: { value: requestPhoneNumberDetails, enumerable: true }
        });
    })();

    var $setAgentType = (function(){
        function setAgentType(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof setAgentType.params)) {
                try {
                    params = new setAgentType.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: setAgentType.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(setAgentType.method, setAgentType.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(setAgentType, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/set-agent-type', enumerable: true }
        });

        setAgentType.params = (function(){
            _util.inherits(setAgentType_params, _util.RequestParams);

            function setAgentType_params(properties) {
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
                if (!(properties.content instanceof Dialer.AgentTypeParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.AgentTypeParameters');
                }

                setAgentType_params._super.constructor.apply(this, arguments);
            }

            return setAgentType_params;
        })();

        return Object.create(null, {
            setAgentType: { value: setAgentType, enumerable: true }
        });
    })();

    var $markCallForFinishing = (function(){
        function markCallForFinishing(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof markCallForFinishing.params)) {
                try {
                    params = new markCallForFinishing.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: markCallForFinishing.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(markCallForFinishing.method, markCallForFinishing.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(markCallForFinishing, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/mark-call-for-finishing', enumerable: true }
        });

        markCallForFinishing.params = (function(){
            _util.inherits(markCallForFinishing_params, _util.RequestParams);

            function markCallForFinishing_params(properties) {
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
                if (!(properties.content instanceof Dialer.MarkCallForFinishingParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.MarkCallForFinishingParameters');
                }

                markCallForFinishing_params._super.constructor.apply(this, arguments);
            }

            return markCallForFinishing_params;
        })();

        return Object.create(null, {
            markCallForFinishing: { value: markCallForFinishing, enumerable: true }
        });
    })();

    var $transferToAttendantProfile = (function(){
        function transferToAttendantProfile(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof transferToAttendantProfile.params)) {
                try {
                    params = new transferToAttendantProfile.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: transferToAttendantProfile.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(transferToAttendantProfile.method, transferToAttendantProfile.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(transferToAttendantProfile, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/transfer-to-attendant-profile', enumerable: true }
        });

        transferToAttendantProfile.params = (function(){
            _util.inherits(transferToAttendantProfile_params, _util.RequestParams);

            function transferToAttendantProfile_params(properties) {
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
                if (!(properties.content instanceof Dialer.TransferToAttendantProfileParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.TransferToAttendantProfileParameters');
                }

                transferToAttendantProfile_params._super.constructor.apply(this, arguments);
            }

            return transferToAttendantProfile_params;
        })();

        return Object.create(null, {
            transferToAttendantProfile: { value: transferToAttendantProfile, enumerable: true }
        });
    })();

    var $requestContactData = (function(){
        function requestContactData(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof requestContactData.params)) {
                try {
                    params = new requestContactData.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: requestContactData.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Dialer.RequestContactDataResponse) ? o : new Dialer.RequestContactDataResponse(o); };
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(requestContactData.method, requestContactData.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(requestContactData, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/request-contact-data', enumerable: true }
        });

        requestContactData.params = (function(){
            _util.inherits(requestContactData_params, _util.RequestParams);

            function requestContactData_params(properties) {
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
                if (!(properties.content instanceof Dialer.RequestContactDataParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.RequestContactDataParameters');
                }

                requestContactData_params._super.constructor.apply(this, arguments);
            }

            return requestContactData_params;
        })();

        return Object.create(null, {
            requestContactData: { value: requestContactData, enumerable: true }
        });
    })();

    var $updateStage = (function(){
        function updateStage(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateStage.params)) {
                try {
                    params = new updateStage.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStage.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateStage.method, updateStage.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateStage, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/update-stage', enumerable: true }
        });

        updateStage.params = (function(){
            _util.inherits(updateStage_params, _util.RequestParams);

            function updateStage_params(properties) {
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
                if (!(properties.content instanceof Dialer.UpdateStageParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.UpdateStageParameters');
                }

                updateStage_params._super.constructor.apply(this, arguments);
            }

            return updateStage_params;
        })();

        return Object.create(null, {
            updateStage: { value: updateStage, enumerable: true }
        });
    })();

    var $allocateAgents = (function(){
        function allocateAgents(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof allocateAgents.params)) {
                try {
                    params = new allocateAgents.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: allocateAgents.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(allocateAgents.method, allocateAgents.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(allocateAgents, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/dialer/allocate-agents', enumerable: true }
        });

        allocateAgents.params = (function(){
            _util.inherits(allocateAgents_params, _util.RequestParams);

            function allocateAgents_params(properties) {
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
                if (!(properties.content instanceof Dialer.AllocateAgentsParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Dialer.AllocateAgentsParameters');
                }

                allocateAgents_params._super.constructor.apply(this, arguments);
            }

            return allocateAgents_params;
        })();

        return Object.create(null, {
            allocateAgents: { value: allocateAgents, enumerable: true }
        });
    })();

    return {
        $logIn: $logIn,
        $logOff: $logOff,
        $readyForCalls: $readyForCalls,
        $disposition: $disposition,
        $requestBreak: $requestBreak,
        $endBreak: $endBreak,
        $placePreviewCall: $placePreviewCall,
        $establishPersistentConnection: $establishPersistentConnection,
        $requestFormDefinition: $requestFormDefinition,
        $updateCallData: $updateCallData,
        $resetCampaign: $resetCampaign,
        $recycleCampaign: $recycleCampaign,
        $transitionCampaign: $transitionCampaign,
        $initiateManualOutboundCall: $initiateManualOutboundCall,
        $requestPhoneNumberDetails: $requestPhoneNumberDetails,
        $setAgentType: $setAgentType,
        $markCallForFinishing: $markCallForFinishing,
        $transferToAttendantProfile: $transferToAttendantProfile,
        $requestContactData: $requestContactData,
        $updateStage: $updateStage,
        $allocateAgents: $allocateAgents
    };
});
