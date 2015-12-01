module.exports = function() {
	var deviceToken = Ti.App.Properties.getString('DEVICETOKEN', null);
	function deviceTokenSuccess(e) {
		Ti.App.Properties.setString('DEVICETOKEN', e.deviceToken);
	}
	function deviceTokenError(e) {
		alert('Failed to register for push notifications! ' + e.error);
	}
	if (deviceToken === null) {
		switch (Ti.Platform.osname) {
		case 'android' :
			var gcm = require('net.iamyellow.gcmjs');
			gcm.registerForPushNotifications({
				success : deviceTokenSuccess,
				error : deviceTokenError
			});
			break;
		case 'iphone':
		case 'ipad':
			if (parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
				// Wait for user settings to be registered before registering for push notifications
				Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {
					// Remove event listener once registered for push notifications
					Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);
					Ti.Network.registerForPushNotifications({
						success : deviceTokenSuccess,
						error : deviceTokenError,
						callback : receivePush
					});
				});
				Ti.App.iOS.registerUserNotificationSettings({
					types : [Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE]
				});
			} else {
				Ti.Network.registerForPushNotifications({
					types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND],
					success : deviceTokenSuccess,
					error : deviceTokenError,
					callback : receivePush
				});
			}
			function receivePush(e) {
			}
		}
	} 
};
