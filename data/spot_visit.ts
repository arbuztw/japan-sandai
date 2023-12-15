import Spot from "~/types/spot";
import { SandaiVisit } from "./sandai_visit";
import { SANDAI_TYPE_SPOTS } from "./sandai_type_spots";
import SandaiType from "~/types/sandai_type";
import Prefecture from "~/types/prefecture";
import { PREFECTURE_SPOTS } from "./prefecture_spots";
import { PrefectureVisit } from "./prefecture_visit";

export interface SpotAttr {
  spot: Spot;
  visited: Ref<Boolean>;
}

export function toSpotAttrArray(
  spots: Spot[],
  visited: Record<Spot, Boolean>
): SpotAttr[] {
  return spots.map((spot) => {
    return {
      spot,
      visited: toRef(visited, spot),
    };
  });
}

export class SpotVisit {
  public visited = reactive({
    [Spot.NAGOYA_CASTLE]: false,
    [Spot.OSAKA_CASTLE]: false,
    [Spot.KUMAMOTO_CASTLE]: false,
    [Spot.HAKODATE_NIGHT]: false,
    [Spot.MAYA_NIGHT]: false,
    [Spot.INASA_NIGHT]: false,
    [Spot.KENROKU_EN]: false,
    [Spot.KORAKU_EN]: false,
    [Spot.KAIRAKU_EN]: false,
    [Spot.MATSUSHIMA_VIEW]: false,
    [Spot.AMANOHASHIDATE_VIEW]: false,
    [Spot.ITSUKUSHIMA_VIEW]: false,
    [Spot.SHIRAKAWA_VILLAGE]: false,
    [Spot.MIYAMA_VILLAGE]: false,
    [Spot.OUCHIJUKU_VILLAGE]: false,
    [Spot.GERO_SPRING]: false,
    [Spot.ARIMA_SPRING]: false,
    [Spot.KUSATSU_SPRING]: false,
    [Spot.ISE_JINGU]: false,
    [Spot.MEIJI_JINGU]: false,
    [Spot.HEIAN_JINGU]: false,
    [Spot.ATSUTA_JINGU]: false,
    [Spot.KANDA_MATSURI]: false,
    [Spot.GION_MATSURI]: false,
    [Spot.TENJIN_MATSURI]: false,
    [Spot.NAGAO_HANABI]: false,
    [Spot.OOMAGARI_HANABI]: false,
    [Spot.TSUCHIURA_HANABI]: false,
    [Spot.KITANO_TEN]: false,
    [Spot.DAIZAIFU_TEN]: false,
    [Spot.WAKAURA_TEN]: false,
    [Spot.YOKOHAMA_CH]: false,
    [Spot.NANKIN_CH]: false,
    [Spot.SHINCHI_CH]: false,
    [Spot.YOSHIHARA_FU]: false,
    [Spot.NAKASU_FU]: false,
    [Spot.SUSUKINO_FU]: false,
    [Spot.UJI_TEA]: false,
    [Spot.SHIZUOKA_TEA]: false,
    [Spot.SAYAMA_TEA]: false,
    [Spot.MATSUSAKA_COW]: false,
    [Spot.KOBE_COW]: false,
    [Spot.OUMI_COW]: false,
    [Spot.HAKATA_RAMEN]: false,
    [Spot.SAPPORO_RAMEN]: false,
    [Spot.KITAKATA_RAMEN]: false,
  });
  public sandaiVisits: Array<SandaiVisit>;
  public prefectureVisits: Array<PrefectureVisit>;
  public ratio;

  public constructor() {
    {
      this.sandaiVisits = [];
      let sandaiType: SandaiType;
      for (sandaiType in SANDAI_TYPE_SPOTS) {
        this.sandaiVisits.push(new SandaiVisit(sandaiType, this.visited));
      }
    }
    {
      this.prefectureVisits = [];
      let prefecture: Prefecture;
      for (prefecture in PREFECTURE_SPOTS) {
        this.prefectureVisits.push(
          new PrefectureVisit(prefecture, this.visited)
        );
      }
    }
    this.ratio = computed(() => {
      return (
        this.sandaiVisits
          .map((sandaiVisit) => sandaiVisit.numVisit.value)
          .reduce((total, val) => total + val, 0) /
        (this.sandaiVisits.length * 3)
      );
    });
  }
}
