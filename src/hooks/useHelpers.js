import useAlert from "./useAlert";
export default function useHelpers() {
	const alert = useAlert();

	function handleError(error) {
		const message =
			error.response?.data?.errors?.detail ??
			error.response?.data?.message ??
			"An error occurred";

		alert(
			"error",
			typeof error.response?.data.errors === "string"
				? error.response?.data.errors
				: message
		);

		const errorData = error.response?.data.errors;

		if (errorData) {
			error.errorList = Object.keys(errorData).map((key) => ({
				key,
				msg: Array.isArray(errorData[key]) ? errorData[key][0] : errorData[key],
			}));
		}
	}

	const copyToClipboard = async (text, successText) => {
		if (navigator.clipboard) {
			try {
				navigator.clipboard.writeText(text);
				alert("success", successText);
			} catch (error) {
				alert("error", "Action failed, try again");
			}
		}
	};

	const formatDate = function (dateString) {
		const date = new Date(dateString);
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const month = monthNames[date.getMonth()];
		const day = date.getDate();
		const year = date.getFullYear();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "pm" : "am";
		const formattedHours = hours % 12 || 12;
		const formattedMinutes = minutes.toString().padStart(2, "0");
		return `${month} ${day}, ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
	};

	function selectImage(e) {
		const files = [...e.target.files];
		const file = files[0];
		const fileBlob = new Blob([file], { type: file.type });
		const fileName = file.name;
		const url = URL.createObjectURL(fileBlob);

		return { fileBlob, url, fileName };
	}

	return { copyToClipboard, handleError, formatDate, selectImage };
}
