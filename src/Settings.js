import { useState } from "react";
import settingsIcon from './assets/icon-settings.svg';

const Settings = () => {
    const [ menuDisplay, setMenuDisplay ] = useState(false);

    const toggleDisplay = () =>{
        setMenuDisplay(prevMenudisplay => !prevMenudisplay)
    }

    return ( 
        <section className="settings-section">
            {!menuDisplay && <div className="settings-button">
                <img src={settingsIcon} onClick={toggleDisplay} alt="settings icon" />
            </div>}
            {menuDisplay && <div className="settings-menu">
                <div className="settings-header">
                    <h2>Settings</h2>
                    <div className="close-button" height="14" width="14">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleDisplay} width="14" height="14">
                            <path fill="#1E213F" fillRule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/>
                        </svg>
                    </div>
                </div>
                <form>

                </form>    
            </div>}
        </section>
     );
}
 
export default Settings;