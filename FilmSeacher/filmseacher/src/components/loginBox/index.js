import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./loginBox.css"

function LoginBox() {
   return (
      <div className="login-box">
         <FontAwesomeIcon icon={faUser} />
         <p>FirstName LastName</p>
         <FontAwesomeIcon icon={faCaretDown} />
      </div>
   )
}

export default LoginBox