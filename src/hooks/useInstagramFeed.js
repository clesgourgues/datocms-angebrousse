import { useState, useEffect } from 'react';

export const useInstagramFeed = ({ userId, photoCount }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getInstaFeed() {
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":${userId},"first":${photoCount},"after":null}`
      );

      const { data } = await response.json();
      if (data) {
        const photos = data.user.edge_owner_to_timeline_media.edges.map(({ node }) => {
          const { id } = node;
          // const caption = node.edge_media_to_caption.edges[0].node.text;
          const thumbnail = node.thumbnail_resources.find(
            thumbnail => thumbnail.config_width === 240
          );
          const { src, config_width: width, config_height: height } = thumbnail;
          // const url = `https://www.instagram.com/p/${node.shortcode}`;
          return { id, src, width, height };
        });
        setPhotos(photos);
      } else return null;
    }
    getInstaFeed();
  });

  return photos;
};
