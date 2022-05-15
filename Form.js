const Form = ({ children }) => {
	return <form
		noValidate
		onSubmit={(e) => e.preventDefault()}
	>
		{children}
	</form>
}

export default Form
