var http  = require('http');
var url = require('url');
const axios = require('axios');
const { isNull } = require('util');

http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url);
    let strUrl = req.url;

    // Consultar los datos de GitHub de un usuario especifico.
    if (strUrl.includes("github")) {
        var q = url.parse(req.url, true).query;
        console.log(q.usuario);
        
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.github.com/users/' + q.usuario,
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar el Clima de una ciudad o ubicacion especifica
    else if (strUrl.includes("clima")) {
        var q = url.parse(req.url, true).query;
        console.log(q.ciudad);

        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + q.ciudad,
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
              'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
            }
        };
          
        try {
            const response = await axios.request(options);
            res.write(JSON.stringify(response.data));
            res.end();
        }
        catch (error) {
            console.error(error);
        }
    }

    // Consultar el tipo de cambio del dolar en Peru
    else if (strUrl.includes("cambio")) {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.apis.net.pe/v2/sunat/tipo-cambio',
            headers: { 
              'Authorization': 'Bearer apis-token-10259.i6FkVmRupt4PZP1ZlYLnSnUiO6dgqEDP'
            }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });  
    }

    // Consultar la lista de Pokemones actual
    else if (strUrl.includes("pokemon")) {
        var q = url.parse(req.url, true).query;
        console.log(q.nombre);
        
        if (q.nombre == null) {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://pokeapi.co/api/v2/pokemon/',
                headers: { }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
        // Consultar los poderes de un pokemon especifico
        else {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://pokeapi.co/api/v2/pokemon/' + q.nombre,
                headers: { }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    // Consultar los principales personajes de Rick and Morty
    else if (strUrl.includes("personaje")) {
        var q = url.parse(req.url, true).query;
        console.log(q.nombre);

        if (q.nombre == null) {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://rickandmortyapi.com/api/character',
                headers: { }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
        // Consultar el detalle de cada personaje de Rick and Morty
        else {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://rickandmortyapi.com/api/character/?name=' + q.nombre,
                headers: { }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
        
    }

    // Consultar el top 10 de bebidas y cocteles
    else if (strUrl.includes("bebida")) {
        
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar un listado de productos de una tienda
    else if (strUrl.includes("producto")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://fakestoreapi.com/products',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar y traer Fotografias con un determinado tema y tamaño
    else if (strUrl.includes("foto")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.unsplash.com/photos/?client_id=UDDR4yQRorlUUNSV_leSbKOdgrK9GXR1M-m-CPrFCq4',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar citas famosas
    else if (strUrl.includes("cita")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://quotes.rest/qod',
            headers: { 
              'Authorization': 'Bearer 1OuyNkPpjOO1zYgvHfDWbG67ofY840xramDsRhCU'
            }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
          .catch((error) => {
            console.log(error);
        });
    }

    // Consultar datos ficticios de un usuario
    else if (strUrl.includes("info")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://randomuser.me/api/',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Consultar el top de peliculas de estreno
    else if (strUrl.includes("pelicula")) {
        var q = url.parse(req.url, true).query;
        console.log(q.nombre);

        if (q.nombre == null) {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.themoviedb.org/3/movie/now_playing',
                headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzUzY2I4YjFmMWM0ZWZjOTA3ZTI1NzkwNzdhNDgyZiIsIm5iZiI6MTcyNTIzNDUyNS41NzY1MTUsInN1YiI6IjY2ZDRmYjQ3M2UxYWI0NWNlNWIxOGZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gsk7dpZDU9b0w0F1rg8vgmpdV6fRiYcfmm9SBE2INHw'
                }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
        // Consultar el detalle de una pelicula especifica
        else {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.themoviedb.org/3/search/movie?query=' + q.nombre,
                headers: { 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzUzY2I4YjFmMWM0ZWZjOTA3ZTI1NzkwNzdhNDgyZiIsIm5iZiI6MTcyNTIzNDUyNS41NzY1MTUsInN1YiI6IjY2ZDRmYjQ3M2UxYWI0NWNlNWIxOGZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gsk7dpZDU9b0w0F1rg8vgmpdV6fRiYcfmm9SBE2INHw'
                }
            };
              
            axios.request(config)
            .then((response) => {
                res.write(JSON.stringify(response.data));
                res.end();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
    // Consultar datos especificos de Marte
    else if (strUrl.includes("marte")) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0',
            headers: { }
        };
          
        axios.request(config)
        .then((response) => {
            res.write(JSON.stringify(response.data));
            res.end();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    else {
        res.write(JSON.stringify({mensaje: "Hackaton07 SV73641911"}));
        res.end();
    }
}).listen(8900);