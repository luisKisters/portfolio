import Link from "react-scroll/modules/components/Link";
import { React, useState, useEffect } from "react";
// import { FaGithub} from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { FiPhoneCall } from "react-icons/fi"
// import { HiOutlineClipboardCopy } from "react-icons/hi"
import CopyToClipboard from "react-copy-to-clipboard";
import "../css/Intro.css"
import "../css/App.css"


export const Intro = () => {
    const [buttonText, setButtonText] = useState('Copy?');

    function handleClick() {
        setButtonText('Copied!');
    }

    const [age, setAge] = useState(0);

    useEffect(() => {
        const birthDate = new Date(2006, 11, 19); // December is represented by 11 (zero-based index)
        const today = new Date();
        const diff = today.getTime() - birthDate.getTime();
        const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        setAge(ageInYears);
    }, []);

    return (
        <div className="Intro">
            <div class="div-container">
                <p className="text i-text1">Hey! I am</p>
                <p className="text i-text3">a {age} year old boy who likes to code, my name is</p>
                <p className="text i-text2">Luis Kisters</p>
                <div class="i-buttons">
                    <Link spy={true} to='CodingJourney' smooth={true}>
                        <button className="button3">My Coding Journey</button>
                    </Link>

                    {/* <div class="btn btn-primary tooltip">
                    {! isShown && (
                        <div         
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        >
                            <FaGithub className="icon"/>
                            <div class="top">
                                <h3>Github</h3>
                                <i className="arrow"></i>
                            </div>
                        </div>
                    )}
                    </div>
                    {isShown && (
                        <>
                            <HiOutlineClipboardCopy className="icon"/>
                            <div class="top">
                                <h3>Github</h3>
                                <i className="arrow"></i>
                            </div>
                        </>
                    )} */}
                    {/* <div class="btn btn-primary tooltip"><FaGithub onClick={setIsClicked(true)} className="icon"/>
                        <div class="top">
                        </div>
                    </div> */}
                    <div class="btn btn-primary tooltip">
                        <CopyToClipboard text="luis.w.kisters@gmail.com">
                            <button className="empty_btn" onClick={handleClick}><IoIosMail className="icon" /></button>
                        </CopyToClipboard>
                        <div class="top">
                            {buttonText}
                            <i className="arrow"></i>
                        </div>
                    </div>
                    <div class="btn btn-primary tooltip"><FiPhoneCall className="icon" />
                        <div class="top">
                            <h3>Phone</h3>
                            <i className="arrow"></i>
                        </div>
                    </div>
                    {/* <button className="button2">My Projects</button>          */}
                </div>
            </div>
        </div>
    );
}