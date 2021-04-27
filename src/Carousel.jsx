import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { red, blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({}));

const Carousel = ({ handleOpen, setHandleOpen, isMobile }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box style={{ marginTop: "64px" }}>
      <Typography variant="h3"> Carousel </Typography>
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={<img src="/assets/21.jpg" alt="slide" />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={<img src="/assets/22.jpg" alt="slide" />}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={<img src="/assets/23.jpg" alt="slide" />}
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </Box>
  );
};

export default Carousel;
