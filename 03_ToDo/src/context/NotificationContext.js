/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";


export const NotificationContext = createContext({
    notifications: [
        {
            id: 1,
            text: "To Do message",
            typed: {
                added: false,
                removed: false,
                edited: false,
                archived: false,
                unarchived: false
            }
        }
    ],
    setNotification: (notification) => { },
});


//used variables in components or pages
export const useNotificaton = () => {
    return useContext(NotificationContext);
}

export const NotificationProvider = NotificationContext.Provider;