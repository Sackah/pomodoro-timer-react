import { useState } from "react";
import settingsIcon from './assets/icon-settings.svg';

const Settings = () => {
    //States
    const [ menuDisplay, setMenuDisplay ] = useState(false);
    const [ bgColorKumbhSans, setBgColorKumbhSans ] = useState('#1E213F');
    const [ bgColorRobotoSlab, setBgColorRobotoSlab ] = useState('buttonface');
    const [ bgColorSpaceMono, setBgColorSpaceMono ] = useState('buttonface');
    const [ fontColorKumbhSans, setFontColorKumbhSans ] = useState('#fff');
    const [ fontColorRobotoSlab, setFontColorRobotoSlab ] = useState('#1E213F');
    const [ fontColorSpaceMono, setFontColorSpaceMono ] = useState('#1E213F');

    const toggleDisplay = () =>{
        setMenuDisplay(prevMenudisplay => !prevMenudisplay)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleFontRadioChange = (e) =>{
        //Reset all colors
        setBgColorKumbhSans('buttonface');
        setBgColorRobotoSlab('buttonface');
        setBgColorSpaceMono('buttonface');
        setFontColorKumbhSans('#1E213F');
        setFontColorRobotoSlab('#1E213F');
        setFontColorSpaceMono('#1E213F');

        //Set color for checked radio button
        switch (e.target.value) {
            case "kumbhsans":
                setBgColorKumbhSans("#1E213F");
                setFontColorKumbhSans("#fff")
                break;
            case "robotoslab":
                setBgColorRobotoSlab("#1E213F");
                setFontColorRobotoSlab("#fff");
                break;
            case "spacemono":
                setBgColorSpaceMono("#1E213F");
                setFontColorSpaceMono("#fff");
                break;
            default:
                break;
        }
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
                <form onSubmit={handleSubmit}>
                    <h2>TIME (MINUTES)</h2>
                    <div className="custom-time">
                        <label></label>
                        <label></label>
                        <label></label>
                    </div>
                    <div className="custom-font">
                        <label>FONT</label>
                        <div className="radios">
                            <div className="kumbh-sans" style={{backgroundColor: bgColorKumbhSans}}>
                                <label>
                                    <input type="radio" name="font-type" onChange={handleFontRadioChange} value="kumbhsans" className="font-style-button" defaultChecked/>
                                    <span style={{color: fontColorKumbhSans, fontFamily: "'Kumbh Sans', Poppins, Monserat, 'Open Sans', Roboto, sans-serif"}}
                                    >Aa</span>
                                </label>
                            </div>
                            <div className="roboto-slab" style={{backgroundColor: bgColorRobotoSlab}}>
                                <label>
                                    <input type="radio" name="font-type" onChange={handleFontRadioChange} value="robotoslab" className="font-style-button"/>
                                    <span   style={{color: fontColorRobotoSlab, fontFamily: "'Roboto Slab', Lora, Merriweather, 'PT Serif', Arvo, 'Playfair Display', 'Noto serif'"}}
                                    >Aa</span>
                                </label>
                            </div>
                            <div className="space-mono" style={{backgroundColor: bgColorSpaceMono}}>
                                <label>
                                    <input type="radio" name="font-type" onChange={handleFontRadioChange} value="spacemono" className="font-style-button"/>
                                    <span   style={{color: fontColorSpaceMono, fontFamily: "'Space Mono', 'IBM Plex Mono', 'Fira Mono', 'Anonymous Pro', monospace"}}
                                    >Aa</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-color">
                        <label>COLOR</label>
                        <div className="radios">
                            <div className="red" style={{backgroundColor: "#F87070"}}>
                                <label>
                                    <input type="radio" name="color-type" value="red" className="color-button" defaultChecked/>
                                    <span>
                                        <svg className="checkmark-icon" viewBox="0 0 24 24">
                                            <path d="M5.293 11.293L9 15l9-9-1.414-1.414L9 12.172l-3.293-3.293-1.414 1.414z" />
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="blue" style={{backgroundColor: "#70f3f8"}}>
                                <label>
                                    <input type="radio" name="color-type" value="blue" className="color-button"/>
                                    <span>
                                        <svg className="checkmark-icon" viewBox="0 0 24 24">
                                            <path d="M5.293 11.293L9 15l9-9-1.414-1.414L9 12.172l-3.293-3.293-1.414 1.414z" />
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="purple" style={{backgroundColor: "#D881F8"}}>
                                <label>
                                    <input type="radio" name="color-type" value="purple" className="color-button"/>
                                    <span>
                                        <svg className="checkmark-icon" viewBox="0 0 24 24">
                                            <path d="M5.293 11.293L9 15l9-9-1.414-1.414L9 12.172l-3.293-3.293-1.414 1.414z" />
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button>Apply</button>
                </form>    
            </div>}
        </section>
     );
}
 
export default Settings;