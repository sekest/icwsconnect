/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Configuration'], function(_util, _typemap, Configuration){
    'use strict';

    var UsersResult = (function(){
        var hasProps = false;

        function UsersResult() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:usersResult' });
            }

            UsersResult._super.constructor.apply(this, arguments);
        }
        _util.inherits(UsersResult, _util.DataContract);

        function defineProps() {
            Object.defineProperty(UsersResult.prototype, 'users', {
                get: function() { return this.__prop_users; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof UsersEntry); }))) {
                        try {
                            value = value.map(function(item){ return new UsersEntry(item); });
                        } catch (e) {
                            throw new TypeError('Error setting UsersResult.users: ' + e.message);
                        }
                    }

                    this.__prop_users = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(UsersResult, '__type', { value: 'urn:inin.com:configuration.mail:usersResult' });

        Object.defineProperty(UsersResult, '__propInfo', {
            get: function() {
                var pi = {
                    'users': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.mail:usersResult'] = UsersResult;

        return UsersResult;
    }());

    var UsersEntry = (function(){
        var hasProps = false;

        function UsersEntry() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.mail:usersEntry' });
            }

            UsersEntry._super.constructor.apply(this, arguments);
        }
        _util.inherits(UsersEntry, _util.DataContract);

        function defineProps() {
            Object.defineProperty(UsersEntry.prototype, 'id', {
                get: function() { return this.__prop_id; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting UsersEntry.id: ' + e.message);
                        }
                    }

                    this.__prop_id = value;
                },
                enumerable: true
            });

            Object.defineProperty(UsersEntry.prototype, 'emailAddress', {
                get: function() { return this.__prop_emailAddress; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for UsersEntry.emailAddress, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_emailAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(UsersEntry.prototype, 'mailbox', {
                get: function() { return this.__prop_mailbox; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for UsersEntry.mailbox, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_mailbox = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(UsersEntry, '__type', { value: 'urn:inin.com:configuration.mail:usersEntry' });

        Object.defineProperty(UsersEntry, '__propInfo', {
            get: function() {
                var pi = {
                    'id': { required: true, nullable: false },
                    'emailAddress': { required: true, nullable: false },
                    'mailbox': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.mail:usersEntry'] = UsersEntry;

        return UsersEntry;
    }());

    var $interactionMessageStoreMailbox = (function(){
        return Object.create(null, {
        });
    })();

    return {
        UsersResult: UsersResult,
        UsersEntry: UsersEntry,
        $interactionMessageStoreMailbox: $interactionMessageStoreMailbox
    };
});
