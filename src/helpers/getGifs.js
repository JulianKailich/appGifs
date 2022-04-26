export const getGifs = async(category) => {
    // el encodeURI es utilizado para que quede bien la url con el valor que le enviamos (en este caso category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9tiBL8rtDM0ZuGRWJ1J0FWhbAoQ6JciJ`;

    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return gifs;
    
}
