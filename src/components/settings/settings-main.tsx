import { stringify } from "querystring";
import React from "react";

import NavShort from "../nav/nav-short";

import "./styles.scss";

const Settings = () => {

    const changeText = (type: string, element: string, text: string) => {
        if (type == "class") { document.getElementsByClassName(element)[0].innerHTML = text } document.getElementsByClassName("settings_save_interface")[0].setAttribute("style", "display: block")
    }

    const slideChat = () => {
        let activeSelect = document.getElementsByClassName("chat_selection")[0].textContent;

        if (activeSelect == "gta:o") {
            changeText("class", "chat_selection", "basic")
        }

        if (activeSelect == "basic") {
            changeText("class", "chat_selection", "gta:o")
        }
    }

    const unshowSave = (type: string) => {
        if (type == "basic") {
            document.getElementsByClassName("settings_save")[0].setAttribute("style", "display: none")
        }

        if (type == "interface") {
            document.getElementsByClassName("settings_save_interface")[0].setAttribute("style", "display: none")
        }
    }

    return (
        <div className="settings">
            <NavShort />

            <div className="modal">
                <span className="title">Settings</span>

                <div>
                    <h1 className="second_title" style={{marginTop: "30px"}}>Mode Streamer</h1>

                    <h1 className="thirst_title">Name</h1>
                    <label className="checkbox">
                        <input type="checkbox" id="show-name" checked />
                        <span>Show name</span>
                    </label>

                    <h1 className="thirst_title">Pics</h1>
                    <label className="checkbox">
                        <input type="checkbox" id="show-name" />
                        <span>Show blured pics</span>
                    </label>

                </div>
            </div>

            <div className="modal">
                <span className="title">Interface</span>
                
                <div>
                    <h1 className="second_title" style={{marginTop: "30px"}}>HUD</h1>

                    <div>
                        <h1 className="thirst_title">Map</h1>
                        <label className="checkbox">
                            <input type="checkbox" id="show-map" />
                            <span>Show mini-map</span>    
                        </label>
                    </div>

                    <div>
                        <h1 className="thirst_title">Kill</h1>
                        <label className="checkbox">
                            <input type="checkbox" id="show-kill_feed" />
                            <span>Show kill feed</span>    
                        </label>
                    </div>

                    <div>
                        <h1 className="thirst_title">Chat</h1>
                        <span className="chat_selection" onClick={() => slideChat()}>gta:o</span>
                    </div>

                    <button className="settings_save_interface" onClick={() => unshowSave("interface")}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;