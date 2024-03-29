import { NavLink } from 'react-router-dom';


export default function Menu() {
    return (
            <div>
                <div className="menu">
                    <br />
                    <ul>
                        <li><NavLink to="/"
                                     className={({isActive}) => (isActive ? "activeLink" : undefined)}>Home</NavLink>
                        </li>
                        <li><NavLink to="/category"
                                     className={({isActive}) => (isActive ? "activeLink" : undefined)}>Category</NavLink>
                        </li>

                        <li><NavLink to="/product"
                                     className={({isActive}) => (isActive ? "activeLink" : undefined)}>Product</NavLink>
                        </li>
                    </ul>
                    <br/>
                </div>
                <br/>
                <br/>
                <br/>


            </div>
            )
}