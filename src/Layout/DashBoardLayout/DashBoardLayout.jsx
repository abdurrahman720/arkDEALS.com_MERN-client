import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email)
   
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer && <>
                             <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/wishlist">My WishList</Link></li>
                            </>
                       }
                        {
                            isAdmin &&
                             <>
                                <li><Link to="/dashboard">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reportedproducts">Reported Products</Link></li>
                            </>
                        }
                        {
                            isSeller && 
                            <>
                            <li><Link to='/dashboard'>My Products</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>

    );
};

export default DashBoardLayout;

