import React from "react";
import Description from "./Description";
import Image from "next/image";
import Link from 'next/link'
const PokemonThumbnail = ({
id,
name,
image,
type,
height,
weight,
stat1,
stat2,
stat3,
stat4,
stat5,
stat6,
bs1,
bs2,
bs3,
bs4,
bs5,
bs6,
}:any) => {
const style = `thumb-container ${type}`;
return (
	<Link href={`/${id}`} className={style}>
	<div className="number">
		<small>#0{id}</small>
	</div>
	<Image src={image} alt={name}  width={100} height={100}/>
	<div className="detail-wrapper">
		<h3>{name.toUpperCase()}</h3>
		<small>Type : {type}</small>
		
		<Description
			weightpok={weight}
			heightpok={height}
			pokstat1={stat1}
			pokstat2={stat2}
			pokstat3={stat3}
			pokstat4={stat4}
			pokstat5={stat5}
			pokstat6={stat6}
			posbs1={bs1}
			posbs2={bs2}
			posbs3={bs3}
			posbs4={bs4}
			posbs5={bs5}
			posbs6={bs6}
		/>
	</div>
	</Link>
);
};

export default PokemonThumbnail;
