// // src/components/HeaderTopBar.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../context/auth-context';

// export default function HeaderTopBar({ email, location, languages, signInPath, defaultLanguage }) {
//     const navigate = useNavigate();
//     const { authState, logout } = useAuth(); // Access authState and logout from AuthContext
//     const { isAuthenticated } = authState;

//     const handleLanguageChange = (event) => {
//         // Language change logic here
//     };

//     const handleNavigation = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className="top-bar fixed-to">
//             <div className="container">
//                 <div className="d-flex justify-content-between">
//                     <div className="contacts">
//                         <a href="#" onClick={(e) => e.preventDefault()}>
//                             <i className="fas fa-envelope" />
//                             <span
//                                 onClick={() => window.location.href = 'https://www.gmail.com/'}
//                                 style={{ cursor: 'pointer', marginLeft: '30px' }}
//                             >
//                                 {email}
//                             </span>
//                         </a>
//                         <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = `https://www.google.com/maps/place/${location}/`; }} style={{ cursor: 'pointer', marginLeft: '20px' }}>
//                             <i className="fas fa-map-marker-alt" />
//                             <span>{location}</span>
//                         </a>
//                     </div>
//                     <div className="right-side d-flex align-items-center">
//                         <i className="fas fa-globe" style={{ marginRight: '10px' }} />
//                         <select
//                             className="form-select language"
//                             aria-label="Default select example"
//                             defaultValue={defaultLanguage}
//                             onChange={handleLanguageChange}
//                         >
//                             {languages.map((lang) => (
//                                 <option key={lang.value} value={lang.value}>
//                                     {lang.label}
//                                 </option>
//                             ))}
//                         </select>
//                         <span className="bar" style={{ margin: '0 10px' }}> | </span>
//                         {isAuthenticated ? (
//                             <h4
//                                 style={{
//                                     color: 'white',
//                                     fontSize: 20,
//                                     marginTop: 4,
//                                     cursor: 'pointer',
//                                     marginRight: '80px'
//                                 }}
//                                 onClick={() => {
//                                     logout();
//                                     navigate('/signin');
//                                 }}
//                             >
//                                 Log Out
//                             </h4>
//                         ) : (
//                             <h4
//                                 style={{
//                                     color: 'white',
//                                     fontSize: 20,
//                                     marginTop: 4,
//                                     cursor: 'pointer',
//                                     marginRight: '80px'
//                                 }}
//                                 onClick={() => handleNavigation(signInPath)}
//                             >
//                                 Sign In
//                             </h4>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//responsive code


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth-context';

export default function HeaderTopBar({ email, location, languages, signInPath, defaultLanguage }) {
    const navigate = useNavigate();
    const { authState, logout } = useAuth();
    const { isAuthenticated } = authState;

    const handleLanguageChange = (event) => {
        // Language change logic here
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="top-bar fixed-to">
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="contacts d-flex flex-wrap">
                        <a href="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center mb-2 mb-md-0">
                            <i className="fas fa-envelope" />
                            <span
                                onClick={() => window.location.href = 'https://www.gmail.com/'}
                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                            >
                                {email}
                            </span>
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); window.location.href = `https://www.google.com/maps/place/${location}/`; }}
                            style={{ cursor: 'pointer', marginLeft: '20px' }}
                            className="d-flex align-items-center mb-2 mb-md-0"
                        >
                            <i className="fas fa-map-marker-alt" />
                            <span style={{ marginLeft: '10px' }}>{location}</span>
                        </a>
                    </div>
                    <div className="right-side d-flex align-items-center flex-wrap">
                        <i className="fas fa-globe" style={{ marginRight: '10px' }} />
                        <select
                            className="form-select language mb-2 mb-md-0"
                            aria-label="Default select example"
                            defaultValue={defaultLanguage}
                            onChange={handleLanguageChange}
                        >
                            {languages.map((lang) => (
                                <option key={lang.value} value={lang.value}>
                                    {lang.label}
                                </option>
                            ))}
                        </select>
                        <span className="bar" style={{ margin: '0 10px' }}> | </span>
                        {isAuthenticated ? (
                            <h4
                                className="text-white mb-2 mb-md-0"
                                style={{
                                    fontSize: 20,
                                    marginTop: 4,
                                    cursor: 'pointer',
                                    marginRight: '80px',
                                }}
                                onClick={() => {
                                    logout();
                                    navigate('/signin');
                                }}
                            >
                                Log Out
                            </h4>
                        ) : (
                            <h4
                                className="text-white mb-2 mb-md-0"
                                style={{
                                    fontSize: 20,
                                    marginTop: 4,
                                    cursor: 'pointer',
                                    marginRight: '80px',
                                }}
                                onClick={() => handleNavigation(signInPath)}
                            >
                                Sign In
                            </h4>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
