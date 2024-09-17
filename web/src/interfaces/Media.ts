export interface Media {
  id: string;
  url: string;
  status: number;
  type: number; // 1. image # 2. video
  folder: string;
}

export interface MediaProfileDTO {
  post_id: string;
  user_id: string;
  media: Media;
}
