import React from 'react';

class Menu extends React.Component {

    render() { 
        return (

                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-link ' >
                            <button
                            className="nav-link btn btn-link"
                            
                            >
                            Cursos
                            </button>
                        </li>
                        <li className='nav-link ' >
                            <button
                            className="nav-link btn btn-link"
                        
                            >
                            Grupos
                            </button>
                        </li>
                    </ul>
                </nav>
          );
    }
}
 
export default Menu;