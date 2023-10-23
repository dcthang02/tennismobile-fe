import React from "react";
import { TPPlayer } from "./TPPlayer";
import { ScrollView, StyleSheet, View } from "react-native";
import { TPPlayerStatistic } from "./TPPlayerStatistic";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPText from "@/components/Atom/TPText";
import { COLORS } from "@/constant/colors";
import { TPPlayerUtility } from "./TPPlayerUtility";
import { TPPlayerFreeTime } from "./TPPlayerFreeTime";
import TPChangePassword from "../TPChangePassword";

// const member = {
//   avatar:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU",
//   rank: 10,
//   level: 3,
//   age: 25,
//   club: {
//     id: "123",
//     name: "Club Tech Fox",
//   },
//   statistic: {
//     matches: {
//       all: 125,
//       won: 50,
//       lost: 75,
//     },
//     leagues: {
//       matches: 45,
//       won: 15,
//       lost: 30,
//     },
//     score: {
//       sum: 375,
//       won: 250,
//       average: 180,
//     },
//   },
//   utility: {
//     "Hãng vợt": ["Wilson", "tennis-ball"],
//     "Thông số vợt": ["305G", "tennis-racket"],
//     "Cước sử dụng": ["Zone", "transform-origin"],
//     Backhand: ["Hai tay", "gloves"],
//     Forehand: ["Tay thuận", "dead-hand"],
//     "Tay thuận": ["Tay phải", "tennis"],
//     "Hãng bóng": ["Dunlop", "tennis-ball"],
//     "Quần áo": ["Hugo Boss", "tshirt"],
//     "Size quần áo": ["M", "resize-x"],
//     "Hãng giày": ["New Balance", "gym-shoes"],
//     "Size giày": ["44", "resize-y"],
//   },
//   freeTime: [
//     [true, false, false],
//     [false, true, true],
//     [false, false, true],
//     [true, false, false],
//     [false, true, false],
//     [false, true, true],
//     [false, true, true],
//   ],
// };

type TPPlayerProfileProps = {
  editable?: boolean;
  member: any;
};

export const TPPlayerProfile = ({
  member,
  editable = false,
}: TPPlayerProfileProps) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <TPPlayer
        name={member.name}
        avatar={member.avatar}
        rank={member.rank}
        level={member.level}
        age={member.age}
        clubName={member.club.name}
        editable={editable}
      />
      <TPPlayerStatistic
        matches={member.statistic.matches}
        leagues={member.statistic.leagues}
        score={member.statistic.score}
      />
      {/* <TPPlayerUtility utility={member.utility} editable={editable} /> */}
      <TPPlayerFreeTime freeTime={member.freeTime} editable={editable} />
      {editable && <TPChangePassword />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
