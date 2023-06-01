async function loadabout()
{
    let respuser = await fetch("http://localhost:9000/getnoofusers");
    let noofusers = await respuser.text();
    document.getElementById("noofusers").append(noofusers);

    let respmovies = await fetch("http://localhost:9000/getnoofmovies");
    let noofmovies = await respmovies.text();
    document.getElementById("noofmovies").append(noofmovies);


    let resptheaters = await fetch("http://localhost:9000/getnooftheaters");
    let nooftheaters = await resptheaters.text();
    document.getElementById("nooftheaters").append(nooftheaters);





    
}