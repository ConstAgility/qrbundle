export type QrbundleId =
  | "qrbundle";

export type QrbundleKey =
  | "Qrbundle";

export enum Qrbundle {
  Qrbundle = "qrbundle",
}

export const QRBUNDLE_CODEPOINTS: { [key in Qrbundle]: string } = {
  [Qrbundle.Qrbundle]: "61697",
};
