
import React from 'react';
import '../css/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Services/Auth/AuthContext';
import LogoutButton from '../Store/HandleLogout';
import Toaster from '../Utils/Constants/Toaster';
const home = require('../icons/home.png');
const jobHistory = require('../icons/history.png');
const delivery = require('../icons/delivery.png');
const drivers = require('../icons/driver.png');
const orderHistory = require('../icons/orderHistory.png');
const paymentHistory = require('../icons/paymentHistory.png');
const settings = require('../icons/settings.png');
const logout = require('../icons/logout.png');
const logo = require('../icons/logo.png');
const paymentReports = require('../icons/reports.png');
const refund = require('../icons/refund.png');
const airplane = require('../icons/airplane-land.png');
const box = require('../icons/box.png');
const mail = require('../icons/mail-add.png');
const ship = require('../icons/ship.png');
const addBases = require('../icons/addBases.png');
const addPortion = require('../icons/AddPortion.png');
const chefsList = require('../icons/chefsList.png');
const orderList = require('../icons/orderList.png');
const adminSetting = require('../icons/adminSetting.png');

const NavBar = () => {
  const { userRole } = useAuth();
  const Navigate = useNavigate();
  return (
    <div>
      {(userRole !== null || userRole === 'supplier') && 
    <div class="navBar fixed-top">
        <div className='logoContainer'><img src={logo} alt="Logo" class="logo"></img></div>
        
        <div class="navBarItems">
            <ul>
                {userRole === 'user' && <li><Link to="/order"><div className='navItem '><img src={home} alt="Home" title='Home' /></div></Link></li>}
                {userRole === 'user' && <li><Link to="/order-history"><div className='navItem'><img src={orderHistory} alt="Order History" title='Order History' /></div></Link></li>}
                {userRole === 'user' && <li><Link to="/payments"><div className='navItem'><img src={paymentHistory} alt="Payment History" title='Payment History' /></div></Link></li>}
                
                {userRole === 'admin' && <li><Link to="/admin-panel-order-history"><div className='navItem'><img src={orderHistory} alt="Order History" title='Order History' /></div></Link></li>}
                {userRole === 'admin' && <li><Link to="/paymentReports"><div className='navItem'><img src={paymentReports} alt="Payment Reports" title="Payment Reports"></img></div></Link></li>}
                {userRole === 'admin' && <li><Link to="/delivery-summary"><div className='navItem'><img src={delivery} alt="Job Summary" title='Job Summary' /></div></Link></li>}
                {userRole === 'admin' && <li><Link to="/adminPage"><div className='navItem'><img src={adminSetting} alt="adminPage" title="adminPage"></img></div></Link></li>}
                {userRole === 'admin' && <li><Link to="/inventory-record"><div className='navItem'><img src={box} alt="Inventory Record" title='Inventory Record' /></div></Link></li>}
                
                {userRole === 'driver' && <li><Link to="/delivery"><div className='navItem'><img src={delivery} alt="Available Jobs" title='Available Jobs' /></div></Link></li>}
                {userRole === 'driver' && <li><Link to="/job-history"><div className='navItem'><img src={jobHistory} alt="Job History" title='Job History' /></div></Link></li>}
                 
                {userRole === 'supplier' && <li><Link to="/invite"><div className='navItem'><img src={mail} alt="Invitations" title='Invitations' /></div></Link></li>}
                {userRole === 'supplier' && <li><Link to="/display"><div className='navItem'><img src={box} alt="Suppliers" title='Suppliers' /></div></Link></li>}
                {userRole === 'supplier' && <li><Link to="/displays"><div className='navItem'><img src={ship} alt="Shipments" title='Shipments' /></div></Link></li>}          
                
                {userRole === 'ktn_manager' && <li><Link to="/kitchen-panel"><div className='navItem'><img src={orderList} alt="orders" title='orders' /></div></Link></li>}
                {userRole === 'ktn_manager' && <li><Link to="/chefs-list"><div className='navItem'><img src={chefsList} alt="chefs" title='chefs' /></div></Link></li>}
                {userRole === 'ktn_manager' && <li><Link to="/base-list"><div className='navItem'><img src={addBases} alt="bases" title='bases' /></div></Link></li>}
                {userRole === 'ktn_manager' && <li><Link to="/portion-list"><div className='navItem'><img src={addPortion} alt="portions" title='portions' /></div></Link></li>}
            </ul>
            <ul>
                <li><Link to="/main/user/empEdit"><div className='navItem'><img src={settings} alt="Payment History" title='Settings' /></div></Link></li>
                <li>
        {/* Render the LogoutButton component and pass Toaster and Navigate props */}
        <LogoutButton Toaster={Toaster} Navigate={Navigate} />
      </li>
            </ul>
        </div>
    </div>
      }
    </div>
  );
};

export default NavBar;
