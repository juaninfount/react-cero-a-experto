export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IfTiv063ILvPVrBP4LYYOjnPIKk2v4l0&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}