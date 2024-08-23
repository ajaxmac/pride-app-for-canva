import { useState } from "react";
import { Text, ImageCard } from "@canva/app-ui-kit";
import type { FlagType } from "../../types";
import { upload } from "@canva/asset";
import { addNativeElement, ui } from "@canva/design";
import styles from "./flag.css";

type Props = {
  flag: FlagType;
  variant: "default" | "small";
};

const Flag = (props: Props) => {
  const { flag, variant = "default" } = props;
  const { name, mimeType, thumbnailUrl, yearCreated, url } = flag;
  const [isLoading, setIsLoading] = useState(false);
  const type = "IMAGE";

  /**
   * upload flag
   */
  const upLoadFlag = async () => {
    return upload({
      type,
      mimeType,
      url,
      thumbnailUrl,
    });
  };

  /**
   * Add a flag to the canvas
   */
  const addFlag = async () => {
    setIsLoading(true);

    const result = await upLoadFlag();
    const { ref } = result;

    // Wait for the upload to complete
    await result.whenUploaded();
    setIsLoading(false);

    // Add the image to the design
    await addNativeElement({
      type,
      ref,
    });
  };

  const onClick = () => {
    addFlag();
  };

  /**
   * drag onto canvas
   */
  const handleDragStart = async (event: React.DragEvent<HTMLElement>) => {
    const { thumbnailUrl } = flag;
    setIsLoading(true);

    await ui.startDrag(event, {
      type,
      resolveImageRef: () => {
        return upLoadFlag();
      },
      previewUrl: thumbnailUrl,
      previewSize: {
        width: 320,
        height: 212,
      },
      fullSize: {
        width: 320,
        height: 212,
      },
    });

    setIsLoading(false);
  };

  return variant === "small" ? (
    <div className={styles.flagSmall}>
      <ImageCard thumbnailUrl={thumbnailUrl} alt={name} />
    </div>
  ) : (
    <div className={styles.flag}>
      <div className={styles.flagContainer}>
        <ImageCard
          thumbnailUrl={thumbnailUrl}
          onClick={onClick}
          alt={name}
          onDragStart={handleDragStart}
          loading={isLoading}
        />
      </div>
      <div className={styles.details}>
        <Text>{name}</Text>
        {yearCreated ? <Text>{yearCreated}</Text> : null}
      </div>
    </div>
  );
};

export default Flag;
