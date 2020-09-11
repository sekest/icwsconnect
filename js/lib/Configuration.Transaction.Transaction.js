﻿/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Common'], function(_util, _typemap, Common){
    'use strict';

    var $transactionEnd = (function(){
        function endTransaction(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof endTransaction.params)) {
                try {
                    params = new endTransaction.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: endTransaction.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(endTransaction.method, endTransaction.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(endTransaction, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/transaction/{transactionId}/transaction-end', enumerable: true }
        });

        endTransaction.params = (function(){
            _util.inherits(endTransaction_params, _util.RequestParams);

            function endTransaction_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, transactionId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'transactionId')) {
                    throw new Error('`properties.template` is missing required property: `transactionId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                endTransaction_params._super.constructor.apply(this, arguments);
            }

            return endTransaction_params;
        })();

        return Object.create(null, {
            endTransaction: { value: endTransaction, enumerable: true }
        });
    })();

    return {
        $transactionEnd: $transactionEnd
    };
});
