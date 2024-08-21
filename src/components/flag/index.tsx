import { useState } from "react";
import { Text, ImageCard } from "@canva/app-ui-kit";
import type { FlagType } from "../../types";
import { upload } from "@canva/asset";
import { addNativeElement, ui } from "@canva/design";
import styles from "./flag.css";

type Props = {
  flag: FlagType;
};

const Flag = (props: Props) => {
  const { flag } = props;
  const { name, slug, thumbnailUrl, yearCreated } = flag;
  const [isLoading, setIsLoading] = useState(false);

  const upLoadFlag = async (flag: FlagType) => {
    const { url, thumbnailUrl, mimeType } = flag;

    return upload({
      type: "IMAGE",
      mimeType,
      url,
      thumbnailUrl,
    });
  };

  /**
   * Add a flag to the canvas
   */
  const addFlag = async (flag: FlagType) => {
    setIsLoading(true);

    const result = await upLoadFlag(flag);
    const { ref } = result;

    // Wait for the upload to complete
    await result.whenUploaded();
    setIsLoading(false);

    // Add the image to the design
    await addNativeElement({
      type: "IMAGE",
      ref,
    });
  };

  const onClick = (flag: FlagType) => {
    addFlag(flag);
  };

  const handleDragStart = async (
    event: React.DragEvent<HTMLElement>,
    flag: FlagType
  ) => {
    const { url, thumbnailUrl, mimeType } = flag;
    setIsLoading(true);

    await ui.startDrag(event, {
      type: "IMAGE",
      resolveImageRef: () => {
        return upload({
          type: "IMAGE",
          mimeType,
          url,
          thumbnailUrl,
        });
      },
      previewUrl: url,
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

  return (
    <div key={slug} className={styles.flag}>
      <div className={styles.flagContainer}>
        <ImageCard
          thumbnailUrl={thumbnailUrl}
          onClick={() => onClick(flag)}
          alt={name}
          onDragStart={(e: React.DragEvent<HTMLElement>) =>
            handleDragStart(e, flag)
          }
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
