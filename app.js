var Produit = function (nom, prix){
    this.nom = nom;
    this.prix = prix;
};

var Panier = function(){
    this.totalHT = 0;
    this.totalTTC = 0;
    this.ajoute = function(produit){
        console.log(produit);
        this.totalHT = (Math.floor(this.totalHT*100)/100) + produit.prix;
        this.totalTTC = (Math.floor(this.totalHT*100)/100) *1.20;
    };
    this.retire = function(produit){
        console.log(produit);
        this.totalHT = (Math.floor(this.totalHT*100)/100) - produit.prix;
        this.totalTTC = (Math.floor(this.totalHT*100)/100) *1.20;
    
 };

};
var baguette = new Produit('baguette', 0.85);
var croissant = new Produit('croissant', 0.80);
var panier = new Panier();

panier.ajoute(baguette);
panier.ajoute(croissant);

panier.retire(baguette);
panier.retire(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC); 