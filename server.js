
const express 	= require('express');
const app 		= express();
const cors 		= require('cors');

const PORT  	= 4000;



app.get("/nfts",(req,res)=>{

	res.send(`
	[
		{
			"Title": "Goaty",
			"Price": "$15",
			"ID": "tt0215750",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/1.png"
		},
		{
			"Title": "Billy",
			"Price": "$17",
			"ID": "tt10837476",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/2.png"
		},
		{
			"Title": "Gator",
			"Price": "$16",
			"ID": "tt1599357",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/3.png"
		},
		{
			"Title": "Giggly",
			"Price": "$25",
			"ID": "tt4687358",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/4.png"
		},
		{
			"Title": "Heavy",
			"Price": "$18",
			"ID": "tt0077598",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/5.png"
		},
		{
			"Title": "Wishmaster",
			"Price": "$25",
			"ID": "tt0254871",
			"Type": "NFT",
			"Poster": "http://localhost:${PORT}/images/6.png"
		}
	]	
	`);

})
app.use(express.static('public'));

app.listen(PORT,()=>{
	console.log(`Server is listening to ${PORT} port.`);
	
});