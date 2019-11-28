import React, { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Carousel from "@giphy/react-components/dist/components/carousel";
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import Theme from "./Theme";
import { Styles } from "react-with-styles";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import IGif from "@giphy/js-types/dist/gif";
import copy from "copy-text-to-clipboard";

import Searchbar from "./Searchbar";
import CopiedOverlay from "./CopiedOverlay";

const GIF_HEIGHT = 150;
const giphy = new GiphyFetch('n8d2yuUovXC5hT1ZrrV7b8lfFi1Gp8hp');

function stylesFn({ color, unit }: typeof Theme): Styles {
  return ({
    container: {
      position: "relative",
      background: color.background.dark,
      width: 300,
      padding: unit
    },
    carouselContainer: {
      position: "relative",
      height: GIF_HEIGHT,
      marginTop: unit
    },
    carouselLoadingOverlay: {
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  });
}

function createMarkdownLink(gif: IGif) {
  console.log(gif);
  const { title, id } = gif;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  return `![${title || "gif"}](${url})`;
}

export default function Popup() {
  const { css, styles } = useStyles({ stylesFn });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [showCopiedOverlay, setShowCopiedOverlay] = useState(false);

  useEffect(() => {
    if (showCopiedOverlay) {
      setTimeout(() => setShowCopiedOverlay(false), 600);
    }
  }, [showCopiedOverlay]);

  const handleSearch = (newSearchTerm: string) => {
    setLoading(true);
    setSearchTerm(newSearchTerm);
  };

  const handleGifClicked = (gif: IGif) => {
    copy(createMarkdownLink(gif));
    setShowCopiedOverlay(true);
  };

  return <div {...css(styles.container)}>
    <Searchbar onSearch={handleSearch} />
    <div {...css(styles.carouselContainer)}>
      <Carousel key={searchTerm}
        gifHeight={GIF_HEIGHT}
        fetchGifs={() => {
          if (searchTerm) {
            return giphy.search(searchTerm);
          }

          return giphy.trending();
        }}
        onGifsFetched={() => setLoading(false)}
        onGifClick={handleGifClicked}
      />
      <div {...css(styles.carouselLoadingOverlay)}>{loading && <Stack verticalFill verticalAlign="center">
        <Spinner />
      </Stack>}</div>
    </div>
    {showCopiedOverlay && <CopiedOverlay />}
  </div>
}