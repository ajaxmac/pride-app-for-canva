import {  VideoCard } from "@canva/app-ui-kit";
import type { GifType } from "../../types";
import styles from "./gif.css";
type Props = {
  gif: GifType;
};

const Gif = (props: Props) => {
  const { gif } = props;
  const { name, thumbnailUrl } = gif;

  return (
    <div className={styles.gif}>
      <VideoCard thumbnailUrl={thumbnailUrl} mimeType="image/gif" alt={name} />
    </div>
  );
}

export default Gif;
