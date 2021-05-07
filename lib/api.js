const api = (() => {
    const baseApiUrl = `https://pokeapi.co`;

    const callApi = async (endpoint, params, version = true) => {
        try {
            const versionPath = version ? `/api/v2` : ``;
            const apiResponse = await fetch (`${baseApiUrl}${versionPath}/${endpoint}`, params);
            return await apiResponse.json();
        } catch (e) {
            throw e;
        }
    };

    return {
        call: callApi
    };
})();

export default api;
