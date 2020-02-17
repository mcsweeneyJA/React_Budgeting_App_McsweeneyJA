//HIGHER ORDER COMPONENT
//react component (HOC) that renders another component (regular)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> info </h1>
        <p> The info is: {props.info} </p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div> 
            {props.isAdmin && <p> this is private info! please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
   return (props) => (
    <div>
           {props.isAuthenticated ? <WrappedComponent {...props} /> :  <p> please login to view info</p>}
        
    </div>
)}

const AuthInfo = requireAuthentication(Info);


const AdminInfo = withAdminWarning(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info="this is the info props" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the info props" />, document.getElementById('app'))