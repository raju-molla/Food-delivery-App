import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import CustomHeader from "../component/CustomHeader";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index.tsx",
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{
        header:()=>{
          return <CustomHeader />
        }
      }} />
    </Stack>
  );
}
