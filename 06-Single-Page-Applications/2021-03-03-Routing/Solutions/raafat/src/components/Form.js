import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const Form = ({ setLogin, setLoginDetails }) => {
	const { register, handleSubmit } = useForm(); // initialize the hook
	const history = useHistory(); // initialize the hook
	const onSubmit = (data) => {
		console.log(data);
		setLoginDetails(data);
		setLogin(true);
		history.push("/products");
	};

	return (
		<div className="form-inner">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<input name="name" ref={register} /> {/* register an input */}
				<input
					name="email"
					type="email"
					ref={register({ required: true })}
				/>
				<input
					name="password"
					type="password"
					ref={register({ required: true })}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};
