import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faEnvelope, faMagnifyingGlass, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

export function Header(){
    return(
        <header className='topbar'>
            <div className="search-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="search" placeholder="Pesquisar" />
            </div>
            <div className='topbar-actions'>
                <button>
                    <FontAwesomeIcon icon={faMessage} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
        </header>
    )
}