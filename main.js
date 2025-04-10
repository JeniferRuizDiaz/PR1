// CLASSES ------------------------------------

// THUMBNAIL Classe per obtenir la imatge 
class Thumbnail {
  constructor(path, extension) {
    this.path = path;
    this.extension = extension;
  }
}

// COMIC Classe 
class Comic {
  constructor(id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
    this.id = id;
    this.title = title;
    this.issueNumber = issueNumber;
    this.description = description;
    this.pageCount = pageCount;
    this.thumbnail = new Thumbnail(thumbnail.path, thumbnail.extension);
    this.price = price;
    this.creators = creators;
    this.characters = characters;
  }

  // COMIC Mètode d'instància per obtenir la URL del Thumbnail 
  getThumbnailURL() {
    return `${this.thumbnail.path}.${this.thumbnail.extension}`;
  }
}

// HERO Classe 
class Hero {
  constructor(id, name, description, modified, thumbnail, resourceURI, comics) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.modified = modified;
    this.thumbnail = new Thumbnail(thumbnail.path, thumbnail.extension);
    this.resourceURI = resourceURI;
    this.comics = comics;
  }

  // HERO Mètode d'instància per obtenir la URL del Thumbnail  
  getThumbnailURL() {
    return `${this.thumbnail.path}.${this.thumbnail.extension}`;
  }
}

// FAVORITES Classe 
class Favorites {
  constructor() {this.comics = [];}

  // Afegeix Favorit 
  addFavorite(comic) {
    this.comics.push(comic);
  }
  // Elimina Favorit
  removeFavorite(comicId) {
    this.comics = this.comics.filter(comic => comic.id !== comicId);
  }
  // Mostra Favorits
  showFavorites() {
    return this.comics;
  }
  // Afegeix varis Favorits 
  addMultipleFavorites(...comics) {
    this.comics.push(...comics);
  }
  // Copia llista Favorits 
  copyFavorites() {
    return [...this.comics];
  }
}

// FUNCIONS ------------------------------------

// Cercar comic a la biblioteca
function findComicById(comics, comicId) {
  if (comics.length === 0) {
    return null;
  }
  if (comics[0].id === comicId) {
    return comics[0];
  }
  return findComicById(comics.slice(1), comicId);
}

// Calcular preu mitjà
function calculateAveragePrice(comics) {
  const totalPrice = comics.reduce((acc, comic) => acc + comic.price, 0); // Afegim el valor inicial 0
  return totalPrice / comics.length;
}

// Calcular COMIC per preu
function getAffordableComicTitles(arrayComics, maxCost) {
  const arrayComicsFiltered = arrayComics.filter(comic => comic.price <= maxCost);
  const arrayAffordable = arrayComicsFiltered.map(comic => comic.title);
  return arrayAffordable;
}


// DADES ----------------------

// --Creació de COMIC 
// Thumbnail DetectiuConan1
const detectiuConan1TN = {path: "http://biblioteca.com/imatge/detective-conan-180", extension: "jpg"};

//COMIC DetectiuConan1 
const detectiuConan1 = new Comic(1, "Detectiu Conan", 1, "Shinichi Kudo, un jove detectiu brillant, és enverinat i es converteix en un nen. Ara, sota el nom de Conan Edogawa, resol casos mentre busca els homes de negre.", 180, detectiuConan1TN, 7.50, ["Gosho Aoyama"], ["Conan Edogawa", "Ran Mouri", "Kogoro Mouri"]);

// Thumbnail Superman10
const superman10TN = { path: "http://biblioteca.com/imatge/superman", extension: "jpg" };

// COMIC Superman10
const superman10 = new Comic(2, "Superman", 10, "El llegendari heroi de Krypton, Superman, protegeix Metropolis d’una nova amenaça alienígena.", 36, superman10TN, 5.49, ["Jerry Siegel", "Joe Shuster"], ["Superman", "Lex Luthor"]);

// Thumbnail CapAmerica25
const capAmerica25TN = { path: "http://biblioteca.com/imatge/cap", extension: "jpg" };

// COMIC CapAmerica25
const capAmerica25 = new Comic(3, "Captain America", 25, "El Capità Amèrica lluita per la llibertat en una nova aventura.", 40, capAmerica25TN, 5.99, ["Joe Simon", "Jack Kirby"], ["Captain America", "Red Skull"]);

// --Creació de HERO
// Thumbnail Conan Edogawa
const conanEdogawaTH = { path: "http://biblioteca.com/hero/conanedogawa", extension: "jpg" };

// HERO Conan Edogawa
const conanEdogawa = new Hero(1, "Conan Edogawa", "Un brillant jove detectiu atrap al cos d’un nen, resolent casos mentre cerca tornar al seu estat original.", "1994-01-08T00:00:00Z", conanEdogawaTH, "http://gateway.detectiveconan.com/v1/public/characters/201", ["Detective Conan Vol. 1", "Detective Conan Vol. 5", "The Scarlet Bullet"]);

// Thumbnail IronMan
const ironManTH = { path: "http://biblioteca.com/imatge/ironman", extension: "png" };

// HERO IronMan
const ironMan = new Hero(2, "Iron Man", "Un geni, multimilionari, playboy i filantrop.", "2023-11-10T12:00:00Z", ironManTH, "http://gateway.marvel.com/v1/public/characters/101", ["Iron Man #1", "Avengers #5"]);

// Thumbnail BlackWidow
const blackWidowTH = { path: "http://biblioteca.com/hero/blackwidow", extension: "png" };

// HERO BlackWidow
const blackWidow = new Hero(3, "Black Widow", "Una espia experta i membre dels Venjadors.", "2024-03-15T08:30:00Z", blackWidowTH, "http://gateway.marvel.com/v1/public/characters/102", ["Black Widow #1", "Avengers #7", "Secret Avengers #3"]);

// PROVES ------------------------------------------------------------------

// --COMICS i HEROS
console.log(detectiuConan1);
console.log(superman10);
console.log(capAmerica25);
console.log(conanEdogawa);
console.log(ironMan);
console.log(blackWidow);

// --PROVES PER FAVORITS
// Crear instància de Favorits
const favorites = new Favorites();

// Afegir còmic a Favorits
favorites.addFavorite(superman10);
console.log(favorites.showFavorites());

// Afegir múltiples COMIC
favorites.addMultipleFavorites(capAmerica25, detectiuConan1);
console.log(favorites.showFavorites());

// Eliminar COMIC Favorits per ID
favorites.removeFavorite(1);
console.log(favorites.showFavorites());

// Fer còpia de Favorits
const copiaFavorits = favorites.copyFavorites();
console.log(copiaFavorits);

// --PROVES PER FUNCIONS
// Cercar un COMIC a Favorits
const cerca = findComicById(favorites.showFavorites(), 2);
console.log(cerca);

// Cálcul preu mitjà
const comics = [superman10, capAmerica25, detectiuConan18];
console.log(calculateAveragePrice(comics)); 

// Calcular COMIC per preu
const comicsExistents = [spiderMan12, capAmerica25, detectiuConan1, superman10];
const preuMaxim = 5.00;
const comicsPerPreu = getAffordableComicTitles(comicsExistents, preuMaxim);
console.log(comicsPerPreu);
