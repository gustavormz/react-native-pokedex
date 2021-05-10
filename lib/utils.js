export const compose = (...fns) =>
    initialValue =>
    fns.reduceRight((nextParam, nextFunction) =>
        nextFunction(nextParam), initialValue);

const splitUrlBySlash = url => url.split(`/`);

const getPenultimateItemFromArray = array => {
    array.pop();
    return array.pop();
};

const getIdFromUrl = compose(
    getPenultimateItemFromArray,
    splitUrlBySlash
);

export const getPokemonBaseImageUriById = id =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; 

export const formatPokemonItem = pokemon => {
    const id = getIdFromUrl(pokemon.url);
    return {
        ...pokemon,
        id,
        imageUri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
};
