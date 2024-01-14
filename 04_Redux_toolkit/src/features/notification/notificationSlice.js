import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid generate unique random id
const initialState = {
    notifications: [{
        id: 1,
        text: "This is TodoList using Redux Toolkit",
        typed: {
            added: false,
            removed: false,
            edited: false,
            archived: false,
            unarchived: true
        }
    }],
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            const notification = {
                id: nanoid(),
                text: action.payload.text,
                typed: {
                    added: action.payload.typed.added,
                    removed: action.payload.typed.removed,
                    edited: action.payload.typed.edited,
                    archived: action.payload.typed.archived,
                    unarchived: action.payload.typed.unarchived,
                }
            }
            state.notifications.push(notification);
            console.log("set notification", notification);
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload
            );
        },
    }
});

export const { setNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer