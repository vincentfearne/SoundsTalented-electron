import { NavLink } from 'react-router-dom';





function Product() {
    return (
        <div>
            <br /><br />
        <div className="flex">





            <div className="gauche">
                <div className="card">
                    <NavLink to="/productadd" className="cardtext">add</NavLink>
                </div>
            </div>




            <div className="droite">
                <div className="card">
                    <NavLink to="/productlist" className="cardtext">delete or update</NavLink>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Product;