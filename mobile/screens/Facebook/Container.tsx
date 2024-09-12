import Wrapper from "../Wrapper";
import { View, ScrollView } from "react-native";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import tailwind from "@/tailwind";

type ContainerProps = {
  children?: ReactNode;
  route?: any;
  scrollView?: boolean;
};

const Container = ({ children, route, scrollView }: ContainerProps) => {
  return (
    <Wrapper overflowHidden>
      <View style={tailwind(`flex-1 flex-col`)}>
        <View style={tailwind(`flex-1`)}>
          {scrollView ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </View>
        <Navbar route={route} />
      </View>
    </Wrapper>
  );
};

export default Container;
