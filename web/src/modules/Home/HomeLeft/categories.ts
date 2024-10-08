import { PAGE_MESSENGER, PAGE_PROFILE, PAGE_WATCH } from "@/constants/Config";

export type ItemCategoryHomeProps = {
  id: number;
  image: string;
  label: string;
  link: (id: string) => string;
};

const categories: ItemCategoryHomeProps[] = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967753/ImageHomeLeft/tSXYIzZlfrS_femvcs.png",
    label: "Friends",
    link: (id: string) => `${PAGE_PROFILE}/${id}/friends`,
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967678/ImageHomeLeft/ocBBGg-gRd5_jpvzku.png",
    label: "Messenger",
    link: () => PAGE_MESSENGER,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/FhOLTyUFKwf_kp6e9o.png",
    label: "Watch",
    link: () => PAGE_WATCH,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/Im_0d7HFH4n_rw3h0w.png",
    label: "Groups",
    link: null,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967678/ImageHomeLeft/MN44Sm-CTHN_qjalgj.png",
    label: "Marketplace",
    link: null,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639968009/ImageHomeLeft/tYxGXJRPH5q_a7dynm.png",
    label: "Memories",
    link: null,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/KlDlsO3UxDM_xb0s7r.png",
    label: "Saved",
    link: null,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967676/ImageHomeLeft/0gH3vbvr8Ee_fdzhij.png",
    label: "Pages",
    link: null,
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967676/ImageHomeLeft/_ieo6WvmKuc_avy9s4.png",
    label: "Events",
    link: null,
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967678/ImageHomeLeft/vEc1FLp5rSK_lshqus.png",
    label: "Most Recent",
    link: null,
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/dMRaTGpU31O_d9cdza.png",
    label: "Jobs",
    link: null,
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/FMv4tTIpfwB_ardza1.png",
    label: "Fundraisers",
    link: null,
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/JQCVtO0LVjk_zgbdc9.png",
    label: "Gaming",
    link: null,
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967678/ImageHomeLeft/vWBUs7aYAiK_ynt9tw.png",
    label: "EnsonetPay",
    link: null,
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/DxwxddVlL2T_dbzy2o.png",
    label: "Recent Ad Activity",
    link: null,
  },
  {
    id: 15,
    label: "Emotional Health",
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967678/ImageHomeLeft/z2lQL_jKCWe_fgckg5.png",
    link: null,
  },
  {
    id: 16,
    label: "Ad Center",
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967677/ImageHomeLeft/lqymE2iRETE_addbnx.png",
    link: null,
  },
  {
    id: 17,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967676/ImageHomeLeft/1cs0yeZSP7a_t8fe0s.png",
    label: "Live",
    link: null,
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/ensonet-dev/image/upload/v1639967676/ImageHomeLeft/CToz82jp77m_vafglz.png",
    label: "Weather",
    link: null,
  },
];
export default categories;
