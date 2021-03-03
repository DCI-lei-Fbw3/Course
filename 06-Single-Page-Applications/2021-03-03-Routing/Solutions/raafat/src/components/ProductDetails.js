import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
	const [product, setProduct] = useState({});
	const { articleNo } = useParams();

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:5000/products")
	// 		.then((response) => setProduct(response.data));
	// }, []);

	return (
		<div className="product">
			<h3>
				Article No: <Badge variant="secondary">{articleNo}</Badge>
			</h3>
		</div>
	);
}

export default ProductDetails;
