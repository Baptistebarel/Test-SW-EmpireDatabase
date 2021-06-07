const Hapi = require('@hapi/hapi');
const fetch = require("node-fetch");

const init = async () => {
  
    const server = new Hapi.Server(+process.env.PORT, '0.0.0.0');
    
    server.route({
      method: 'GET',
      path:'/api',
      handler: (request, h) => {
        async function getData() {

          const urls = ["https://swapi.dev/api/planets/", "https://swapi.dev/api/films/", "https://swapi.dev/api/people/", "https://swapi.dev/api/species/", "https://swapi.dev/api/starships/", "https://swapi.dev/api/vehicles/"];
          const checkStatus = res => res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
          const parseJSON = response => response.json();
        
          const getPage = url => fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => console.log("There was a problem!", error));
        
          const getAllPages = async (url, collection = []) => {
            const { results, next } = await getPage(url);
            collection = [...collection, ...results];
            if (next !== null) {
              return getAllPages(next, collection);
            }
            return collection;
          }
        
          const [ planets, films, people, species, starships, vehicles ] = await Promise.all(urls.map(url => getAllPages(url)));
          let allData = planets.concat(films, people, species, starships, vehicles);
          return(allData);
        
        }
        return getData()
      }
    });

    await server.start();
    console.log('Server running on port 3001');
};

init();