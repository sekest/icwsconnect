/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Messaging'], function(_util, _typemap, Messaging){
    'use strict';

    var QueueType = (function(){
        var instanceCache = {};
        function QueueType(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueType' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(QueueType, _util.EnumValue);

        Object.defineProperties(QueueType, {
            'System': { value: new QueueType(0, 'System'), enumerable: true },
            'User': { value: new QueueType(1, 'User'), enumerable: true },
            'Workgroup': { value: new QueueType(2, 'Workgroup'), enumerable: true },
            'Station': { value: new QueueType(3, 'Station'), enumerable: true }
        });

        Object.defineProperty(QueueType, '__type', { value: 'urn:inin.com:queues:queueType' });

        _typemap['urn:inin.com:queues:queueType'] = QueueType;

        return QueueType;
    }());

    var QueueInteraction = (function(){
        var hasProps = false;

        function QueueInteraction() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueInteraction' });
            }

            QueueInteraction._super.constructor.apply(this, arguments);
        }
        _util.inherits(QueueInteraction, _util.DataContract);

        function defineProps() {
            Object.defineProperty(QueueInteraction.prototype, 'interactionId', {
                get: function() { return this.__prop_interactionId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for QueueInteraction.interactionId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_interactionId = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueInteraction.prototype, 'attributes', {
                get: function() { return this.__prop_attributes; },
                set: function(value) {
                    if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                        throw new TypeError('Expected type String{} for QueueInteraction.attributes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_attributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueInteraction.prototype, 'conferenceParentId', {
                get: function() { return this.__prop_conferenceParentId; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for QueueInteraction.conferenceParentId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_conferenceParentId = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(QueueInteraction, '__type', { value: 'urn:inin.com:queues:queueInteraction' });

        Object.defineProperty(QueueInteraction, '__propInfo', {
            get: function() {
                var pi = {
                    'interactionId': { required: true, nullable: false },
                    'attributes': { required: true, nullable: false },
                    'conferenceParentId': { required: false, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:queueInteraction'] = QueueInteraction;

        return QueueInteraction;
    }());

    var Interaction = (function(){
        var hasProps = false;

        function Interaction() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:interaction' });
            }

            Interaction._super.constructor.apply(this, arguments);
        }
        _util.inherits(Interaction, _util.DataContract);

        function defineProps() {
            Object.defineProperty(Interaction.prototype, 'interactionId', {
                get: function() { return this.__prop_interactionId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for Interaction.interactionId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_interactionId = value;
                },
                enumerable: true
            });

            Object.defineProperty(Interaction.prototype, 'attributes', {
                get: function() { return this.__prop_attributes; },
                set: function(value) {
                    if (!(_util.isObject(value) && Object.keys(value).every(function(key){ return (_util.isString(value[key])); }))) {
                        throw new TypeError('Expected type String{} for Interaction.attributes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_attributes = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(Interaction, '__type', { value: 'urn:inin.com:queues:interaction' });

        Object.defineProperty(Interaction, '__propInfo', {
            get: function() {
                var pi = {
                    'interactionId': { required: true, nullable: false },
                    'attributes': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:interaction'] = Interaction;

        return Interaction;
    }());

    var QueueId = (function(){
        var hasProps = false;

        function QueueId() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueId' });
            }

            QueueId._super.constructor.apply(this, arguments);
        }
        _util.inherits(QueueId, _util.DataContract);

        function defineProps() {
            Object.defineProperty(QueueId.prototype, 'queueType', {
                get: function() { return this.__prop_queueType; },
                set: function(value) {
                    if (!(value instanceof QueueType)) {
                        try {
                            value = new QueueType(value);
                        } catch (e) {
                            throw new TypeError('Error setting QueueId.queueType: ' + e.message);
                        }
                    }

                    this.__prop_queueType = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueId.prototype, 'queueName', {
                get: function() { return this.__prop_queueName; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for QueueId.queueName, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_queueName = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(QueueId, '__type', { value: 'urn:inin.com:queues:queueId' });

        Object.defineProperty(QueueId, '__propInfo', {
            get: function() {
                var pi = {
                    'queueType': { required: true, nullable: false },
                    'queueName': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:queueId'] = QueueId;

        return QueueId;
    }());

    var QueueSubscriptionParameters = (function(){
        var hasProps = false;

        function QueueSubscriptionParameters() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueSubscriptionParameters' });
            }

            QueueSubscriptionParameters._super.constructor.apply(this, arguments);
        }
        _util.inherits(QueueSubscriptionParameters, _util.DataContract);

        function defineProps() {
            Object.defineProperty(QueueSubscriptionParameters.prototype, 'queueIds', {
                get: function() { return this.__prop_queueIds; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueId); }))) {
                        try {
                            value = value.map(function(item){ return new QueueId(item); });
                        } catch (e) {
                            throw new TypeError('Error setting QueueSubscriptionParameters.queueIds: ' + e.message);
                        }
                    }

                    this.__prop_queueIds = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueSubscriptionParameters.prototype, 'attributeNames', {
                get: function() { return this.__prop_attributeNames; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }))) {
                        throw new TypeError('Expected type String[] for QueueSubscriptionParameters.attributeNames, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_attributeNames = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(QueueSubscriptionParameters, '__type', { value: 'urn:inin.com:queues:queueSubscriptionParameters' });

        Object.defineProperty(QueueSubscriptionParameters, '__propInfo', {
            get: function() {
                var pi = {
                    'queueIds': { required: true, nullable: false },
                    'attributeNames': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:queueSubscriptionParameters'] = QueueSubscriptionParameters;

        return QueueSubscriptionParameters;
    }());

    var QueueContentsMessage = (function(){
        var hasProps = false;

        function QueueContentsMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueContentsMessage', enumerable: true });
            }

            QueueContentsMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(QueueContentsMessage, Messaging.Message);

        function defineProps() {
            Object.defineProperty(QueueContentsMessage.prototype, 'subscriptionId', {
                get: function() { return this.__prop_subscriptionId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for QueueContentsMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_subscriptionId = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueContentsMessage.prototype, 'interactionsAdded', {
                get: function() { return this.__prop_interactionsAdded; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof QueueInteraction); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new QueueInteraction(item); });
                        } catch (e) {
                            throw new TypeError('Error setting QueueContentsMessage.interactionsAdded: ' + e.message);
                        }
                    }

                    this.__prop_interactionsAdded = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueContentsMessage.prototype, 'interactionsChanged', {
                get: function() { return this.__prop_interactionsChanged; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Interaction); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new Interaction(item); });
                        } catch (e) {
                            throw new TypeError('Error setting QueueContentsMessage.interactionsChanged: ' + e.message);
                        }
                    }

                    this.__prop_interactionsChanged = value;
                },
                enumerable: true
            });

            Object.defineProperty(QueueContentsMessage.prototype, 'interactionsRemoved', {
                get: function() { return this.__prop_interactionsRemoved; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for QueueContentsMessage.interactionsRemoved, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_interactionsRemoved = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(QueueContentsMessage, '__type', { value: 'urn:inin.com:queues:queueContentsMessage' });

        Object.defineProperty(QueueContentsMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'subscriptionId': { required: true, nullable: false },
                    'interactionsAdded': { required: false, nullable: false },
                    'interactionsChanged': { required: false, nullable: false },
                    'interactionsRemoved': { required: false, nullable: false }
                };
                if (Messaging.Message.__propInfo) { _util.extend(pi, Messaging.Message.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:queueContentsMessage'] = QueueContentsMessage;

        return QueueContentsMessage;
    }());

    var QueueSubscriptionStateMessage = (function(){
        var hasProps = false;

        function QueueSubscriptionStateMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:queues:queueSubscriptionStateMessage', enumerable: true });
            }

            QueueSubscriptionStateMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(QueueSubscriptionStateMessage, Messaging.SubscriptionStateMessage);

        function defineProps() {
            Object.defineProperty(QueueSubscriptionStateMessage.prototype, 'subscriptionId', {
                get: function() { return this.__prop_subscriptionId; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for QueueSubscriptionStateMessage.subscriptionId, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_subscriptionId = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(QueueSubscriptionStateMessage, '__type', { value: 'urn:inin.com:queues:queueSubscriptionStateMessage' });

        Object.defineProperty(QueueSubscriptionStateMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'subscriptionId': { required: true, nullable: false }
                };
                if (Messaging.SubscriptionStateMessage.__propInfo) { _util.extend(pi, Messaging.SubscriptionStateMessage.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:queues:queueSubscriptionStateMessage'] = QueueSubscriptionStateMessage;

        return QueueSubscriptionStateMessage;
    }());

    return {
        QueueType: QueueType,
        QueueSubscriptionStateMessage: QueueSubscriptionStateMessage,
        QueueContentsMessage: QueueContentsMessage,
        QueueInteraction: QueueInteraction,
        Interaction: Interaction,
        QueueId: QueueId,
        QueueSubscriptionParameters: QueueSubscriptionParameters
    };
});
