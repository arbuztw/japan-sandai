import Prefecture from "~/types/prefecture";
import Spot from "~/types/spot";

export const PREFECTURE_SPOTS: Record<Prefecture, Array<Spot>> = {
  [Prefecture.JP_01]: [
    Spot.HAKODATE_NIGHT,
    Spot.SUSUKINO_FU,
    Spot.SAPPORO_RAMEN,
  ],
  [Prefecture.JP_02]: [],
  [Prefecture.JP_03]: [],
  [Prefecture.JP_04]: [Spot.MATSUSHIMA_VIEW],
  [Prefecture.JP_05]: [Spot.OOMAGARI_HANABI],
  [Prefecture.JP_06]: [],
  [Prefecture.JP_07]: [Spot.OUCHIJUKU_VILLAGE, Spot.KITAKATA_RAMEN],
  [Prefecture.JP_08]: [Spot.MATSUSHIMA_VIEW, Spot.TSUCHIURA_HANABI],
  [Prefecture.JP_09]: [],
  [Prefecture.JP_10]: [Spot.KUSATSU_SPRING],
  [Prefecture.JP_11]: [Spot.SAYAMA_TEA],
  [Prefecture.JP_12]: [],
  [Prefecture.JP_13]: [Spot.MEIJI_JINGU, Spot.KANDA_MATSURI, Spot.YOSHIHARA_FU],
  [Prefecture.JP_14]: [Spot.YOKOHAMA_CH],
  [Prefecture.JP_15]: [Spot.NAGAO_HANABI],
  [Prefecture.JP_16]: [],
  [Prefecture.JP_17]: [Spot.KENROKU_EN],
  [Prefecture.JP_18]: [],
  [Prefecture.JP_19]: [],
  [Prefecture.JP_20]: [],
  [Prefecture.JP_21]: [Spot.SHIRAKAWA_VILLAGE, Spot.GERO_SPRING],
  [Prefecture.JP_22]: [Spot.SHIZUOKA_TEA],
  [Prefecture.JP_23]: [Spot.NAGOYA_CASTLE, Spot.ATSUTA_JINGU],
  [Prefecture.JP_24]: [Spot.ISE_JINGU, Spot.MATSUSAKA_COW],
  [Prefecture.JP_25]: [Spot.OUMI_COW],
  [Prefecture.JP_26]: [
    Spot.AMANOHASHIDATE_VIEW,
    Spot.MIYAMA_VILLAGE,
    Spot.HEIAN_JINGU,
    Spot.GION_MATSURI,
    Spot.KITANO_TEN,
    Spot.UJI_TEA,
  ],
  [Prefecture.JP_27]: [Spot.OSAKA_CASTLE, Spot.TENJIN_MATSURI],
  [Prefecture.JP_28]: [
    Spot.MAYA_NIGHT,
    Spot.ARIMA_SPRING,
    Spot.NANKIN_CH,
    Spot.KOBE_COW,
  ],
  [Prefecture.JP_29]: [],
  [Prefecture.JP_30]: [Spot.WAKAURA_TEN],
  [Prefecture.JP_31]: [],
  [Prefecture.JP_32]: [],
  [Prefecture.JP_33]: [Spot.KORAKU_EN],
  [Prefecture.JP_34]: [Spot.ITSUKUSHIMA_VIEW],
  [Prefecture.JP_35]: [],
  [Prefecture.JP_36]: [],
  [Prefecture.JP_37]: [],
  [Prefecture.JP_38]: [],
  [Prefecture.JP_39]: [],
  [Prefecture.JP_40]: [Spot.DAIZAIFU_TEN, Spot.NAKASU_FU, Spot.HAKATA_RAMEN],
  [Prefecture.JP_41]: [],
  [Prefecture.JP_42]: [Spot.INASA_NIGHT, Spot.SHINCHI_CH],
  [Prefecture.JP_43]: [Spot.KUMAMOTO_CASTLE],
  [Prefecture.JP_44]: [],
  [Prefecture.JP_45]: [],
  [Prefecture.JP_46]: [],
};
