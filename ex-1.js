class EmailNotification {
  constructor(notificationID, createdTime, content, receiver) {
    this.notificationID = notificationID;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationID, createdTime, content, phoneNumber) {
    this.notificationID = notificationID;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const emailNotification = new EmailNotification(
  "1",
  "12.00",
  "start",
  "test123@gmail.com"
);
const smsNotification = new SMSNotification("2", "13.00", "end", "0987654321");

emailNotification.send();
smsNotification.send();
