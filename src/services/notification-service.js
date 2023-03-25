import { Subject } from "rxjs";

let i = 0;

let interval;

const subject = new Subject();

const listenForNotifications = () => {
  interval = setInterval(() => {
    i++;
    if (i === 5) {
      subject.next("Ahmed likes your profile..");
    }
  }, 1000);
};

const stopListeningForNotifications = () => {
  clearInterval(interval);
};

const notificationSubscription = (handler) => {
  subject.subscribe((data) => {
    console.log(data);
    handler(data);
  });
};

export {
  listenForNotifications,
  stopListeningForNotifications,
  notificationSubscription,
};

export default subject;
