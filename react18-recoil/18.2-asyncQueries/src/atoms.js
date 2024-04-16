import { atom, selector } from "recoil";
import axios from 'axios'
//  Structure of our atom :-
// export const notifications = atom({
//     key: "notifications",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });
export const notificationsAtom = atom({
    key: "notifications",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            // await new Promise(r=>setTimeout(r, 3000)) // sleeps for 3 s
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})