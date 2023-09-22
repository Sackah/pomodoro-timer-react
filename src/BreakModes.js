import { useState } from "react";

const BreakModes = (props) => {
    //Props
    const themeStyle = props.themeStyle;
    const timerType = props.updateTimerType;
    const durations = props.durations;

    //States
    const [bgColorPomodoro, setBgColorPomodoro] = useState(themeStyle.color);
    const [bgColorShortBreak, setBgColorShortBreak] = useState('#161932');
    const [bgColorLongBreak, setBgColorLongBreak] = useState('#161932');
    
    const handleRadioChange = (event) => {
        // Reset all colors
        setBgColorPomodoro('#161932');
        setBgColorShortBreak('#161932');
        setBgColorLongBreak('#161932');

        // Set color for checked radio button
        switch (event.target.value) {
            case 'pomodoro':
                setBgColorPomodoro(themeStyle.color);
                timerType(durations.pomodoro);
                break;
            case 'short-break':
                setBgColorShortBreak(themeStyle.color);
                timerType(durations.shortBreak);
                break;
            case 'longbreak':
                setBgColorLongBreak(themeStyle.color);
                timerType(durations.longBreak);
                break;
            default:
                break;
        }
    }



    return ( 
        <div className="break-modes" style={{fontFamily: themeStyle.font}}>
            <div className="pill">
                <label>
                    <input type="radio" id="pomodoro" value="pomodoro" className="break-mode-btn" name="timer-type"
                    onChange={handleRadioChange} defaultChecked/>
                    <span style={{backgroundColor: bgColorPomodoro}}>pomodoro</span>
                </label>
            </div>
            <div className="pill">
                <label>
                    <input type="radio" id="shortbreak" value="short-break" className="break-mode-btn" name="timer-type"
                    onChange={handleRadioChange}/>
                    <span style={{backgroundColor: bgColorShortBreak}}>short break</span>
                </label>
            </div>
            <div className="pill">
                <label>
                    <input type="radio" id="longbreak" value="longbreak" className="break-mode-btn" name="timer-type"
                    onChange={handleRadioChange}/>
                    <span style={{backgroundColor: bgColorLongBreak}}>long break</span>
                </label>
            </div>
        </div>
     );
}
 
export default BreakModes;