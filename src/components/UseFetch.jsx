import React, { useState, useEffect } from "react";

function UseFetch(url, options = {}) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchData() {
		setLoading(true);
		try {
			const response = await fetch(url, { ...options });
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const result = await response.json();
			setData(result);
			setError(null);
			setLoading(false);
		} catch (err) {
			setError(err);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [url]);

	if (loading) {
		return <h1>Loading... Please wait</h1>;
	}
	return { data, error, loading };
}

export default UseFetch;
