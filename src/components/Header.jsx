import React from 'react';

import HeaderTopBar from '../sections/Header/TopBar';
import {HeaderData} from '../utils/HeaderData';
export default function Header() {
    return (
        <div id="header" >
            <HeaderTopBar
                email={HeaderData.email}
                location={HeaderData.location}
                languages={HeaderData.languages}
                signInPath={HeaderData.signInPath}
                defaultLanguage={HeaderData.defaultLanguage}
            />
        </div>
    );
}
