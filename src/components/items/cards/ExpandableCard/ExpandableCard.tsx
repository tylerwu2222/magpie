import { Share, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextInput from '../../../inputs/textInput/TextInput';
import ShareIconButton from '../../../buttons/common_icon_buttons/ShareIconButton';
import FavoriteIconButton from '../../../buttons/common_icon_buttons/FavoriteIconButton';

const ExpandableCard = ({
  title = '',
  subtitle = '',
  text = '',
  imageSource = '',
  hasTitle = true,
  hasSubTitle = true,
  hasText = true,
  hasImage = true,
  isEditable = true,
  isSharable = true
}) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      
    >
      <CardMedia
        sx={{ height: 140 }}
        image={"/assets/images/" + imageSource}
        title="bird"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {subtitle}
        </Typography>

        {
          isEditable ? <TextInput /> :
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
        }
      </CardContent>

      {/* card button actions */}
      <CardActions disableSpacing>
        <FavoriteIconButton />
        <ShareIconButton />
      </CardActions>

      {/* collapsable content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ExpandableCard

const styles = StyleSheet.create({})