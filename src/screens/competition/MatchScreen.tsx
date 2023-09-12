import React, { useCallback } from "react";
import useNavigation from "../../hooks/useNavigation";
import { MatchProps } from "@/utils/createProps";
import TPBackground from "@/components/Atom/TPBackgroud";
import TPTabHeader from "@/components/Molecules/TPTabHeader";
import TPWrapper from "@/components/Atom/TPWrapper";
import TPButton from "@/components/Molecules/TPButton";
import { COLORS } from "@/constant/colors";
import TPIcon from "@/components/Atom/TPIcon";
import { TPPlayer } from "@/components/Organisms/TPPlayerProfile/TPPlayer";
import TPText from "@/components/Atom/TPText";
import { FlatList } from "react-native";
import TPMatchItem from "@/components/Organisms/TPMatchItem";

const player = {
  name: "Tư Mã Ý",
  avatar:
    "https://nhadepso.com/wp-content/uploads/2023/01/199-hinh-anh-pikachu-cute-de-thuong-dang-yeu-nhat-hien-nay_2.jpg",
  rank: 15,
  level: 2,
  age: 28,
};

const matches: MatchType[] = [
  {
    id: "123456789",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456788",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456787",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456786",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456785",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456784",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456783",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456782",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456781",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456780",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456779",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456778",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456776",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
  {
    id: "123456774",
    players: [
      {
        id: "123",
        name: "Nguyễn Minh Vũ Hiền",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
      {
        id: "124",
        name: "Nguyễn Superman",
        avatar:
          "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
      },
    ],
    stadium: {
      id: "123",
      name: "Sân tennis ngõ 111 Cù Chính Lan",
      address:
        "12 Ng. 111 P. Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội, Vietnam",
      images: [
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg",
        "https://i.guim.co.uk/img/media/b30a59fca8428d70c1c31d1430862400e2e0c3bc/0_110_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=c6d078d72c08033cdd3bcd807f5c079f",
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/VV%20Stadium%20Image.PNG?auto=webp&itok=936EQk1b",
      ],
    },
    mode: "multiple",
    date: new Date(),
    playerCount: 5,
    owner: {
      id: "123",
      name: "Nguyễn Minh Vũ Hiền",
      avatar:
        "https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png",
    },
    status: "pending",
  },
];

const MatchScreen = ({ navigation }: MatchProps) => {
  const { handleNavigate } = useNavigation(navigation);
  const { name, avatar, rank, level, age } = player;

  const handleNavigateMatch = useCallback(
    (id: string) => {
      handleNavigate("HomeMatch", {
        matchId: id,
      });
    },
    [handleNavigate]
  );

  const renderHeader = useCallback(() => {
    return (
      <TPWrapper gap={15} marginBottom={10}>
        <TPTabHeader
          title="Đấu trường"
          right={
            <TPButton
              title="Tạo trận"
              buttonType="text"
              color={COLORS.green[600]}
              size="small"
              startIcon={<TPIcon name="add" color={COLORS.green[600]} />}
              onPress={() => handleNavigate("CreateMatch")}
            />
          }
        />
        <TPPlayer
          name={name}
          avatar={avatar}
          rank={rank}
          level={level}
          age={age}
          renderType={2}
        />

        <TPText variant="heading5">Danh sách trận đấu</TPText>
      </TPWrapper>
    );
  }, [name, avatar, rank, level, age]);

  const renderMatches = useCallback(() => {
    return (
      <TPWrapper marginBottom={10}>
        <FlatList
          ListHeaderComponent={renderHeader}
          style={{ gap: 8 }}
          data={matches}
          renderItem={({ item, index }) => (
            <TPMatchItem
              match={item}
              onPress={() => handleNavigateMatch(item.id)}
            />
          )}
          keyExtractor={(item, index) => `matches-${index}-${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </TPWrapper>
    );
  }, [matches]);
  return (
    <TPBackground>
      <TPWrapper paddingHorizontal={16}>
        {matches.length !== 0 && renderMatches()}
      </TPWrapper>
    </TPBackground>
  );
};

export default MatchScreen;
