import React ,{Component} from 'React';
import {NavLink} from 'react-router-dom';
import  './nav.less';

class Navbar extends Component{
    render() {
        return(
            <div>
                <NavLink exact to = '/'  className="blue" >pageA</NavLink>
                <NavLink  activeClassName='active' to = '/b'>pageb</NavLink>
                <NavLink  activeClassName='active' to = '/c'>pagec</NavLink>
                <NavLink  activeClassName='active' to='/react' >404</NavLink>
                <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
            </div>
        )
    }
}
export default Navbar