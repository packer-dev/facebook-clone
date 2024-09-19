import { AnswerQuestion } from "@/interfaces/Post";
import { User } from "@/interfaces/User";
import tailwind from "@/tailwind";
import { Image, Text, View } from "react-native";

const AnswerQuestionContent = ({
  answerQuestion,
  user,
}: {
  user: User;
  answerQuestion: AnswerQuestion;
}) => {
  return (
    <View
      style={[
        tailwind(
          `w-full mx-auto flex justify-center items-center rounded-lg relative`
        ),
        { height: 550 },
      ]}
    >
      <Image
        source={{ uri: answerQuestion?.content }}
        style={tailwind(`absolute top-0 left-0 w-full h-full`)}
      />
      <View>
        <View style={tailwind(`w-48 h-48 mx-auto relative`)}>
          <Image
            src={user.avatar}
            alt=""
            style={tailwind(
              `w-full h-full rounded-full object-cover shadow-lv1 mx-auto shadow-lg`
            )}
          />
          <Text
            style={tailwind(
              `py-1.5 px-4 text-sm absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 rouned-full bg-red-600 text-white font-semibold`
            )}
          >
            {`A&Q`}
          </Text>
        </View>
        <View style={tailwind(`w-full px-4 mt-4`)}>
          <View
            style={tailwind(
              `${
                answerQuestion?.content.length >= 105 ? "text-2xl" : "text-3xl"
              } w-full flex justify-center text-white font-semibold break-all text-center`
            )}
          >
            {answerQuestion?.value}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnswerQuestionContent;
