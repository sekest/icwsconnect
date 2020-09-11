/*jshint browser:true, node:true, onecase:true, sub:true, eqnull:true, boss:true */
/*global define:true */
define(['./_util', './_typemap', './Messaging', './Configuration', './Common'], function(_util, _typemap, Messaging, Configuration, Common){
    'use strict';

    var StructuredParameterType = (function(){
        var instanceCache = {};
        function StructuredParameterType(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterType' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(StructuredParameterType, _util.EnumValue);

        Object.defineProperties(StructuredParameterType, {
            'Secrets': { value: new StructuredParameterType(0, 'Secrets'), enumerable: true },
            'String': { value: new StructuredParameterType(1, 'String'), enumerable: true },
            'MultiString': { value: new StructuredParameterType(2, 'MultiString'), enumerable: true }
        });

        Object.defineProperty(StructuredParameterType, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterType' });

        _typemap['urn:inin.com:configuration.hardware:structuredParameterType'] = StructuredParameterType;

        return StructuredParameterType;
    }());

    var LineAddressFamily = (function(){
        var instanceCache = {};
        function LineAddressFamily(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAddressFamily' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineAddressFamily, _util.EnumValue);

        Object.defineProperties(LineAddressFamily, {
            'Ipv4': { value: new LineAddressFamily(0, 'Ipv4'), enumerable: true },
            'Ipv6': { value: new LineAddressFamily(1, 'Ipv6'), enumerable: true },
            'TelephonyDefault': { value: new LineAddressFamily(2, 'TelephonyDefault'), enumerable: true }
        });

        Object.defineProperty(LineAddressFamily, '__type', { value: 'urn:inin.com:configuration.hardware:lineAddressFamily' });

        _typemap['urn:inin.com:configuration.hardware:lineAddressFamily'] = LineAddressFamily;

        return LineAddressFamily;
    }());

    var LineAudioPath = (function(){
        var instanceCache = {};
        function LineAudioPath(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioPath' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineAudioPath, _util.EnumValue);

        Object.defineProperties(LineAudioPath, {
            'Dynamic': { value: new LineAudioPath(0, 'Dynamic'), enumerable: true },
            'AlwaysIn': { value: new LineAudioPath(1, 'AlwaysIn'), enumerable: true }
        });

        Object.defineProperty(LineAudioPath, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioPath' });

        _typemap['urn:inin.com:configuration.hardware:lineAudioPath'] = LineAudioPath;

        return LineAudioPath;
    }());

    var LineAudioProtocol = (function(){
        var instanceCache = {};
        function LineAudioProtocol(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioProtocol' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineAudioProtocol, _util.EnumValue);

        Object.defineProperties(LineAudioProtocol, {
            'RTP': { value: new LineAudioProtocol(0, 'RTP'), enumerable: true },
            'SRTP': { value: new LineAudioProtocol(1, 'SRTP'), enumerable: true }
        });

        Object.defineProperty(LineAudioProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineAudioProtocol' });

        _typemap['urn:inin.com:configuration.hardware:lineAudioProtocol'] = LineAudioProtocol;

        return LineAudioProtocol;
    }());

    var LineCallAnalysisType = (function(){
        var instanceCache = {};
        function LineCallAnalysisType(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallAnalysisType' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallAnalysisType, _util.EnumValue);

        Object.defineProperties(LineCallAnalysisType, {
            'MediaServer': { value: new LineCallAnalysisType(0, 'MediaServer'), enumerable: true },
            'MediaServerToInteractionGateway': { value: new LineCallAnalysisType(1, 'MediaServerToInteractionGateway'), enumerable: true },
            'InteractionGateway': { value: new LineCallAnalysisType(2, 'InteractionGateway'), enumerable: true }
        });

        Object.defineProperty(LineCallAnalysisType, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallAnalysisType' });

        _typemap['urn:inin.com:configuration.hardware:lineCallAnalysisType'] = LineCallAnalysisType;

        return LineCallAnalysisType;
    }());

    var LineCalledAddressSelection = (function(){
        var instanceCache = {};
        function LineCalledAddressSelection(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCalledAddressSelection' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCalledAddressSelection, _util.EnumValue);

        Object.defineProperties(LineCalledAddressSelection, {
            'UseRequestURI': { value: new LineCalledAddressSelection(0, 'UseRequestURI'), enumerable: true },
            'UseToHeader': { value: new LineCalledAddressSelection(1, 'UseToHeader'), enumerable: true }
        });

        Object.defineProperty(LineCalledAddressSelection, '__type', { value: 'urn:inin.com:configuration.hardware:lineCalledAddressSelection' });

        _typemap['urn:inin.com:configuration.hardware:lineCalledAddressSelection'] = LineCalledAddressSelection;

        return LineCalledAddressSelection;
    }());

    var LineSendExtension = (function(){
        var instanceCache = {};
        function LineSendExtension(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSendExtension' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineSendExtension, _util.EnumValue);

        Object.defineProperties(LineSendExtension, {
            'None': { value: new LineSendExtension(0, 'None'), enumerable: true },
            'PostConnect': { value: new LineSendExtension(1, 'PostConnect'), enumerable: true },
            'UseExtEquals': { value: new LineSendExtension(2, 'UseExtEquals'), enumerable: true }
        });

        Object.defineProperty(LineSendExtension, '__type', { value: 'urn:inin.com:configuration.hardware:lineSendExtension' });

        _typemap['urn:inin.com:configuration.hardware:lineSendExtension'] = LineSendExtension;

        return LineSendExtension;
    }());

    var LineDiversionMethod = (function(){
        var instanceCache = {};
        function LineDiversionMethod(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionMethod' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineDiversionMethod, _util.EnumValue);

        Object.defineProperties(LineDiversionMethod, {
            'UseDiversionHeader': { value: new LineDiversionMethod(0, 'UseDiversionHeader'), enumerable: true }
        });

        Object.defineProperty(LineDiversionMethod, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionMethod' });

        _typemap['urn:inin.com:configuration.hardware:lineDiversionMethod'] = LineDiversionMethod;

        return LineDiversionMethod;
    }());

    var LineCallingAddressDivertedCalls = (function(){
        var instanceCache = {};
        function LineCallingAddressDivertedCalls(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallingAddressDivertedCalls, _util.EnumValue);

        Object.defineProperties(LineCallingAddressDivertedCalls, {
            'None': { value: new LineCallingAddressDivertedCalls(0, 'None'), enumerable: true },
            'UseDivertedValue': { value: new LineCallingAddressDivertedCalls(1, 'UseDivertedValue'), enumerable: true },
            'UseLineValue1': { value: new LineCallingAddressDivertedCalls(2, 'UseLineValue1'), enumerable: true },
            'UseLineValue2': { value: new LineCallingAddressDivertedCalls(3, 'UseLineValue2'), enumerable: true },
            'UsePassedValueIfPresent': { value: new LineCallingAddressDivertedCalls(4, 'UsePassedValueIfPresent'), enumerable: true }
        });

        Object.defineProperty(LineCallingAddressDivertedCalls, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls' });

        _typemap['urn:inin.com:configuration.hardware:lineCallingAddressDivertedCalls'] = LineCallingAddressDivertedCalls;

        return LineCallingAddressDivertedCalls;
    }());

    var LineCallingAddressDivertedCallsFromHeaderAddress = (function(){
        var instanceCache = {};
        function LineCallingAddressDivertedCallsFromHeaderAddress(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallingAddressDivertedCallsFromHeaderAddress, _util.EnumValue);

        Object.defineProperties(LineCallingAddressDivertedCallsFromHeaderAddress, {
            'UseDivertedValue': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(0, 'UseDivertedValue'), enumerable: true },
            'UseLineValue1': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(1, 'UseLineValue1'), enumerable: true },
            'UseLineValue2': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(2, 'UseLineValue2'), enumerable: true },
            'UsePassedValueIfPresent': { value: new LineCallingAddressDivertedCallsFromHeaderAddress(3, 'UsePassedValueIfPresent'), enumerable: true }
        });

        Object.defineProperty(LineCallingAddressDivertedCallsFromHeaderAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress' });

        _typemap['urn:inin.com:configuration.hardware:lineCallingAddressDivertedCallsFromHeaderAddress'] = LineCallingAddressDivertedCallsFromHeaderAddress;

        return LineCallingAddressDivertedCallsFromHeaderAddress;
    }());

    var LineCallingAddressNormalCalls = (function(){
        var instanceCache = {};
        function LineCallingAddressNormalCalls(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallingAddressNormalCalls, _util.EnumValue);

        Object.defineProperties(LineCallingAddressNormalCalls, {
            'None': { value: new LineCallingAddressNormalCalls(0, 'None'), enumerable: true },
            'UseLineValue1': { value: new LineCallingAddressNormalCalls(1, 'UseLineValue1'), enumerable: true },
            'UseLineValue2': { value: new LineCallingAddressNormalCalls(2, 'UseLineValue2'), enumerable: true },
            'UsePassedValueIfPresent': { value: new LineCallingAddressNormalCalls(3, 'UsePassedValueIfPresent'), enumerable: true }
        });

        Object.defineProperty(LineCallingAddressNormalCalls, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls' });

        _typemap['urn:inin.com:configuration.hardware:lineCallingAddressNormalCalls'] = LineCallingAddressNormalCalls;

        return LineCallingAddressNormalCalls;
    }());

    var LineCallingAddressNormalCallsFromHeaderAddress = (function(){
        var instanceCache = {};
        function LineCallingAddressNormalCallsFromHeaderAddress(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallingAddressNormalCallsFromHeaderAddress, _util.EnumValue);

        Object.defineProperties(LineCallingAddressNormalCallsFromHeaderAddress, {
            'UseLineValue1': { value: new LineCallingAddressNormalCallsFromHeaderAddress(0, 'UseLineValue1'), enumerable: true },
            'UseLineValue2': { value: new LineCallingAddressNormalCallsFromHeaderAddress(1, 'UseLineValue2'), enumerable: true },
            'UsePassedValueIfPresent': { value: new LineCallingAddressNormalCallsFromHeaderAddress(2, 'UsePassedValueIfPresent'), enumerable: true }
        });

        Object.defineProperty(LineCallingAddressNormalCallsFromHeaderAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress' });

        _typemap['urn:inin.com:configuration.hardware:lineCallingAddressNormalCallsFromHeaderAddress'] = LineCallingAddressNormalCallsFromHeaderAddress;

        return LineCallingAddressNormalCallsFromHeaderAddress;
    }());

    var LineCallingAddressSelection = (function(){
        var instanceCache = {};
        function LineCallingAddressSelection(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressSelection' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineCallingAddressSelection, _util.EnumValue);

        Object.defineProperties(LineCallingAddressSelection, {
            'UseFromHeaderOnly': { value: new LineCallingAddressSelection(0, 'UseFromHeaderOnly'), enumerable: true },
            'UsePAssertedIdentityHeaderOnly': { value: new LineCallingAddressSelection(1, 'UsePAssertedIdentityHeaderOnly'), enumerable: true },
            'UsePAssertedIdentityHeaderThenFromHeader': { value: new LineCallingAddressSelection(2, 'UsePAssertedIdentityHeaderThenFromHeader'), enumerable: true }
        });

        Object.defineProperty(LineCallingAddressSelection, '__type', { value: 'urn:inin.com:configuration.hardware:lineCallingAddressSelection' });

        _typemap['urn:inin.com:configuration.hardware:lineCallingAddressSelection'] = LineCallingAddressSelection;

        return LineCallingAddressSelection;
    }());

    var LineDiversionInfo = (function(){
        var instanceCache = {};
        function LineDiversionInfo(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionInfo' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineDiversionInfo, _util.EnumValue);

        Object.defineProperties(LineDiversionInfo, {
            'UseMostRecent': { value: new LineDiversionInfo(0, 'UseMostRecent'), enumerable: true },
            'UseOriginal': { value: new LineDiversionInfo(1, 'UseOriginal'), enumerable: true }
        });

        Object.defineProperty(LineDiversionInfo, '__type', { value: 'urn:inin.com:configuration.hardware:lineDiversionInfo' });

        _typemap['urn:inin.com:configuration.hardware:lineDiversionInfo'] = LineDiversionInfo;

        return LineDiversionInfo;
    }());

    var LineDTMFType = (function(){
        var instanceCache = {};
        function LineDTMFType(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineDTMFType' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineDTMFType, _util.EnumValue);

        Object.defineProperties(LineDTMFType, {
            'DoNotUseRFC2833': { value: new LineDTMFType(0, 'DoNotUseRFC2833'), enumerable: true },
            'RFC2833IfSupported': { value: new LineDTMFType(1, 'RFC2833IfSupported'), enumerable: true },
            'RFC2833Only': { value: new LineDTMFType(2, 'RFC2833Only'), enumerable: true }
        });

        Object.defineProperty(LineDTMFType, '__type', { value: 'urn:inin.com:configuration.hardware:lineDTMFType' });

        _typemap['urn:inin.com:configuration.hardware:lineDTMFType'] = LineDTMFType;

        return LineDTMFType;
    }());

    var LineFaxProtocol = (function(){
        var instanceCache = {};
        function LineFaxProtocol(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineFaxProtocol' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineFaxProtocol, _util.EnumValue);

        Object.defineProperties(LineFaxProtocol, {
            'None': { value: new LineFaxProtocol(0, 'None'), enumerable: true },
            'T30Only': { value: new LineFaxProtocol(1, 'T30Only'), enumerable: true },
            'T38Only': { value: new LineFaxProtocol(2, 'T38Only'), enumerable: true },
            'T38ThenT30': { value: new LineFaxProtocol(3, 'T38ThenT30'), enumerable: true }
        });

        Object.defineProperty(LineFaxProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineFaxProtocol' });

        _typemap['urn:inin.com:configuration.hardware:lineFaxProtocol'] = LineFaxProtocol;

        return LineFaxProtocol;
    }());

    var LineUsage = (function(){
        var instanceCache = {};
        function LineUsage(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUsage' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineUsage, _util.EnumValue);

        Object.defineProperties(LineUsage, {
            'GeneralPurpose': { value: new LineUsage(0, 'GeneralPurpose'), enumerable: true },
            'StationConnections': { value: new LineUsage(1, 'StationConnections'), enumerable: true }
        });

        Object.defineProperty(LineUsage, '__type', { value: 'urn:inin.com:configuration.hardware:lineUsage' });

        _typemap['urn:inin.com:configuration.hardware:lineUsage'] = LineUsage;

        return LineUsage;
    }());

    var LineMediaAddressFamily = (function(){
        var instanceCache = {};
        function LineMediaAddressFamily(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineMediaAddressFamily' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineMediaAddressFamily, _util.EnumValue);

        Object.defineProperties(LineMediaAddressFamily, {
            'Ipv4': { value: new LineMediaAddressFamily(0, 'Ipv4'), enumerable: true },
            'Ipv6': { value: new LineMediaAddressFamily(1, 'Ipv6'), enumerable: true },
            'TelephonyDefault': { value: new LineMediaAddressFamily(2, 'TelephonyDefault'), enumerable: true }
        });

        Object.defineProperty(LineMediaAddressFamily, '__type', { value: 'urn:inin.com:configuration.hardware:lineMediaAddressFamily' });

        _typemap['urn:inin.com:configuration.hardware:lineMediaAddressFamily'] = LineMediaAddressFamily;

        return LineMediaAddressFamily;
    }());

    var LineSecurity = (function(){
        var instanceCache = {};
        function LineSecurity(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSecurity' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineSecurity, _util.EnumValue);

        Object.defineProperties(LineSecurity, {
            'EndToEdge': { value: new LineSecurity(0, 'EndToEdge'), enumerable: true },
            'Minimal': { value: new LineSecurity(1, 'Minimal'), enumerable: true }
        });

        Object.defineProperty(LineSecurity, '__type', { value: 'urn:inin.com:configuration.hardware:lineSecurity' });

        _typemap['urn:inin.com:configuration.hardware:lineSecurity'] = LineSecurity;

        return LineSecurity;
    }());

    var LineAccessValidation = (function(){
        var instanceCache = {};
        function LineAccessValidation(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessValidation' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineAccessValidation, _util.EnumValue);

        Object.defineProperties(LineAccessValidation, {
            'LastHop': { value: new LineAccessValidation(0, 'LastHop'), enumerable: true },
            'Originator': { value: new LineAccessValidation(1, 'Originator'), enumerable: true }
        });

        Object.defineProperty(LineAccessValidation, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessValidation' });

        _typemap['urn:inin.com:configuration.hardware:lineAccessValidation'] = LineAccessValidation;

        return LineAccessValidation;
    }());

    var LineTransportProtocol = (function(){
        var instanceCache = {};
        function LineTransportProtocol(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineTransportProtocol' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineTransportProtocol, _util.EnumValue);

        Object.defineProperties(LineTransportProtocol, {
            'UDP': { value: new LineTransportProtocol(0, 'UDP'), enumerable: true },
            'TCP': { value: new LineTransportProtocol(1, 'TCP'), enumerable: true },
            'TLS': { value: new LineTransportProtocol(2, 'TLS'), enumerable: true }
        });

        Object.defineProperty(LineTransportProtocol, '__type', { value: 'urn:inin.com:configuration.hardware:lineTransportProtocol' });

        _typemap['urn:inin.com:configuration.hardware:lineTransportProtocol'] = LineTransportProtocol;

        return LineTransportProtocol;
    }());

    var LineUserToUserConversion = (function(){
        var instanceCache = {};
        function LineUserToUserConversion(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserConversion' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineUserToUserConversion, _util.EnumValue);

        Object.defineProperties(LineUserToUserConversion, {
            'Hex': { value: new LineUserToUserConversion(0, 'Hex'), enumerable: true },
            'Ascii': { value: new LineUserToUserConversion(1, 'Ascii'), enumerable: true },
            'ExtendedAscii': { value: new LineUserToUserConversion(2, 'ExtendedAscii'), enumerable: true }
        });

        Object.defineProperty(LineUserToUserConversion, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserConversion' });

        _typemap['urn:inin.com:configuration.hardware:lineUserToUserConversion'] = LineUserToUserConversion;

        return LineUserToUserConversion;
    }());

    var LineUserToUserHeader = (function(){
        var instanceCache = {};
        function LineUserToUserHeader(value, name) {
            if (_util.hasProp(instanceCache, value)) {
                return instanceCache[value];
            }
            if (!_util.isNumber(value)) {
                throw new Error('value does not match the expected type: Number');
            }

            Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserHeader' });

            _util.EnumValue.call(this, value, name || String(value));
            instanceCache[value] = this;
        }
        _util.inherits(LineUserToUserHeader, _util.EnumValue);

        Object.defineProperties(LineUserToUserHeader, {
            'XUserToUser': { value: new LineUserToUserHeader(0, 'XUserToUser'), enumerable: true },
            'UserToUser': { value: new LineUserToUserHeader(1, 'UserToUser'), enumerable: true },
            'UserToUserPdAttribute': { value: new LineUserToUserHeader(2, 'UserToUserPdAttribute'), enumerable: true }
        });

        Object.defineProperty(LineUserToUserHeader, '__type', { value: 'urn:inin.com:configuration.hardware:lineUserToUserHeader' });

        _typemap['urn:inin.com:configuration.hardware:lineUserToUserHeader'] = LineUserToUserHeader;

        return LineUserToUserHeader;
    }());

    var AudioSource = (function(){
        var hasProps = false;

        function AudioSource() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSource' });
            }

            AudioSource._super.constructor.apply(this, arguments);
        }
        _util.inherits(AudioSource, _util.DataContract);

        function defineProps() {
            Object.defineProperty(AudioSource.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting AudioSource.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSource.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for AudioSource.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSource.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AudioSource.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSource.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for AudioSource.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSource.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for AudioSource.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AudioSource, '__type', { value: 'urn:inin.com:configuration.hardware:audioSource' });

        Object.defineProperty(AudioSource, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:audioSource'] = AudioSource;

        return AudioSource;
    }());

    var RecordingBeepTone = (function(){
        var hasProps = false;

        function RecordingBeepTone() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTone' });
            }

            RecordingBeepTone._super.constructor.apply(this, arguments);
        }
        _util.inherits(RecordingBeepTone, _util.DataContract);

        function defineProps() {
            Object.defineProperty(RecordingBeepTone.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting RecordingBeepTone.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for RecordingBeepTone.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting RecordingBeepTone.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for RecordingBeepTone.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for RecordingBeepTone.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneAmplitudeOne', {
                get: function() { return this.__prop_toneAmplitudeOne; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneAmplitudeOne, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneAmplitudeOne = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneAmplitudeTwo', {
                get: function() { return this.__prop_toneAmplitudeTwo; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneAmplitudeTwo, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneAmplitudeTwo = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneDuration', {
                get: function() { return this.__prop_toneDuration; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneDuration, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneDuration = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneFrequencyOne', {
                get: function() { return this.__prop_toneFrequencyOne; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneFrequencyOne, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneFrequencyOne = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneFrequencyTwo', {
                get: function() { return this.__prop_toneFrequencyTwo; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneFrequencyTwo, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneFrequencyTwo = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTone.prototype, 'toneInterval', {
                get: function() { return this.__prop_toneInterval; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for RecordingBeepTone.toneInterval, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_toneInterval = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(RecordingBeepTone, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTone' });

        Object.defineProperty(RecordingBeepTone, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'toneAmplitudeOne': { required: false, nullable: false },
                    'toneAmplitudeTwo': { required: false, nullable: false },
                    'toneDuration': { required: false, nullable: false },
                    'toneFrequencyOne': { required: false, nullable: false },
                    'toneFrequencyTwo': { required: false, nullable: false },
                    'toneInterval': { required: false, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:recordingBeepTone'] = RecordingBeepTone;

        return RecordingBeepTone;
    }());

    var StructuredParameter = (function(){
        var hasProps = false;

        function StructuredParameter() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameter' });
            }

            StructuredParameter._super.constructor.apply(this, arguments);
        }
        _util.inherits(StructuredParameter, _util.DataContract);

        function defineProps() {
            Object.defineProperty(StructuredParameter.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParameter.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for StructuredParameter.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParameter.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for StructuredParameter.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for StructuredParameter.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'description', {
                get: function() { return this.__prop_description; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for StructuredParameter.description, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_description = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameter.prototype, 'parameters', {
                get: function() { return this.__prop_parameters; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameterValue); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new StructuredParameterValue(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParameter.parameters: ' + e.message);
                        }
                    }

                    this.__prop_parameters = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StructuredParameter, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameter' });

        Object.defineProperty(StructuredParameter, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'description': { required: false, nullable: true },
                    'parameters': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:structuredParameter'] = StructuredParameter;

        return StructuredParameter;
    }());

    var StructuredParameterValue = (function(){
        var hasProps = false;

        function StructuredParameterValue() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterValue' });
            }

            StructuredParameterValue._super.constructor.apply(this, arguments);
        }
        _util.inherits(StructuredParameterValue, _util.DataContract);

        function defineProps() {
            Object.defineProperty(StructuredParameterValue.prototype, 'name', {
                get: function() { return this.__prop_name; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for StructuredParameterValue.name, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_name = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameterValue.prototype, 'parameterType', {
                get: function() { return this.__prop_parameterType; },
                set: function(value) {
                    if (!(value instanceof StructuredParameterType)) {
                        try {
                            value = new StructuredParameterType(value);
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParameterValue.parameterType: ' + e.message);
                        }
                    }

                    this.__prop_parameterType = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParameterValue.prototype, 'values', {
                get: function() { return this.__prop_values; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === null)) {
                        throw new TypeError('Expected type String[] for StructuredParameterValue.values, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_values = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StructuredParameterValue, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameterValue' });

        Object.defineProperty(StructuredParameterValue, '__propInfo', {
            get: function() {
                var pi = {
                    'name': { required: true, nullable: false },
                    'parameterType': { required: true, nullable: false },
                    'values': { required: true, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:structuredParameterValue'] = StructuredParameterValue;

        return StructuredParameterValue;
    }());

    var AudioSources = (function(){
        var hasProps = false;

        function AudioSources() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSources' });
            }

            AudioSources._super.constructor.apply(this, arguments);
        }
        _util.inherits(AudioSources, _util.DataContract);

        function defineProps() {
            Object.defineProperty(AudioSources.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }))) {
                        try {
                            value = value.map(function(item){ return new AudioSource(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AudioSources.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AudioSources, '__type', { value: 'urn:inin.com:configuration.hardware:audioSources' });

        Object.defineProperty(AudioSources, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:audioSources'] = AudioSources;

        return AudioSources;
    }());

    var DefaultLocation = (function(){
        var hasProps = false;

        function DefaultLocation() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:defaultLocation' });
            }

            DefaultLocation._super.constructor.apply(this, arguments);
        }
        _util.inherits(DefaultLocation, _util.DataContract);

        function defineProps() {
            Object.defineProperty(DefaultLocation.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting DefaultLocation.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(DefaultLocation.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for DefaultLocation.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(DefaultLocation.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting DefaultLocation.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(DefaultLocation.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for DefaultLocation.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(DefaultLocation.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for DefaultLocation.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(DefaultLocation.prototype, 'timezone', {
                get: function() { return this.__prop_timezone; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for DefaultLocation.timezone, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_timezone = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(DefaultLocation, '__type', { value: 'urn:inin.com:configuration.hardware:defaultLocation' });

        Object.defineProperty(DefaultLocation, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'timezone': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:defaultLocation'] = DefaultLocation;

        return DefaultLocation;
    }());

    var LineGroups = (function(){
        var hasProps = false;

        function LineGroups() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroups' });
            }

            LineGroups._super.constructor.apply(this, arguments);
        }
        _util.inherits(LineGroups, _util.DataContract);

        function defineProps() {
            Object.defineProperty(LineGroups.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineGroup); }))) {
                        try {
                            value = value.map(function(item){ return new LineGroup(item); });
                        } catch (e) {
                            throw new TypeError('Error setting LineGroups.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(LineGroups, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroups' });

        Object.defineProperty(LineGroups, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lineGroups'] = LineGroups;

        return LineGroups;
    }());

    var LineGroup = (function(){
        var hasProps = false;

        function LineGroup() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroup' });
            }

            LineGroup._super.constructor.apply(this, arguments);
        }
        _util.inherits(LineGroup, _util.DataContract);

        function defineProps() {
            Object.defineProperty(LineGroup.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting LineGroup.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineGroup.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for LineGroup.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineGroup.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting LineGroup.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineGroup.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for LineGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineGroup.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for LineGroup.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineGroup.prototype, 'lines', {
                get: function() { return this.__prop_lines; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.ConfigurationId); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.ConfigurationId(item); });
                        } catch (e) {
                            throw new TypeError('Error setting LineGroup.lines: ' + e.message);
                        }
                    }

                    this.__prop_lines = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(LineGroup, '__type', { value: 'urn:inin.com:configuration.hardware:lineGroup' });

        Object.defineProperty(LineGroup, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'lines': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lineGroup'] = LineGroup;

        return LineGroup;
    }());

    var Lines = (function(){
        var hasProps = false;

        function Lines() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lines' });
            }

            Lines._super.constructor.apply(this, arguments);
        }
        _util.inherits(Lines, _util.DataContract);

        function defineProps() {
            Object.defineProperty(Lines.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Line); }))) {
                        try {
                            value = value.map(function(item){ return new Line(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Lines.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(Lines, '__type', { value: 'urn:inin.com:configuration.hardware:lines' });

        Object.defineProperty(Lines, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lines'] = Lines;

        return Lines;
    }());

    var Line = (function(){
        var hasProps = false;

        function Line() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:line' });
            }

            Line._super.constructor.apply(this, arguments);
        }
        _util.inherits(Line, _util.DataContract);

        function defineProps() {
            Object.defineProperty(Line.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for Line.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Line.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for Line.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'active', {
                get: function() { return this.__prop_active; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.active, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_active = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'adapterName', {
                get: function() { return this.__prop_adapterName; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.adapterName, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_adapterName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'addressFamily', {
                get: function() { return this.__prop_addressFamily; },
                set: function(value) {
                    if (!(value instanceof LineAddressFamily || value === void 0)) {
                        try {
                            value = new LineAddressFamily(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.addressFamily: ' + e.message);
                        }
                    }

                    this.__prop_addressFamily = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'allowDeferredAnswer', {
                get: function() { return this.__prop_allowDeferredAnswer; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.allowDeferredAnswer, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_allowDeferredAnswer = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'allowMultipleCodecsInOutboundSDPOffer', {
                get: function() { return this.__prop_allowMultipleCodecsInOutboundSDPOffer; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.allowMultipleCodecsInOutboundSDPOffer, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_allowMultipleCodecsInOutboundSDPOffer = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'asrEnabled', {
                get: function() { return this.__prop_asrEnabled; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.asrEnabled, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_asrEnabled = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'audioPath', {
                get: function() { return this.__prop_audioPath; },
                set: function(value) {
                    if (!(value instanceof LineAudioPath || value === void 0)) {
                        try {
                            value = new LineAudioPath(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.audioPath: ' + e.message);
                        }
                    }

                    this.__prop_audioPath = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'audioProtocol', {
                get: function() { return this.__prop_audioProtocol; },
                set: function(value) {
                    if (!(value instanceof LineAudioProtocol || value === void 0)) {
                        try {
                            value = new LineAudioProtocol(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.audioProtocol: ' + e.message);
                        }
                    }

                    this.__prop_audioProtocol = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'authentication', {
                get: function() { return this.__prop_authentication; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.authentication, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_authentication = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'authenticationPassword', {
                get: function() { return this.__prop_authenticationPassword; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.authenticationPassword, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_authenticationPassword = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'authenticationUsername', {
                get: function() { return this.__prop_authenticationUsername; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.authenticationUsername, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_authenticationUsername = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'autoDisconnectWhenSilenceDetectedInVoicemail', {
                get: function() { return this.__prop_autoDisconnectWhenSilenceDetectedInVoicemail; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.autoDisconnectWhenSilenceDetectedInVoicemail, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_autoDisconnectWhenSilenceDetectedInVoicemail = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'boardType', {
                get: function() { return this.__prop_boardType; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.boardType, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_boardType = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callAnalysisType', {
                get: function() { return this.__prop_callAnalysisType; },
                set: function(value) {
                    if (!(value instanceof LineCallAnalysisType || value === void 0)) {
                        try {
                            value = new LineCallAnalysisType(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callAnalysisType: ' + e.message);
                        }
                    }

                    this.__prop_callAnalysisType = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callAttributeHeaders', {
                get: function() { return this.__prop_callAttributeHeaders; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String[] for Line.callAttributeHeaders, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_callAttributeHeaders = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'calledAddressSelection', {
                get: function() { return this.__prop_calledAddressSelection; },
                set: function(value) {
                    if (!(value instanceof LineCalledAddressSelection || value === void 0)) {
                        try {
                            value = new LineCalledAddressSelection(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.calledAddressSelection: ' + e.message);
                        }
                    }

                    this.__prop_calledAddressSelection = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'calledAddressSendExtension', {
                get: function() { return this.__prop_calledAddressSendExtension; },
                set: function(value) {
                    if (!(value instanceof LineSendExtension || value === void 0)) {
                        try {
                            value = new LineSendExtension(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.calledAddressSendExtension: ' + e.message);
                        }
                    }

                    this.__prop_calledAddressSendExtension = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDiversionMethod', {
                get: function() { return this.__prop_callingAddressDiversionMethod; },
                set: function(value) {
                    if (!(value instanceof LineDiversionMethod || value === void 0)) {
                        try {
                            value = new LineDiversionMethod(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDiversionMethod: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDiversionMethod = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsDivertedHeaderAddress', {
                get: function() { return this.__prop_callingAddressDivertedCallsDivertedHeaderAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsDivertedHeaderAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsDivertedHeaderAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsDivertedHeaderName', {
                get: function() { return this.__prop_callingAddressDivertedCallsDivertedHeaderName; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsDivertedHeaderName: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsDivertedHeaderName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsFromHeaderAddress', {
                get: function() { return this.__prop_callingAddressDivertedCallsFromHeaderAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCallsFromHeaderAddress || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCallsFromHeaderAddress(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsFromHeaderAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsFromHeaderAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsFromHeaderHame', {
                get: function() { return this.__prop_callingAddressDivertedCallsFromHeaderHame; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsFromHeaderHame: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsFromHeaderHame = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsPAssertedIdentityAddress', {
                get: function() { return this.__prop_callingAddressDivertedCallsPAssertedIdentityAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsPAssertedIdentityAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsPAssertedIdentityAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressDivertedCallsPAssertedIdentityName', {
                get: function() { return this.__prop_callingAddressDivertedCallsPAssertedIdentityName; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressDivertedCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressDivertedCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressDivertedCallsPAssertedIdentityName: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressDivertedCallsPAssertedIdentityName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressLineValueAddress1', {
                get: function() { return this.__prop_callingAddressLineValueAddress1; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.callingAddressLineValueAddress1, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_callingAddressLineValueAddress1 = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressLineValueAddress2', {
                get: function() { return this.__prop_callingAddressLineValueAddress2; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.callingAddressLineValueAddress2, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_callingAddressLineValueAddress2 = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressLineValueName1', {
                get: function() { return this.__prop_callingAddressLineValueName1; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.callingAddressLineValueName1, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_callingAddressLineValueName1 = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressLineValueName2', {
                get: function() { return this.__prop_callingAddressLineValueName2; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.callingAddressLineValueName2, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_callingAddressLineValueName2 = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsDivertedHeaderAddress', {
                get: function() { return this.__prop_callingAddressNormalCallsDivertedHeaderAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsDivertedHeaderAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsDivertedHeaderAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsDivertedHeaderName', {
                get: function() { return this.__prop_callingAddressNormalCallsDivertedHeaderName; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsDivertedHeaderName: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsDivertedHeaderName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsFromHeaderAddress', {
                get: function() { return this.__prop_callingAddressNormalCallsFromHeaderAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCallsFromHeaderAddress || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCallsFromHeaderAddress(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsFromHeaderAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsFromHeaderAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsFromHeaderName', {
                get: function() { return this.__prop_callingAddressNormalCallsFromHeaderName; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsFromHeaderName: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsFromHeaderName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsPAssertedIdentityHeaderAddress', {
                get: function() { return this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderAddress; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsPAssertedIdentityHeaderAddress: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderAddress = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressNormalCallsPAssertedIdentityHeaderName', {
                get: function() { return this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderName; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressNormalCalls || value === void 0)) {
                        try {
                            value = new LineCallingAddressNormalCalls(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressNormalCallsPAssertedIdentityHeaderName: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressNormalCallsPAssertedIdentityHeaderName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'callingAddressSelection', {
                get: function() { return this.__prop_callingAddressSelection; },
                set: function(value) {
                    if (!(value instanceof LineCallingAddressSelection || value === void 0)) {
                        try {
                            value = new LineCallingAddressSelection(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.callingAddressSelection: ' + e.message);
                        }
                    }

                    this.__prop_callingAddressSelection = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'connectTimerMs', {
                get: function() { return this.__prop_connectTimerMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.connectTimerMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_connectTimerMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'direction', {
                get: function() { return this.__prop_direction; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.direction, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_direction = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'disableFaxDetection', {
                get: function() { return this.__prop_disableFaxDetection; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.disableFaxDetection, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_disableFaxDetection = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'disableMediaServerPassthru', {
                get: function() { return this.__prop_disableMediaServerPassthru; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.disableMediaServerPassthru, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_disableMediaServerPassthru = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'disconnectOnBrokenRtp', {
                get: function() { return this.__prop_disconnectOnBrokenRtp; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.disconnectOnBrokenRtp, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_disconnectOnBrokenRtp = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'diversionInfo', {
                get: function() { return this.__prop_diversionInfo; },
                set: function(value) {
                    if (!(value instanceof LineDiversionInfo || value === void 0)) {
                        try {
                            value = new LineDiversionInfo(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.diversionInfo: ' + e.message);
                        }
                    }

                    this.__prop_diversionInfo = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'dnsSrv', {
                get: function() { return this.__prop_dnsSrv; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.dnsSrv, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_dnsSrv = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'domainName', {
                get: function() { return this.__prop_domainName; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.domainName, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_domainName = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'dtmfPayload', {
                get: function() { return this.__prop_dtmfPayload; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.dtmfPayload, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_dtmfPayload = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'dtmfType', {
                get: function() { return this.__prop_dtmfType; },
                set: function(value) {
                    if (!(value instanceof LineDTMFType || value === void 0)) {
                        try {
                            value = new LineDTMFType(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.dtmfType: ' + e.message);
                        }
                    }

                    this.__prop_dtmfType = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'echoCancellation', {
                get: function() { return this.__prop_echoCancellation; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.echoCancellation, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_echoCancellation = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'enableProcessingOfReceivedSipReferMessages', {
                get: function() { return this.__prop_enableProcessingOfReceivedSipReferMessages; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.enableProcessingOfReceivedSipReferMessages, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_enableProcessingOfReceivedSipReferMessages = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'enableSendingSipReferMessages', {
                get: function() { return this.__prop_enableSendingSipReferMessages; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.enableSendingSipReferMessages, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_enableSendingSipReferMessages = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'enableSendingSipReferMessagesToLinesInOtherLineGroups', {
                get: function() { return this.__prop_enableSendingSipReferMessagesToLinesInOtherLineGroups; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Boolean for Line.enableSendingSipReferMessagesToLinesInOtherLineGroups, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_enableSendingSipReferMessagesToLinesInOtherLineGroups = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'enableSipPrackUpdateForEarlyMediaSupport', {
                get: function() { return this.__prop_enableSipPrackUpdateForEarlyMediaSupport; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.enableSipPrackUpdateForEarlyMediaSupport, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_enableSipPrackUpdateForEarlyMediaSupport = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'encryptRecordings', {
                get: function() { return this.__prop_encryptRecordings; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.encryptRecordings, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_encryptRecordings = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'faxProtocol', {
                get: function() { return this.__prop_faxProtocol; },
                set: function(value) {
                    if (!(value instanceof LineFaxProtocol || value === void 0)) {
                        try {
                            value = new LineFaxProtocol(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.faxProtocol: ' + e.message);
                        }
                    }

                    this.__prop_faxProtocol = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'ignoreAddressIfUserPortionIsNotNumeric', {
                get: function() { return this.__prop_ignoreAddressIfUserPortionIsNotNumeric; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.ignoreAddressIfUserPortionIsNotNumeric, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_ignoreAddressIfUserPortionIsNotNumeric = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'inboundProgressTimerMs', {
                get: function() { return this.__prop_inboundProgressTimerMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.inboundProgressTimerMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_inboundProgressTimerMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'includeEarlyAudio', {
                get: function() { return this.__prop_includeEarlyAudio; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.includeEarlyAudio, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_includeEarlyAudio = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'includeHoldMusic', {
                get: function() { return this.__prop_includeHoldMusic; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.includeHoldMusic, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_includeHoldMusic = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'keepTelSchemeWhenUsingAProxy', {
                get: function() { return this.__prop_keepTelSchemeWhenUsingAProxy; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.keepTelSchemeWhenUsingAProxy, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_keepTelSchemeWhenUsingAProxy = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'lineUsage', {
                get: function() { return this.__prop_lineUsage; },
                set: function(value) {
                    if (!(value instanceof LineUsage || value === void 0)) {
                        try {
                            value = new LineUsage(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.lineUsage: ' + e.message);
                        }
                    }

                    this.__prop_lineUsage = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'location', {
                get: function() { return this.__prop_location; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Line.location, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_location = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maximumInviteRetry', {
                get: function() { return this.__prop_maximumInviteRetry; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.maximumInviteRetry, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maximumInviteRetry = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maximumPacketRetry', {
                get: function() { return this.__prop_maximumPacketRetry; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.maximumPacketRetry, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maximumPacketRetry = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfCallsCombinedLimit', {
                get: function() { return this.__prop_maxNumberOfCallsCombinedLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsCombinedLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfCallsCombinedLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfCallsInboundLimit', {
                get: function() { return this.__prop_maxNumberOfCallsInboundLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsInboundLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfCallsInboundLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfCallsOutboundLimit', {
                get: function() { return this.__prop_maxNumberOfCallsOutboundLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfCallsOutboundLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfCallsOutboundLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfCallsUseCombined', {
                get: function() { return this.__prop_maxNumberOfCallsUseCombined; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Boolean for Line.maxNumberOfCallsUseCombined, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfCallsUseCombined = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfFaxesCombinedLimit', {
                get: function() { return this.__prop_maxNumberOfFaxesCombinedLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesCombinedLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfFaxesCombinedLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfFaxesInboundLimit', {
                get: function() { return this.__prop_maxNumberOfFaxesInboundLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesInboundLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfFaxesInboundLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfFaxesOutboundLimit', {
                get: function() { return this.__prop_maxNumberOfFaxesOutboundLimit; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxNumberOfFaxesOutboundLimit, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfFaxesOutboundLimit = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxNumberOfFaxesUseCombined', {
                get: function() { return this.__prop_maxNumberOfFaxesUseCombined; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Boolean for Line.maxNumberOfFaxesUseCombined, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxNumberOfFaxesUseCombined = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'maxProbationTime', {
                get: function() { return this.__prop_maxProbationTime; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.maxProbationTime, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_maxProbationTime = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'mediaAddressFamily', {
                get: function() { return this.__prop_mediaAddressFamily; },
                set: function(value) {
                    if (!(value instanceof LineMediaAddressFamily || value === void 0)) {
                        try {
                            value = new LineMediaAddressFamily(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.mediaAddressFamily: ' + e.message);
                        }
                    }

                    this.__prop_mediaAddressFamily = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'mediaReinviteTiming', {
                get: function() { return this.__prop_mediaReinviteTiming; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.mediaReinviteTiming, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_mediaReinviteTiming = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'mediaTiming', {
                get: function() { return this.__prop_mediaTiming; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.mediaTiming, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_mediaTiming = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'permanent', {
                get: function() { return this.__prop_permanent; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.permanent, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_permanent = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'playbackEarlyMediaToInboundCalls', {
                get: function() { return this.__prop_playbackEarlyMediaToInboundCalls; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.playbackEarlyMediaToInboundCalls, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_playbackEarlyMediaToInboundCalls = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'proxyIpList', {
                get: function() { return this.__prop_proxyIpList; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineSipProxy); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new LineSipProxy(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Line.proxyIpList: ' + e.message);
                        }
                    }

                    this.__prop_proxyIpList = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'receivePort', {
                get: function() { return this.__prop_receivePort; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.receivePort, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_receivePort = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'registarExternalList', {
                get: function() { return this.__prop_registarExternalList; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String[] for Line.registarExternalList, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_registarExternalList = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'registrarAddressList', {
                get: function() { return this.__prop_registrarAddressList; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineRegistrarAddress); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new LineRegistrarAddress(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Line.registrarAddressList: ' + e.message);
                        }
                    }

                    this.__prop_registrarAddressList = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'reinviteDelayMs', {
                get: function() { return this.__prop_reinviteDelayMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.reinviteDelayMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_reinviteDelayMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'retryableCauseCodes', {
                get: function() { return this.__prop_retryableCauseCodes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.retryableCauseCodes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_retryableCauseCodes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'retryableReasonCodes', {
                get: function() { return this.__prop_retryableReasonCodes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.retryableReasonCodes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_retryableReasonCodes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'security', {
                get: function() { return this.__prop_security; },
                set: function(value) {
                    if (!(value instanceof LineSecurity || value === void 0)) {
                        try {
                            value = new LineSecurity(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.security: ' + e.message);
                        }
                    }

                    this.__prop_security = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'silenceTimeMs', {
                get: function() { return this.__prop_silenceTimeMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.silenceTimeMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_silenceTimeMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipAccessDefaultDenyAll', {
                get: function() { return this.__prop_sipAccessDefaultDenyAll; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.sipAccessDefaultDenyAll, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_sipAccessDefaultDenyAll = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipAccessDeniedList', {
                get: function() { return this.__prop_sipAccessDeniedList; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineAccessLevel); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new LineAccessLevel(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Line.sipAccessDeniedList: ' + e.message);
                        }
                    }

                    this.__prop_sipAccessDeniedList = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipAccessGrantedList', {
                get: function() { return this.__prop_sipAccessGrantedList; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof LineAccessLevel); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new LineAccessLevel(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Line.sipAccessGrantedList: ' + e.message);
                        }
                    }

                    this.__prop_sipAccessGrantedList = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipAnswerDelayMs', {
                get: function() { return this.__prop_sipAnswerDelayMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.sipAnswerDelayMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_sipAnswerDelayMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipDSCPValue', {
                get: function() { return this.__prop_sipDSCPValue; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.sipDSCPValue, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_sipDSCPValue = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'sipSessionTimeout', {
                get: function() { return this.__prop_sipSessionTimeout; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.sipSessionTimeout, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_sipSessionTimeout = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'terminateAnalysisOnConnect', {
                get: function() { return this.__prop_terminateAnalysisOnConnect; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.terminateAnalysisOnConnect, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_terminateAnalysisOnConnect = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'tOneTimerMs', {
                get: function() { return this.__prop_tOneTimerMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.tOneTimerMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_tOneTimerMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'transferHeaders', {
                get: function() { return this.__prop_transferHeaders; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String[] for Line.transferHeaders, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_transferHeaders = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'transportProtocol', {
                get: function() { return this.__prop_transportProtocol; },
                set: function(value) {
                    if (!(value instanceof LineTransportProtocol || value === void 0)) {
                        try {
                            value = new LineTransportProtocol(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.transportProtocol: ' + e.message);
                        }
                    }

                    this.__prop_transportProtocol = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'tTwoTimerMs', {
                get: function() { return this.__prop_tTwoTimerMs; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value || value === void 0)) {
                        throw new TypeError('Expected type Number (integer) for Line.tTwoTimerMs, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_tTwoTimerMs = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'useDiversionInfoIfPresent', {
                get: function() { return this.__prop_useDiversionInfoIfPresent; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.useDiversionInfoIfPresent, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_useDiversionInfoIfPresent = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'useOnlyNumericPortion', {
                get: function() { return this.__prop_useOnlyNumericPortion; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.useOnlyNumericPortion, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_useOnlyNumericPortion = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'useProactiveRecording', {
                get: function() { return this.__prop_useProactiveRecording; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.useProactiveRecording, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_useProactiveRecording = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'userToUserConversion', {
                get: function() { return this.__prop_userToUserConversion; },
                set: function(value) {
                    if (!(value instanceof LineUserToUserConversion || value === void 0 || value === null)) {
                        try {
                            value = new LineUserToUserConversion(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.userToUserConversion: ' + e.message);
                        }
                    }

                    this.__prop_userToUserConversion = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'userToUserHeader', {
                get: function() { return this.__prop_userToUserHeader; },
                set: function(value) {
                    if (!(value instanceof LineUserToUserHeader || value === void 0 || value === null)) {
                        try {
                            value = new LineUserToUserHeader(value);
                        } catch (e) {
                            throw new TypeError('Error setting Line.userToUserHeader: ' + e.message);
                        }
                    }

                    this.__prop_userToUserHeader = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'useSipSessionTimer', {
                get: function() { return this.__prop_useSipSessionTimer; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.useSipSessionTimer, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_useSipSessionTimer = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'useSipsScheme', {
                get: function() { return this.__prop_useSipsScheme; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.useSipsScheme, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_useSipsScheme = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'uuiProtocolDiscriminator', {
                get: function() { return this.__prop_uuiProtocolDiscriminator; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Line.uuiProtocolDiscriminator, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_uuiProtocolDiscriminator = value;
                },
                enumerable: true
            });

            Object.defineProperty(Line.prototype, 'voiceActivationDetection', {
                get: function() { return this.__prop_voiceActivationDetection; },
                set: function(value) {
                    if (!(_util.isBoolean(value) || value === void 0)) {
                        throw new TypeError('Expected type Boolean for Line.voiceActivationDetection, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_voiceActivationDetection = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(Line, '__type', { value: 'urn:inin.com:configuration.hardware:line' });

        Object.defineProperty(Line, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'active': { required: false, nullable: false },
                    'adapterName': { required: false, nullable: false },
                    'addressFamily': { required: false, nullable: false },
                    'allowDeferredAnswer': { required: false, nullable: false },
                    'allowMultipleCodecsInOutboundSDPOffer': { required: false, nullable: false },
                    'asrEnabled': { required: false, nullable: false },
                    'audioPath': { required: false, nullable: false },
                    'audioProtocol': { required: false, nullable: false },
                    'authentication': { required: false, nullable: false },
                    'authenticationPassword': { required: false, nullable: false },
                    'authenticationUsername': { required: false, nullable: false },
                    'autoDisconnectWhenSilenceDetectedInVoicemail': { required: false, nullable: false },
                    'boardType': { required: false, nullable: true },
                    'callAnalysisType': { required: false, nullable: false },
                    'callAttributeHeaders': { required: false, nullable: true },
                    'calledAddressSelection': { required: false, nullable: false },
                    'calledAddressSendExtension': { required: false, nullable: false },
                    'callingAddressDiversionMethod': { required: false, nullable: false },
                    'callingAddressDivertedCallsDivertedHeaderAddress': { required: false, nullable: false },
                    'callingAddressDivertedCallsDivertedHeaderName': { required: false, nullable: false },
                    'callingAddressDivertedCallsFromHeaderAddress': { required: false, nullable: false },
                    'callingAddressDivertedCallsFromHeaderHame': { required: false, nullable: false },
                    'callingAddressDivertedCallsPAssertedIdentityAddress': { required: false, nullable: false },
                    'callingAddressDivertedCallsPAssertedIdentityName': { required: false, nullable: false },
                    'callingAddressLineValueAddress1': { required: false, nullable: false },
                    'callingAddressLineValueAddress2': { required: false, nullable: true },
                    'callingAddressLineValueName1': { required: false, nullable: true },
                    'callingAddressLineValueName2': { required: false, nullable: true },
                    'callingAddressNormalCallsDivertedHeaderAddress': { required: false, nullable: false },
                    'callingAddressNormalCallsDivertedHeaderName': { required: false, nullable: false },
                    'callingAddressNormalCallsFromHeaderAddress': { required: false, nullable: false },
                    'callingAddressNormalCallsFromHeaderName': { required: false, nullable: false },
                    'callingAddressNormalCallsPAssertedIdentityHeaderAddress': { required: false, nullable: false },
                    'callingAddressNormalCallsPAssertedIdentityHeaderName': { required: false, nullable: false },
                    'callingAddressSelection': { required: false, nullable: false },
                    'connectTimerMs': { required: false, nullable: true },
                    'direction': { required: false, nullable: true },
                    'disableFaxDetection': { required: false, nullable: false },
                    'disableMediaServerPassthru': { required: false, nullable: false },
                    'disconnectOnBrokenRtp': { required: false, nullable: false },
                    'diversionInfo': { required: false, nullable: false },
                    'dnsSrv': { required: false, nullable: false },
                    'domainName': { required: false, nullable: false },
                    'dtmfPayload': { required: false, nullable: false },
                    'dtmfType': { required: false, nullable: false },
                    'echoCancellation': { required: false, nullable: false },
                    'enableProcessingOfReceivedSipReferMessages': { required: false, nullable: false },
                    'enableSendingSipReferMessages': { required: false, nullable: false },
                    'enableSendingSipReferMessagesToLinesInOtherLineGroups': { required: false, nullable: true },
                    'enableSipPrackUpdateForEarlyMediaSupport': { required: false, nullable: false },
                    'encryptRecordings': { required: false, nullable: false },
                    'faxProtocol': { required: false, nullable: false },
                    'ignoreAddressIfUserPortionIsNotNumeric': { required: false, nullable: false },
                    'inboundProgressTimerMs': { required: false, nullable: false },
                    'includeEarlyAudio': { required: false, nullable: false },
                    'includeHoldMusic': { required: false, nullable: false },
                    'keepTelSchemeWhenUsingAProxy': { required: false, nullable: false },
                    'lineUsage': { required: false, nullable: false },
                    'location': { required: false, nullable: true },
                    'maximumInviteRetry': { required: false, nullable: false },
                    'maximumPacketRetry': { required: false, nullable: false },
                    'maxNumberOfCallsCombinedLimit': { required: false, nullable: true },
                    'maxNumberOfCallsInboundLimit': { required: false, nullable: true },
                    'maxNumberOfCallsOutboundLimit': { required: false, nullable: true },
                    'maxNumberOfCallsUseCombined': { required: false, nullable: true },
                    'maxNumberOfFaxesCombinedLimit': { required: false, nullable: true },
                    'maxNumberOfFaxesInboundLimit': { required: false, nullable: true },
                    'maxNumberOfFaxesOutboundLimit': { required: false, nullable: true },
                    'maxNumberOfFaxesUseCombined': { required: false, nullable: true },
                    'maxProbationTime': { required: false, nullable: false },
                    'mediaAddressFamily': { required: false, nullable: false },
                    'mediaReinviteTiming': { required: false, nullable: false },
                    'mediaTiming': { required: false, nullable: false },
                    'permanent': { required: false, nullable: false },
                    'playbackEarlyMediaToInboundCalls': { required: false, nullable: false },
                    'proxyIpList': { required: false, nullable: true },
                    'receivePort': { required: false, nullable: false },
                    'registarExternalList': { required: false, nullable: true },
                    'registrarAddressList': { required: false, nullable: true },
                    'reinviteDelayMs': { required: false, nullable: false },
                    'retryableCauseCodes': { required: false, nullable: false },
                    'retryableReasonCodes': { required: false, nullable: false },
                    'security': { required: false, nullable: false },
                    'silenceTimeMs': { required: false, nullable: false },
                    'sipAccessDefaultDenyAll': { required: false, nullable: false },
                    'sipAccessDeniedList': { required: false, nullable: true },
                    'sipAccessGrantedList': { required: false, nullable: true },
                    'sipAnswerDelayMs': { required: false, nullable: false },
                    'sipDSCPValue': { required: false, nullable: false },
                    'sipSessionTimeout': { required: false, nullable: false },
                    'terminateAnalysisOnConnect': { required: false, nullable: false },
                    'tOneTimerMs': { required: false, nullable: false },
                    'transferHeaders': { required: false, nullable: true },
                    'transportProtocol': { required: false, nullable: false },
                    'tTwoTimerMs': { required: false, nullable: false },
                    'useDiversionInfoIfPresent': { required: false, nullable: false },
                    'useOnlyNumericPortion': { required: false, nullable: false },
                    'useProactiveRecording': { required: false, nullable: false },
                    'userToUserConversion': { required: false, nullable: true },
                    'userToUserHeader': { required: false, nullable: true },
                    'useSipSessionTimer': { required: false, nullable: false },
                    'useSipsScheme': { required: false, nullable: false },
                    'uuiProtocolDiscriminator': { required: false, nullable: false },
                    'voiceActivationDetection': { required: false, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:line'] = Line;

        return Line;
    }());

    var LineSipProxy = (function(){
        var hasProps = false;

        function LineSipProxy() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineSipProxy' });
            }

            LineSipProxy._super.constructor.apply(this, arguments);
        }
        _util.inherits(LineSipProxy, _util.DataContract);

        function defineProps() {
            Object.defineProperty(LineSipProxy.prototype, 'ip', {
                get: function() { return this.__prop_ip; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for LineSipProxy.ip, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_ip = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineSipProxy.prototype, 'port', {
                get: function() { return this.__prop_port; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value)) {
                        throw new TypeError('Expected type Number (integer) for LineSipProxy.port, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_port = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(LineSipProxy, '__type', { value: 'urn:inin.com:configuration.hardware:lineSipProxy' });

        Object.defineProperty(LineSipProxy, '__propInfo', {
            get: function() {
                var pi = {
                    'ip': { required: true, nullable: false },
                    'port': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lineSipProxy'] = LineSipProxy;

        return LineSipProxy;
    }());

    var LineRegistrarAddress = (function(){
        var hasProps = false;

        function LineRegistrarAddress() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineRegistrarAddress' });
            }

            LineRegistrarAddress._super.constructor.apply(this, arguments);
        }
        _util.inherits(LineRegistrarAddress, _util.DataContract);

        function defineProps() {
            Object.defineProperty(LineRegistrarAddress.prototype, 'ip', {
                get: function() { return this.__prop_ip; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for LineRegistrarAddress.ip, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_ip = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineRegistrarAddress.prototype, 'port', {
                get: function() { return this.__prop_port; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value)) {
                        throw new TypeError('Expected type Number (integer) for LineRegistrarAddress.port, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_port = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineRegistrarAddress.prototype, 'registrationTime', {
                get: function() { return this.__prop_registrationTime; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value)) {
                        throw new TypeError('Expected type Number (integer) for LineRegistrarAddress.registrationTime, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_registrationTime = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(LineRegistrarAddress, '__type', { value: 'urn:inin.com:configuration.hardware:lineRegistrarAddress' });

        Object.defineProperty(LineRegistrarAddress, '__propInfo', {
            get: function() {
                var pi = {
                    'ip': { required: true, nullable: false },
                    'port': { required: true, nullable: false },
                    'registrationTime': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lineRegistrarAddress'] = LineRegistrarAddress;

        return LineRegistrarAddress;
    }());

    var LineAccessLevel = (function(){
        var hasProps = false;

        function LineAccessLevel() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessLevel' });
            }

            LineAccessLevel._super.constructor.apply(this, arguments);
        }
        _util.inherits(LineAccessLevel, _util.DataContract);

        function defineProps() {
            Object.defineProperty(LineAccessLevel.prototype, 'ip', {
                get: function() { return this.__prop_ip; },
                set: function(value) {
                    if (!(_util.isString(value))) {
                        throw new TypeError('Expected type String for LineAccessLevel.ip, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_ip = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineAccessLevel.prototype, 'subnetPrefixLength', {
                get: function() { return this.__prop_subnetPrefixLength; },
                set: function(value) {
                    if (!(_util.isNumber(value) && value|0 === value)) {
                        throw new TypeError('Expected type Number (integer) for LineAccessLevel.subnetPrefixLength, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_subnetPrefixLength = value;
                },
                enumerable: true
            });

            Object.defineProperty(LineAccessLevel.prototype, 'accessValidation', {
                get: function() { return this.__prop_accessValidation; },
                set: function(value) {
                    if (!(value instanceof LineAccessValidation)) {
                        try {
                            value = new LineAccessValidation(value);
                        } catch (e) {
                            throw new TypeError('Error setting LineAccessLevel.accessValidation: ' + e.message);
                        }
                    }

                    this.__prop_accessValidation = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(LineAccessLevel, '__type', { value: 'urn:inin.com:configuration.hardware:lineAccessLevel' });

        Object.defineProperty(LineAccessLevel, '__propInfo', {
            get: function() {
                var pi = {
                    'ip': { required: true, nullable: false },
                    'subnetPrefixLength': { required: true, nullable: false },
                    'accessValidation': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:lineAccessLevel'] = LineAccessLevel;

        return LineAccessLevel;
    }());

    var Locations = (function(){
        var hasProps = false;

        function Locations() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:locations' });
            }

            Locations._super.constructor.apply(this, arguments);
        }
        _util.inherits(Locations, _util.DataContract);

        function defineProps() {
            Object.defineProperty(Locations.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Location); }))) {
                        try {
                            value = value.map(function(item){ return new Location(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Locations.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(Locations, '__type', { value: 'urn:inin.com:configuration.hardware:locations' });

        Object.defineProperty(Locations, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:locations'] = Locations;

        return Locations;
    }());

    var Location = (function(){
        var hasProps = false;

        function Location() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:location' });
            }

            Location._super.constructor.apply(this, arguments);
        }
        _util.inherits(Location, _util.DataContract);

        function defineProps() {
            Object.defineProperty(Location.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting Location.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for Location.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting Location.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for Location.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Location.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'accessControlGroupAssignment', {
                get: function() { return this.__prop_accessControlGroupAssignment; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting Location.accessControlGroupAssignment: ' + e.message);
                        }
                    }

                    this.__prop_accessControlGroupAssignment = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'sntpServer', {
                get: function() { return this.__prop_sntpServer; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for Location.sntpServer, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_sntpServer = value;
                },
                enumerable: true
            });

            Object.defineProperty(Location.prototype, 'timezone', {
                get: function() { return this.__prop_timezone; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0)) {
                        throw new TypeError('Expected type String for Location.timezone, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_timezone = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(Location, '__type', { value: 'urn:inin.com:configuration.hardware:location' });

        Object.defineProperty(Location, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'accessControlGroupAssignment': { required: false, nullable: false },
                    'sntpServer': { required: false, nullable: true },
                    'timezone': { required: false, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:location'] = Location;

        return Location;
    }());

    var MediaServers = (function(){
        var hasProps = false;

        function MediaServers() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServers' });
            }

            MediaServers._super.constructor.apply(this, arguments);
        }
        _util.inherits(MediaServers, _util.DataContract);

        function defineProps() {
            Object.defineProperty(MediaServers.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof MediaServer); }))) {
                        try {
                            value = value.map(function(item){ return new MediaServer(item); });
                        } catch (e) {
                            throw new TypeError('Error setting MediaServers.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(MediaServers, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServers' });

        Object.defineProperty(MediaServers, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:mediaServers'] = MediaServers;

        return MediaServers;
    }());

    var MediaServer = (function(){
        var hasProps = false;

        function MediaServer() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServer' });
            }

            MediaServer._super.constructor.apply(this, arguments);
        }
        _util.inherits(MediaServer, _util.DataContract);

        function defineProps() {
            Object.defineProperty(MediaServer.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting MediaServer.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for MediaServer.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting MediaServer.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for MediaServer.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for MediaServer.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'licenseType', {
                get: function() { return this.__prop_licenseType; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for MediaServer.licenseType, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_licenseType = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'location', {
                get: function() { return this.__prop_location; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for MediaServer.location, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_location = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'version', {
                get: function() { return this.__prop_version; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for MediaServer.version, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_version = value;
                },
                enumerable: true
            });

            Object.defineProperty(MediaServer.prototype, 'webConfigUri', {
                get: function() { return this.__prop_webConfigUri; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for MediaServer.webConfigUri, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_webConfigUri = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(MediaServer, '__type', { value: 'urn:inin.com:configuration.hardware:mediaServer' });

        Object.defineProperty(MediaServer, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true },
                    'licenseType': { required: false, nullable: true },
                    'location': { required: false, nullable: true },
                    'version': { required: false, nullable: true },
                    'webConfigUri': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:mediaServer'] = MediaServer;

        return MediaServer;
    }());

    var RecordingBeepTones = (function(){
        var hasProps = false;

        function RecordingBeepTones() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTones' });
            }

            RecordingBeepTones._super.constructor.apply(this, arguments);
        }
        _util.inherits(RecordingBeepTones, _util.DataContract);

        function defineProps() {
            Object.defineProperty(RecordingBeepTones.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }))) {
                        try {
                            value = value.map(function(item){ return new RecordingBeepTone(item); });
                        } catch (e) {
                            throw new TypeError('Error setting RecordingBeepTones.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(RecordingBeepTones, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTones' });

        Object.defineProperty(RecordingBeepTones, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:recordingBeepTones'] = RecordingBeepTones;

        return RecordingBeepTones;
    }());

    var SelectionRules = (function(){
        var hasProps = false;

        function SelectionRules() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRules' });
            }

            SelectionRules._super.constructor.apply(this, arguments);
        }
        _util.inherits(SelectionRules, _util.DataContract);

        function defineProps() {
            Object.defineProperty(SelectionRules.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SelectionRule); }))) {
                        try {
                            value = value.map(function(item){ return new SelectionRule(item); });
                        } catch (e) {
                            throw new TypeError('Error setting SelectionRules.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(SelectionRules, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRules' });

        Object.defineProperty(SelectionRules, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:selectionRules'] = SelectionRules;

        return SelectionRules;
    }());

    var SelectionRule = (function(){
        var hasProps = false;

        function SelectionRule() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRule' });
            }

            SelectionRule._super.constructor.apply(this, arguments);
        }
        _util.inherits(SelectionRule, _util.DataContract);

        function defineProps() {
            Object.defineProperty(SelectionRule.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting SelectionRule.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(SelectionRule.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for SelectionRule.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(SelectionRule.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting SelectionRule.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(SelectionRule.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for SelectionRule.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(SelectionRule.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for SelectionRule.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(SelectionRule, '__type', { value: 'urn:inin.com:configuration.hardware:selectionRule' });

        Object.defineProperty(SelectionRule, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:selectionRule'] = SelectionRule;

        return SelectionRule;
    }());

    var SipBridges = (function(){
        var hasProps = false;

        function SipBridges() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridges' });
            }

            SipBridges._super.constructor.apply(this, arguments);
        }
        _util.inherits(SipBridges, _util.DataContract);

        function defineProps() {
            Object.defineProperty(SipBridges.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof SipBridge); }))) {
                        try {
                            value = value.map(function(item){ return new SipBridge(item); });
                        } catch (e) {
                            throw new TypeError('Error setting SipBridges.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(SipBridges, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridges' });

        Object.defineProperty(SipBridges, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:sipBridges'] = SipBridges;

        return SipBridges;
    }());

    var SipBridge = (function(){
        var hasProps = false;

        function SipBridge() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridge' });
            }

            SipBridge._super.constructor.apply(this, arguments);
        }
        _util.inherits(SipBridge, _util.DataContract);

        function defineProps() {
            Object.defineProperty(SipBridge.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting SipBridge.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(SipBridge.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for SipBridge.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(SipBridge.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting SipBridge.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(SipBridge.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for SipBridge.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(SipBridge.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for SipBridge.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(SipBridge, '__type', { value: 'urn:inin.com:configuration.hardware:sipBridge' });

        Object.defineProperty(SipBridge, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:sipBridge'] = SipBridge;

        return SipBridge;
    }());

    var StationGroups = (function(){
        var hasProps = false;

        function StationGroups() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroups' });
            }

            StationGroups._super.constructor.apply(this, arguments);
        }
        _util.inherits(StationGroups, _util.DataContract);

        function defineProps() {
            Object.defineProperty(StationGroups.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StationGroup); }))) {
                        try {
                            value = value.map(function(item){ return new StationGroup(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StationGroups.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StationGroups, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroups' });

        Object.defineProperty(StationGroups, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:stationGroups'] = StationGroups;

        return StationGroups;
    }());

    var StationGroup = (function(){
        var hasProps = false;

        function StationGroup() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroup' });
            }

            StationGroup._super.constructor.apply(this, arguments);
        }
        _util.inherits(StationGroup, _util.DataContract);

        function defineProps() {
            Object.defineProperty(StationGroup.prototype, 'configurationId', {
                get: function() { return this.__prop_configurationId; },
                set: function(value) {
                    if (!(value instanceof Configuration.ConfigurationId || value === void 0)) {
                        try {
                            value = new Configuration.ConfigurationId(value);
                        } catch (e) {
                            throw new TypeError('Error setting StationGroup.configurationId: ' + e.message);
                        }
                    }

                    this.__prop_configurationId = value;
                },
                enumerable: true
            });

            Object.defineProperty(StationGroup.prototype, 'createdDate', {
                get: function() { return this.__prop_createdDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for StationGroup.createdDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_createdDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(StationGroup.prototype, 'customAttributes', {
                get: function() { return this.__prop_customAttributes; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof Configuration.CustomAttribute); }) || value === void 0 || value === null)) {
                        try {
                            value = value.map(function(item){ return new Configuration.CustomAttribute(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StationGroup.customAttributes: ' + e.message);
                        }
                    }

                    this.__prop_customAttributes = value;
                },
                enumerable: true
            });

            Object.defineProperty(StationGroup.prototype, 'lastModifiedDate', {
                get: function() { return this.__prop_lastModifiedDate; },
                set: function(value) {
                    if (_util.isString(value)) { value = _util.dateFromISO8601String(value); }
                    if (!(_util.isDate(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type Date for StationGroup.lastModifiedDate, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_lastModifiedDate = value;
                },
                enumerable: true
            });

            Object.defineProperty(StationGroup.prototype, 'notes', {
                get: function() { return this.__prop_notes; },
                set: function(value) {
                    if (!(_util.isString(value) || value === void 0 || value === null)) {
                        throw new TypeError('Expected type String for StationGroup.notes, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_notes = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StationGroup, '__type', { value: 'urn:inin.com:configuration.hardware:stationGroup' });

        Object.defineProperty(StationGroup, '__propInfo', {
            get: function() {
                var pi = {
                    'configurationId': { required: false, nullable: false },
                    'createdDate': { required: false, nullable: true },
                    'customAttributes': { required: false, nullable: true },
                    'lastModifiedDate': { required: false, nullable: true },
                    'notes': { required: false, nullable: true }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:stationGroup'] = StationGroup;

        return StationGroup;
    }());

    var StructuredParameters = (function(){
        var hasProps = false;

        function StructuredParameters() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameters' });
            }

            StructuredParameters._super.constructor.apply(this, arguments);
        }
        _util.inherits(StructuredParameters, _util.DataContract);

        function defineProps() {
            Object.defineProperty(StructuredParameters.prototype, 'items', {
                get: function() { return this.__prop_items; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }))) {
                        try {
                            value = value.map(function(item){ return new StructuredParameter(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParameters.items: ' + e.message);
                        }
                    }

                    this.__prop_items = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StructuredParameters, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParameters' });

        Object.defineProperty(StructuredParameters, '__propInfo', {
            get: function() {
                var pi = {
                    'items': { required: true, nullable: false }
                };
                if (_util.DataContract.__propInfo) { _util.extend(pi, _util.DataContract.__propInfo); }
                pi.__type = { required: false, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:structuredParameters'] = StructuredParameters;

        return StructuredParameters;
    }());

    var AudioSourcesMessage = (function(){
        var hasProps = false;

        function AudioSourcesMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:audioSourcesMessage', enumerable: true });
            }

            AudioSourcesMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(AudioSourcesMessage, Messaging.MultipleSubscriptionMessage);

        function defineProps() {
            Object.defineProperty(AudioSourcesMessage.prototype, 'added', {
                get: function() { return this.__prop_added; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new AudioSource(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AudioSourcesMessage.added: ' + e.message);
                        }
                    }

                    this.__prop_added = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSourcesMessage.prototype, 'changed', {
                get: function() { return this.__prop_changed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof AudioSource); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new AudioSource(item); });
                        } catch (e) {
                            throw new TypeError('Error setting AudioSourcesMessage.changed: ' + e.message);
                        }
                    }

                    this.__prop_changed = value;
                },
                enumerable: true
            });

            Object.defineProperty(AudioSourcesMessage.prototype, 'removed', {
                get: function() { return this.__prop_removed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for AudioSourcesMessage.removed, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_removed = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(AudioSourcesMessage, '__type', { value: 'urn:inin.com:configuration.hardware:audioSourcesMessage' });

        Object.defineProperty(AudioSourcesMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'added': { required: false, nullable: false },
                    'changed': { required: false, nullable: false },
                    'removed': { required: false, nullable: false }
                };
                if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:audioSourcesMessage'] = AudioSourcesMessage;

        return AudioSourcesMessage;
    }());

    var RecordingBeepTonesMessage = (function(){
        var hasProps = false;

        function RecordingBeepTonesMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTonesMessage', enumerable: true });
            }

            RecordingBeepTonesMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(RecordingBeepTonesMessage, Messaging.MultipleSubscriptionMessage);

        function defineProps() {
            Object.defineProperty(RecordingBeepTonesMessage.prototype, 'added', {
                get: function() { return this.__prop_added; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new RecordingBeepTone(item); });
                        } catch (e) {
                            throw new TypeError('Error setting RecordingBeepTonesMessage.added: ' + e.message);
                        }
                    }

                    this.__prop_added = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTonesMessage.prototype, 'changed', {
                get: function() { return this.__prop_changed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof RecordingBeepTone); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new RecordingBeepTone(item); });
                        } catch (e) {
                            throw new TypeError('Error setting RecordingBeepTonesMessage.changed: ' + e.message);
                        }
                    }

                    this.__prop_changed = value;
                },
                enumerable: true
            });

            Object.defineProperty(RecordingBeepTonesMessage.prototype, 'removed', {
                get: function() { return this.__prop_removed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for RecordingBeepTonesMessage.removed, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_removed = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(RecordingBeepTonesMessage, '__type', { value: 'urn:inin.com:configuration.hardware:recordingBeepTonesMessage' });

        Object.defineProperty(RecordingBeepTonesMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'added': { required: false, nullable: false },
                    'changed': { required: false, nullable: false },
                    'removed': { required: false, nullable: false }
                };
                if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:recordingBeepTonesMessage'] = RecordingBeepTonesMessage;

        return RecordingBeepTonesMessage;
    }());

    var StructuredParametersMessage = (function(){
        var hasProps = false;

        function StructuredParametersMessage() {
            if (!hasProps) { defineProps(); }

            if (!_util.hasProp(this, '__type')) {
                Object.defineProperty(this, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParametersMessage', enumerable: true });
            }

            StructuredParametersMessage._super.constructor.apply(this, arguments);
        }
        _util.inherits(StructuredParametersMessage, Messaging.MultipleSubscriptionMessage);

        function defineProps() {
            Object.defineProperty(StructuredParametersMessage.prototype, 'added', {
                get: function() { return this.__prop_added; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new StructuredParameter(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParametersMessage.added: ' + e.message);
                        }
                    }

                    this.__prop_added = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParametersMessage.prototype, 'changed', {
                get: function() { return this.__prop_changed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (item instanceof StructuredParameter); }) || value === void 0)) {
                        try {
                            value = value.map(function(item){ return new StructuredParameter(item); });
                        } catch (e) {
                            throw new TypeError('Error setting StructuredParametersMessage.changed: ' + e.message);
                        }
                    }

                    this.__prop_changed = value;
                },
                enumerable: true
            });

            Object.defineProperty(StructuredParametersMessage.prototype, 'removed', {
                get: function() { return this.__prop_removed; },
                set: function(value) {
                    if (!(_util.isArray(value) && value.every(function(item){ return (_util.isString(item)); }) || value === void 0)) {
                        throw new TypeError('Expected type String[] for StructuredParametersMessage.removed, but got ' + _util.inspect(value) + '.');
                    }

                    this.__prop_removed = value;
                },
                enumerable: true
            });

            hasProps = true;
        }

        Object.defineProperty(StructuredParametersMessage, '__type', { value: 'urn:inin.com:configuration.hardware:structuredParametersMessage' });

        Object.defineProperty(StructuredParametersMessage, '__propInfo', {
            get: function() {
                var pi = {
                    'added': { required: false, nullable: false },
                    'changed': { required: false, nullable: false },
                    'removed': { required: false, nullable: false }
                };
                if (Messaging.MultipleSubscriptionMessage.__propInfo) { _util.extend(pi, Messaging.MultipleSubscriptionMessage.__propInfo); }
                pi.__type = { required: true, nullable: false };
                return pi;
            }
        });

        _typemap['urn:inin.com:configuration.hardware:structuredParametersMessage'] = StructuredParametersMessage;

        return StructuredParametersMessage;
    }());

    var $audioSources = (function(){
        function getAudioSources(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getAudioSources.params)) {
                try {
                    params = new getAudioSources.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAudioSources.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof AudioSources) ? o : new AudioSources(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getAudioSources.method, getAudioSources.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getAudioSources, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources', enumerable: true }
        });

        getAudioSources.params = (function(){
            _util.inherits(getAudioSources_params, _util.RequestParams);

            function getAudioSources_params(properties) {
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

                getAudioSources_params._super.constructor.apply(this, arguments);
            }

            return getAudioSources_params;
        })();

        function createAudioSource(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createAudioSource.params)) {
                try {
                    params = new createAudioSource.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createAudioSource.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createAudioSource.method, createAudioSource.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createAudioSource, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources', enumerable: true }
        });

        createAudioSource.params = (function(){
            _util.inherits(createAudioSource_params, _util.RequestParams);

            function createAudioSource_params(properties) {
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
                if (!(properties.content instanceof AudioSource)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.AudioSource');
                }

                createAudioSource_params._super.constructor.apply(this, arguments);
            }

            return createAudioSource_params;
        })();

        function getAudioSource(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getAudioSource.params)) {
                try {
                    params = new getAudioSource.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getAudioSource.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof AudioSource) ? o : new AudioSource(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getAudioSource.method, getAudioSource.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getAudioSource, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
        });

        getAudioSource.params = (function(){
            _util.inherits(getAudioSource_params, _util.RequestParams);

            function getAudioSource_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getAudioSource_params._super.constructor.apply(this, arguments);
            }

            return getAudioSource_params;
        })();

        function deleteAudioSource(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteAudioSource.params)) {
                try {
                    params = new deleteAudioSource.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteAudioSource.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteAudioSource.method, deleteAudioSource.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteAudioSource, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
        });

        deleteAudioSource.params = (function(){
            _util.inherits(deleteAudioSource_params, _util.RequestParams);

            function deleteAudioSource_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteAudioSource_params._super.constructor.apply(this, arguments);
            }

            return deleteAudioSource_params;
        })();

        function updateAudioSource(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateAudioSource.params)) {
                try {
                    params = new updateAudioSource.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateAudioSource.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateAudioSource.method, updateAudioSource.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateAudioSource, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/audio-sources/{id}', enumerable: true }
        });

        updateAudioSource.params = (function(){
            _util.inherits(updateAudioSource_params, _util.RequestParams);

            function updateAudioSource_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof AudioSource)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.AudioSource');
                }

                updateAudioSource_params._super.constructor.apply(this, arguments);
            }

            return updateAudioSource_params;
        })();

        return Object.create(null, {
            getAudioSources: { value: getAudioSources, enumerable: true },
            createAudioSource: { value: createAudioSource, enumerable: true },
            getAudioSource: { value: getAudioSource, enumerable: true },
            deleteAudioSource: { value: deleteAudioSource, enumerable: true },
            updateAudioSource: { value: updateAudioSource, enumerable: true }
        });
    })();

    var $defaultLocation = (function(){
        function getDefaultLocation(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getDefaultLocation.params)) {
                try {
                    params = new getDefaultLocation.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getDefaultLocation.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof DefaultLocation) ? o : new DefaultLocation(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getDefaultLocation.method, getDefaultLocation.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getDefaultLocation, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/default-location', enumerable: true }
        });

        getDefaultLocation.params = (function(){
            _util.inherits(getDefaultLocation_params, _util.RequestParams);

            function getDefaultLocation_params(properties) {
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

                getDefaultLocation_params._super.constructor.apply(this, arguments);
            }

            return getDefaultLocation_params;
        })();

        return Object.create(null, {
            getDefaultLocation: { value: getDefaultLocation, enumerable: true }
        });
    })();

    var $lineGroups = (function(){
        function getLineGroups(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLineGroups.params)) {
                try {
                    params = new getLineGroups.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLineGroups.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof LineGroups) ? o : new LineGroups(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLineGroups.method, getLineGroups.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLineGroups, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups', enumerable: true }
        });

        getLineGroups.params = (function(){
            _util.inherits(getLineGroups_params, _util.RequestParams);

            function getLineGroups_params(properties) {
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

                getLineGroups_params._super.constructor.apply(this, arguments);
            }

            return getLineGroups_params;
        })();

        function createLineGroup(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createLineGroup.params)) {
                try {
                    params = new createLineGroup.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLineGroup.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createLineGroup.method, createLineGroup.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createLineGroup, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups', enumerable: true }
        });

        createLineGroup.params = (function(){
            _util.inherits(createLineGroup_params, _util.RequestParams);

            function createLineGroup_params(properties) {
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
                if (!(properties.content instanceof LineGroup)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.LineGroup');
                }

                createLineGroup_params._super.constructor.apply(this, arguments);
            }

            return createLineGroup_params;
        })();

        function getLineGroup(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLineGroup.params)) {
                try {
                    params = new getLineGroup.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLineGroup.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof LineGroup) ? o : new LineGroup(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLineGroup.method, getLineGroup.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLineGroup, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
        });

        getLineGroup.params = (function(){
            _util.inherits(getLineGroup_params, _util.RequestParams);

            function getLineGroup_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getLineGroup_params._super.constructor.apply(this, arguments);
            }

            return getLineGroup_params;
        })();

        function deleteLineGroup(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteLineGroup.params)) {
                try {
                    params = new deleteLineGroup.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLineGroup.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteLineGroup.method, deleteLineGroup.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteLineGroup, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
        });

        deleteLineGroup.params = (function(){
            _util.inherits(deleteLineGroup_params, _util.RequestParams);

            function deleteLineGroup_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteLineGroup_params._super.constructor.apply(this, arguments);
            }

            return deleteLineGroup_params;
        })();

        function updateLineGroup(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateLineGroup.params)) {
                try {
                    params = new updateLineGroup.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLineGroup.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateLineGroup.method, updateLineGroup.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateLineGroup, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/line-groups/{id}', enumerable: true }
        });

        updateLineGroup.params = (function(){
            _util.inherits(updateLineGroup_params, _util.RequestParams);

            function updateLineGroup_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof LineGroup)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.LineGroup');
                }

                updateLineGroup_params._super.constructor.apply(this, arguments);
            }

            return updateLineGroup_params;
        })();

        return Object.create(null, {
            getLineGroups: { value: getLineGroups, enumerable: true },
            createLineGroup: { value: createLineGroup, enumerable: true },
            getLineGroup: { value: getLineGroup, enumerable: true },
            deleteLineGroup: { value: deleteLineGroup, enumerable: true },
            updateLineGroup: { value: updateLineGroup, enumerable: true }
        });
    })();

    var $lines = (function(){
        function getLines(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLines.params)) {
                try {
                    params = new getLines.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLines.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Lines) ? o : new Lines(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLines.method, getLines.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLines, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/lines', enumerable: true }
        });

        getLines.params = (function(){
            _util.inherits(getLines_params, _util.RequestParams);

            function getLines_params(properties) {
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

                getLines_params._super.constructor.apply(this, arguments);
            }

            return getLines_params;
        })();

        function createLine(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createLine.params)) {
                try {
                    params = new createLine.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLine.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createLine.method, createLine.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createLine, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/lines', enumerable: true }
        });

        createLine.params = (function(){
            _util.inherits(createLine_params, _util.RequestParams);

            function createLine_params(properties) {
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
                if (!(properties.content instanceof Line)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Line');
                }

                createLine_params._super.constructor.apply(this, arguments);
            }

            return createLine_params;
        })();

        function getLine(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLine.params)) {
                try {
                    params = new getLine.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLine.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Line) ? o : new Line(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLine.method, getLine.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLine, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
        });

        getLine.params = (function(){
            _util.inherits(getLine_params, _util.RequestParams);

            function getLine_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getLine_params._super.constructor.apply(this, arguments);
            }

            return getLine_params;
        })();

        function deleteLine(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteLine.params)) {
                try {
                    params = new deleteLine.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteLine.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteLine.method, deleteLine.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteLine, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
        });

        deleteLine.params = (function(){
            _util.inherits(deleteLine_params, _util.RequestParams);

            function deleteLine_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteLine_params._super.constructor.apply(this, arguments);
            }

            return deleteLine_params;
        })();

        function updateLine(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateLine.params)) {
                try {
                    params = new updateLine.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateLine.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateLine.method, updateLine.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateLine, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/lines/{id}', enumerable: true }
        });

        updateLine.params = (function(){
            _util.inherits(updateLine_params, _util.RequestParams);

            function updateLine_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof Line)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Line');
                }

                updateLine_params._super.constructor.apply(this, arguments);
            }

            return updateLine_params;
        })();

        return Object.create(null, {
            getLines: { value: getLines, enumerable: true },
            createLine: { value: createLine, enumerable: true },
            getLine: { value: getLine, enumerable: true },
            deleteLine: { value: deleteLine, enumerable: true },
            updateLine: { value: updateLine, enumerable: true }
        });
    })();

    var $locations = (function(){
        function getLocations(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLocations.params)) {
                try {
                    params = new getLocations.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLocations.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Locations) ? o : new Locations(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLocations.method, getLocations.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLocations, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/locations', enumerable: true }
        });

        getLocations.params = (function(){
            _util.inherits(getLocations_params, _util.RequestParams);

            function getLocations_params(properties) {
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

                getLocations_params._super.constructor.apply(this, arguments);
            }

            return getLocations_params;
        })();

        function createLocation(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createLocation.params)) {
                try {
                    params = new createLocation.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createLocation.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createLocation.method, createLocation.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createLocation, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/locations', enumerable: true }
        });

        createLocation.params = (function(){
            _util.inherits(createLocation_params, _util.RequestParams);

            function createLocation_params(properties) {
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
                if (!(properties.content instanceof Location)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.Location');
                }

                createLocation_params._super.constructor.apply(this, arguments);
            }

            return createLocation_params;
        })();

        function getLocation(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getLocation.params)) {
                try {
                    params = new getLocation.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getLocation.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Location) ? o : new Location(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getLocation.method, getLocation.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getLocation, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/locations/{id}', enumerable: true }
        });

        getLocation.params = (function(){
            _util.inherits(getLocation_params, _util.RequestParams);

            function getLocation_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getLocation_params._super.constructor.apply(this, arguments);
            }

            return getLocation_params;
        })();

        return Object.create(null, {
            getLocations: { value: getLocations, enumerable: true },
            createLocation: { value: createLocation, enumerable: true },
            getLocation: { value: getLocation, enumerable: true }
        });
    })();

    var $mediaServers = (function(){
        function getMediaServers(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getMediaServers.params)) {
                try {
                    params = new getMediaServers.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMediaServers.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof MediaServers) ? o : new MediaServers(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getMediaServers.method, getMediaServers.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getMediaServers, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/media-servers', enumerable: true }
        });

        getMediaServers.params = (function(){
            _util.inherits(getMediaServers_params, _util.RequestParams);

            function getMediaServers_params(properties) {
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

                getMediaServers_params._super.constructor.apply(this, arguments);
            }

            return getMediaServers_params;
        })();

        function getMediaServer(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getMediaServer.params)) {
                try {
                    params = new getMediaServer.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getMediaServer.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof MediaServer) ? o : new MediaServer(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getMediaServer.method, getMediaServer.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getMediaServer, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/media-servers/{id}', enumerable: true }
        });

        getMediaServer.params = (function(){
            _util.inherits(getMediaServer_params, _util.RequestParams);

            function getMediaServer_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getMediaServer_params._super.constructor.apply(this, arguments);
            }

            return getMediaServer_params;
        })();

        return Object.create(null, {
            getMediaServers: { value: getMediaServers, enumerable: true },
            getMediaServer: { value: getMediaServer, enumerable: true }
        });
    })();

    var $recordingBeepTones = (function(){
        function getRecordingBeepTones(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getRecordingBeepTones.params)) {
                try {
                    params = new getRecordingBeepTones.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRecordingBeepTones.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof RecordingBeepTones) ? o : new RecordingBeepTones(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getRecordingBeepTones.method, getRecordingBeepTones.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getRecordingBeepTones, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones', enumerable: true }
        });

        getRecordingBeepTones.params = (function(){
            _util.inherits(getRecordingBeepTones_params, _util.RequestParams);

            function getRecordingBeepTones_params(properties) {
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

                getRecordingBeepTones_params._super.constructor.apply(this, arguments);
            }

            return getRecordingBeepTones_params;
        })();

        function createRecordingBeepTone(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createRecordingBeepTone.params)) {
                try {
                    params = new createRecordingBeepTone.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createRecordingBeepTone.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createRecordingBeepTone.method, createRecordingBeepTone.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createRecordingBeepTone, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones', enumerable: true }
        });

        createRecordingBeepTone.params = (function(){
            _util.inherits(createRecordingBeepTone_params, _util.RequestParams);

            function createRecordingBeepTone_params(properties) {
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
                if (!(properties.content instanceof RecordingBeepTone)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.RecordingBeepTone');
                }

                createRecordingBeepTone_params._super.constructor.apply(this, arguments);
            }

            return createRecordingBeepTone_params;
        })();

        function getRecordingBeepTone(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getRecordingBeepTone.params)) {
                try {
                    params = new getRecordingBeepTone.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getRecordingBeepTone.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof RecordingBeepTone) ? o : new RecordingBeepTone(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getRecordingBeepTone.method, getRecordingBeepTone.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getRecordingBeepTone, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
        });

        getRecordingBeepTone.params = (function(){
            _util.inherits(getRecordingBeepTone_params, _util.RequestParams);

            function getRecordingBeepTone_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getRecordingBeepTone_params._super.constructor.apply(this, arguments);
            }

            return getRecordingBeepTone_params;
        })();

        function deleteRecordingBeepTone(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteRecordingBeepTone.params)) {
                try {
                    params = new deleteRecordingBeepTone.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteRecordingBeepTone.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteRecordingBeepTone.method, deleteRecordingBeepTone.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteRecordingBeepTone, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
        });

        deleteRecordingBeepTone.params = (function(){
            _util.inherits(deleteRecordingBeepTone_params, _util.RequestParams);

            function deleteRecordingBeepTone_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteRecordingBeepTone_params._super.constructor.apply(this, arguments);
            }

            return deleteRecordingBeepTone_params;
        })();

        function updateRecordingBeepTone(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateRecordingBeepTone.params)) {
                try {
                    params = new updateRecordingBeepTone.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateRecordingBeepTone.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateRecordingBeepTone.method, updateRecordingBeepTone.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateRecordingBeepTone, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/recording-beep-tones/{id}', enumerable: true }
        });

        updateRecordingBeepTone.params = (function(){
            _util.inherits(updateRecordingBeepTone_params, _util.RequestParams);

            function updateRecordingBeepTone_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof RecordingBeepTone)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.RecordingBeepTone');
                }

                updateRecordingBeepTone_params._super.constructor.apply(this, arguments);
            }

            return updateRecordingBeepTone_params;
        })();

        return Object.create(null, {
            getRecordingBeepTones: { value: getRecordingBeepTones, enumerable: true },
            createRecordingBeepTone: { value: createRecordingBeepTone, enumerable: true },
            getRecordingBeepTone: { value: getRecordingBeepTone, enumerable: true },
            deleteRecordingBeepTone: { value: deleteRecordingBeepTone, enumerable: true },
            updateRecordingBeepTone: { value: updateRecordingBeepTone, enumerable: true }
        });
    })();

    var $selectionRules = (function(){
        function getSelectionRules(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getSelectionRules.params)) {
                try {
                    params = new getSelectionRules.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSelectionRules.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof SelectionRules) ? o : new SelectionRules(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getSelectionRules.method, getSelectionRules.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getSelectionRules, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/selection-rules', enumerable: true }
        });

        getSelectionRules.params = (function(){
            _util.inherits(getSelectionRules_params, _util.RequestParams);

            function getSelectionRules_params(properties) {
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

                getSelectionRules_params._super.constructor.apply(this, arguments);
            }

            return getSelectionRules_params;
        })();

        function getSelectionRule(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getSelectionRule.params)) {
                try {
                    params = new getSelectionRule.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSelectionRule.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof SelectionRule) ? o : new SelectionRule(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getSelectionRule.method, getSelectionRule.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getSelectionRule, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/selection-rules/{id}', enumerable: true }
        });

        getSelectionRule.params = (function(){
            _util.inherits(getSelectionRule_params, _util.RequestParams);

            function getSelectionRule_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getSelectionRule_params._super.constructor.apply(this, arguments);
            }

            return getSelectionRule_params;
        })();

        return Object.create(null, {
            getSelectionRules: { value: getSelectionRules, enumerable: true },
            getSelectionRule: { value: getSelectionRule, enumerable: true }
        });
    })();

    var $sipBridges = (function(){
        function getSipBridges(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getSipBridges.params)) {
                try {
                    params = new getSipBridges.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSipBridges.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof SipBridges) ? o : new SipBridges(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getSipBridges.method, getSipBridges.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getSipBridges, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/sip-bridges', enumerable: true }
        });

        getSipBridges.params = (function(){
            _util.inherits(getSipBridges_params, _util.RequestParams);

            function getSipBridges_params(properties) {
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

                getSipBridges_params._super.constructor.apply(this, arguments);
            }

            return getSipBridges_params;
        })();

        function getSipBridge(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getSipBridge.params)) {
                try {
                    params = new getSipBridge.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getSipBridge.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof SipBridge) ? o : new SipBridge(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getSipBridge.method, getSipBridge.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getSipBridge, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/sip-bridges/{id}', enumerable: true }
        });

        getSipBridge.params = (function(){
            _util.inherits(getSipBridge_params, _util.RequestParams);

            function getSipBridge_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getSipBridge_params._super.constructor.apply(this, arguments);
            }

            return getSipBridge_params;
        })();

        return Object.create(null, {
            getSipBridges: { value: getSipBridges, enumerable: true },
            getSipBridge: { value: getSipBridge, enumerable: true }
        });
    })();

    var $stationGroups = (function(){
        function getStationGroups(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getStationGroups.params)) {
                try {
                    params = new getStationGroups.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationGroups.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof StationGroups) ? o : new StationGroups(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getStationGroups.method, getStationGroups.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getStationGroups, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/station-groups', enumerable: true }
        });

        getStationGroups.params = (function(){
            _util.inherits(getStationGroups_params, _util.RequestParams);

            function getStationGroups_params(properties) {
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

                getStationGroups_params._super.constructor.apply(this, arguments);
            }

            return getStationGroups_params;
        })();

        function getStationGroup(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getStationGroup.params)) {
                try {
                    params = new getStationGroup.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStationGroup.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof StationGroup) ? o : new StationGroup(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getStationGroup.method, getStationGroup.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getStationGroup, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/station-groups/{id}', enumerable: true }
        });

        getStationGroup.params = (function(){
            _util.inherits(getStationGroup_params, _util.RequestParams);

            function getStationGroup_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getStationGroup_params._super.constructor.apply(this, arguments);
            }

            return getStationGroup_params;
        })();

        return Object.create(null, {
            getStationGroups: { value: getStationGroups, enumerable: true },
            getStationGroup: { value: getStationGroup, enumerable: true }
        });
    })();

    var $stations = (function(){
        return Object.create(null, {
        });
    })();

    var $structuredParameters = (function(){
        function getStructuredParameters(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getStructuredParameters.params)) {
                try {
                    params = new getStructuredParameters.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStructuredParameters.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof StructuredParameters) ? o : new StructuredParameters(o); };
            dc['400'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getStructuredParameters.method, getStructuredParameters.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getStructuredParameters, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters', enumerable: true }
        });

        getStructuredParameters.params = (function(){
            _util.inherits(getStructuredParameters_params, _util.RequestParams);

            function getStructuredParameters_params(properties) {
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

                getStructuredParameters_params._super.constructor.apply(this, arguments);
            }

            return getStructuredParameters_params;
        })();

        function createStructuredParameter(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof createStructuredParameter.params)) {
                try {
                    params = new createStructuredParameter.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: createStructuredParameter.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['201'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(createStructuredParameter.method, createStructuredParameter.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(createStructuredParameter, {
            'method': { value: 'POST', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters', enumerable: true }
        });

        createStructuredParameter.params = (function(){
            _util.inherits(createStructuredParameter_params, _util.RequestParams);

            function createStructuredParameter_params(properties) {
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
                if (!(properties.content instanceof StructuredParameter)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.StructuredParameter');
                }

                createStructuredParameter_params._super.constructor.apply(this, arguments);
            }

            return createStructuredParameter_params;
        })();

        function getStructuredParameter(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof getStructuredParameter.params)) {
                try {
                    params = new getStructuredParameter.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: getStructuredParameter.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof StructuredParameter) ? o : new StructuredParameter(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(getStructuredParameter.method, getStructuredParameter.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(getStructuredParameter, {
            'method': { value: 'GET', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
        });

        getStructuredParameter.params = (function(){
            _util.inherits(getStructuredParameter_params, _util.RequestParams);

            function getStructuredParameter_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                getStructuredParameter_params._super.constructor.apply(this, arguments);
            }

            return getStructuredParameter_params;
        })();

        function deleteStructuredParameter(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof deleteStructuredParameter.params)) {
                try {
                    params = new deleteStructuredParameter.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: deleteStructuredParameter.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['403'] = dc['404'] = dc['500'] = dc['400'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(deleteStructuredParameter.method, deleteStructuredParameter.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(deleteStructuredParameter, {
            'method': { value: 'DELETE', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
        });

        deleteStructuredParameter.params = (function(){
            _util.inherits(deleteStructuredParameter_params, _util.RequestParams);

            function deleteStructuredParameter_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }

                deleteStructuredParameter_params._super.constructor.apply(this, arguments);
            }

            return deleteStructuredParameter_params;
        })();

        function updateStructuredParameter(params, callbacks) {
            var cb = callbacks || {};
            if (!(params instanceof updateStructuredParameter.params)) {
                try {
                    params = new updateStructuredParameter.params(params);
                }
                catch (e) {
                    throw new TypeError('`params` argument must be an instance of (or valid ctor input for) type: updateStructuredParameter.params');
                }
            }

            if (!_util.isObject(cb)) {
                throw new TypeError('`callbacks` argument must be of type: Object (e.g. { "200": function(xhr, dataContract){ ... })');
            }

            var dc = {};
            dc['200'] = function(o){ return (o instanceof Configuration.UpdateOperationResult) ? o : new Configuration.UpdateOperationResult(o); };
            dc['400'] = dc['403'] = dc['404'] = dc['500'] = dc['401'] = dc['410'] = function(o){ return (o instanceof Common.Error) ? o : new Common.Error(o); };

            return _util.xhr(updateStructuredParameter.method, updateStructuredParameter.urlTemplate, params, dc, cb);
        }

        Object.defineProperties(updateStructuredParameter, {
            'method': { value: 'PUT', enumerable: true },
            'urlTemplate': { value: '/icws/{sessionId}/configuration/structured-parameters/{id}', enumerable: true }
        });

        updateStructuredParameter.params = (function(){
            _util.inherits(updateStructuredParameter_params, _util.RequestParams);

            function updateStructuredParameter_params(properties) {
                /*jshint validthis:true */
                if (!properties) { properties = {}; }
                _util.addSessionIdTemplate(properties);
                _util.addSessionTokenHeader(properties);
                if (properties.template === void 0) {
                    throw new Error('`properties.template` is undefined, which means the following required Template param(s) will be missing: sessionId, id');
                }
                if (!_util.hasProp(properties.template, 'sessionId')) {
                    throw new Error('`properties.template` is missing required property: `sessionId`');
                }
                if (!_util.hasProp(properties.template, 'id')) {
                    throw new Error('`properties.template` is missing required property: `id`');
                }
                if (properties.header === void 0) {
                    throw new Error('`properties.header` is undefined, which means the following required Header param(s) will be missing: ININ-ICWS-CSRF-Token');
                }
                if (!_util.hasProp(properties.header, 'ININ-ICWS-CSRF-Token')) {
                    throw new Error('`properties.header` is missing required property: `ININ-ICWS-CSRF-Token`');
                }
                if (!(properties.content instanceof StructuredParameter)) {
                    throw new TypeError('`properties.content` value does not match the expected type: Configuration.Hardware.StructuredParameter');
                }

                updateStructuredParameter_params._super.constructor.apply(this, arguments);
            }

            return updateStructuredParameter_params;
        })();

        return Object.create(null, {
            getStructuredParameters: { value: getStructuredParameters, enumerable: true },
            createStructuredParameter: { value: createStructuredParameter, enumerable: true },
            getStructuredParameter: { value: getStructuredParameter, enumerable: true },
            deleteStructuredParameter: { value: deleteStructuredParameter, enumerable: true },
            updateStructuredParameter: { value: updateStructuredParameter, enumerable: true }
        });
    })();

    return {
        StructuredParameterType: StructuredParameterType,
        LineAddressFamily: LineAddressFamily,
        LineAudioPath: LineAudioPath,
        LineAudioProtocol: LineAudioProtocol,
        LineCallAnalysisType: LineCallAnalysisType,
        LineCalledAddressSelection: LineCalledAddressSelection,
        LineSendExtension: LineSendExtension,
        LineDiversionMethod: LineDiversionMethod,
        LineCallingAddressDivertedCalls: LineCallingAddressDivertedCalls,
        LineCallingAddressDivertedCallsFromHeaderAddress: LineCallingAddressDivertedCallsFromHeaderAddress,
        LineCallingAddressNormalCalls: LineCallingAddressNormalCalls,
        LineCallingAddressNormalCallsFromHeaderAddress: LineCallingAddressNormalCallsFromHeaderAddress,
        LineCallingAddressSelection: LineCallingAddressSelection,
        LineDiversionInfo: LineDiversionInfo,
        LineDTMFType: LineDTMFType,
        LineFaxProtocol: LineFaxProtocol,
        LineUsage: LineUsage,
        LineMediaAddressFamily: LineMediaAddressFamily,
        LineSecurity: LineSecurity,
        LineAccessValidation: LineAccessValidation,
        LineTransportProtocol: LineTransportProtocol,
        LineUserToUserConversion: LineUserToUserConversion,
        LineUserToUserHeader: LineUserToUserHeader,
        AudioSourcesMessage: AudioSourcesMessage,
        AudioSource: AudioSource,
        RecordingBeepTonesMessage: RecordingBeepTonesMessage,
        RecordingBeepTone: RecordingBeepTone,
        StructuredParametersMessage: StructuredParametersMessage,
        StructuredParameter: StructuredParameter,
        StructuredParameterValue: StructuredParameterValue,
        AudioSources: AudioSources,
        DefaultLocation: DefaultLocation,
        LineGroups: LineGroups,
        LineGroup: LineGroup,
        Lines: Lines,
        Line: Line,
        LineSipProxy: LineSipProxy,
        LineRegistrarAddress: LineRegistrarAddress,
        LineAccessLevel: LineAccessLevel,
        Locations: Locations,
        Location: Location,
        MediaServers: MediaServers,
        MediaServer: MediaServer,
        RecordingBeepTones: RecordingBeepTones,
        SelectionRules: SelectionRules,
        SelectionRule: SelectionRule,
        SipBridges: SipBridges,
        SipBridge: SipBridge,
        StationGroups: StationGroups,
        StationGroup: StationGroup,
        StructuredParameters: StructuredParameters,
        $audioSources: $audioSources,
        $defaultLocation: $defaultLocation,
        $lineGroups: $lineGroups,
        $lines: $lines,
        $locations: $locations,
        $mediaServers: $mediaServers,
        $recordingBeepTones: $recordingBeepTones,
        $selectionRules: $selectionRules,
        $sipBridges: $sipBridges,
        $stationGroups: $stationGroups,
        $stations: $stations,
        $structuredParameters: $structuredParameters
    };
});
