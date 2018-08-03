import React from 'react';
import PieceAPI from './PieceAPI';
import { Link } from 'react-router-dom';

const FullRoster = () => (
	<div>
		<h2>Roster</h2>
		<ul>
			{
				PieceAPI.all().map(p => (
					<li key={p.link}>
						<Link to={`/roster/${p.link}`}>{p.name}</Link>
					</li>
				))
			}
		</ul>
	</div>
)

export default FullRoster;