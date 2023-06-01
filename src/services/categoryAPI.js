import axiosInstance, {
	requestOptions
} from './axiosInstance';
const baseDirectory = '/categories';

export const fetchCategoriesRequest = async () => {
	try {
		const response = await axiosInstance.get(`${baseDirectory}/`);
		return response.data;
	} catch (error) {
		throw new Error(`${error} (during categories fetch)`);
	}
}

export const fetchCategoryByIdRequest = async (categoryId) => {
	try {
		const response = await axiosInstance.get(`${baseDirectory}/${categoryId}`);
		return response.data;
	} catch (error) {
		throw new Error(`${error} (during category fetch by ID)`);
	}
}

export const createCategoryRequest = async (category, token) => {
	try {
		const response = await axiosInstance.post(
			`${baseDirectory}/`,
			category,
			requestOptions(token)
		);
		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
}

export const updateCategoryRequest = (categoryId, category, token) => {
	try {
		const response = axiosInstance.put(
			`${baseDirectory}/${categoryId}`,
			category,
			requestOptions(token)
		);
		return response.data;
	} catch (error) {
		if (error.response) {
			return error.response.data;
		}
	}
}

export const deleteCategoryRequest = (categoryId, token) => {
	try {
		const response = axiosInstance.delete(
			`${baseDirectory}/${categoryId}`,
			requestOptions(token)
		);
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
}