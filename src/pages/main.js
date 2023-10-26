import React, { useEffect } from "react";
import { notificationSubscription } from "../services/notification-service";
export default function Main() {
  useEffect(() => {
    notificationSubscription((data) => alert(data));
  }, []);
  return <div>Main</div>;
}
