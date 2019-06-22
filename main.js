class main
{
	constructor()
	{
		this.scripts = ["mainInit","afficher","modifier"];
		this.instanceCourrante;
		this.loadScripts();

		window.addEventListener("load",()=>{
			this.init();
		});

	}
	loadScripts()
	{
		for(let scr of this.scripts)
		{
			let tems = document.createElement('script');
			tems.addEventListener("load",function(){});
			tems.src = scr+".js";
			document.body.appendChild(tems);
		}
	}
	init()
	{
		this.instanceCourrante = new mainInit();
	}
	
}