const Settings = () => {
    return ( <div>
        <form>
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
    </div> );
}
 
export default Settings;