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
      return "night";
    case SandaiType.GARDEN:
      return "garden";
    case SandaiType.GASSHO:
      return "home";
    case SandaiType.SHRINE:
      return "shrine";
    case SandaiType.FESTIVAL:
      return "festival";
    case SandaiType.FIREWORK:
      return "firework";
    case SandaiType.TENMANGU:
      return "ten";
    case SandaiType.CHINA_TOWN:
      return "ch";
    case SandaiType.RED_LIGHT:
      return "red";
    case SandaiType.TEA:
      return "tea";
    case SandaiType.WAGYU:
      return "wagyu";
    case SandaiType.RAMEN:
      return "ramen";
    default:
      // TODO: Add icons.
      return "view";
  }
}

export function getColor(type: SandaiType) {
  switch (type) {
    case SandaiType.WAGYU:
      return "#d5a6ad"
    case SandaiType.CHINA_TOWN:
      return "#d3818a"
    case SandaiType.RED_LIGHT:
      return "#e5c3d1"
    case SandaiType.GASSHO:
      return "#e1a565";
    case SandaiType.CASTLE:
      return "#bf9f94";
    case SandaiType.RAMEN:
      return "#f6dfad"
    case SandaiType.VIEW:
      return "#a5d0c6";
    case SandaiType.GARDEN:
      return"#059296"
    case SandaiType.TEA:
      return "#2b9d8a"
    case SandaiType.ONSEN:
      return "#3c81c6"
    case SandaiType.NIGHT_VIEW:
      return "#155d99"
    case SandaiType.SHRINE:
      return "#6463b5"
    case SandaiType.FIREWORK:
      return "#787cd7"
    case SandaiType.TENMANGU:
      return "#c2b4e9"
    case SandaiType.FESTIVAL:
      return "#9e6085"
    default:
      return "blue";
  }
}
