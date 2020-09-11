/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Interactions', './Common'], function(_util, _typemap, Interactions, Common){
    'use strict';

    var $inviteParty = (function(){
        function conferenceInviteParty(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof conferenceInviteParty.params)) {
                try {
                    params = new conferenceInviteParty.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: conferenceInviteParty.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['400'] = dc['401'] = dc['410'] = dc['500'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(conferenceInviteParty.method, conferenceInviteParty.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(conferenceInviteParty, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/interactions/conferences/{conferenceId}/invite-party', enumerable: true }
        });

        conferenceInviteParty.params = (function(){
            _util.inherits(conferenceInviteParty_params, _util.RequestParams);

            function conferenceInviteParty_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, conferenceId');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'conferenceId')) {
                    throw new Error('`properties.template` is missing required property: `conferenceId`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof Interactions.InvitePartyParameters)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Interactions.InvitePartyParameters');
                }

                conferenceInviteParty_params._super.constructor.apply(this, arguments);
            }

            return conferenceInviteParty_params;
        })();

        return Object.create(null, {
            conferenceInviteParty: { value: conferenceInviteParty, enumerable: true }
        });
    })();

    return {
        $inviteParty: $inviteParty
    };
});
