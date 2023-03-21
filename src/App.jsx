import { useState } from "react";
import { FormPage } from "./pages/FormPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-magnolia flex md:items-center h-screen">
			<FormPage />
		</div>
	);
}

export default App;
