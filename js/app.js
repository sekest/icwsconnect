requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

require(['_util', 'messaging', 'connection', 'messaging.subscriptions', 'queues','messaging.subscriptions.status','status', '../config'], function(_util, messaging, connection, messagingsubscriptions, queues,messagingsubscriptionsstatus, Status, config){
    // Set the base url so the library knows how to map its server calls
    //ICWSCONNECT NOTES: The URL below is pulled from the js/config.js file.  Be sure to have proper parameter values there before running.
    _util.setBaseUrl(config.url);
    
    // Variable to hold an EventSource instance in case server-sent events is supported.
    var eventSource;
    
    // Setup some connection parameters
    var connectionParams = new connection.IcAuthConnectionRequestSettings();

    connectionParams.applicationName = 'icwsconnect';
    //ICWSCONNECT NOTES: The username below is pulled from the js/config.js file.  Be sure to have proper parameter values there before running.
    connectionParams.userID = config.username;
    //ICWSCONNECT NOTES: The password below is pulled from the js/config.js file.  Be sure to have proper parameter values there before running.
    connectionParams.password = config.password;
    
    // Connect to the IC server
    connection.$connection.createConnection(
        new connection.$connection.createConnection.params(
            {
                header: {
                    'Accept-Language': "en-US",
                },
                content: connectionParams,
                // Setting the include query parameter to features so that
                // the list of IC Server feature versions are available on
                // the 201 connection response.
                query: { 'include': 'features' },
            }),
            // The second parameter is a map of callbacks to execute based on the server response
            {
                '201': function (xhr, connectionResponse) {
                    // A 201 represents a successful connection, connectionResponse.alternateHostList are the paths 
                    // to alternate servers.
                    
                    var messagingVersion = 0;
                    
                    // Store the messaging version, for use in determining if short-polling or 
                    // server-sent events should be used.
                    if (connectionResponse.features) {
                        for (var i = connectionResponse.features.length - 1; i >= 0; i--) {
                            var featureObject = connectionResponse.features[i];

                            if (featureObject.featureId === 'messaging') {
                                messagingVersion = featureObject.version;
                                break;
                            }
                        }
                    }
                    
                    // Start message processing
                    startMessageProcessing(messagingVersion);
                    startUserQueueProcessing(connectionResponse.__prop_userID);
                    startUserStatusProcessing(connectionResponse.__prop_userID);
                },
                '401': handleConnectionError,
                'timeout': handleConnectionError,
                'default': handleConnectionError,
                'error': handleConnectionError,
            });
            
    function handleConnectionError(xhr) {
        // Omitted:  TODO, handle xhr.status / xhr.response
    }
    
    function handleChangeStationError(xhr) {
        // Omitted:  TODO, handle xhr.status / xhr.response
    }
            
    function startMessageProcessing(messagingVersion) {
        // Check to see if the IC Server and the browser supports server-sent events.
        if (messagingVersion >= 2 && typeof EventSource !== 'undefined') {
            startServerSentEventsMessageProcessing();
        } else {
            startShortPollingMessageProcessing();
        }
    }
    
    function startShortPollingMessageProcessing() {
        // Poll the server of any events that have occurred.  This should be expected
        // on a regular interval
        
        // TODO:  This example does not show putting this call in an interval
        
        messaging.$messages.getMessages(
            new messaging.$messages.getMessages.params({}),
                // The second parameter is a map of callbacks to execute based on the server response
                {
                    '200': function (xhr, messages) {
                        // messages contains an array of server side events that were retrieved
                        for (var i = messages.length - 1; i >= 0; i--) {
                            var message = messages[i];
                            handleMessage(message);
                        };
                    },

                    '401': handleMessageError,
                    'timeout': handleMessageError,
                    'default': handleMessageError,
                    'error': handleMessageError,
                });
    }
    
    function startServerSentEventsMessageProcessing() {
        if (!eventSource) {
            var parameters = new messaging.$messages.EventSource.params({});
            
            eventSource = new messaging.$messages.EventSource(parameters, { message: handleMessage });
        };
    }
    
    function handleMessageError(xhr) {
        // Omitted:  TODO, handle xhr.status / xhr.response
    }
    
    function handleMessage(message) {
        // Omitted:  TODO, handle message
        let messageList = document.querySelector('#message-list');
        if(Array.isArray(message.__prop_userStatusList) && message.__prop_userStatusList.length){
            message.__prop_userStatusList.forEach(function(entry) {
                //console.log(" User: "+entry.__prop_userId+" Status: "+entry.__prop_statusId+" LoggedIn?: "+entry.__prop_loggedIn+" On Phone?: "+entry.__prop_onPhone)
                let listItem = document.createElement('li')
                listItem.textContent = "User: "+entry.__prop_userId+" Status: "+entry.__prop_statusId+" LoggedIn?: "+entry.__prop_loggedIn+" On Phone?: "+entry.__prop_onPhone
                listItem.classList.add('list-group-item')
                messageList.appendChild(listItem)
            })
        }
        if(Array.isArray(message.__prop_interactionsAdded) && message.__prop_interactionsAdded.length){
            message.__prop_interactionsAdded.forEach(function(entry) {
                //console.log(entry)
                let listItem = document.createElement('li')
                listItem.textContent = "Interaction: "+entry.__prop_interactionId+" Attributes: "+ JSON.stringify(entry.__prop_attributes)
                listItem.classList.add('list-group-item')
                messageList.appendChild(listItem)
            })
        }
        if(Array.isArray(message.__prop_interactionsChanged) && message.__prop_interactionsChanged.length){
            message.__prop_interactionsChanged.forEach(function(entry) {
                //console.log(entry)
                let listItem = document.createElement('li')
                listItem.textContent = "Interaction: "+entry.__prop_interactionId+" Attributes: "+ JSON.stringify(entry.__prop_attributes)
                listItem.classList.add('list-group-item')
                messageList.appendChild(listItem)
            })
        }
        if(Array.isArray(message.__prop_interactionsRemoved) && message.__prop_interactionsRemoved.length){
            message.__prop_interactionsRemoved.forEach(function(entry) {
                //console.log("Interaction: ",entry," Removed")
                let listItem = document.createElement('li')
                listItem.textContent = "Interaction: "+entry+" Removed"
                listItem.classList.add('list-group-item')
                messageList.appendChild(listItem)
            })
        }
        
    }
    function startUserQueueProcessing(sICWSAppUser) {
        var queueObject1 = new queues.QueueSubscriptionParameters;
        queueObject1.queueIds = [{'queueType': '1','queueName': sICWSAppUser}]
        queueObject1.attributeNames = [
          "Eic_RemoteId",
          "Eic_RemoteName",
          "Eic_CallState",
        ]
        var queueSubParams = new messagingsubscriptions.$queues.updateQueueSubscription.params(
          {
            content: queueObject1,
            template: {
              'subscriptionId': "SUB_"+sICWSAppUser,
            },
          });
          messagingsubscriptions.$queues.updateQueueSubscription(queueSubParams,
            {
              '200': function(xhr, updateQueueSubResponse) {
                //if(updateQueueSubResponse) console.log(updateQueueSubResponse);
              },
            });
    }
    function startUserStatusProcessing(sICWSAppUser) {
        var statusSubObject1 = new Status.UserStatusSubscription;
        statusSubObject1.userIds = [sICWSAppUser];
        var statusUpdateSubParams = new messagingsubscriptionsstatus.$userStatuses.updateUserStatusSubscription.params(
          {
            content: statusSubObject1,
          });
          messagingsubscriptionsstatus.$userStatuses.updateUserStatusSubscription(statusUpdateSubParams,
            {
              '200': function(xhr, updateStatusSubResponse) {
                //if(updateStatusSubResponse) console.log(updateStatusSubResponse);
              },
            });
    }
});