

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=60&api_key=kHA2LwEs6IlTUv66ibdSl7cc1CkB2VHD`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    return gifs;
}
