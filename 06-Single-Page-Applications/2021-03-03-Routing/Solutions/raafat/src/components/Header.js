import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header = ({ loginDetails }) => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Navbar.Brand>
					Welcome {loginDetails.name},{" "}
					<span>
						you are on&nbsp;
						{location.pathname === "/"
							? "home"
							: location.pathname.substring(1).replace("/", " ")}
						&nbsp;page
					</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/">Home</Link>
						<Link to="/products">products</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
