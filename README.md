Cordova-Plugin-Open-Settings
==============================

Open Roaming Data Settings.  Cordova / PhoneGap plugin.

Installation:
-------------
1. Install using Cordova CLI:
    `cordova plugin add https://github.com/RodrigoGontijo/Cordova-Plugin-Open-Settings.git`

__Example of usage ()__

  	<!DOCTYPE html>
    <html>
      <head>
        <script type="text/javascript" charset="utf-8" src="cordova-X.X.X.js"></script>
        <script type="text/javascript" charset="utf-8" src="jquery.js"></script>
        <script type="text/javascript" charset="utf-8" src="DataRoamingSettings.js"></script>
        <script type="text/javascript" charset="utf-8">
         
          //Open data roaming settings
          $('#intentSettings').bind('click',function(){
              DataRoamingSettings.goToSettings(onSuccess, onError);
          });
         
          //Callbacks
          function onSuccess(){
              console.log("Works ");
          }
          function onError(){
              //Manage Error
          }
         
        </script>
      </head>
      <body>
        <input type="button" id="intentSettings" value="Data roaming settings"/>
      </body>
    </html>
