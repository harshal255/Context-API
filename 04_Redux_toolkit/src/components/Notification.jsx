/* eslint-disable react/prop-types */
const NOTIFICATION_TTL = 2000;
import { useEffect } from "react";
import { motion, } from "framer-motion";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { removeNotification } from '../features/notification/notificationSlice';

const Notification = ({ text, id, typed }) => {
    const { added, removed, edited, archived, unarchived } = typed;
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            dispatch(removeNotification(id));
        }, NOTIFICATION_TTL);

        return () => clearTimeout(timeoutRef);
    }, [dispatch, id]);

    return (
        <motion.div
            layout
            initial={{ y: -15, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white  ${added ? 'bg-indigo-500' : removed ? 'bg-gray-500' : edited ? 'bg-orange-500' : archived || unarchived ? 'bg-transparent' : 'bg-red-500'} pointer-events-auto`}
        >
            <FiCheckSquare className="mt-0.5" />
            <span>{text}</span>
            <button onClick={() => dispatch(removeNotification(id))} className="ml-auto mt-0.5">
                <FiX />
            </button>
        </motion.div>
    );
};

export default Notification;
