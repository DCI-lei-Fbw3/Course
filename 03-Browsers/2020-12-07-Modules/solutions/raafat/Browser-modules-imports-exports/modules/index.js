// Your code goes here!
import { calculateAspectRatio } from "./aspect-ratio.js";
import * as math from "./percentage.js";

$(function () {
	$(".operand").change(function () {
		calculateAll(this);
	});

	const calculateAll = (val) => {
		if (val.className.includes("arithmetic"))
			$("#modulo_result")[0].value = math.modulo(
				$("#modulo_1")[0].value,
				$("#modulo_2")[0].value
			);
		else if (val.className.includes("percentageBy"))
			$("#percentageBy_result")[0].value = math.percentage(
				$("#percentageBy_1")[0].value,
				$("#percentageBy_2")[0].value
			);
		else if (val.className.includes("percentageOf"))
			$("#percentageOf_result")[0].value = math.percentageOf(
				$("#percentageOf_1")[0].value,
				$("#percentageOf_2")[0].value
			);
		else if (val.className.includes("difference"))
			$("#difference_result")[0].value = math.difference(
				$("#difference_1")[0].value,
				$("#difference_2")[0].value
			);
	};

	$(".ratio.result").on("input", function (event) {
		let [val1, val2] = [$("#ratio_1")[0].value, $("#ratio_2")[0].value];
		if (event.target.id === "ratio_result-height") {
			$("#ratio_result-width")[0].value = calculateAspectRatio(
				val1,
				val2,
				$("#ratio_result-height")[0].value,
				"h"
			);
		} else {
			$("#ratio_result-height")[0].value = calculateAspectRatio(
				val1,
				val2,
				$("#ratio_result-width")[0].value,
				"w"
			);
		}
	});
});
