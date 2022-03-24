const fetchPokemon =(pokemon)=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        console.log(data.types);
        document.getElementById("image").src=data.sprites.front_default;
        document.getElementById("Gname").innerHTML=data.name;
        document.getElementById("No").innerHTML=data.id;
        document.getElementById("Type").innerHTML=data.types;
        document.getElementById("Weight").innerHTML=data.weight;
        document.getElementById("Height").innerHTML=data.height;
        });
}

const print =() =>{
    const pokeName= document.getElementById("name");
    fetchPokemon(pokeName.value);
}




