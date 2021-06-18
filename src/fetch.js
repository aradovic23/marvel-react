function getData(){
    const api = 'db15f5d54cac4f2d8b5f05f7d748c478'

   return fetch (`http://gateway.marvel.com/v1/public/characters?nameStartsWith=s&orderBy=-modified&apikey=${api}`)
    .then(res => res.json())
    .then(res => res.data.results)
}

export default getData