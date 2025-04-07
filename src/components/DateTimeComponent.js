import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
    const [currentDateTime, setCurrentDateTime] = useState({
        date: "",
        time: "",
        weekday: ""
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const day = now.getDate(); // Get the day of the month (1-31)
            const month = now.toLocaleString("en-US", { month: "short" }); // Get abbreviated month (e.g., "Apr")
            const year = now.getFullYear(); // Get the full year (e.g., 2025)

            const formattedDate = `${day}-${month}-${year}`; // Combine into desired format
            const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
            const weekday = now.toLocaleDateString("en-US", { weekday: "short" }); // e.g., Mon

    setCurrentDateTime({ date: formattedDate, weekday, time });
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <p>{currentDateTime.date} {currentDateTime.weekday} {currentDateTime.time}</p>
        </div>
    );
};

export default DateTimeComponent;
