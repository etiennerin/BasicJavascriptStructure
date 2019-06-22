class mainInit
{
	constructor()
	{
		let afficheur=new afficher("bonjour");
		afficheur.affichage();
		let modifieur=new modifier();
		modifieur.injection=afficheur;
		modifieur.changerTexte("b32");
		afficheur.affichage();
	}
}