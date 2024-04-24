// Define the make _album function
function make_album(artist_name :string, album_title :string,tracks?: number){
    let album:{artist:string, title:string, tracks?: number} = {
    artist:artist_name,
    title:album_title,
    };

if (tracks !== undefined){
    album.tracks = tracks;
}

    return album;

}

// calling three functions with  diffrent  values

 let album1 = make_album("Aqsa","Album title 1");

 let album2 = make_album("Fiza ","Album title 2");

 // calling a make_album function  with third parameter
 let album3 = make_album("Rimsha","Album title 3", 10);


// print values of our object  created  my function 

console.log(album1);
console.log(album2);
console.log(album3);







