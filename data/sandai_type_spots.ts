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
    required: [
      Spot.MIYAMA_VILLAGE,
      Spot.OUCHIJUKU_VILLAGE,
      Spot.SHIRAKAWA_VILLAGE,
    ],
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
    required: [
      Spot.MATSUSHIMA_VIEW,
      Spot.ITSUKUSHIMA_VIEW,
      Spot.AMANOHASHIDATE_VIEW,
    ],
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
    required: [Spot.GERO_SPRING, Spot.ARIMA_SPRING, Spot.KUSATSU_SPRING],
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

export const SPOTS_SANDAI_TYPE: Record<Spot, SandaiType> = {
  [Spot.OUMI_COW]: SandaiType.WAGYU,
  [Spot.KOBE_COW]: SandaiType.WAGYU,
  [Spot.MATSUSAKA_COW]: SandaiType.WAGYU,
  [Spot.NANKIN_CH]: SandaiType.CHINA_TOWN,
  [Spot.SHINCHI_CH]: SandaiType.CHINA_TOWN,
  [Spot.YOKOHAMA_CH]: SandaiType.CHINA_TOWN,
  [Spot.NAKASU_FU]: SandaiType.RED_LIGHT,
  [Spot.SUSUKINO_FU]: SandaiType.RED_LIGHT,
  [Spot.YOSHIHARA_FU]: SandaiType.RED_LIGHT,
  [Spot.MIYAMA_VILLAGE]: SandaiType.GASSHO,
  [Spot.OUCHIJUKU_VILLAGE]: SandaiType.GASSHO,
  [Spot.SHIRAKAWA_VILLAGE]: SandaiType.GASSHO,
  [Spot.NAGOYA_CASTLE]: SandaiType.CASTLE,
  [Spot.OSAKA_CASTLE]: SandaiType.CASTLE,
  [Spot.KUMAMOTO_CASTLE]: SandaiType.CASTLE,
  [Spot.HAKATA_RAMEN]: SandaiType.RAMEN,
  [Spot.SAPPORO_RAMEN]: SandaiType.RAMEN,
  [Spot.KITAKATA_RAMEN]: SandaiType.RAMEN,
  [Spot.MATSUSHIMA_VIEW]: SandaiType.VIEW,
  [Spot.ITSUKUSHIMA_VIEW]: SandaiType.VIEW,
  [Spot.AMANOHASHIDATE_VIEW]: SandaiType.VIEW,
  [Spot.UJI_TEA]: SandaiType.TEA,
  [Spot.SAYAMA_TEA]: SandaiType.TEA,
  [Spot.SHIZUOKA_TEA]: SandaiType.TEA,
  [Spot.KORAKU_EN]: SandaiType.GARDEN,
  [Spot.KAIRAKU_EN]: SandaiType.GARDEN,
  [Spot.KENROKU_EN]: SandaiType.GARDEN,
  [Spot.GERO_SPRING]: SandaiType.ONSEN,
  [Spot.ARIMA_SPRING]: SandaiType.ONSEN,
  [Spot.KUSATSU_SPRING]: SandaiType.ONSEN,
  [Spot.INASA_NIGHT]: SandaiType.NIGHT_VIEW,
  [Spot.MAYA_NIGHT]: SandaiType.NIGHT_VIEW,
  [Spot.HAKODATE_NIGHT]: SandaiType.NIGHT_VIEW,
  [Spot.ISE_JINGU]: SandaiType.SHRINE,
  [Spot.HEIAN_JINGU]: SandaiType.SHRINE,
  [Spot.MEIJI_JINGU]: SandaiType.SHRINE,
  [Spot.ATSUTA_JINGU]: SandaiType.SHRINE,
  [Spot.NAGAO_HANABI]: SandaiType.FIREWORK,
  [Spot.OOMAGARI_HANABI]: SandaiType.FIREWORK,
  [Spot.TSUCHIURA_HANABI]: SandaiType.FIREWORK,
  [Spot.KITANO_TEN]: SandaiType.TENMANGU,
  [Spot.WAKAURA_TEN]: SandaiType.TENMANGU,
  [Spot.DAIZAIFU_TEN]: SandaiType.TENMANGU,
  [Spot.GION_MATSURI]: SandaiType.FESTIVAL,
  [Spot.KANDA_MATSURI]: SandaiType.FESTIVAL,
  [Spot.TENJIN_MATSURI]: SandaiType.FESTIVAL,
};
