import React, { useEffect } from "react";
import { notificationSubscription } from "../services/notification-service";
export default function Main() {
  useEffect(() => {
    notificationSubscription((data) => alert(data));
  }, []);
  return <div>Main</div>;
}
// we have a service that does setInterval, and when interval is equal to 10 fire a notification
// inside of  the main screen, when a notification is fired we want to react by showing an alert.
