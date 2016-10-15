let color = new Set();
color.add("azul").add("verde").add("azul");


if(color.size === 2 && color.has("azul")){
    for(let key of color.values()){
        console.log(key);
    }
}
