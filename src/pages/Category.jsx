import { NavLink } from 'react-router-dom';





function Category() {
    return (
        <div>
            <br /><br />
            <div className="flex">





                <div className="gauche">
                    <div className="card">
                        <NavLink to="/categoryadd" className="cardtext">add</NavLink>
                    </div>
                </div>




                <div className="droite">
                    <div className="card">
                        <NavLink to="/categorylist" className="cardtext">delete or update</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category;