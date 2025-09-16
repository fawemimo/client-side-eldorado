import { useRootState } from "@/components/providers/RootProvider";

export default function useAlert() {
	const [rootState, rootActions] = useRootState();

	function showAndHideAlert(type, message) {
		rootActions.setAlert({ type, message, show: true });

		setTimeout(() => {
			rootActions.setAlert({ type, message, show: false });
		}, 5000);
	}

	return showAndHideAlert;
}
