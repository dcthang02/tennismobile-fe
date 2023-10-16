import TPRow from "@/components/Atom/TPRow";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import TPMemberItem from "@/components/Molecules/TPMemberItem";
import TPSearchBar from "@/components/Molecules/TPSearchBar";
import FilterIcon from "assets/icon/filter.svg";
import useNavigation from "@/hooks/useNavigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import TPModal from "@/components/Molecules/TPModal";
import { COLORS } from "@/constant/colors";
import TPText from "@/components/Atom/TPText";
import TPRadio from "@/components/Atom/TPRadio";
import TPDivide from "@/components/Atom/TPDivide";
import { Ionicons } from "@expo/vector-icons";
import useGetUsers from "@/hooks/useGetUsers";

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
    rank: 3,
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
    rank: 5,
  },
];

type TPListMemberProps = {
  navigation: any;
};

type TypeFilter = {
  name: "desc" | "asc";
  rank: "desc" | "asc";
};

const getPlayerFirstName = (name: string) => {
  return name.split(" ").slice(-1)[0];
};

export const TPListMember = ({ navigation }: TPListMemberProps) => {
  const { usersData, loadingUsers } = useGetUsers();

  const [searchStr, setSearchStr] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filterModal, setFilterModal] = useState<TypeFilter>({
    name: "asc",
    rank: "asc",
  });
  const [filter, setFilter] = useState<TypeFilter>({
    name: "asc",
    rank: "asc",
  });
  const [members, setMembers] = useState<Array<any> | null>(null);

  useEffect(() => {
    if (usersData) {
      const filterMembers = usersData.users.sort(
        (a: any, b: any) =>
          (filter.rank === "asc" ? a.rank - b.rank : b.rank - a.rank) ||
          (filter.name === "asc"
            ? getPlayerFirstName(a.name).localeCompare(
                getPlayerFirstName(b.name)
              )
            : getPlayerFirstName(b.name).localeCompare(
                getPlayerFirstName(a.name)
              ))
      );
      setMembers(
        searchStr
          ? filterMembers.filter((item: any) =>
              item.name.toLowerCase().includes(searchStr.toLowerCase())
            )
          : filterMembers
      );
    }
  }, [filter, searchStr, usersData]);

  const { handleNavigate } = useNavigation(navigation);
  const handleNavigateMemberInfo = useCallback(
    (id: string, name: string) => {
      handleNavigate("MemberInfo", { memberId: id, name: name });
    },
    [handleNavigate]
  );

  const handleOpenFilter = useCallback(() => {
    setFilterModal(filter);
    setShowModal(true);
  }, [filter]);

  const handleChangeFilter = useCallback(
    (key: "rank" | "name", value: "asc" | "desc") => {
      setFilterModal((prevFilter) => {
        const filterObj = { ...prevFilter };
        filterObj[key] = value;
        return filterObj;
      });
    },
    []
  );

  const handleApplyFilter = useCallback(() => {
    setShowModal(false);
    setFilter(filterModal);
  }, [filterModal]);

  const renderSelectGroup = useCallback(
    (
      title: string,
      options: { text: string; value: "asc" | "desc" }[],
      key: "rank" | "name"
    ) => {
      return (
        <>
          <TPWrapper gap={8}>
            <TPText variant="heading6">{title}</TPText>
            {options.map((item, i) => (
              <Pressable
                key={`option-filter-${item.text}-${i}`}
                onPress={() => handleChangeFilter(key, item.value)}
              >
                <TPRow style={styles.filterRow}>
                  <TPRadio active={item.value === filterModal[key]} />
                  <TPText variant="body14">{item.text}</TPText>
                </TPRow>
              </Pressable>
            ))}
          </TPWrapper>
          <TPDivide />
        </>
      );
    },
    [filterModal, handleChangeFilter]
  );

  const renderModal = useCallback(() => {
    return (
      <TPModal
        isShow={showModal}
        onCloseModal={() => {
          setShowModal(false);
        }}
        headerTitle="Lọc"
        headerRight={
          <TPButton
            title="Xóa"
            buttonType="text"
            backgroundColor="transparent"
            color={COLORS.green[600]}
            onPress={() => {
              setFilter({ name: "asc", rank: "asc" });
              setShowModal(false);
            }}
          />
        }
      >
        <TPWrapper gap={10} paddingHorizontal={10}>
          {renderSelectGroup(
            "Hạng",
            [
              { text: "Từ cao đến thấp", value: "asc" },
              { text: "Từ thấp đến cao", value: "desc" },
            ],
            "rank"
          )}
          {renderSelectGroup(
            "Tên",
            [
              { text: "Từ A - Z", value: "asc" },
              { text: "Từ Z - A", value: "desc" },
            ],
            "name"
          )}
          <TPButton
            title="Áp dụng"
            size="large"
            onPress={handleApplyFilter}
            color={COLORS.charcoal[800]}
          />
        </TPWrapper>
      </TPModal>
    );
  }, [renderSelectGroup, showModal, handleApplyFilter]);

  if (!members) return null;

  return (
    <TPWrapper gap={15}>
      {renderModal()}
      <TPRow style={styles.searchBarRow}>
        <View style={{ flex: 1 }}>
          <TPSearchBar
            placeholder="Tìm kiếm thành viên"
            backgroundColor="transparent"
            onChange={setSearchStr}
          />
        </View>
        <TPButton
          title=""
          startIcon={<Ionicons name="ios-filter" size={24} color="black" />}
          size="tiny"
          buttonType="text"
          backgroundColor="transparent"
          onPress={handleOpenFilter}
        />
      </TPRow>
      <FlatList
        data={[...members]}
        ListEmptyComponent={() => (
          <TPText variant="heading6" alignCenter>
            Không có dữ liệu
          </TPText>
        )}
        renderItem={({ item, index }) => (
          <TPMemberItem
            player={{
              id: item.id,
              name: item.name,
              avatar: item.image,
            }}
            isFirst={index === 0}
            isLast={index === members.length - 1}
            onPress={() => handleNavigateMemberInfo(item.id, item.name)}
          />
        )}
        keyExtractor={(item: any) => `member-${item.id}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </TPWrapper>
  );
};

const styles = StyleSheet.create({
  searchBarRow: {
    gap: 15,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  filterRow: {
    gap: 8,
    alignItems: "center",
  },
});
