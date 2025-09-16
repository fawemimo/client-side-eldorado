import { useEffect, useState } from "react";

let mediaMatch = null;

export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(mediaMatch?.matches);

	useEffect(() => {
		mediaMatch = window?.matchMedia(query);
		const handler = (e) => setMatches(e.matches);
		mediaMatch.addEventListener("change", handler);
		return () => mediaMatch.removeEventListener("change", handler);
	}, [matches, query]);

	return matches;
};
