import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from "../contexts/CartContext"

const Navigation = () => {
	const cart = useContext(CartContext);
	console.log("cart in navigation: ", cart )
	console.log("But cart.length is undefined!: ", cart.length)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
