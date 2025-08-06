import { createContext, useContext, useEffect, useState } from "react";

const stateContext = createContext();

export const StateProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem('isAuth')) || false);
    const [category, setCategory] = useState();
    const [db, setDb] = useState();
    const [subCategory, setSubCategory] = useState();
    const [setTrackingEditSegment, showTrackingEditSegment] = useState(false);
    const [showDWM, setShowDWM] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const [ewfmData, setEwfmData] = useState(null);
    const [timeZone, setTimeZone] = useState({ label: '', bias: '0' });
    const [triggerSave, setTriggerSave] = useState(false);
    const [montlyPatternSave, setMontlyPatternSave] = useState(false);

    const requestSave = () => {
        setTriggerSave(true);
    };

    const resetSave = () => {
        setTriggerSave(false);
    };

    const requestMontlyPatternSave = () => {
        setMontlyPatternSave(true);
    };

    const resetMontlyPatternRequestSave = () => {
        setMontlyPatternSave(false); // ❗ Fix typo here if it was `setTriggerSave`
    };


    //For Navbar Day, Week and Month
    // Load initial value from localStorage
    const initialView = localStorage.getItem("showDateWeekMonth") || "weeks";
    const [showDateWeekMonth, setShowDateWeekMonth] = useState(initialView)

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("showDateWeekMonth", showDateWeekMonth);
    }, [showDateWeekMonth]);


    // const handleTabClick = (view) => {
    //     setShowDateWeekMonth(view);
    // };

    return (
        <stateContext.Provider value={{
            isAuth, setIsAuth, category, setCategory, db, setDb,
            subCategory, setSubCategory, setTrackingEditSegment, showTrackingEditSegment,
            showDWM, setShowDWM, showDateWeekMonth, setShowDateWeekMonth,
            selectedDate, setSelectedDate, selectedEmployee, setSelectedEmployee,
            toggleSideBar, setToggleSideBar, ewfmData, setEwfmData, timeZone, setTimeZone,
            triggerSave, requestSave, resetSave,
            montlyPatternSave, requestMontlyPatternSave, resetMontlyPatternRequestSave,
        }}>
            {children}
        </stateContext.Provider>
    )
};

export const useStateContext = () => useContext(stateContext);