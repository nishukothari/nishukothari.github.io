import React from 'react'
import ReactDOM from 'react-dom'

import WelcomeView from './WelcomeView'

const e = React.createElement
try {
    const navContainer = document.querySelector('#welcome-view')

    ReactDOM.render(e(WelcomeView), navContainer)
}
catch (e) { }