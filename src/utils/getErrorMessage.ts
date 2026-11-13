import axios from "axios";
import type {ApiError} from "../types/note.ts";

export function getErrorMessage(error: unknown): string {
    if (axios.isAxiosError<ApiError>(error)) {
        if (!error.response) {
            return "Can't reach the server. Check your connection and try again"
        }

        const serverError = error.response.data?.error;

        if (typeof serverError === "string") {
            return serverError;
        }

    }

    return "Something went wrong. Please try again.";
}

export function isNotFoundError(error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 404;
}
