import React, {useContext, useState} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const[toggleMenu, setToggleMenu] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext (AppContext);

	const handleToggleMenu = () => {
		setToggleMenu (!toggleMenu);
	}
	
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggleMenu}>
						50Galones@ginpaagonico.com
						</li>
					<li className="navbar-shopping-cart" 
						onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{ state.cart.length > 0  ? <div> {state.cart.length} </div> : null }
					</li>
				</ul>
			</div>
			{toggleMenu ? <Menu/> : null}
			{toggleOrders ? <MyOrder/> : null}
		</nav>
	);
}

export default Header;