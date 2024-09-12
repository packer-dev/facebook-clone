import { useEffect, useState } from "react";
import { Audio } from "expo-av";

const useSound = (index: number) => {
  const [sound, setSound] = useState<any>();
  const messageNotice = require("../assets/audio.mp3");
  const storyNotice = require("../assets/nhac-chuong-trend-ve-la-co-to-quoc-tikttok.mp3");
  const callNotice = require("../assets/call-sound.mp3");
  const sounds = [messageNotice, storyNotice, callNotice];
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(sounds[index || 0]);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return { sound, playSound };
};

export default useSound;
