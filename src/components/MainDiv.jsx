import React, {useState, useEffect} from "react";

const MainDiv = () => {

	const [data, setData] = useState();

	 useEffect(() => {
	  fetch('https://web-production-77d7.up.railway.app/conv_articles/articles/')
	   .then((response) => response.json())
	   .then((json) => setData(json.results));

	 },[]);


	return(
			<div className="container-fluid" id="mainDiv">
				<div className="row" id="mainrowDiv">
					<div className="col-6" id="half1Div">
						<span>
							<label>Nom de l'article </label>
				        	<select className="ArticleSelect" id="article_id">
					        	{
					        		data && data.map((objects) => (
						        		<option key={objects.id} value={objects.nom}>{objects.nom}</option>
					          		))
								}
				        	</select>
			        	</span><br/>
			        	
			        	<span>
			        		<label>Description</label>
			        		<input className="ArticleInput"></input>
			        	</span><br/>
			        	<span>
			        		<label>Prix d'achat</label>
			        		<input className="ArticleInput"></input>
			        	</span><br/>
			        	<span>
			        		<label>Prix de vente</label>
			        		<input className="ArticleInput"></input>
			        	</span><br/>
			        	<span>
			        		<label>Quantité disponible</label>
			        		<input className="ArticleInput"></input>
			        	</span><br/>
			        </div>

			        <div className="col-6">

				        <div className="row" id="half2_1Div">
				        	<h4>çà c'est pour les approvisionnements </h4>
				        </div>
				        <div className="row" id="half2_2Div">
				        	<h4>çà c'est pour les ventes </h4>
				        </div>

				     </div>
			     </div>
			</div>
		)
}

export default MainDiv;