import React ,{Component} from 'React';
import {NavLink} from 'react-router-dom';


class Navbar extends Component{
    render() {
        return(
            <div>
                <NavLink exact to = '/'>pageA</NavLink>
                <NavLink  to = '/b'>pageb</NavLink>
                <NavLink  to = '/c'>pagec</NavLink>
            </div>
        )
    }
}
export default Navbar