import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { Audio } from "expo-av";
import tailwind from "@/tailwind";

type SoundProps = {
  isPlay: boolean;
};

export default function Sound({ isPlay }: Readonly<SoundProps>) {
  const [sound, setSound] = useState<any>();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/nhac-chuong-trend-ve-la-co-to-quoc-tikttok.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound, isPlay]);

  return (
    <View style={tailwind(`m-10 absolute top-10 left-10 z-30`)}>
      <Button title="click" onPress={playSound} />
    </View>
  );
}
