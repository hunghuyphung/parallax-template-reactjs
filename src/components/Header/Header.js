import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCheckDouble, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <div id="header">
            <div className="display-flex flex-space-between">
                <div>
                    <a href="#" className="h-button color-dark-gray hover-gray">HOME</a>
                    <a href="#" className="h-button color-dark-gray hover-gray hide-small">
                        <FontAwesomeIcon icon={faUser}
                                         style={{fontSize: '13px', marginBottom: '1px', marginRight: '2px'}}/>
                        ABOUT
                    </a>
                    <a href="#" className="h-button color-dark-gray hover-gray hide-small">
                        <FontAwesomeIcon icon={faCheckDouble}
                                         style={{fontSize: '12px', marginBottom: '1px', marginRight: '2px'}}/>
                        PORTFOLIO
                    </a>
                    <a href="#" className="h-button color-dark-gray hover-gray hide-small">
                        <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '16px', marginRight: '2px'}}/>
                        CONTACT
                    </a>
                </div>
                <div>
                    <a href="#" className="h-button color-dark-gray hover-black hide-large show-small">
                        <FontAwesomeIcon icon={faBars}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;