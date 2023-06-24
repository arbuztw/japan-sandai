import SandaiType from "~/types/sandai_type";
import Spot from "~/types/spot";

interface SpotAttr {
  required: Array<Spot>;
  optional: Array<Spot>;
}

export const SANDAI_TYPE_SPOTS: Record<SandaiType, SpotAttr> = {
  [SandaiType.WAGYU]: {
    required: [Spot.OUMI_COW, Spot.KOBE_COW, Spot.MATSUSAKA_COW],
    optional: [],
  },
  [SandaiType.CHINA_TOWN]: {
    required: [Spot.NANKIN_CH, Spot.SHINCHI_CH, Spot.YOKOHAMA_CH],
    optional: [],
  },
  [SandaiType.RED_LIGHT]: {
    required: [Spot.NAKASU_FU, Spot.SUSUKINO_FU, Spot.YOSHIHARA_FU],
    optional: [],
  },
  [SandaiType.GASSHO]: {
    required: [Spot.MIYAMA_VILLAGE, Spot.OUCHIJUKU_VILLAGE, Spot.SHIRAKAWA_VILLAGE],
    optional: [],
  },
  [SandaiType.CASTLE]: {
    required: [Spot.NAGOYA_CASTLE, Spot.OSAKA_CASTLE, Spot.KUMAMOTO_CASTLE],
    optional: [],
  },
  [SandaiType.RAMEN]: {
    required: [Spot.HAKATA_RAMEN, Spot.SAPPORO_RAMEN, Spot.KITAKATA_RAMEN],
    optional: [],
  },
  [SandaiType.VIEW]: {
    required: [Spot.MATSUSHIMA_VIEW, Spot.ITSUKUSHIMA_VIEW, Spot.AMANOHASHIDATE_VIEW],
    optional: [],
  },
  [SandaiType.TEA]: {
    required: [Spot.UJI_TEA, Spot.SAYAMA_TEA, Spot.SHIZUOKA_TEA],
    optional: [],
  },
  [SandaiType.GARDEN]: {
    required: [Spot.KORAKU_EN, Spot.KAIRAKU_EN, Spot.KENROKU_EN],
    optional: [],
  },
  [SandaiType.ONSEN]: {
    required: [Spot.GERO_SPRING, Spot.ARIMA_SPRING, Spot.KASATSU_SPRING],
    optional: [],
  },
  [SandaiType.NIGHT_VIEW]: {
    required: [Spot.INASA_NIGHT, Spot.MAYA_NIGHT, Spot.HAKODATE_NIGHT],
    optional: [],
  },
  [SandaiType.SHRINE]: {
    required: [Spot.ISE_JINGU],
    optional: [Spot.HEIAN_JINGU, Spot.MEIJI_JINGU, Spot.ATSUTA_JINGU],
  },
  [SandaiType.FIREWORK]: {
    required: [Spot.NAGAO_HANABI, Spot.OOMAGARI_HANABI, Spot.TSUCHIURA_HANABI],
    optional: [],
  },
  [SandaiType.TENMANGU]: {
    required: [Spot.KITANO_TEN, Spot.WAKAURA_TEN, Spot.DAIZAIFU_TEN],
    optional: [],
  },
  [SandaiType.FESTIVAL]: {
    required: [Spot.GION_MATSURI, Spot.KANDA_MATSURI, Spot.TENJIN_MATSURI],
    optional: [],
  },
};
