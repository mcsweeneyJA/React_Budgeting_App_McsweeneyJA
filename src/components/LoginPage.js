import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
         <div className="box-layout">
           <div className="box-layout__box">
           <h1 classNAme="box-layout__title"> Expenditure tracker</h1>
           <p> record your spending</p>
             <button className="button" onClick={startLogin}> Login using your Google Account</button>
           </div>
         </div>
       );
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);