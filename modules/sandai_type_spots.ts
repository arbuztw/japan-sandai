import SandaiType from "~/types/sandai_type";
import Spot from "~/types/spot";

interface SpotAttr {
  required: Array<Spot>;
  optional: Array<Spot>;
}

export const SANDAI_TYPE_SPOTS: Record<SandaiType, SpotAttr> = {
  [SandaiType.CASTLE]: {
    required: [],
    optional: [],
  },
  [SandaiType.NIGHT_VIEW]: {
    required: [],
    optional: [],
  },
  [SandaiType.GARDEN]: {
    required: [],
    optional: [],
  },
  [SandaiType.VIEW]: {
    required: [],
    optional: [],
  },
  [SandaiType.GASSHO]: {
    required: [],
    optional: [],
  },
  [SandaiType.ONSEN]: {
    required: [],
    optional: [],
  },
  [SandaiType.SHRINE]: {
    required: [],
    optional: [],
  },
  [SandaiType.FESTIVAL]: {
    required: [],
    optional: [],
  },
  [SandaiType.FIREWORK]: {
    required: [],
    optional: [],
  },
  [SandaiType.TENMANGU]: {
    required: [],
    optional: [],
  },
  [SandaiType.CHINA_TOWN]: {
    required: [],
    optional: [],
  },
  [SandaiType.RED_LIGHT]: {
    required: [],
    optional: [],
  },
  [SandaiType.TEA]: {
    required: [],
    optional: [],
  },
  [SandaiType.WAGYU]: {
    required: [],
    optional: [],
  },
  [SandaiType.RAMEN]: {
    required: [],
    optional: [],
  },
};
