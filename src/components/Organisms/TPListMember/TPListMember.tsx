import TPWrapper from "@/components/Atom/TPWrapper";
import TPMemberItem from "@/components/Molecules/TPMemberItem";
import useNavigation from "@/hooks/useNavigation";
import React, { useCallback } from "react";
import { FlatList } from "react-native";

const MEMBERS = [
  {
    id: "000",
    name: "Nguyễn Hồng Thái",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 2,
  },
  {
    id: "001",
    name: "Trương Vô Kỵ",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 1,
  },
  {
    id: "002",
    name: "Mai Siêu Phong",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 5,
  },
  {
    id: "003",
    name: "Hoàng Dược Sư",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 3,
  },
  {
    id: "004",
    name: "Quách Tĩnh",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 6,
  },
  {
    id: "005",
    name: "Chu Bá Thông",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
    rank: 4,
  },
];

type TPListMemberProps = {
  navigation: any;
};

export const TPListMember = ({ navigation }: TPListMemberProps) => {
  const { handleNavigate } = useNavigation(navigation);
  const handleNavigateMemberInfo = useCallback(
    (id: string, name: string) => {
      handleNavigate("MemberInfo", { memberId: id, name: name });
    },
    [handleNavigate]
  );
  return (
    <TPWrapper>
      <FlatList
        data={MEMBERS}
        renderItem={({ item, index }) => (
          <TPMemberItem
            player={item}
            isFirst={index === 0}
            isLast={index === MEMBERS.length - 1}
            onPress={() => handleNavigateMemberInfo(item.id, item.name)}
          />
        )}
        keyExtractor={(item) => `member-${item.id}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </TPWrapper>
  );
};
