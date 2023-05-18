export default function AuthErrors({ errorMessages }) {
	return <ul>
		{
			errorMessages.map((err) => {
				return <li key={err.msg}>{err.msg}</li>;
			})
		}
	</ul>
}