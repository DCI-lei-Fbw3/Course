import { Link } from "react-router-dom";
export const Product = ({ product }) => {
	const url = `/products/${product.articleNo}`;
	return (
		<div className="card">
			<Link to={url}>
				<h2>{product.articleNo}</h2>
			</Link>
			<h2>{product.name}</h2>
			<h2>{product.description}</h2>
			<br />
			<h2>{product.price}</h2>
		</div>
	);
};
