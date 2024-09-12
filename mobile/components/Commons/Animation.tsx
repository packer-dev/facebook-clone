import React, { useEffect } from "react";
import { View, Image } from "react-native";

type AnimationProps = {
  sticker: any;
  size?: number;
};

type StickerAnimationProps = {
  size: number;
  row: number;
  col: number;
  uri: string;
  miss: number;
};

const Animation = ({ sticker, size = 90 }: AnimationProps) => {
  return (
    <StickerAnimation
      row={sticker?.row || 3}
      col={sticker?.col || 4}
      size={size}
      uri={
        sticker?.src ||
        `https://scontent.fhan14-5.fna.fbcdn.net/v/t39.1997-6/36915121_237320723754254_4581068536604000256_n.png?stp=dst-png_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=ba09c1&_nc_eui2=AeFwKi7WJa8bpvNm-N88Nh5N1UlKznIktzLVSUrOciS3Mt4BaFKR4bjiIBte_Drvq1pNIZRjR69PNXNKntSsnkyi&_nc_ohc=tHZP_m5L5mwQ7kNvgFV-tFG&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAH34ns0hnZUq4GsmAxtkm-NBSiP828sGemDl9fFvJMBg&oe=66BAB07A`
      }
      miss={0}
    />
  );
};

const StickerAnimation = ({
  size,
  row,
  col,
  uri,
  miss = 0,
}: StickerAnimationProps) => {
  const [translateX, setTranslateX] = React.useState(0);
  const [translateY, setTranslateY] = React.useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (
        Math.abs(translateY) / size === row - 1 &&
        Math.abs(translateX) / size === col - miss - 1
      ) {
        setTranslateX(0);
        setTranslateY(0);
        return;
      }
      if (translateX === size * -(col - 1)) {
        if (translateY === size * -(row - 1)) {
          setTranslateX(0);
          setTranslateY(0);
        } else {
          setTranslateX(0);
          setTranslateY(translateY - size);
        }
      } else {
        setTranslateX(translateX - size);
      }
      clearTimeout(timeOut);
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateX, translateY]);
  return (
    <View
      style={{
        overflow: "hidden",
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <Image
        source={{
          uri: uri || `https://picsum.photos/536/354`,
        }}
        style={{
          left: translateX,
          top: translateY,
          width: size * col,
          height: size * row,
          position: "absolute",
          objectFit: "cover",
        }}
      />
    </View>
  );
};

export default Animation;
