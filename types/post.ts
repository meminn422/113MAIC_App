export type ExchangeType = '物物交換' | '現金' | '免費';

export interface Post {
  id: string;
  title: string;
  type: string;             // 食物類型：甜點、蔬果…
  imageUrl?: string;
  date: string;             // 有效日期
  location: string;         // 文字地點
  distance?: number;        // GPS 距離（可選）
  exchangeType: ExchangeType;
  exchangeTarget?: string;  // 換什麼
  price?: number;           // 若是現金交換
  note?: string;
  userId?: string;          // 發文者 ID
}
