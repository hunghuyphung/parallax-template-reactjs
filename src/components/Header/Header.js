import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCheckDouble, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

function Header() {
    const [navClasses, setNavClasses] = useState('display-flex flex-space-between');
    const [color, setColor] = useState({color: '#777'});

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                setNavClasses('display-flex flex-space-between h-card bc-white animate-top');
                setColor({color: '#000'});
            } else {
                setNavClasses('display-flex flex-space-between');
                setColor({color: '#777'});
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div id="header">
            <div id="nav-bar-js" className={navClasses} style={{height: '43px'}}>
                <div>
                    <a href="#" className="h-button hover-gray" style={color}>HOME</a>
                    <a href="#" className="h-button hover-gray hide-small" style={color}>
                        <FontAwesomeIcon icon={faUser}
                                         style={{fontSize: '13px', marginBottom: '1px', marginRight: '2px'}}/>
                        ABOUT
                    </a>
                    <a href="#" className="h-button hover-gray hide-small" style={color}>
                        <FontAwesomeIcon icon={faCheckDouble}
                                         style={{fontSize: '12px', marginBottom: '1px', marginRight: '2px'}}/>
                        PORTFOLIO
                    </a>
                    <a href="#" className="h-button hover-gray hide-small" style={color}>
                        <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '16px', marginRight: '2px'}}/>
                        CONTACT
                    </a>
                </div>
                <div>
                    <a href="#" className="h-button hover-black color-dark-gray hide-large show-small">
                        <FontAwesomeIcon icon={faBars}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;