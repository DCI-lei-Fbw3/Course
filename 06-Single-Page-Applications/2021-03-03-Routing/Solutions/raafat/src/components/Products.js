import { Product } from "./Product";

export const Products = ({ products }) => {
	return (
		<div className="cards">
			{products.map((product) => (
				<Product key={product.articleNo} product={product} />
			))}
		</div>
	);
};
