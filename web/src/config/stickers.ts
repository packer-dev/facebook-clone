export type StickerProps = {
  id: number;
  col: number;
  row: number;
  group: string;
  feel?: string;
  src: string;
  type?: string;
};

const stickers: StickerProps[] = [
  {
    id: 1,
    col: 5,
    row: 4,
    group: "002",
    feel: "sad",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952759/Sticker/ND10000000_ukycd7.png",
  },
  {
    id: 2,
    col: 5,
    row: 4,
    group: "002",
    feel: "fun",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952759/Sticker/ND10000001_h8kvmk.png",
  },
  {
    id: 3,
    col: 6,
    row: 5,
    group: "003",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952759/Sticker/ND10000003_e5vmxt.png",
  },
  {
    id: 4,
    col: 3,
    row: 3,
    group: "004",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952759/Sticker/ND10000002_gn3sli.png",
  },
  {
    id: 5,
    col: 4,
    row: 3,
    group: "005",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952759/Sticker/ND10000004_ern2dx.png",
  },
  {
    id: 6,
    col: 4,
    row: 3,
    group: "006",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952760/Sticker/ND10000006_ulzfk8.png",
  },
  {
    id: 70,
    col: 4,
    row: 4,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1627357037/Sticker/oqw3mpinaam8k5fxypwe.png",
  },
  {
    id: 8,
    col: 4,
    row: 4,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952761/Sticker/ND10000007_z7jmnf.png",
  },
  {
    id: 79,
    col: 4,
    row: 4,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952760/Sticker/ND10000005_hrilc5.png",
  },
  {
    id: 10,
    col: 4,
    row: 4,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1627357038/Sticker/ai0kctpieamra9vcrsc6.png",
  },
  {
    id: 11,
    col: 4,
    row: 3,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952761/Sticker/ND10000008_agerdc.png",
  },
  {
    id: 12,
    col: 4,
    row: 4,
    group: "001",
    type: "",
    src: "https://res.cloudinary.com/tratahuong01/image/upload/v1619952760/Sticker/ND10000009_ppep2x.png",
  },
  {
    id: 13,
    col: 4,
    row: 3,
    group: "007",
    type: "",
    src: "http://res.cloudinary.com/tratahuong01/image/upload/v1622799205/Sticker/shrnbodrfyhsnxw0hwro.png",
  },
  {
    id: 14,
    col: 3,
    row: 2,
    group: "008",
    type: "",
    src: "http://res.cloudinary.com/tratahuong01/image/upload/v1622799501/Sticker/nyfqqnjhor1hsi5lppji.png",
  },
];

export default stickers;
