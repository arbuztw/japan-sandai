import SandaiType from "~/types/sandai_type";

export function getIconName(type: SandaiType) {
  switch (type) {
    case SandaiType.CASTLE:
      return "castle";
    case SandaiType.VIEW:
      return "view";
    case SandaiType.ONSEN:
      return "onsen";
    case SandaiType.NIGHT_VIEW:
    case SandaiType.GARDEN:
    case SandaiType.GASSHO:
    case SandaiType.SHRINE:
    case SandaiType.FESTIVAL:
    case SandaiType.FIREWORK:
    case SandaiType.TENMANGU:
    case SandaiType.CHINA_TOWN:
    case SandaiType.RED_LIGHT:
    case SandaiType.TEA:
    case SandaiType.WAGYU:
    case SandaiType.RAMEN:
    default:
      // TODO: Add icons.
      return "view";
  }
}

export function getColor(type: SandaiType) {
  switch (type) {
    case SandaiType.CASTLE:
      return "yellow";
    case SandaiType.VIEW:
      return "green";
    case SandaiType.ONSEN:
      return "blue";
    case SandaiType.NIGHT_VIEW:
    case SandaiType.GARDEN:
    case SandaiType.GASSHO:
    case SandaiType.SHRINE:
    case SandaiType.FESTIVAL:
    case SandaiType.FIREWORK:
    case SandaiType.TENMANGU:
    case SandaiType.CHINA_TOWN:
    case SandaiType.RED_LIGHT:
    case SandaiType.TEA:
    case SandaiType.WAGYU:
    case SandaiType.RAMEN:
    default:
      // TODO: Add colors.
      return "blue";
  }
}
