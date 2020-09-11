/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Messaging'], function(_util, _typemap, Messaging){
    'use strict';

    var AssistanceRequestState = (function(){
        var instanceCache = {};
        function AssistanceRequestState(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestState' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(AssistanceRequestState, _util.EnumValue);

        Object.defineProperties(AssistanceRequestState, {
            'None': { value: new AssistanceRequestState(0, 'None'), enumerable: true },
            'Accepted': { value: new AssistanceRequestState(1, 'Accepted'), enumerable: true },
            'Completed': { value: new AssistanceRequestState(2, 'Completed'), enumerable: true }
        });

        Object.defineProperty(AssistanceRequestState, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestState' });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestState'] = AssistanceRequestState;

        return AssistanceRequestState;
    }());

    var AssistanceRequestParticipantAction = (function(){
        var instanceCache = {};
        function AssistanceRequestParticipantAction(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipantAction' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(AssistanceRequestParticipantAction, _util.EnumValue);

        Object.defineProperties(AssistanceRequestParticipantAction, {
            'None': { value: new AssistanceRequestParticipantAction(0, 'None'), enumerable: true },
            'Initiated': { value: new AssistanceRequestParticipantAction(1, 'Initiated'), enumerable: true },
            'Ignored': { value: new AssistanceRequestParticipantAction(2, 'Ignored'), enumerable: true },
            'Accepted': { value: new AssistanceRequestParticipantAction(3, 'Accepted'), enumerable: true }
        });

        Object.defineProperty(AssistanceRequestParticipantAction, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipantAction' });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestParticipantAction'] = AssistanceRequestParticipantAction;

        return AssistanceRequestParticipantAction;
    }());

    var AssistanceRequestMessage = (function(){
        var hasProps = false;

        function AssistanceRequestMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestMessage' });
            }

            AssistanceRequestMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestMessage, _util.DataContract);

        function defineProps() {
            Object.defineProperty(AssistanceRequestMessage.prototype, 'text', {
                get: function() { return this.__prop_text; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestMessage.text, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_text = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestMessage.prototype, 'participantId', {
                get: function() { return this.__prop_participantId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestMessage.participantId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_participantId = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestMessage.prototype, 'timeAdded', {
                get: function() { return this.__prop_timeAdded; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value))) {
                        throw new TypeError('Expected type Date for AssistanceRequestMessage.timeAdded, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_timeAdded = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestMessage' });

        Object.defineProperty(AssistanceRequestMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'text': { required: true, nullable: false },
                    'participantId': { required: true, nullable: false },
                    'timeAdded': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestMessage'] = AssistanceRequestMessage;

        return AssistanceRequestMessage;
    }());

    var AssistanceRequestParticipant = (function(){
        var hasProps = false;

        function AssistanceRequestParticipant() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipant' });
            }

            AssistanceRequestParticipant._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestParticipant, _util.DataContract);

        function defineProps() {
            Object.defineProperty(AssistanceRequestParticipant.prototype, 'userId', {
                get: function() { return this.__prop_userId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestParticipant.userId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_userId = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestParticipant.prototype, 'displayName', {
                get: function() { return this.__prop_displayName; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestParticipant.displayName, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_displayName = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestParticipant.prototype, 'action', {
                get: function() { return this.__prop_action; },
                set: function(value) {
                    if (!(value instanceof AssistanceRequestParticipantAction)) {
                        try {
                            value = new AssistanceRequestParticipantAction(value);
                        } catch (e) {
                            throw new TypeError('Error setting AssistanceRequestParticipant.action: ' + e.message);
                        }
                    }

                    this.__prop_action = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestParticipant, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParticipant' });

        Object.defineProperty(AssistanceRequestParticipant, '__propInfo', {
            get: function() {
                var pi = {
                    'userId': { required: true, nullable: false },
                    'displayName': { required: true, nullable: false },
                    'action': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestParticipant'] = AssistanceRequestParticipant;

        return AssistanceRequestParticipant;
    }());

    var AssistanceRequestParameters = (function(){
        var hasProps = false;

        function AssistanceRequestParameters() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParameters' });
            }

            AssistanceRequestParameters._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestParameters, _util.DataContract);

        function defineProps() {
            Object.defineProperty(AssistanceRequestParameters.prototype, 'text', {
                get: function() { return this.__prop_text; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestParameters.text, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_text = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestParameters, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestParameters' });

        Object.defineProperty(AssistanceRequestParameters, '__propInfo', {
            get: function() {
                var pi = {
                    'text': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestParameters'] = AssistanceRequestParameters;

        return AssistanceRequestParameters;
    }());

    var RequestAssistanceResponse = (function(){
        var hasProps = false;

        function RequestAssistanceResponse() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:requestAssistanceResponse' });
            }

            RequestAssistanceResponse._super.constructor.apply(this, arguments);
        }
        _util.inherits(RequestAssistanceResponse, _util.DataContract);

        function defineProps() {
            Object.defineProperty(RequestAssistanceResponse.prototype, 'assistanceId', {
                get: function() { return this.__prop_assistanceId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for RequestAssistanceResponse.assistanceId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_assistanceId = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(RequestAssistanceResponse, '__type', { value: 'urn:inin.com:interactions.assistance:requestAssistanceResponse' });

        Object.defineProperty(RequestAssistanceResponse, '__propInfo', {
            get: function() {
                var pi = {
                    'assistanceId': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:requestAssistanceResponse'] = RequestAssistanceResponse;

        return RequestAssistanceResponse;
    }());

    var AssistanceRequestListMessage = (function(){
        var hasProps = false;

        function AssistanceRequestListMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestListMessage', enumerable: true });
            }

            AssistanceRequestListMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestListMessage, Messaging.Message);

        function defineProps() {
            Object.defineProperty(AssistanceRequestListMessage.prototype, 'requestsAdded', {
                get: function() { return this.__prop_requestsAdded; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for AssistanceRequestListMessage.requestsAdded, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_requestsAdded = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestListMessage.prototype, 'requestsRemoved', {
                get: function() { return this.__prop_requestsRemoved; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for AssistanceRequestListMessage.requestsRemoved, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_requestsRemoved = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestListMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestListMessage' });

        Object.defineProperty(AssistanceRequestListMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'requestsAdded': { required: false, nullable: false },
                    'requestsRemoved': { required: false, nullable: false }
                };
                if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestListMessage'] = AssistanceRequestListMessage;

        return AssistanceRequestListMessage;
    }());

    var AssistanceRequestDetailsMessage = (function(){
        var hasProps = false;

        function AssistanceRequestDetailsMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage', enumerable: true });
            }

            AssistanceRequestDetailsMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestDetailsMessage, Messaging.Message);

        function defineProps() {
            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'assistanceId', {
                get: function() { return this.__prop_assistanceId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for AssistanceRequestDetailsMessage.assistanceId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_assistanceId = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'interactionId', {
                get: function() { return this.__prop_interactionId; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for AssistanceRequestDetailsMessage.interactionId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_interactionId = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'state', {
                get: function() { return this.__prop_state; },
                set: function(value) {
                    if (!(value instanceof AssistanceRequestState || value === void 0)) {
                        try {
                            value = new AssistanceRequestState(value);
                        } catch (e) {
                            throw new TypeError('Error setting AssistanceRequestDetailsMessage.state: ' + e.message);
                        }
                    }

                    this.__prop_state = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'messagesAdded', {
                get: function() { return this.__prop_messagesAdded; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestMessage); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new AssistanceRequestMessage(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AssistanceRequestDetailsMessage.messagesAdded: ' + e.message);
                        }
                    }

                    this.__prop_messagesAdded = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'participantsAdded', {
                get: function() { return this.__prop_participantsAdded; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestParticipant); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new AssistanceRequestParticipant(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AssistanceRequestDetailsMessage.participantsAdded: ' + e.message);
                        }
                    }

                    this.__prop_participantsAdded = value;
                },
                enumerable: true
            });

            Object.defineProperty(AssistanceRequestDetailsMessage.prototype, 'participantsChanged', {
                get: function() { return this.__prop_participantsChanged; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AssistanceRequestParticipant); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new AssistanceRequestParticipant(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AssistanceRequestDetailsMessage.participantsChanged: ' + e.message);
                        }
                    }

                    this.__prop_participantsChanged = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestDetailsMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage' });

        Object.defineProperty(AssistanceRequestDetailsMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'assistanceId': { required: true, nullable: false },
                    'interactionId': { required: false, nullable: false },
                    'state': { required: false, nullable: false },
                    'messagesAdded': { required: false, nullable: false },
                    'participantsAdded': { required: false, nullable: false },
                    'participantsChanged': { required: false, nullable: false }
                };
                if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestDetailsMessage'] = AssistanceRequestDetailsMessage;

        return AssistanceRequestDetailsMessage;
    }());

    var AssistanceRequestSubscriptionStateMessage = (function(){
        var hasProps = false;

        function AssistanceRequestSubscriptionStateMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage', enumerable: true });
            }

            AssistanceRequestSubscriptionStateMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(AssistanceRequestSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

        function defineProps() {
            hasProps = true;
        }

        Object.defineProperty(AssistanceRequestSubscriptionStateMessage, '__type', { value: 'urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage' });

        Object.defineProperty(AssistanceRequestSubscriptionStateMessage, '__propInfo', {
            get: function() {
                var pi = {
                };
                if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:interactions.assistance:assistanceRequestSubscriptionStateMessage'] = AssistanceRequestSubscriptionStateMessage;

        return AssistanceRequestSubscriptionStateMessage;
    }());

    return {
        AssistanceRequestState: AssistanceRequestState,
        AssistanceRequestParticipantAction: AssistanceRequestParticipantAction,
        AssistanceRequestSubscriptionStateMessage: AssistanceRequestSubscriptionStateMessage,
        AssistanceRequestListMessage: AssistanceRequestListMessage,
        AssistanceRequestDetailsMessage: AssistanceRequestDetailsMessage,
        AssistanceRequestMessage: AssistanceRequestMessage,
        AssistanceRequestParticipant: AssistanceRequestParticipant,
        AssistanceRequestParameters: AssistanceRequestParameters,
        RequestAssistanceResponse: RequestAssistanceResponse
    };
});
