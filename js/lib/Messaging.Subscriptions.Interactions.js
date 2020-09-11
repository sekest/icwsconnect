/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Common'], function(_util, _typemap, Common){
    'use strict';

    var $callback = (function(){
        function updateCallbackSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateCallbackSubscription.params)) {
                try {
                    params = new updateCallbackSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateCallbackSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateCallbackSubscription.method, updateCallbackSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateCallbackSubscription, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/callback', enumerable: true }
        });

        updateCallbackSubscription.params = (function(){
            _util.inherits(updateCallbackSubscription_params, _util.RequestParams);

            function updateCallbackSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                updateCallbackSubscription_params._super.constructor.apply(this, arguments);
            }

            return updateCallbackSubscription_params;
        })();

        function deleteCallbackSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteCallbackSubscription.params)) {
                try {
                    params = new deleteCallbackSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteCallbackSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteCallbackSubscription.method, deleteCallbackSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteCallbackSubscription, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/callback', enumerable: true }
        });

        deleteCallbackSubscription.params = (function(){
            _util.inherits(deleteCallbackSubscription_params, _util.RequestParams);

            function deleteCallbackSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteCallbackSubscription_params._super.constructor.apply(this, arguments);
            }

            return deleteCallbackSubscription_params;
        })();

        return Object.create(null, {
            updateCallbackSubscription: { value: updateCallbackSubscription, enumerable: true },
            deleteCallbackSubscription: { value: deleteCallbackSubscription, enumerable: true }
        });
    })();

    var $chat = (function(){
        function updateChatSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateChatSubscription.params)) {
                try {
                    params = new updateChatSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateChatSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateChatSubscription.method, updateChatSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateChatSubscription, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/chat', enumerable: true }
        });

        updateChatSubscription.params = (function(){
            _util.inherits(updateChatSubscription_params, _util.RequestParams);

            function updateChatSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                updateChatSubscription_params._super.constructor.apply(this, arguments);
            }

            return updateChatSubscription_params;
        })();

        function deleteChatSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteChatSubscription.params)) {
                try {
                    params = new deleteChatSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteChatSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteChatSubscription.method, deleteChatSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteChatSubscription, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/chat', enumerable: true }
        });

        deleteChatSubscription.params = (function(){
            _util.inherits(deleteChatSubscription_params, _util.RequestParams);

            function deleteChatSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteChatSubscription_params._super.constructor.apply(this, arguments);
            }

            return deleteChatSubscription_params;
        })();

        return Object.create(null, {
            updateChatSubscription: { value: updateChatSubscription, enumerable: true },
            deleteChatSubscription: { value: deleteChatSubscription, enumerable: true }
        });
    })();

    var $email = (function(){
        function updateEmailSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateEmailSubscription.params)) {
                try {
                    params = new updateEmailSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateEmailSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['404'] = dc['403'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateEmailSubscription.method, updateEmailSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateEmailSubscription, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/email', enumerable: true }
        });

        updateEmailSubscription.params = (function(){
            _util.inherits(updateEmailSubscription_params, _util.RequestParams);

            function updateEmailSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                updateEmailSubscription_params._super.constructor.apply(this, arguments);
            }

            return updateEmailSubscription_params;
        })();

        function deleteEmailSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteEmailSubscription.params)) {
                try {
                    params = new deleteEmailSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteEmailSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['404'] = dc['403'] = dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteEmailSubscription.method, deleteEmailSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteEmailSubscription, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/{interactionId}/email', enumerable: true }
        });

        deleteEmailSubscription.params = (function(){
            _util.inherits(deleteEmailSubscription_params, _util.RequestParams);

            function deleteEmailSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, interactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'interactionId')) {
                    throw new Error('`properties.template` is missing required property: `interactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteEmailSubscription_params._super.constructor.apply(this, arguments);
            }

            return deleteEmailSubscription_params;
        })();

        return Object.create(null, {
            updateEmailSubscription: { value: updateEmailSubscription, enumerable: true },
            deleteEmailSubscription: { value: deleteEmailSubscription, enumerable: true }
        });
    })();

    var $agentAssistance = (function(){
        function updateAgentAssistanceRequestsSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateAgentAssistanceRequestsSubscription.params)) {
                try {
                    params = new updateAgentAssistanceRequestsSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAgentAssistanceRequestsSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateAgentAssistanceRequestsSubscription.method, updateAgentAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateAgentAssistanceRequestsSubscription, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance', enumerable: true }
        });

        updateAgentAssistanceRequestsSubscription.params = (function(){
            _util.inherits(updateAgentAssistanceRequestsSubscription_params, _util.RequestParams);

            function updateAgentAssistanceRequestsSubscription_params(properties) {
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

                updateAgentAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
            }

            return updateAgentAssistanceRequestsSubscription_params;
        })();

        function deleteAgentAssistanceRequestsSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteAgentAssistanceRequestsSubscription.params)) {
                try {
                    params = new deleteAgentAssistanceRequestsSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAgentAssistanceRequestsSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteAgentAssistanceRequestsSubscription.method, deleteAgentAssistanceRequestsSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteAgentAssistanceRequestsSubscription, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance', enumerable: true }
        });

        deleteAgentAssistanceRequestsSubscription.params = (function(){
            _util.inherits(deleteAgentAssistanceRequestsSubscription_params, _util.RequestParams);

            function deleteAgentAssistanceRequestsSubscription_params(properties) {
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

                deleteAgentAssistanceRequestsSubscription_params._super.constructor.apply(this, arguments);
            }

            return deleteAgentAssistanceRequestsSubscription_params;
        })();

        function updateAgentAssistanceRequestSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateAgentAssistanceRequestSubscription.params)) {
                try {
                    params = new updateAgentAssistanceRequestSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAgentAssistanceRequestSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateAgentAssistanceRequestSubscription.method, updateAgentAssistanceRequestSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateAgentAssistanceRequestSubscription, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance/{assistanceId}', enumerable: true }
        });

        updateAgentAssistanceRequestSubscription.params = (function(){
            _util.inherits(updateAgentAssistanceRequestSubscription_params, _util.RequestParams);

            function updateAgentAssistanceRequestSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'assistanceId')) {
                    throw new Error('`properties.template` is missing required property: `assistanceId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                updateAgentAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
            }

            return updateAgentAssistanceRequestSubscription_params;
        })();

        function deleteAgentAssistanceRequestSubscription(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteAgentAssistanceRequestSubscription.params)) {
                try {
                    params = new deleteAgentAssistanceRequestSubscription.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAgentAssistanceRequestSubscription.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteAgentAssistanceRequestSubscription.method, deleteAgentAssistanceRequestSubscription.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteAgentAssistanceRequestSubscription, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/messaging/subscriptions/interactions/agent-assistance/{assistanceId}', enumerable: true }
        });

        deleteAgentAssistanceRequestSubscription.params = (function(){
            _util.inherits(deleteAgentAssistanceRequestSubscription_params, _util.RequestParams);

            function deleteAgentAssistanceRequestSubscription_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, assistanceId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'assistanceId')) {
                    throw new Error('`properties.template` is missing required property: `assistanceId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteAgentAssistanceRequestSubscription_params._super.constructor.apply(this, arguments);
            }

            return deleteAgentAssistanceRequestSubscription_params;
        })();

        return Object.create(null, {
            updateAgentAssistanceRequestsSubscription: { value: updateAgentAssistanceRequestsSubscription, enumerable: true },
            deleteAgentAssistanceRequestsSubscription: { value: deleteAgentAssistanceRequestsSubscription, enumerable: true },
            updateAgentAssistanceRequestSubscription: { value: updateAgentAssistanceRequestSubscription, enumerable: true },
            deleteAgentAssistanceRequestSubscription: { value: deleteAgentAssistanceRequestSubscription, enumerable: true }
        });
    })();

    return {
        $callback: $callback,
        $chat: $chat,
        $email: $email,
        $agentAssistance: $agentAssistance
    };
});
