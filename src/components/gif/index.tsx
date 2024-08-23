import { useState, useEffect } from "react";
import { VideoCard } from "@canva/app-ui-kit";
import type { GifType } from "../../types";
import { upload } from "@canva/asset";
import type { AssetUploadOptions, VideoRef } from "@canva/asset";
import { addNativeElement, ui } from "@canva/design";
import type { VideoDragConfig } from "@canva/design";
import styles from "./gif.css";

type Props = {
  allowClick: boolean;
  gif: GifType;
};

const Gif = (props: Props) => {
  const { allowClick = true, gif } = props;
  const { name, thumbnailUrl } = gif;
  const [isLoading, setIsLoading] = useState(false);
  const [shortThumbnailUrl, setShortThumbnailUrl] = useState<string>("");
  const type = "VIDEO";
  const mimeType = "image/gif";

  useEffect(() => {
    if (thumbnailUrl) {
      const shortUrl = thumbnailUrl.split("?")[0];
      setShortThumbnailUrl(shortUrl);
    }
  }, [thumbnailUrl]);

  /**
   * upload Gif
   */
  const uploadGif = async () => {
    const gifPackage = {
      type,
      mimeType,
      url: shortThumbnailUrl,
      thumbnailImageUrl: shortThumbnailUrl,
      thumbnailVideoUrl: shortThumbnailUrl,
    } as AssetUploadOptions;

    return upload(gifPackage);
  };

  /**
   * Add on Click
   */
  const addGif = async () => {
    if (!allowClick) {
      return;
    }

    setIsLoading(true);
    const result = await uploadGif();
    const { ref } = result as { ref: VideoRef };

    // Wait for the upload to complete
    await result.whenUploaded();
    setIsLoading(false);

    // Add the image to the design
    await addNativeElement({
      type,
      ref,
    });
  };

  /**
   * Drag onto canvas
   */
  const handleDragStart = async (event: React.DragEvent<HTMLElement>) => {
    setIsLoading(true);

    await ui.startDrag(event, {
      type,
      resolveVideoRef: async () => {
        return uploadGif();
      },
      previewUrl: thumbnailUrl,
      previewSize: {
        width: 200,
        height: 200,
      },
      fullSize: {
        width: 480,
        height: 480,
      },
    } as VideoDragConfig);

    setIsLoading(false);
  };

  return (
    <div className={styles.gif}>
      <VideoCard
        thumbnailUrl={thumbnailUrl}
        mimeType={mimeType}
        alt={name}
        loading={isLoading}
        onClick={addGif}
        onDragStart={handleDragStart}
      />
    </div>
  );
};

export default Gif;
