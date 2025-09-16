import axios from "axios";
import { useRootState } from "@/components/providers/RootProvider";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useAPIinstance() {
	const [rootState] = useRootState();

	const jsonApiInstance = axios.create({
		baseURL: BASE_URL,
		headers: {
			Authorization: `Bearer ${rootState.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const multipartApiInstance = axios.create({
		baseURL: BASE_URL,
		headers: {
			Authorization: `Bearer ${rootState.accessToken}`,
			"Content-Type": "multipart/form-data",
		},
	});

	return { jsonApiInstance, multipartApiInstance };
}
