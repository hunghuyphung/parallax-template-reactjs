import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faImage, faLaptop, faUser} from "@fortawesome/free-solid-svg-icons";
import avatarHat from '../../assets/avatar_hat.jpg';

function About() {
    return (
        <div>
            <div className="h-content margin-auto padding-64-16 color-dark-gray">
                <h3 className="text-center">ABOUT ME</h3>
                <p className="margin-15-0 text-center">
                    <em>I love photography</em>
                </p>
                <p className="margin-15-0 text-justify">
                    We have created a fictional "personal" website/blog, and our fictional character is a hobby
                    photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <div className="display-flex">
                    <div className="width-50 padding-12-24 width-100-small">
                        <p className="margin-15-0 text-center">
                            <b>
                                <FontAwesomeIcon icon={faUser}
                                                 style={{marginRight: '14px', marginBottom: '1px', fontSize: '12px'}}/>
                                My Name
                            </b>
                        </p>
                        <br/>
                        <img src={avatarHat} className="h-image opac-60" width="500px" height="333px" alt=""/>
                    </div>
                    <div className="width-50 padding-12-24 hide-small">
                        <p className="margin-15-0 text-justify">
                            Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <p className="margin-18-0 padding-16-0 font-18 text-center">Im really good at:</p>
                <p className="margin-15-0 letter-spacing-10">
                    <FontAwesomeIcon icon={faCamera} style={{marginRight: '8px'}}/>
                    Photography
                </p>
                <div className="bc-light-grey">
                    <div className="width-90 padding-4-8 bc-dark-gray color-white text-center">90%</div>
                </div>
                <p className="margin-15-0 letter-spacing-10">
                    <FontAwesomeIcon icon={faImage} style={{marginRight: '8px'}}/>
                    Web Design
                </p>
                <div className="bc-light-grey">
                    <div className="width-85 padding-4-8 bc-dark-gray color-white text-center">85%</div>
                </div>
                <p className="margin-15-0 letter-spacing-10">
                    <FontAwesomeIcon icon={faLaptop} style={{marginRight: '8px'}}/>
                    Photoshop
                </p>
                <div className="bc-light-grey">
                    <div className="width-75 padding-4-8 bc-dark-gray color-white text-center">75%</div>
                </div>
            </div>
            <div className="padding-16-0 display-flex bc-dark-gray color-white flex-column-small">
                <div className="width-25 margin-16-0 text-center width-100-small">
                    <span className="font-24">14+</span>
                    <br/>
                    Partners
                </div>
                <div className="width-25 margin-16-0 text-center width-100-small">
                    <span className="font-24">55+</span>
                    <br/>
                    Projects Done
                </div>
                <div className="width-25 margin-16-0 text-center width-100-small">
                    <span className="font-24">89+</span>
                    <br/>
                    Happy Clients
                </div>
                <div className="width-25 margin-16-0 text-center width-100-small">
                    <span className="font-24">150+</span>
                    <br/>
                    Meetings
                </div>
            </div>
        </div>
    );
}

export default About;