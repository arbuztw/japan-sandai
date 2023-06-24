import Prefecture from "~/types/prefecture";
import Spot from "~/types/spot";
import { SpotAttr, toSpotAttrArray } from "./spot_visit";
import { PREFECTURE_SPOTS } from "./prefecture_spots";

export class PrefectureVisit {
  public prefecture: Prefecture;
  public spots: Array<SpotAttr>;

  public constructor(prefecture: Prefecture, visited: Record<Spot, boolean>) {
    this.prefecture = prefecture;
    this.spots = toSpotAttrArray(PREFECTURE_SPOTS[prefecture], visited);
  }
}
