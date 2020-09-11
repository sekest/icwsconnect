/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Common'], function(_util, _typemap, Common){
    'use strict';

    var ContentAsyncRequestId = (function(){
        var hasProps = false;

        function ContentAsyncRequestId() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:content:contentAsyncRequestId', enumerable: true });
            }

            ContentAsyncRequestId._super.constructor.apply(this, arguments);
        }
        _util.inherits(ContentAsyncRequestId, Common.AsyncOperationAcceptedResponse);

        function defineProps() {
            Object.defineProperty(ContentAsyncRequestId.prototype, 'bucketName', {
                get: function() { return this.__prop_bucketName; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for ContentAsyncRequestId.bucketName, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_bucketName = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(ContentAsyncRequestId, '__type', { value: 'urn:inin.com:content:contentAsyncRequestId' });

        Object.defineProperty(ContentAsyncRequestId, '__propInfo', {
            get: function() {
                var pi = {
                    'bucketName': { required: true, nullable: false }
                };
                if (Common.AsyncOperationAcceptedResponse.__propInfo) { _util.extend(pi, Common.AsyncOperationAcceptedResponse.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:content:contentAsyncRequestId'] = ContentAsyncRequestId;

        return ContentAsyncRequestId;
    }());

    return {
        ContentAsyncRequestId: ContentAsyncRequestId
    };
});
