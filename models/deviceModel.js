/**
// ✅ 3. نموذج داخل أي كائن (مثلاً Device)
// ملف: models/Device.js

Device.prototype.sendAlertNotification = async function (message, recipientId) {
  const NotificationService = require('../services/NotificationService');

  return await NotificationService.send({
    type: 'HEALTH_ALERT',
    message,
    recipient_id: recipientId,
    context: {
      context_type: 'DEVICE',
      context_id: this.id
    }
  });
};
 */