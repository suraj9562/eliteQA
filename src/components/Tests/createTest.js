import React,{useState} from "react";
import Styles from './createTest.module.css'
import clipboard from '../../assets/icons/clipboard.svg'
import calendar from '../../assets/icons/calendar.svg'
import search from '../../assets/icons/search.svg'
import skillclose from '../../assets/icons/skillclose.svg'
import alertcircle from '../../assets/icons/alertcircle.svg'
import checkicon from "../../assets/icons/check.svg";
import TestHeader from "./testHeader";
import TextButtonsContainer from "./TextButtonsContainer";

const CreateTest = () => {
    const skills = ["UIUX", "Java", "Testing"]
    const [check, setcheck] = useState(true)
   
    return (
        <div>
            <TestHeader />
            <TextButtonsContainer />
            <div className={Styles.testDetails} >
                <section>
                    <label>Test Headline</label>
                    <div className={Styles.inputBox} >
                        <img alt="" src={clipboard} />
                        <input placeholder="Javascript basic  to advance test" />
                    </div>
                    <div className={Styles.datePickerContainer} >
                        <div className={Styles.startDate} >
                            <label>Starts On</label>
                            <div className={Styles.inputBox} >
                                <img alt="" src={calendar} />
                                <input placeholder="27 Aug 9:00 AM" type="text" />
                            </div>
                        </div>
                        <div className={Styles.startDate} >
                            <label>Ends On</label>
                            <div className={Styles.inputBox} >
                                <img alt="" src={calendar} />
                                <input placeholder="27 Aug 9:00 AM" type="text" />
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className={Styles.experienceContainer} >
                        <div className={Styles.experineceDropdown} >
                            <label>Experience</label>
                            <div className={Styles.dropboxContainer} >
                                <select  >
                                    <option label="3-10 year" value="3-10" />
                                    <option label="3-10 year" value="3-10" />
                                    <option label="3-10 year" value="3-10" />

                                </select>
                            </div>
                        </div>
                        <div className={Styles.experineceDropdown} >
                            <label>Job Role</label>
                            <div className={Styles.dropboxContainer} >
                                <select  >
                                    <option label="Product manager" value="3-10" />
                                    <option label="Developer" value="3-10" />
                                    <option label="Manager" value="3-10" />

                                </select>
                            </div>
                        </div>

                    </div>
                    <div className={Styles.searchBox} >
                        <label>Select skills</label>
                        <div className={Styles.searchInputBox} >
                            <input type="text" placeholder="Search skills" />
                            <img alt="" src={search} />
                        </div>
                        <div className={Styles.skillName} >
                            {skills.map((data) => {
                                return (
                                    <span  >{data} <img src={skillclose} alt="" /> </span>
                                )
                            })
                            }
                        </div>
                    </div>

                    <div className={Styles.testTypeContainer} >
                        <label>Select Test Type <img alt="" src={alertcircle} /> </label>
                        <div className={Styles.testTypeItemContainer} >
                            <span><input type="radio" />Auto</span>
                            <span><input type="radio" />Custom</span>


                        </div>
                    </div>

                    <div className={Styles.libraryTypeContainer} >
                        <span>
                            <div style={check ? { backgroundColor: '#FF6812', borderColor: '#FF6812', borderWidth: 1, borderRadius: 5 } : { backgroundColor: 'white' }} onClick={() => setcheck(!check)} className={Styles.checkbox_input} >
                                {check ?
                                    <img src={checkicon} alt="selected" />
                                    :
                                    <></>
                                }
                            </div>
                            EliteQA Library
                        </span>
                        <span>
                            <div style={check ? { backgroundColor: '#FF6812', borderColor: '#FF6812', borderWidth: 1, borderRadius: 5 } : { backgroundColor: 'white' }} onClick={() => setcheck(!check)} className={Styles.checkbox_input} >
                                {check ?
                                    <img src={checkicon} alt="selected" />
                                    :
                                    <></>
                                }
                            </div>
                            My Library
                        </span>
                        
                    </div>


                </section>
            </div>
        </div>
    )
}

export default CreateTest