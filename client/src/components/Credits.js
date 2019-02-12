import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core/';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin: 0
	},
	divider: {
		marginTop: '1rem',
		marginBottom: '1rem'
	},
	textStyle: {
		fontSize: '10px'
	}
});

class Credits extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<div>
				<Grid container className={classes.root} direction='column' alignItems='center' justify='flex-start' spacing={40}>
		            <Grid sm={12} md={10} item>
		            	<div>
			            	<h1>
			            		Credits
			            	</h1>
			            	<h2>
			            		Developed by Chris Ngoh
			            	</h2>
			            	<h3>
								With help from Ryan Ngoh, Nathan Wong and Alex Hare
			            	</h3>
		            	</div>
					</Grid>
				</Grid>
				<Divider className={classes.divider}/>
				<Grid container className={classes.root} direction='column' alignItems='center' justify='flex-start' spacing={40}>
					<Grid sm={12} md={6} item>
		            	<div>
			            	<h2>
			            		Artwork
			            	</h2>
			            	<p className={classes.textStyle}>"Painterly Spell Icons Part 1", "Painterly Spell Icons Part 2", "Painterly Spell Icons Part 3", "Painterly Spell Icons Part 4" by J. W. Bjerk licensed CC-BY 3.0, CC-BY-SA 3.0, GPL 3.0, GPL 2.0: https://opengameart.org/content/painterly-spell-icons-part-1, https://opengameart.org/content/painterly-spell-icons-part-2, https://opengameart.org/content/painterly-spell-icons-part-3, https://opengameart.org/content/painterly-spell-icons-part-4</p>
		            		<p className={classes.textStyle}>"Skill, Item and Spell Icons" by pauliuw licensed CC0: https://opengameart.org/content/skill-item-and-spell-icons</p>
							<p className={classes.textStyle}>"Gaia Free Boss Monster" by Antifarea licensed GPL 2.0, LGPL 3.0, CC-BY-SA 3.0: https://opengameart.org/content/gaia-free-boss-monster</p>
							<p className={classes.textStyle}>"God Angel NPC" by Tracy licensed CC-BY 3.0: https://opengameart.org/content/god-angel-npc</p>
							<p className={classes.textStyle}>"Dungeon Crawl 32x32 Tiles" by Chris Hamons licensed CC0: https://opengameart.org/content/dungeon-crawl-32x32-tiles</p>
							<p className={classes.textStyle}>"Pixel Fonts" by Pix3M licensed CC-BY 3.0: https://opengameart.org/content/pixel-fonts-by-pix3m</p>
							<p className={classes.textStyle}>"Town Theme RPG" by cynicmusic licensed CC0: https://opengameart.org/content/town-theme-rpg</p>
							<p className={classes.textStyle}>"Heroic Demise" by Matthew Pablo licensed CC-BY 3.0: https://opengameart.org/content/heroic-demise-updated-version</p>
							<p className={classes.textStyle}>"Wood and Metal Sound Effects: Volume 2" by Ogrebane licensed CC0: https://opengameart.org/content/wood-and-metal-sound-effects-volume-2</p>
							<p className={classes.textStyle}>"48x48 Faces 2nd Sheet" by CharlesGabriel licensed CC-BY 3.0: https://opengameart.org/content/48x48-faces-2nd-sheet</p>
							<p className={classes.textStyle}>"Forest Background Art 2" by ramtam licensed CC-BY-SA 3.0: https://opengameart.org/content/forest-background-art-2</p>
							<p className={classes.textStyle}>"Artic Landscape - Background" by Delfos licensed CC-BY-SA 3.0, GPL 3.0, GPL 2.0: https://opengameart.org/content/artic-landscape-background</p>
							<p className={classes.textStyle}>"Pyramid Background" by bart licensed CC-BY-SA 3.0, GPL 3.0, GPL 2.0: https://opengameart.org/content/pyramid-background</p>
							<p className={classes.textStyle}>"SOS At Sea", "Queen Giving Orders to Princess" by -AP- licensed CC-BY-SA 3.0: https://opengameart.org/content/sos-at-sea, https://opengameart.org/content/queen-giving-orders-to-princess</p>
							<p className={classes.textStyle}>"Fossil Cave", "Backgrounds" by Ecrivain licensed CC0: https://opengameart.org/content/fossil-cave, https://opengameart.org/content/backgrounds-0</p>
							<p className={classes.textStyle}>"Fire RPG Background" by Ironthunder licensed CC-BY 4.0: https://opengameart.org/content/fire-rpg-background</p>
							<p className={classes.textStyle}>"Underwater Mountains - Version 1" by PumpkinGlitters licensed CC-BY 3.0: https://opengameart.org/content/underwater-mountains-version-1</p>
							<p className={classes.textStyle}>"Fantasy Background" by titi_son licensed CC0: https://opengameart.org/content/fantasy-background</p>
							<p className={classes.textStyle}>"ручьи" by kirill777 licensed CC-BY 3.0: https://opengameart.org/content/environment</p>
							<p className={classes.textStyle}>"Badlands" by Justin Nichol licensed CC-BY-SA 3.0, GPL 3.0: https://opengameart.org/content/flare-environment-concept-art-pack-1</p>
							<p className={classes.textStyle}>"Hidden-canyon" by Glondo licensed CC-BY 3.0: https://opengameart.org/content/hidden-canyon</p>
							<p className={classes.textStyle}>"Kujasa the beginning" by Sergei Churbanov (CatBlack), William.Thompsonj licensed CC-BY 3.0, GPL 3.0, GPL 2.0, OGA-BY 3.0: https://opengameart.org/content/kujasa-the-beginning</p>
							<p className={classes.textStyle}>"Space Background" by Cuzco licensed CC0: https://opengameart.org/content/space-background</p>
							<p className={classes.textStyle}>"Wooden Boards" by Keith333 licensed CC-BY 3.0: https://opengameart.org/content/wooden-boards-seamless-texture-normalmap</p>
		            		<p>
		            			Thanks for playing!<br/>
		            			Comments, Question, Concerns?<br/>
		            			Contact us at: <br/>
		            			LozengLabs@gmail.com
		            		</p>
		            	</div>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(Credits);