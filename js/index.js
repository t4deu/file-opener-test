/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var file = null;
function downloadFile(url) {
  alert('downloading: ' + url);
  Files.download(url, function(f) {
  console.log('finished');
    alert(JSON.stringify(f));
    file = f;
  });
}

function openFile() {
  console.log('Opening file');
  Files.open(file);
}

function openInApp(target) {
  target = target ? target: '_blank';
  alert(target);
  window.open(file, target, 'location=no');
}

function openQuick() {
  alert('opening /w quicklook: '+ file);
  window.HazelnutOpen(file, 'Test', function() {}, function(e) {
    alert('error :' + JSON.stringify(e));
  });
  alert('after opening /w quicklook');
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
    }
};
