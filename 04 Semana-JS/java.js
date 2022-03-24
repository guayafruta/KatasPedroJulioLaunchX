const fetchPokemon =(pokemon)=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon;
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        document.getElementById("image").src=data.sprites.front_default;
        document.getElementById("Gname").innerHTML=data.name;
        document.getElementById("No").innerHTML=data.id;
        document.getElementById("Type").innerHTML=data.types[0].type.name;
        document.getElementById("Weight").innerHTML=data.weight;
        document.getElementById("Height").innerHTML=data.height;
        document.getElementById("Habilidades").innerHTML=ability(data.abilities);
        document.getElementById("HP").innerHTML=data.stats[0].base_stat;
        document.getElementById("AT").innerHTML=data.stats[1].base_stat;
        document.getElementById("DF").innerHTML=data.stats[2].base_stat;
        document.getElementById("SA").innerHTML=data.stats[3].base_stat;
        document.getElementById("SD").innerHTML=data.stats[4].base_stat;
        document.getElementById("SP").innerHTML=data.stats[5].base_stat;
        });
}

const print =() =>{
    const pokeName= document.getElementById("name");
    fetchPokemon(pokeName.value);
}



const ability =(pokeAbs) =>{
    console.log(pokeAbs);
    let Ability="";
    pokeAbs.forEach(element => {
        Ability= Ability + " / " + element.ability.name;
    });
    console.log(Ability)
    return Ability;
}