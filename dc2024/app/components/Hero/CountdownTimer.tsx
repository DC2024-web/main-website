'use client'

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = moment.tz('2024-12-06 15:00', 'Asia/Singapore'); // GMT+8

        const timer = setInterval(() => {
            const now = moment().tz('Asia/Singapore');
            const difference = targetDate.diff(now);

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const duration = moment.duration(difference);
            setTimeLeft({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-timer text-white text-center">
            <div className="d-flex justify-content-center gap-4">
                <div>
                    <div className="display-4 fw-bold">{timeLeft.days}</div>
                    <div>Days</div>
                </div>
                <div>
                    <div className="display-4 fw-bold">{timeLeft.hours}</div>
                    <div>Hours</div>
                </div>
                <div>
                    <div className="display-4 fw-bold">{timeLeft.minutes}</div>
                    <div>Minutes</div>
                </div>
                <div>
                    <div className="display-4 fw-bold">{timeLeft.seconds}</div>
                    <div>Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;